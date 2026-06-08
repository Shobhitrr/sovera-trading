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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-ivory-300/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-200/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold-200/10 rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-gold mb-6 font-[400]">
              Symbols Worn Close to the Heart
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-sovera-dark leading-[1.05] mb-8 font-[500]">
              For the moments
              <br />
              <span className="italic text-gold">that shape you</span>
            </h1>
            <p className="text-base md:text-lg text-sovera-gray/80 max-w-xl mx-auto mb-12 leading-relaxed font-[300]">
              Every piece of SOVÉRA jewellery carries a story — a symbol of who you've been, 
              what you've overcome, and the bonds that define your world. 
              <span className="italic"> Worn every day. Never forgotten.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/collections"
                className="group px-10 py-4 bg-sovera-dark text-ivory text-sm uppercase tracking-[0.15em] font-[400] hover:bg-gold transition-all duration-500"
              >
                <span className="group-hover:tracking-[0.2em] transition-all duration-500">Find Your Symbol</span>
              </a>
              <a
                href="/stories"
                className="group px-10 py-4 border border-sovera-dark text-sovera-dark text-sm uppercase tracking-[0.15em] font-[400] hover:bg-sovera-dark hover:text-ivory transition-all duration-500"
              >
                <span className="group-hover:tracking-[0.2em] transition-all duration-500">Hear the Stories</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60 font-[300]">Discover</span>
            <div className="w-[1px] h-10 bg-gold/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Our Purpose Section ─── */}
      <section className="py-28 lg:py-36 bg-sovera-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">Our Purpose</span>
            <h2 className="font-heading text-3xl md:text-5xl text-sovera-dark mt-5 leading-[1.15]">
              Jewellery is not what we make.
              <br />
              <span className="italic text-gold">Meaning is.</span>
            </h2>
            <p className="text-sm md:text-base text-sovera-gray/80 mt-6 leading-relaxed max-w-2xl mx-auto">
              In a world of fast fashion and forgotten gifts, we craft heirlooms of the heart.
              Each piece is designed to be a quiet witness to your life — worn through promotions,
              anniversaries, new beginnings, and every small triumph in between.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative bg-ivory p-10 border border-ivory-300/50 hover:border-gold-300/40 transition-all duration-700"
            >
              <div className="w-10 h-[1px] bg-gold mb-8" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-[400]">01</span>
              <h3 className="font-heading text-2xl text-sovera-dark mt-3 mb-4">The Achievement</h3>
              <p className="text-sm text-sovera-gray leading-relaxed">
                You earned it. The late nights, the risk, the moment everything changed. 
                This is a symbol carved from ambition — a quiet reminder of how far you've come, 
                worn as armour for where you're going.
              </p>
              <div className="mt-8 pt-6 border-t border-ivory-200">
                <span className="text-xs uppercase tracking-[0.15em] text-gold/70 font-[400] group-hover:tracking-[0.2em] transition-all duration-500">
                  Discover the Ambition Collection →
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative bg-ivory p-10 border border-ivory-300/50 hover:border-gold-300/40 transition-all duration-700"
            >
              <div className="w-10 h-[1px] bg-gold mb-8" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-[400]">02</span>
              <h3 className="font-heading text-2xl text-sovera-dark mt-3 mb-4">The Connection</h3>
              <p className="text-sm text-sovera-gray leading-relaxed">
                Some bonds transcend distance and time. This is for the promise you made, 
                the hand you hold, the love that grew deeper with every season. 
                A tangible reminder that some things are forever.
              </p>
              <div className="mt-8 pt-6 border-t border-ivory-200">
                <span className="text-xs uppercase tracking-[0.15em] text-gold/70 font-[400] group-hover:tracking-[0.2em] transition-all duration-500">
                  Discover the Connection Collection →
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group relative bg-ivory p-10 border border-ivory-300/50 hover:border-gold-300/40 transition-all duration-700"
            >
              <div className="w-10 h-[1px] bg-gold mb-8" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-[400]">03</span>
              <h3 className="font-heading text-2xl text-sovera-dark mt-3 mb-4">The Milestone</h3>
              <p className="text-sm text-sovera-gray leading-relaxed">
                A new name, a new city, a new chapter. Life's transformations deserve more than 
                a passing glance — they ask to be remembered. This is a marker of growth, 
                a token of courage worn close, for the moments that changed everything.
              </p>
              <div className="mt-8 pt-6 border-t border-ivory-200">
                <span className="text-xs uppercase tracking-[0.15em] text-gold/70 font-[400] group-hover:tracking-[0.2em] transition-all duration-500">
                  Discover the Growth Collection →
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Collections Section ─── */}
      <section className="py-28 lg:py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">Worn With Intention</span>
            <h2 className="font-heading text-3xl md:text-5xl text-sovera-dark mt-5 leading-[1.15]">
              What will your piece
              <br />
              <span className="italic text-gold">say about you?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative aspect-[3/4] bg-sovera-cream overflow-hidden cursor-pointer border border-ivory-300/30"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sovera-dark/70 via-sovera-dark/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-[400]">For Him</span>
                <h3 className="font-heading text-2xl lg:text-3xl text-ivory mt-2 mb-3">The Ambition Collection</h3>
                <p className="text-sm text-ivory-300/70 leading-relaxed">
                  For the leaders, the builders, the ones who dare. Each piece tells a story of vision turned into legacy.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative aspect-[3/4] bg-ivory-200 overflow-hidden cursor-pointer border border-ivory-300/30"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sovera-dark/70 via-sovera-dark/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center">
                  <div className="w-3 h-3 border border-gold rounded-full" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-[400]">For Couples</span>
                <h3 className="font-heading text-2xl lg:text-3xl text-ivory mt-2 mb-3">The Connection Collection</h3>
                <p className="text-sm text-ivory-300/70 leading-relaxed">
                  For the bonds that weather every storm. Symbols of trust, devotion, and the beauty of growing together.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group relative aspect-[3/4] bg-sovera-cream overflow-hidden cursor-pointer border border-ivory-300/30"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sovera-dark/70 via-sovera-dark/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-gold border-l-transparent border-r-transparent" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-[400]">Modern Bonds</span>
                <h3 className="font-heading text-2xl lg:text-3xl text-ivory mt-2 mb-3">The Growth Collection</h3>
                <p className="text-sm text-ivory-300/70 leading-relaxed">
                  For life's transformations — the leaps of faith, the fresh starts, the courage to begin again.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <a
              href="/collections"
              className="group inline-flex items-center gap-3 px-10 py-4 border border-sovera-dark text-sovera-dark text-sm uppercase tracking-[0.15em] font-[400] hover:bg-sovera-dark hover:text-ivory transition-all duration-500"
            >
              <span className="group-hover:tracking-[0.2em] transition-all duration-500">Explore Every Collection</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Manifesto Section ─── */}
      <section className="py-28 lg:py-36 bg-sovera-dark text-ivory relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold-700/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-gold-700/10 rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">Our Manifesto</span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-ivory mt-5 mb-8 leading-[1.1]">
              You don't wear SOVÉRA
              <br />
              <span className="italic text-gold">to be seen.</span>
            </h2>
            <p className="text-sm md:text-base text-ivory-300/60 leading-relaxed max-w-2xl mx-auto mb-6">
              You wear it because it <span className="italic text-ivory-300/80">remembers</span>. Because the piece on your wrist,
              around your neck, or resting against your heart carries a truth that words cannot hold.
            </p>
            <p className="text-sm md:text-base text-ivory-300/60 leading-relaxed max-w-2xl mx-auto mb-12">
              We believe the best jewellery is never taken off — 
              it becomes part of you. A quiet symbol of everything you've lived, loved, and become.
            </p>
            <a
              href="/about"
              className="group inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold text-sm uppercase tracking-[0.15em] font-[400] hover:bg-gold hover:text-sovera-dark transition-all duration-500"
            >
              <span className="group-hover:tracking-[0.2em] transition-all duration-500">Read Our Story</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}