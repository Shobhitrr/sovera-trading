import { Link } from 'react-router-dom'

const footerLinks = {
  collections: [
    { name: 'For Him', path: '/collections/for-him' },
    { name: 'For Couples', path: '/collections/for-couples' },
    { name: 'Modern Bonds', path: '/collections/modern-bonds' },
    { name: 'All Collections', path: '/collections' },
  ],
  explore: [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/stories' },
    { name: 'Gift Guide', path: '/gift-guide' },
    { name: 'Care Guide', path: '/care' },
  ],
  support: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Size Guide', path: '/size-guide' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-sovera-dark text-ivory-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-heading text-2xl tracking-[0.15em] text-ivory">
              SOVÉRA
            </Link>
            <p className="mt-4 text-sm text-ivory-300/70 leading-relaxed max-w-xs">
              Meaningful everyday jewellery for life's most significant moments — achievements, commitments, and growth.
            </p>
            <div className="mt-6 flex gap-4">
              {['IG', 'FB', 'PT', 'LI'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-ivory-300/20 flex items-center justify-center text-xs tracking-wider text-ivory-300/60 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gold mb-6 font-[500]">
              Collections
            </h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory-300/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gold mb-6 font-[500]">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory-300/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gold mb-6 font-[500]">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory-300/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory-300/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory-300/40 tracking-wider">
            &copy; {new Date().getFullYear()} SOVÉRA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-ivory-300/40 hover:text-gold transition-colors tracking-wider">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-ivory-300/40 hover:text-gold transition-colors tracking-wider">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}