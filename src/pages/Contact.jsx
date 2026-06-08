import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="pt-28 pb-20 bg-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">Get in Touch</span>
          <h1 className="font-heading text-3xl md:text-5xl text-sovera-dark mt-4 mb-6 leading-[1.15]">
            We'd love to
            <br />
            <span className="italic text-gold">hear from you</span>
          </h1>
          <p className="text-sm text-sovera-gray/80 max-w-xl mx-auto mb-10">
            Questions about our collections, need help with an order, or want to share your SOVÉRA story? Reach out.
          </p>
          <div className="max-w-md mx-auto space-y-4 text-left">
            <div className="border border-ivory-200 p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-gold mb-1">Email</p>
              <p className="text-sm text-sovera-dark">hello@sovera.com</p>
            </div>
            <div className="border border-ivory-200 p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-gold mb-1">Phone</p>
              <p className="text-sm text-sovera-dark">+91 1800-SOVERA</p>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/collections" className="inline-block px-8 py-3 bg-sovera-dark text-ivory text-sm uppercase tracking-[0.15em]">Explore Collections</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
