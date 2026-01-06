'use client'
import { useEffect, useRef, useState } from 'react'

export default function ResponsiveVideo({
    src,
    poster,
    className = '',
    overlay = true,
    overlayClassName = ''
}) {
    const videoRef = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // Intersection Observer for lazy loading
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isLoaded) {
                        video.load()
                        setIsLoaded(true)
                    }
                })
            },
            { threshold: 0.1 }
        )

        observer.observe(video)

        return () => {
            observer.disconnect()
        }
    }, [isLoaded])

    return (
        <div className="relative w-full h-full">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={poster}
                className={className}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {overlay && (
                <div className={overlayClassName} />
            )}
        </div>
    )
}
