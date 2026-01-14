import { sql } from './db';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting: track IP submissions
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

export interface WaitlistSignup {
    id: string;
    email: string;
    source: string | null;
    status: 'pending' | 'invited' | 'onboarded';
    created_at: Date;
    ip_address: string | null;
    user_agent: string | null;
}

export interface SignupResult {
    success: boolean;
    message: string;
    alreadyExists?: boolean;
}

/**
 * Normalize email: trim and lowercase
 */
export function normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
    return EMAIL_REGEX.test(email);
}

/**
 * Check rate limit for IP address
 */
export function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const submissions = rateLimitMap.get(ip) || [];

    // Filter out old submissions outside the window
    const recentSubmissions = submissions.filter(
        timestamp => now - timestamp < RATE_LIMIT_WINDOW
    );

    if (recentSubmissions.length >= RATE_LIMIT_MAX) {
        return false;
    }

    // Update the map
    recentSubmissions.push(now);
    rateLimitMap.set(ip, recentSubmissions);

    return true;
}

/**
 * Add email to waitlist
 */
export async function addToWaitlist(
    email: string,
    source: string | null = null,
    ipAddress: string | null = null,
    userAgent: string | null = null
): Promise<SignupResult> {
    try {
        const normalizedEmail = normalizeEmail(email);

        // Validate email
        if (!isValidEmail(normalizedEmail)) {
            return {
                success: false,
                message: 'Please enter a valid email address',
            };
        }

        // Check rate limit
        if (ipAddress && !checkRateLimit(ipAddress)) {
            return {
                success: false,
                message: 'Too many signup attempts. Please try again later.',
            };
        }

        // Insert into database
        await sql`
      INSERT INTO waitlist_signups (email, source, ip_address, user_agent)
      VALUES (${normalizedEmail}, ${source}, ${ipAddress}, ${userAgent})
    `;

        return {
            success: true,
            message: "You're on the PulseFit early access list.",
        };
    } catch (error: any) {
        // Handle duplicate email gracefully
        if (error?.code === '23505' || error?.message?.includes('unique')) {
            return {
                success: true,
                message: "You're already on the list. We'll be in touch soon!",
                alreadyExists: true,
            };
        }

        // Log error but don't expose details to client
        console.error('Waitlist signup error:', error);

        return {
            success: false,
            message: 'Something went wrong. Please try again.',
        };
    }
}

/**
 * Get total waitlist count
 */
export async function getWaitlistCount(): Promise<number> {
    try {
        const result = await sql`
      SELECT COUNT(*) as count FROM waitlist_signups
    `;
        return Number(result[0]?.count || 0);
    } catch (error) {
        console.error('Error fetching waitlist count:', error);
        return 0;
    }
}

/**
 * Get waitlist count by status
 */
export async function getWaitlistCountByStatus(
    status: 'pending' | 'invited' | 'onboarded'
): Promise<number> {
    try {
        const result = await sql`
      SELECT COUNT(*) as count 
      FROM waitlist_signups 
      WHERE status = ${status}
    `;
        return Number(result[0]?.count || 0);
    } catch (error) {
        console.error('Error fetching waitlist count by status:', error);
        return 0;
    }
}
