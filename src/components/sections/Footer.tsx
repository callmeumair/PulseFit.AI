'use client'

import Link from 'next/link'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'How It Works', href: '#how-it-works' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
  ],
  legal: [
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
    { label: 'Support', href: '#support' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-iron/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display font-bold text-2xl text-bone mb-4">
              PulseFit<span className="text-primary">AI</span>
            </h3>
            <p className="text-steel-light text-sm leading-relaxed">
              Train smarter. Build your edge.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-bone mb-4 uppercase text-xs tracking-wider">
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-steel-light hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-bone mb-4 uppercase text-xs tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-steel-light hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-bone mb-4 uppercase text-xs tracking-wider">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-steel-light hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-iron/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-steel-light text-sm">
            © {new Date().getFullYear()} PulseFit AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#twitter"
              className="text-steel-light hover:text-primary transition-colors text-sm"
            >
              Twitter
            </Link>
            <Link
              href="#instagram"
              className="text-steel-light hover:text-primary transition-colors text-sm"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

