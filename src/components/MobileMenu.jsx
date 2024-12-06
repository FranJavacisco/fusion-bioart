// src/components/MobileMenu.jsx
import { motion } from 'framer-motion';

export default function MobileMenu({ isOpen, menuItems, onClose }) {
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg overflow-hidden"
    >
      <div className="py-4">
        {menuItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            variants={itemVariants}
            className={`block py-3 px-6 text-center ${
              item.isButton 
                ? 'mx-auto my-2 w-32 rounded-full bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] font-medium hover:shadow-lg hover:shadow-[#00f7ff]/20' 
                : 'text-white/80 hover:text-white hover:bg-white/5'
            }`}
            onClick={onClose}
          >
            {item.title}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}