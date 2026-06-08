import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Collections from './pages/Collections'
import WhySovera from './pages/WhySovera'
import Story from './pages/Story'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import About from './pages/About'
import GiftGuide from './pages/GiftGuide'
import Contact from './pages/Contact'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<Collections />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/why-sovera" element={<WhySovera />} />
          <Route path="/stories" element={<Story />} />
          <Route path="/about" element={<About />} />
          <Route path="/gift-guide" element={<GiftGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}

export default App