'use client';

import { useState, FormEvent } from 'react';
import { joinWaitlist } from '../app/actions/waitlist/actions';

interface WaitlistFormProps {
    source: string;
    placeholder?: string;
    buttonText?: string;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistForm({
    source,
    placeholder = 'Enter your email',
    buttonText = 'Join Early Access',
}: WaitlistFormProps) {
    const [email, setEmail] = useState('');
    const [state, setState] = useState<FormState>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setState('error');
            setMessage('Please enter your email');
            return;
        }

        setState('loading');
        setMessage('');

        try {
            const result = await joinWaitlist(email, source);

            if (result.success) {
                setState('success');
                setMessage(result.message);
                setEmail('');

                // Reset to idle after 5 seconds
                setTimeout(() => {
                    setState('idle');
                    setMessage('');
                }, 5000);
            } else {
                setState('error');
                setMessage(result.message);

                // Reset error after 4 seconds
                setTimeout(() => {
                    setState('idle');
                    setMessage('');
                }, 4000);
            }
        } catch (error) {
            setState('error');
            setMessage('Something went wrong. Please try again.');

            setTimeout(() => {
                setState('idle');
                setMessage('');
            }, 4000);
        }
    };

    return (
        <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    disabled={state === 'loading' || state === 'success'}
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#00ff87] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Email address"
                />
                <button
                    type="submit"
                    disabled={state === 'loading' || state === 'success'}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00ff87] to-[#60efff] text-black font-semibold hover:shadow-lg hover:shadow-[#00ff87]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none whitespace-nowrap"
                >
                    {state === 'loading' ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                            Joining...
                        </span>
                    ) : state === 'success' ? (
                        <span className="flex items-center gap-2">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Joined!
                        </span>
                    ) : (
                        buttonText
                    )}
                </button>
            </form>

            {message && (
                <div
                    className={`mt-4 p-4 rounded-lg backdrop-blur-sm transition-all ${state === 'success'
                        ? 'bg-[#00ff87]/10 border border-[#00ff87]/30 text-[#00ff87]'
                        : 'bg-red-500/10 border border-red-500/30 text-red-400'
                        }`}
                    role="alert"
                >
                    <p className="text-sm font-medium">{message}</p>
                </div>
            )}
        </div>
    );
}
