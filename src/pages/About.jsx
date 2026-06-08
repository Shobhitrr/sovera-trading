import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="pt-28 pb-20 bg-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">Our Story</span>
          <h1 className="font-heading text-3xl md:text-5xl text-sovera-dark mt-4 mb-8 leading-[1.15]">
            We believe jewellery
            <br />
            <span className="italic text-gold">should mean something</span>
          </h1>
          <div className="text-sm text-sovera-gray leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>SOVÉRA was born from a simple observation: the pieces we treasure most aren't the most expensive — they're the ones with a story.</p>
            <p>We craft everyday jewellery for life's most significant moments. Achievements. Commitments. Growth. Each piece is designed to be worn through every triumph and transformation — not stored away for special occasions.</p>
            <p>Because the best symbols are the ones you never take off.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
