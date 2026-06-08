import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const productData = {
  'ambition-ring': {
    name: 'The Ambition Ring',
    collection: 'Ambition Collection',
    price: 24999,
    tagline: 'A symbol of vision turned into legacy.',
    description: 'Crafted for the ones who dare. The Ambition Ring features a clean, architectural silhouette in hallmarked gold — a quiet reminder of how far you\'ve come and where you\'re headed.',
    details: ['18K Hallmarked Gold', 'Hand-finished polish', 'Comfort-fit band', 'Engravable inner surface', 'Comes with story card'],
    category: 'for-him',
  },
  'ambition-cufflinks': {
    name: 'The Commander Cufflinks',
    collection: 'Ambition Collection',
    price: 18999,
    tagline: 'For the boardroom and beyond.',
    description: 'Understated elegance meets bold intention. These cufflinks are designed for the man who leads — each piece a tangible marker of the decisions that shaped his path.',
    details: ['Sterling Silver with Gold Inlay', 'Toggle closure', 'Engravable', 'Presentation box included'],
    category: 'for-him',
  },
  'connection-band': {
    name: 'The Unity Band',
    collection: 'Connection Collection',
    price: 32999,
    tagline: 'Two paths, one journey.',
    description: 'A symbol of commitment that transcends distance and time. The Unity Band is crafted for couples who understand that real love grows stronger with every season.',
    details: ['Paired set (2 bands)', '18K Gold', 'Interlocking design', 'Engravable', 'Includes couple story cards'],
    category: 'for-couples',
  },
  'growth-charm': {
    name: 'The Metamorphosis Pendant',
    collection: 'Growth Collection',
    price: 15999,
    tagline: 'For the moments that changed everything.',
    description: 'A new name, a new city, a new chapter. This pendant is a marker of transformation — a token of courage worn close to the heart, for every beginning that mattered.',
    details: ['14K Gold pendant', 'Adjustable chain (18"-20")', 'Openable locket design', 'Engravable inside', 'Gift wrapped with meaning card'],
    category: 'modern-bonds',
  },
}

export default function ProductPage() {
  const { id } = useParams()
  const product = productData[id]

  if (!product) {
    return (
      <div className="pt-28 pb-20 bg-ivory min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl text-sovera-dark mb-4">Product Not Found</h1>
          <p className="text-sovera-gray mb-8">This piece doesn't seem to exist yet.</p>
          <Link to="/collections" className="px-8 py-3 bg-sovera-dark text-ivory text-sm uppercase tracking-[0.15em]">View Collections</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="aspect-square bg-sovera-cream border border-ivory-200 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-2 border-gold/30 flex items-center justify-center mb-4">
                <span className="font-heading text-4xl text-gold/50 italic">
                  {product.name[0]}
                </span>
              </div>
              <p className="text-[10px] text-sovera-light uppercase tracking-[0.2em]">Product Image</p>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">
              {product.collection}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-sovera-dark mt-3 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gold font-[500] mb-4">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
            <p className="text-sm text-sovera-gray italic mb-6">
              {product.tagline}
            </p>
            <p className="text-sm text-sovera-gray leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="border-t border-ivory-200 pt-6 mb-8">
              <h3 className="text-xs uppercase tracking-[0.15em] text-sovera-dark font-[500] mb-4">Details</h3>
              <ul className="space-y-2">
                {product.details.map((d, i) => (
                  <li key={i} className="text-sm text-sovera-gray flex items-center gap-3">
                    <span className="w-1 h-1 bg-gold/60 rounded-full" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-8 py-4 bg-sovera-dark text-ivory text-sm uppercase tracking-[0.15em] font-[400] hover:bg-gold transition-all duration-500">
                Add to Bag
              </button>
              <Link
                to="/cart"
                className="flex-1 px-8 py-4 border border-sovera-dark text-sovera-dark text-sm uppercase tracking-[0.15em] font-[400] text-center hover:bg-sovera-dark hover:text-ivory transition-all duration-500"
              >
                View Cart
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
