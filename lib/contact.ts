import { sql } from './db';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting: track IP submissions
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // Max 5 submissions per hour per IP

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    status: 'new' | 'in_progress' | 'resolved';
    created_at: Date;
    ip_address: string | null;
    user_agent: string | null;
}

export interface SubmitResult {
    success: boolean;
    message: string;
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
 * Validate contact form data
 */
export function validateContactForm(
    name: string,
    email: string,
    subject: string,
    message: string
): { valid: boolean; error?: string } {
    if (!name?.trim()) {
        return { valid: false, error: 'Please enter your name' };
    }

    if (name.trim().length < 2) {
        return { valid: false, error: 'Name must be at least 2 characters' };
    }

    if (!email?.trim()) {
        return { valid: false, error: 'Please enter your email' };
    }

    const normalizedEmail = normalizeEmail(email);
    if (!isValidEmail(normalizedEmail)) {
        return { valid: false, error: 'Please enter a valid email address' };
    }

    if (!subject?.trim()) {
        return { valid: false, error: 'Please enter a subject' };
    }

    if (subject.trim().length < 3) {
        return { valid: false, error: 'Subject must be at least 3 characters' };
    }

    if (!message?.trim()) {
        return { valid: false, error: 'Please enter a message' };
    }

    if (message.trim().length < 10) {
        return { valid: false, error: 'Message must be at least 10 characters' };
    }

    return { valid: true };
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
 * Submit contact message to database
 */
export async function submitContactMessage(
    name: string,
    email: string,
    subject: string,
    message: string,
    ipAddress: string | null = null,
    userAgent: string | null = null
): Promise<SubmitResult> {
    try {
        // Validate all fields
        const validation = validateContactForm(name, email, subject, message);
        if (!validation.valid) {
            return {
                success: false,
                message: validation.error || 'Invalid form data',
            };
        }

        // Normalize data
        const normalizedEmail = normalizeEmail(email);
        const trimmedName = name.trim();
        const trimmedSubject = subject.trim();
        const trimmedMessage = message.trim();

        // Check rate limit
        if (ipAddress && !checkRateLimit(ipAddress)) {
            return {
                success: false,
                message: 'Too many submissions. Please try again later.',
            };
        }

        // Insert into database
        await sql`
      INSERT INTO contact_messages (name, email, subject, message, ip_address, user_agent)
      VALUES (${trimmedName}, ${normalizedEmail}, ${trimmedSubject}, ${trimmedMessage}, ${ipAddress}, ${userAgent})
    `;

        return {
            success: true,
            message: "Message sent! We'll get back to you within 24 hours.",
        };
    } catch (error: any) {
        // Log error but don't expose details to client
        console.error('Contact form submission error:', error);

        return {
            success: false,
            message: 'Something went wrong. Please try again.',
        };
    }
}

/**
 * Get total contact messages count (for admin purposes)
 */
export async function getContactMessagesCount(): Promise<number> {
    try {
        const result = await sql`
      SELECT COUNT(*) as count FROM contact_messages
    `;
        return Number(result[0]?.count || 0);
    } catch (error) {
        console.error('Error fetching contact messages count:', error);
        return 0;
    }
}
