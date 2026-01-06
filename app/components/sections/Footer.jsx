import Link from 'next/link'
import Container from '../ui/Container'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const productLinks = [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'AI Coach', href: '/ai-coach' },
        { name: 'Analytics', href: '/analytics' }
    ]

    const companyLinks = [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' }
    ]

    const supportLinks = [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' }
    ]

    return (
        <footer className="bg-gym-charcoal py-12 border-t border-gym-steel">
            <Container>
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="font-display text-3xl text-gym-white mb-4 inline-block">
                            PULSE<span className="text-gym-orange">FIT</span>
                        </Link>
                        <p className="text-sm text-gym-light-gray">
                            AI-powered fitness coaching for real gym-goers.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold text-gym-white text-sm uppercase tracking-wider mb-4">Product</h4>
                        <ul className="space-y-2">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gym-light-gray hover:text-gym-orange transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-gym-white text-sm uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gym-light-gray hover:text-gym-orange transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-bold text-gym-white text-sm uppercase tracking-wider mb-4">Support</h4>
                        <ul className="space-y-2">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gym-light-gray hover:text-gym-orange transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gym-steel flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gym-gray">
                        © {currentYear} PulseFit AI. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-gym-gray text-sm uppercase tracking-wider">
                            Twitter: Coming Soon
                        </span>
                        <span className="text-gym-gray text-sm uppercase tracking-wider">
                            Instagram: Coming Soon
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
