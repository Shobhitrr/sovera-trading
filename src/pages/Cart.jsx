import { motion } from 'framer-motion'
import { useCart, useCartDispatch } from '../context/CartContext'
import { initiateRazorpayPayment } from '../utils/razorpay'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

export default function Cart() {
  const cart = useCart()
  const dispatch = useCartDispatch()

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckout = async () => {
    await initiateRazorpayPayment({
      amount: totalAmount,
      name: '',
      email: '',
      phone: '',
      items: cart.items,
    })
  }

  return (
    <div className="pt-28 pb-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-[400]">
            Your Selection
          </span>
          <h1 className="font-heading text-3xl md:text-5xl text-sovera-dark mt-3">
            Your Cart
            {itemCount > 0 && (
              <span className="text-lg text-sovera-light ml-3 font-body font-[300]">
                ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </span>
            )}
          </h1>
        </motion.div>

        {cart.items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-6 h-6 border border-gold rounded-full" />
            </div>
            <h2 className="font-heading text-2xl text-sovera-dark mb-3">
              Your cart is waiting to be filled
            </h2>
            <p className="text-sm text-sovera-gray mb-8">
              Discover pieces that tell your story.
            </p>
            <Link
              to="/collections"
              className="inline-block px-8 py-3 bg-sovera-dark text-ivory text-sm uppercase tracking-[0.15em] font-[400] hover:bg-gold transition-all duration-500"
            >
              Explore Collections
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-6 p-6 bg-ivory border border-ivory-200 group hover:border-gold-200/50 transition-all duration-500"
                >
                  <div className="w-24 h-24 bg-sovera-cream flex-shrink-0 flex items-center justify-center">
                    <span className="text-2xl text-gold/40 font-heading italic">
                      {item.name?.[0] || 'S'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg text-sovera-dark truncate">
                      {item.name}
                    </h3>
                    {item.collection && (
                      <p className="text-xs text-sovera-light uppercase tracking-wider mt-1">
                        {item.collection}
                      </p>
                    )}
                    <p className="text-gold font-[500] mt-2">
                      ₹{item.price?.toLocaleString('en-IN')}
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center border border-ivory-300">
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          }
                          className="w-8 h-8 flex items-center justify-center text-sm hover:bg-ivory-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="w-10 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          }
                          className="w-8 h-8 flex items-center justify-center text-sm hover:bg-ivory-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          dispatch({ type: 'REMOVE_ITEM', id: item.id })
                        }
                        className="text-xs text-sovera-light hover:text-gold uppercase tracking-wider transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm text-sovera-dark font-[500]">
                      ₹{(item.price * item.quantity)?.toLocaleString('en-IN')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-ivory border border-ivory-200 p-8 sticky top-32">
                <h3 className="font-heading text-xl text-sovera-dark mb-6">
                  Order Summary
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-sovera-gray">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>₹{totalAmount?.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sovera-gray">
                    <span>Shipping</span>
                    <span className="text-gold">Free</span>
                  </div>
                  <div className="border-t border-ivory-200 pt-3 flex justify-between font-[500] text-sovera-dark">
                    <span>Total</span>
                    <span>₹{totalAmount?.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full mt-8 px-8 py-4 bg-sovera-dark text-ivory text-sm uppercase tracking-[0.15em] font-[400] hover:bg-gold transition-all duration-500"
                >
                  Checkout with Razorpay
                </button>
                <p className="text-[10px] text-sovera-light text-center mt-4 tracking-wider">
                  Secure UPI / Card / Netbanking payments via Razorpay
                </p>
                <Link
                  to="/collections"
                  className="block text-center mt-4 text-xs text-sovera-light hover:text-gold uppercase tracking-wider transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
