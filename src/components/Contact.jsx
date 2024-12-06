// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   service: 'arte-digital',
   message: ''
 });

 const handleSubmit = (e) => {
   e.preventDefault();
   // Add form submission logic
 };

 return (
   <section id="contact" className="py-20 px-4">
     <div className="max-w-6xl mx-auto">
       <motion.div 
         className="grid md:grid-cols-2 gap-12"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
       >
         {/* Info Section */}
         <div className="space-y-8">
           <h2 className="text-4xl font-bold gradient-text">Conectemos</h2>
           <p className="text-lg text-white/80">
             Transformemos tu visión en una experiencia artística única
           </p>
           
           <div className="space-y-4">
             <div className="flex items-center space-x-4">
               <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] flex items-center justify-center">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
               <div>
                 <h3 className="font-semibold">Email</h3>
                 <p className="text-white/70">info@fusionbioart.com</p>
               </div>
             </div>

             <div className="flex items-center space-x-4">
               <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] flex items-center justify-center">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
               </div>
               <div>
                 <h3 className="font-semibold">Ubicación</h3>
                 <p className="text-white/70">Digital Art District, Tech City</p>
               </div>
             </div>
           </div>
         </div>

         {/* Form Section */}
         <motion.form 
           onSubmit={handleSubmit}
           className="glass-effect p-8 rounded-lg space-y-6"
           initial={{ x: 50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
         >
           <div>
             <label className="block mb-2 font-medium">Nombre</label>
             <input
               type="text"
               value={formData.name}
               onChange={(e) => setFormData({...formData, name: e.target.value})}
               className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00f7ff] outline-none"
               required
             />
           </div>

           <div>
             <label className="block mb-2 font-medium">Email</label>
             <input
               type="email"
               value={formData.email}
               onChange={(e) => setFormData({...formData, email: e.target.value})}
               className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00f7ff] outline-none"
               required
             />
           </div>

           <div>
             <label className="block mb-2 font-medium">Servicio</label>
             <select
               value={formData.service}
               onChange={(e) => setFormData({...formData, service: e.target.value})}
               className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00f7ff] outline-none"
             >
               <option value="arte-digital">Arte Digital</option>
               <option value="instalaciones">Instalaciones Interactivas</option>
               <option value="bioesculturas">Bioesculturas</option>
             </select>
           </div>

           <div>
             <label className="block mb-2 font-medium">Mensaje</label>
             <textarea
               value={formData.message}
               onChange={(e) => setFormData({...formData, message: e.target.value})}
               className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00f7ff] outline-none h-32"
               required
             />
           </div>

           <motion.button
             type="submit"
             className="w-full py-4 bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] rounded-lg font-semibold"
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
           >
             Enviar Mensaje
           </motion.button>
         </motion.form>
       </motion.div>
     </div>
   </section>
 );
}