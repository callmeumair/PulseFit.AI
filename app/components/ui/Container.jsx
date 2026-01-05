export default function Container({
    children,
    className = '',
    size = 'default'
}) {
    const sizeClasses = {
        default: 'max-w-7xl',
        wide: 'max-w-[1400px]',
        narrow: 'max-w-5xl',
        full: 'max-w-full',
    }

    return (
        <div className={`${sizeClasses[size]} mx-auto px-6 md:px-8 lg:px-12 ${className}`}>
            {children}
        </div>
    )
}
