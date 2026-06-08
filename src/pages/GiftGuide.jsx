import { motion } from 'framer-motion'

export default function GiftGuide() {
  return (
    <div className="pt-28 pb-20 bg-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">Gift Guide</span>
          <h1 className="font-heading text-3xl md:text-5xl text-sovera-dark mt-4 mb-6 leading-[1.15]">
            Find the perfect
            <br />
            <span className="italic text-gold">symbolic gift</span>
          </h1>
          <p className="text-sm text-sovera-gray/80 max-w-xl mx-auto mb-8">
            Not sure what to give? Every piece of SOVÉRA jewellery tells a story. 
            Think about the moment you're celebrating — and let that guide you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { title: 'For Achievement', desc: 'Promotions, graduations, milestones. Choose the Ambition Collection.', icon: '✦' },
              { title: 'For Love', desc: 'Anniversaries, promises, reunions. Choose the Connection Collection.', icon: '♢' },
              { title: 'For New Beginnings', desc: 'Fresh starts, transformations, courage. Choose the Growth Collection.', icon: '△' },
            ].map((item) => (
              <div key={item.title} className="bg-ivory border border-ivory-200 p-6">
                <span className="text-2xl text-gold/60">{item.icon}</span>
                <h3 className="font-heading text-lg text-sovera-dark mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-sovera-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
