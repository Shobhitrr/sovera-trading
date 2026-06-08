import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(null)
const CartDispatchContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.item.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.item.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return { ...state, items: [...state.items, { ...action.item, quantity: 1 }] }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.id),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.id
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i
        ),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] }, () => {
    try {
      const saved = localStorage.getItem('sovera-cart')
      return saved ? { items: JSON.parse(saved) } : { items: [] }
    } catch {
      return { items: [] }
    }
  })

  useEffect(() => {
    localStorage.setItem('sovera-cart', JSON.stringify(cart.items))
  }, [cart.items])

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

export function useCartDispatch() {
  return useContext(CartDispatchContext)
}
