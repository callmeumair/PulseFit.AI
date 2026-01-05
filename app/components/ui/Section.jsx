export default function Section({
    children,
    className = '',
    spacing = 'default',
    background = 'default',
    id
}) {
    const spacingClasses = {
        default: 'section-spacing',
        small: 'section-spacing-sm',
        none: '',
    }

    const backgroundClasses = {
        default: 'bg-gym-black',
        charcoal: 'bg-gym-charcoal',
        dark: 'bg-gym-dark',
        gradient: 'bg-gradient-athletic',
    }

    return (
        <section
            id={id}
            className={`${spacingClasses[spacing]} ${backgroundClasses[background]} ${className}`}
        >
            {children}
        </section>
    )
}
