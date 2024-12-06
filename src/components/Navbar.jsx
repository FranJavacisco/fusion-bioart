// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../hooks/useScrollDirection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['gallery', 'about', 'products', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Galería",
      href: "#gallery",
      highlight: true
    },
    {
      title: "Nosotros", 
      href: "#about"
    },
    {
      title: "Productos",
      href: "#products"
    },
    {
      title: "Contacto",
      href: "#contact",
      isButton: true
    }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f7ff] to-[#ff4d00]"
          >
            FusionBioArt
          </motion.a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              item.isButton ? (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#00f7ff]/20"
                >
                  {item.title}
                </motion.a>
              ) : (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`relative text-white/80 hover:text-white transition-colors ${
                    activeSection === item.href.slice(1) ? 'text-white font-semibold' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00f7ff] to-[#ff4d00]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeSection === item.href.slice(1) ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="py-4 px-4 space-y-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 text-sm text-center ${
                    item.isButton 
                      ? 'mx-auto w-32 rounded-full bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] text-white font-medium hover:shadow-lg hover:shadow-[#00f7ff]/20' 
                      : 'text-white/80 hover:text-white hover:bg-white/5 rounded-lg'
                  }`}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}