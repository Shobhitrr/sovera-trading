import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const stories = [
  {
    title: 'The Promotion That Changed Everything',
    excerpt: 'After five years of relentless work, Arjun was named VP. He commemorated the moment with the Ambition Ring — a symbol worn every day since.',
    author: 'Arjun M., Mumbai',
    collection: 'Ambition Collection',
  },
  {
    title: 'A Thousand Miles, One Band',
    excerpt: 'Separated by continents for two years, Priya and Rohan marked their reunion with the Unity Band. A promise that distance could not break.',
    author: 'Priya & Rohan, Delhi',
    collection: 'Connection Collection',
  },
  {
    title: 'Starting Over, Stronger',
    excerpt: 'After a difficult divorce, Meera chose the Metamorphosis Pendant to mark her new beginning. "It reminds me that I can rebuild."',
    author: 'Meera K., Bangalore',
    collection: 'Growth Collection',
  },
  {
    title: 'The First Sale',
    excerpt: 'When his bootstrap startup closed its first enterprise client, Vikram bought the Commander Cufflinks. "They remind me of the risk that paid off."',
    author: 'Vikram S., Pune',
    collection: 'Ambition Collection',
  },
  {
    title: 'Twenty Years, One Question',
    excerpt: 'For their 20th anniversary, Anjali gifted her husband a pair of engraved cufflinks. Not for what he achieved — but for who he became.',
    author: 'Anjali & Dev, Chennai',
    collection: 'Connection Collection',
  },
  {
    title: 'The Marathon',
    excerpt: 'After completing his first ultra-marathon at 45, Rajesh chose a pendant to mark the finish line. "Age is just a number. This is proof."',
    author: 'Rajesh P., Hyderabad',
    collection: 'Growth Collection',
  },
]

export default function Story() {
  return (
    <div className="pt-28 pb-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">
            Real Stories
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-sovera-dark mt-4 leading-[1.1]">
            The moments that
            <br />
            <span className="italic text-gold">define us</span>
          </h1>
          <p className="text-sm md:text-base text-sovera-gray/80 mt-6 leading-relaxed">
            Every SOVÉRA piece carries a story. Here are just a few from our community —
            real people, real milestones, real meaning.
          </p>
        </motion.div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-ivory border border-ivory-200 p-8 hover:border-gold-300/40 transition-all duration-500 group flex flex-col"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-[400] mb-4">
                {story.collection}
              </span>
              <h3 className="font-heading text-xl text-sovera-dark mb-3 group-hover:text-gold transition-colors duration-500">
                {story.title}
              </h3>
              <p className="text-sm text-sovera-gray leading-relaxed flex-1">
                "{story.excerpt}"
              </p>
              <div className="mt-6 pt-4 border-t border-ivory-200">
                <p className="text-xs text-sovera-light italic">
                  — {story.author}
                </p>
              </div>
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
            Have a story to share? We'd love to hear it.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 border border-sovera-dark text-sovera-dark text-sm uppercase tracking-[0.15em] font-[400] hover:bg-sovera-dark hover:text-ivory transition-all duration-500"
          >
            Share Your Story
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
