'use client'

export default function Button({
    children,
    variant = 'primary',
    onClick,
    className = '',
    ...props
}) {
    const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
