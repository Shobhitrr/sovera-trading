import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.15 },
}

export default function Home() {
  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory">
        {/* Background ornament */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-ivory-300/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-gold mb-6 font-[500]">
              Meaningful Everyday Jewellery
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-sovera-dark leading-[1.1] mb-8">
              Crafted for
              <br />
              <span className="italic text-gold">life's milestones</span>
            </h1>
            <p className="text-base md:text-lg text-sovera-gray/80 max-w-xl mx-auto mb-10 leading-relaxed font-[300]">
              Symbols for your achievements, commitments, and growth — designed to be lived in, not stored away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/collections"
                className="px-10 py-4 bg-sovera-dark text-ivory text-sm uppercase tracking-[0.12em] font-[500] hover:bg-gold transition-all duration-300"
              >
                Explore Collections
              </a>
              <a
                href="/stories"
                className="px-10 py-4 border border-sovera-dark text-sovera-dark text-sm uppercase tracking-[0.12em] font-[500] hover:bg-sovera-dark hover:text-ivory transition-all duration-300"
              >
                Our Stories
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-12 bg-gold/50"
          />
        </motion.div>
      </section>

      {/* ─── Designed For Section ─── */}
      <section className="py-24 lg:py-32 bg-sovera-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="text-center mb-16 lg:mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-[500]">
              Designed For
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-sovera-dark mt-4">
              Every meaningful moment
            </h2>
          </motion.div>

          <motion.div {...stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 - Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-ivory p-8 lg:p-10 border border-ivory-200 hover:border-gold-200 transition-all duration-500"
            >
              <div className="w-12 h-[1px] bg-gold mb-6" />
              <h3 className="font-heading text-2xl text-sovera-dark mb-3">Achievements</h3>
              <p className="text-sm text-sovera-gray leading-relaxed mb-6">
                Mark your wins — promotions, launches, and breakthroughs that define your journey.
              </p>
              <span className="text-xs uppercase tracking-[0.12em] text-gold font-[500] group-hover:tracking-[0.15em] transition-all duration-300">
                For Him →
              </span>
            </motion.div>

            {/* Card 2 - Relationships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-ivory p-8 lg:p-10 border border-ivory-200 hover:border-gold-200 transition-all duration-500"
            >
              <div className="w-12 h-[1px] bg-gold mb-6" />
              <h3 className="font-heading text-2xl text-sovera-dark mb-3">Relationships</h3>
              <p className="text-sm text-sovera-gray leading-relaxed mb-6">
                Celebrate the bonds that matter — anniversaries, promises, and the beauty of commitment.
              </p>
              <span className="text-xs uppercase tracking-[0.12em] text-gold font-[500] group-hover:tracking-[0.15em] transition-all duration-300">
                For Couples →
              </span>
            </motion.div>

            {/* Card 3 - Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-ivory p-8 lg:p-10 border border-ivory-200 hover:border-gold-200 transition-all duration-500"
            >
              <div className="w-12 h-[1px] bg-gold mb-6" />
              <h3 className="font-heading text-2xl text-sovera-dark mb-3">Milestones</h3>
              <p className="text-sm text-sovera-gray leading-relaxed mb-6">
                From new beginnings to personal triumphs — every milestone deserves a symbol.
              </p>
              <span className="text-xs uppercase tracking-[0.12em] text-gold font-[500] group-hover:tracking-[0.15em] transition-all duration-300">
                Modern Bonds →
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Collections Teaser ─── */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-[500]">
              Curated Collections
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-sovera-dark mt-4">
              Discover your story
            </h2>
          </motion.div>

          <motion.div {...stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Collection 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative aspect-[3/4] bg-sovera-cream overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sovera-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl text-ivory mb-2">The Ambition Collection</h3>
                <p className="text-sm text-ivory-300/80 mb-4">For the leaders and achievers</p>
                <span className="text-xs uppercase tracking-[0.12em] text-gold font-[500] group-hover:tracking-[0.15em] transition-all duration-300">
                  Explore →
                </span>
              </div>
            </motion.div>

            {/* Collection 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative aspect-[3/4] bg-ivory-200 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sovera-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl text-ivory mb-2">The Connection Collection</h3>
                <p className="text-sm text-ivory-300/80 mb-4">For the bonds that last</p>
                <span className="text-xs uppercase tracking-[0.12em] text-gold font-[500] group-hover:tracking-[0.15em] transition-all duration-300">
                  Explore →
                </span>
              </div>
            </motion.div>

            {/* Collection 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative aspect-[3/4] bg-sovera-cream overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sovera-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl text-ivory mb-2">The Growth Collection</h3>
                <p className="text-sm text-ivory-300/80 mb-4">For life's transformations</p>
                <span className="text-xs uppercase tracking-[0.12em] text-gold font-[500] group-hover:tracking-[0.15em] transition-all duration-300">
                  Explore →
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <a
              href="/collections"
              className="inline-block px-10 py-4 border border-sovera-dark text-sovera-dark text-sm uppercase tracking-[0.12em] font-[500] hover:bg-sovera-dark hover:text-ivory transition-all duration-300"
            >
              View All Collections
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Values / Ethos Section ─── */}
      <section className="py-24 lg:py-32 bg-sovera-dark text-ivory">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-[500]">
              Our Ethos
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-ivory mt-4 mb-8">
              Worn with meaning.<br />
              <span className="italic text-gold">Made to last.</span>
            </h2>
            <p className="text-sm md:text-base text-ivory-300/70 leading-relaxed max-w-2xl mx-auto mb-10">
              Every piece of SOVÉRA jewellery is crafted to be a daily companion — not a treasure kept behind glass. 
              We believe the best symbols are the ones you never take off.
            </p>
            <a
              href="/about"
              className="inline-block px-10 py-4 border border-gold text-gold text-sm uppercase tracking-[0.12em] font-[500] hover:bg-gold hover:text-sovera-dark transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}