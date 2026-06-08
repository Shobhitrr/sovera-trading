import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const collections = [
  {
    name: 'The Ambition Collection',
    tagline: 'For the leaders and achievers',
    description: 'Clean lines, architectural forms. Each piece is a symbol of vision turned into legacy — for the ones who dare.',
    slug: 'for-him',
    path: '/collections/for-him',
    items: [
      { name: 'The Ambition Ring', price: '₹24,999', productId: 'ambition-ring' },
      { name: 'The Commander Cufflinks', price: '₹18,999', productId: 'ambition-cufflinks' },
    ],
  },
  {
    name: 'The Connection Collection',
    tagline: 'For the bonds that last',
    description: 'Designed for two. Symbols of trust, devotion, and the beauty of growing together — for couples who understand that love is a journey.',
    slug: 'for-couples',
    path: '/collections/for-couples',
    items: [
      { name: 'The Unity Band', price: '₹32,999', productId: 'connection-band' },
    ],
  },
  {
    name: 'The Growth Collection',
    tagline: 'For life\'s transformations',
    description: 'Markers of courage and new beginnings. For the leaps of faith, the fresh starts, and the moments that changed everything.',
    slug: 'modern-bonds',
    path: '/collections/modern-bonds',
    items: [
      { name: 'The Metamorphosis Pendant', price: '₹15,999', productId: 'growth-charm' },
    ],
  },
]

export default function Collections() {
  return (
    <div className="pt-28 pb-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">
            Curated Collections
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-sovera-dark mt-4 leading-[1.1]">
            Discover your
            <br />
            <span className="italic text-gold">story in gold</span>
          </h1>
        </motion.div>

        <div className="space-y-20">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Collection image placeholder */}
                <div className="aspect-[4/5] bg-sovera-cream border border-ivory-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full border-2 border-gold/20 flex items-center justify-center mb-3">
                      <span className="font-heading text-3xl text-gold/40 italic">{collection.name[0]}</span>
                    </div>
                    <p className="text-[10px] text-sovera-light uppercase tracking-[0.2em]">Collection Image</p>
                  </div>
                </div>

                {/* Collection info */}
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">
                    Collection {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-sovera-dark mt-3 mb-3">
                    {collection.name}
                  </h2>
                  <p className="text-sm text-sovera-gray italic mb-4">
                    {collection.tagline}
                  </p>
                  <p className="text-sm text-sovera-gray leading-relaxed mb-8">
                    {collection.description}
                  </p>

                  {/* Product listing */}
                  <div className="space-y-4 mb-8">
                    {collection.items.map((item) => (
                      <Link
                        key={item.productId}
                        to={`/product/${item.productId}`}
                        className="flex items-center justify-between p-4 bg-ivory border border-ivory-200 hover:border-gold-300/40 transition-all duration-300 group"
                      >
                        <div>
                          <h3 className="font-heading text-base text-sovera-dark group-hover:text-gold transition-colors">
                            {item.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gold font-[500]">{item.price}</span>
                          <span className="text-xs text-sovera-light group-hover:text-gold transition-colors">→</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    to={collection.path}
                    className="inline-block text-xs uppercase tracking-[0.15em] text-gold font-[400] hover:tracking-[0.2em] transition-all duration-300"
                  >
                    View Full Collection →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
