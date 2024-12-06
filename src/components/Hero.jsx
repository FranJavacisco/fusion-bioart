// src/components/Hero.jsx
import { motion } from 'framer-motion';

export default function Hero() {
 return (
   <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
     {/* Video Background */}
     <div className="absolute inset-0 w-full h-full">
       <video
         autoPlay
         loop
         muted
         playsInline
         className="object-cover w-full h-full"
         style={{ filter: 'brightness(0.7) contrast(1.1)' }}
       >
         <source src="/hero.mp4" type="video/mp4" />
       </video>
       
       {/* Gradient Overlays */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
       <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
     </div>

     {/* Content */}
     <motion.div 
       className="relative z-10 text-center px-4 max-w-4xl mx-auto"
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
     >
       <motion.h1 
         className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.2 }}
       >
         <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f7ff] via-[#9900ff] to-[#ff4d00]">
           Fusion BioArt
         </span>
       </motion.h1>

       <motion.p 
         className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.4 }}
       >
         Fusionando Naturaleza y Tecnología
       </motion.p>

       <motion.button
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="px-8 py-4 rounded-full text-base md:text-lg font-medium
         bg-gradient-to-r from-[#00f7ff]/80 to-[#ff4d00]/80 
         hover:from-[#00f7ff] hover:to-[#ff4d00]
         text-white shadow-lg shadow-black/50
         backdrop-blur-sm transition-all duration-300
         hover:shadow-[#00f7ff]/20"
       >
         Explorar
       </motion.button>

       {/* Scroll Indicator */}
       <motion.div 
         className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
         animate={{ y: [0, 10, 0] }}
         transition={{ duration: 1.5, repeat: Infinity }}
       >
         <span className="block w-6 h-6 border-b-2 border-r-2 border-white/50 transform rotate-45" />
       </motion.div>
     </motion.div>
   </div>
 );
}