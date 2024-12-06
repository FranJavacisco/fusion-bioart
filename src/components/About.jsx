// src/components/About.jsx
import { motion } from 'framer-motion';

export default function About() {
 return (
   <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
     <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
       <motion.div
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8 }}
       >
         <h2 className="text-4xl font-bold mb-8">Nuestra Visión</h2>
         <div className="space-y-6 text-lg">
           <p>
             FusionBioArt nace de la fascinación por el punto donde convergen la tecnología y la naturaleza. Somos un colectivo de artistas, científicos y tecnólogos unidos por la pasión de explorar nuevas formas de expresión artística.
           </p>
           <p>
             Utilizamos biotecnología avanzada y técnicas digitales para crear obras que desafían la percepción tradicional del arte, generando experiencias inmersivas únicas.
           </p>
         </div>

         <div className="mt-12 grid grid-cols-2 gap-6">
           <div className="glass-effect p-6 rounded-lg">
             <h3 className="text-xl font-semibold mb-3">Innovación</h3>
             <p>Fusionamos tecnologías emergentes con procesos biológicos naturales</p>
           </div>
           <div className="glass-effect p-6 rounded-lg">
             <h3 className="text-xl font-semibold mb-3">Sostenibilidad</h3>
             <p>Comprometidos con prácticas artísticas ecológicamente responsables</p>
           </div>
         </div>
       </motion.div>

       <motion.div
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8 }}
         className="relative"
       >
         <div className="grid grid-cols-2 gap-4 h-full">
           <motion.img
             src="/about1.jpg"
             alt="Proceso creativo"
             className="w-full h-64 object-cover rounded-lg"
             whileHover={{ scale: 1.05 }}
           />
           <motion.img
             src="/about2.jpg"
             alt="Instalación BioArt"
             className="w-full h-64 object-cover rounded-lg mt-12"
             whileHover={{ scale: 1.05 }}
           />
           <motion.img
             src="/about3.jpg"
             alt="Laboratorio creativo"
             className="w-full h-64 object-cover rounded-lg"
             whileHover={{ scale: 1.05 }}
           />
           <motion.div
             className="glass-effect p-6 rounded-lg flex items-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className="text-center">
               <h3 className="text-xl font-bold mb-2">+500</h3>
               <p>Obras Creadas</p>
             </div>
           </motion.div>
         </div>
       </motion.div>
     </div>

     <div className="max-w-6xl mx-auto mt-20">
       <h3 className="text-2xl font-bold mb-8 text-center">Nuestro Proceso</h3>
       <div className="grid md:grid-cols-3 gap-8">
         {[
           {
             title: "Investigación",
             description: "Exploramos nuevas técnicas y tecnologías"
           },
           {
             title: "Experimentación",
             description: "Fusionamos elementos digitales y orgánicos"
           },
           {
             title: "Creación",
             description: "Materializamos visiones artísticas únicas"
           }
         ].map((step, index) => (
           <motion.div
             key={index}
             className="glass-effect p-6 rounded-lg text-center"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.2 }}
           >
             <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
             <p>{step.description}</p>
           </motion.div>
         ))}
       </div>
     </div>
   </section>
 );
}