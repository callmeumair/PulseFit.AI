'use server';

import { headers } from 'next/headers';
import { submitContactMessage, SubmitResult } from '../../../lib/contact';

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

/**
 * Server Action: Submit contact form message
 */
export async function submitContact(formData: ContactFormData): Promise<SubmitResult> {
    try {
        // Get request headers
        const headersList = await headers();
        const ipAddress = headersList.get('x-forwarded-for')?.split(',')[0] ||
            headersList.get('x-real-ip') ||
            null;
        const userAgent = headersList.get('user-agent') || null;

        // Submit contact message
        return await submitContactMessage(
            formData.name,
            formData.email,
            formData.subject,
            formData.message,
            ipAddress,
            userAgent
        );
    } catch (error) {
        console.error('Server action error:', error);
        return {
            success: false,
            message: 'Something went wrong. Please try again.',
        };
    }
}
