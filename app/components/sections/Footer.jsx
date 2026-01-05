import Container from '../ui/Container'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gym-charcoal py-12 border-t border-gym-steel">
            <Container>
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="font-display text-3xl text-gym-white mb-4">
                            PULSE<span className="text-gym-orange">FIT</span>
                        </div>
                        <p className="text-sm text-gym-light-gray">
                            AI-powered fitness coaching for serious athletes.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-gym-white text-sm uppercase tracking-wider mb-4">Product</h4>
                        <ul className="space-y-2">
                            {['Features', 'Pricing', 'AI Coach', 'Analytics'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gym-light-gray hover:text-gym-orange transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gym-white text-sm uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2">
                            {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gym-light-gray hover:text-gym-orange transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gym-white text-sm uppercase tracking-wider mb-4">Support</h4>
                        <ul className="space-y-2">
                            {['Help Center', 'Contact', 'Privacy', 'Terms'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gym-light-gray hover:text-gym-orange transition-colors text-sm">
                                        {item}
                                    </a>
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
                        {['Twitter', 'Instagram', 'YouTube'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-gym-gray hover:text-gym-orange transition-colors text-sm uppercase tracking-wider"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}
