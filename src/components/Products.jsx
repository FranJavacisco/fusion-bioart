// src/components/Products.jsx
import { motion } from 'framer-motion';

export default function Products() {
 const products = [
   {
     title: "Arte Digital NFT",
     description: "Colecciones exclusivas certificadas en blockchain",
     image: "images/product1.jpg",
     features: ["Certificación única", "Trazabilidad", "Edición limitada"]
   },
   {
     title: "Instalaciones Interactivas",
     description: "Experiencias inmersivas personalizadas",
     image: "images/product2.jpg",
     features: ["Sensores biométricos", "Respuesta en tiempo real", "Adaptación al espacio"]
   },
   {
     title: "Bioesculturas",
     description: "Fusión de organismos vivos y tecnología",
     image: "images/product3.jpg",
     features: ["Materiales orgánicos", "Sistemas autorregulables", "Monitoreo IoT"]
   }
 ];

 return (
   <section id="products" className="py-20 px-4">
     <div className="max-w-6xl mx-auto">
       <motion.h2 
         className="text-4xl font-bold text-center mb-12"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
       >
         Productos y Servicios
       </motion.h2>

       <div className="grid md:grid-cols-3 gap-8">
         {products.map((product, index) => (
           <motion.div
             key={index}
             className="glass-effect rounded-lg overflow-hidden"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.2 }}
             whileHover={{ scale: 1.02 }}
           >
             <img 
               src={product.image} 
               alt={product.title}
               className="w-full h-48 object-cover"
             />
             <div className="p-6">
               <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
               <p className="text-white/70 mb-4">{product.description}</p>
               <ul className="space-y-2">
                 {product.features.map((feature, i) => (
                   <li key={i} className="flex items-center">
                     <span className="w-2 h-2 bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] rounded-full mr-2" />
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
           </motion.div>
         ))}
       </div>

       <motion.div
         className="mt-16 text-center"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
       >
         <a 
           href="#contact" 
           className="inline-block px-8 py-4 bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[#00f7ff]/50 transition-all"
         >
           Solicitar Información
         </a>
       </motion.div>
     </div>
   </section>
 );
}