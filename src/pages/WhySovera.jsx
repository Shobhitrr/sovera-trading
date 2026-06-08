import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const reasons = [
  {
    title: 'Crafted for Meaning, Not Mementos',
    description: 'Every SOVÉRA piece is designed as a daily companion — not a treasure kept behind glass. We believe jewellery should be lived in, worn through every triumph and transformation.',
    icon: '✦',
  },
  {
    title: 'Uncompromising Quality',
    description: 'From ethically sourced materials to master craftsmanship, each piece is built to last a lifetime. Our gold is rigorously tested, our settings are secure, and every finish is immaculate.',
    icon: '◈',
  },
  {
    title: 'Symbolism That Speaks',
    description: 'Unlike mass-produced jewellery, SOVÉRA pieces are created with intentional symbolism. Each collection tells a story — of achievement, connection, or growth — so your jewellery becomes part of your narrative.',
    icon: '♢',
  },
  {
    title: 'Designed for Everyday Wear',
    description: 'Comfort matters. Our pieces are ergonomically designed for all-day wear — lightweight, durable, and secure. Whether in the boardroom or at the gym, your SOVÉRA piece stays with you.',
    icon: '○',
  },
  {
    title: 'Premium Gifting Experience',
    description: 'Every order arrives in our signature packaging with a story card that captures the meaning behind your gift. It\'s not just jewellery — it\'s a moment, wrapped with intention.',
    icon: '□',
  },
  {
    title: 'Built for Life\'s Milestones',
    description: 'From promotions to anniversaries to personal breakthroughs, SOVÉRA is there for every milestone. And when the next one comes, we\'ll be here — because your story is never finished.',
    icon: '△',
  },
]

export default function WhySovera() {
  return (
    <div className="pt-28 pb-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">
            The SOVÉRA Difference
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-sovera-dark mt-4 leading-[1.1]">
            Why choose
            <br />
            <span className="italic text-gold">meaning over material?</span>
          </h1>
          <p className="text-sm md:text-base text-sovera-gray/80 mt-6 leading-relaxed">
            In a world of fast fashion and disposable luxury, SOVÉRA stands for something different.
            We craft symbols — not trinkets. Here's what sets us apart.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-ivory border border-ivory-200 p-8 hover:border-gold-300/40 transition-all duration-500 group"
            >
              <span className="text-2xl text-gold/60 group-hover:text-gold transition-colors duration-500">
                {reason.icon}
              </span>
              <h3 className="font-heading text-lg text-sovera-dark mt-4 mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-sovera-gray leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-sovera-gray mb-6">
            Ready to find a piece that tells your story?
          </p>
          <Link
            to="/collections"
            className="inline-block px-10 py-4 bg-sovera-dark text-ivory text-sm uppercase tracking-[0.15em] font-[400] hover:bg-gold transition-all duration-500"
          >
            Explore Collections
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
