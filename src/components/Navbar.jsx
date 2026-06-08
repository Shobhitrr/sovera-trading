import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Collections', path: '/collections/all' },
    { name: 'Why SOVÉRA', path: '/why-sovera' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-sovera-ivory/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-sovera-dark" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>

        {/* Navigation Links - Desktop Left */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm tracking-widest uppercase hover:text-sovera-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <span className="text-2xl lg:text-3xl font-playfair tracking-[0.2em] font-bold">SOVÉRA</span>
          <span className="text-[8px] tracking-[0.4em] uppercase -mt-1 opacity-60">The House of</span>
        </Link>

        {/* Navigation Links - Desktop Right */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.slice(2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm tracking-widest uppercase hover:text-sovera-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-6 ml-4">
            <Search size={20} className="cursor-pointer hover:text-sovera-gold" />
            <Link to="/cart">
              <ShoppingBag size={20} className="cursor-pointer hover:text-sovera-gold" />
            </Link>
          </div>
        </div>

        {/* Cart Icon Mobile */}
        <div className="lg:hidden flex items-center space-x-4">
          <Link to="/cart">
            <ShoppingBag size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-sovera-ivory z-50 lg:hidden p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-playfair text-xl tracking-widest">SOVÉRA</span>
                <button onClick={() => setIsOpen(false)}><X size={24} /></button>
              </div>
              <div className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg tracking-widest uppercase font-light"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-12 border-t border-sovera-gold/20 flex flex-col space-y-6">
                <Link to="/cart" className="flex items-center space-x-3 text-sm tracking-widest uppercase">
                  <ShoppingBag size={18} />
                  <span>Your Bag</span>
                </Link>
                <div className="flex items-center space-x-3 text-sm tracking-widest uppercase">
                  <Search size={18} />
                  <span>Search</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
