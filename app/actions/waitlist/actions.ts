'use server';

import { headers } from 'next/headers';
import { addToWaitlist, SignupResult } from '../../../lib/waitlist';

/**
 * Server Action: Join the waitlist
 */
export async function joinWaitlist(
    email: string,
    source?: string
): Promise<SignupResult> {
    try {
        // Get request headers
        const headersList = await headers();
        const ipAddress = headersList.get('x-forwarded-for')?.split(',')[0] ||
            headersList.get('x-real-ip') ||
            null;
        const userAgent = headersList.get('user-agent') || null;

        // Add to waitlist
        return await addToWaitlist(email, source || null, ipAddress, userAgent);
    } catch (error) {
        console.error('Server action error:', error);
        return {
            success: false,
            message: 'Something went wrong. Please try again.',
        };
    }
}
