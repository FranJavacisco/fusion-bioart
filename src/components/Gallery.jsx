// src/components/Gallery.jsx
import { motion } from 'framer-motion';

export default function Gallery() {
 const items = [
   { 
     id: 1, 
     title: 'Nebulosa Digital',
     image: 'images/obra1.jpg',
     description: 'Fusión de elementos orgánicos y digitales'
   },
   { 
     id: 2, 
     title: 'Metamorfosis Cuántica',
     image: 'images/obra2.jpg',
     description: 'Transformación de patrones naturales' 
   },
   { 
     id: 3, 
     title: 'Sinergia Biológica',
     image: 'images/obra3.jpg',
     description: 'Interacción entre tecnología y naturaleza'
   },
   { 
    id: 4, 
    title: 'Horizonte Sintético',
    image: 'images/obra4.jpg',
    description: 'Una ventana al futuro donde la naturaleza y la tecnología crean un nuevo horizonte de posibilidades.'
  },
  { 
    id: 5, 
    title: 'Ecosistema Dinámico',
    image: 'images/obra5.jpg',
    description: 'Un sistema en constante cambio, que simula la coexistencia entre inteligencia artificial y procesos biológicos.'
  },
  { 
    id: 6, 
    title: 'Luz Biofluida',
    image: 'images/obra6.jpg',
    description: 'Explora cómo las luces líquidas pueden redefinir los límites entre lo físico y lo digital.'
  },

 ];

 return (
   <section id="gallery" className="min-h-screen py-20 px-4">
     <h2 className="text-4xl font-bold text-center mb-12">Galería</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
       {items.map((item) => (
         <motion.div
           key={item.id}
           whileHover={{ scale: 1.05 }}
           className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm"
         >
           <div className="h-64 relative">
             <img 
               src={item.image} 
               alt={item.title}
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
           </div>
           <div className="p-4">
             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
             <p className="text-white/70">{item.description}</p>
           </div>
         </motion.div>
       ))}
     </div>
   </section>
 );
}