// src/components/Footer.jsx
import { motion } from 'framer-motion';

export default function Footer() {
 const footerSections = [
   {
     title: "FusionBioArt",
     links: [
       { name: "Sobre Nosotros", href: "#about" },
       { name: "Equipo", href: "#team" },
       { name: "Filosofía", href: "#philosophy" }
     ]
   },
   {
     title: "Servicios", 
     links: [
       { name: "Arte Digital", href: "#digital" },
       { name: "Instalaciones", href: "#installations" },
       { name: "NFTs", href: "#nft" }
     ]
   },
   {
     title: "Recursos",
     links: [
       { name: "Blog", href: "#blog" },
       { name: "Newsletter", href: "#news" },
       { name: "Docs", href: "#docs" }
     ]
   },
   {
     title: "Social",
     links: [
       { name: "Twitter", href: "#twitter" },
       { name: "Instagram", href: "#instagram" },
       { name: "LinkedIn", href: "#linkedin" }
     ]
   }
 ];

 return (
   <footer className="relative bg-black/90 backdrop-blur-lg overflow-hidden py-16">
     {/* Logo Flotante */}
     <motion.div
 animate={{
   x: ['120vw', '-120vw']
 }}
 transition={{
   duration: 20,
   repeat: Infinity,
   ease: "linear"
 }}
 className="absolute top-0 md:top-[10%] -translate-y-1/2 z-0 w-full"
>
 <img 
   src="/logo-footer.png"
   alt="Logo"
   className="w-96 h-96 md:w-[30vw] md:h-[30vw] object-contain opacity-20 hover:opacity-30 transition-opacity duration-300"
 />
</motion.div>
     <div className="max-w-7xl mx-auto px-6 relative z-10">
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
         {footerSections.map((section, index) => (
           <div key={index} className="glass-effect p-6 rounded-lg">
             <h3 className="text-lg font-bold mb-4 gradient-text">
               {section.title}
             </h3>
             <ul className="space-y-2">
               {section.links.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>

       <div className="mt-16 pt-8 border-t border-white/10 text-center">
         <p className="text-white/50">
           © 2024 PanchoDev. Todos los derechos reservados.
         </p>
       </div>
     </div>
   </footer>
 );
}