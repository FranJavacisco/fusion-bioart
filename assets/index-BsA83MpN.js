import{j as e,m as s,r as d,A as p,R as g}from"./animations-BBeQl-bc.js";import{c as b}from"./three-DBrkW1Lb.js";import"./vendor-hZDEVzp7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();function v(){return e.jsxs("div",{className:"relative min-h-screen w-full flex items-center justify-center overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 w-full h-full",children:[e.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"object-cover w-full h-full",style:{filter:"brightness(0.7) contrast(1.1)"},children:e.jsx("source",{src:"/hero.mp4",type:"video/mp4"})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"})]}),e.jsxs(s.div,{className:"relative z-10 text-center px-4 max-w-4xl mx-auto",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[e.jsx(s.h1,{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:e.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#00f7ff] via-[#9900ff] to-[#ff4d00]",children:"Fusion BioArt"})}),e.jsx(s.p,{className:"text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},children:"Fusionando Naturaleza y Tecnología"}),e.jsx(s.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:`px-8 py-4 rounded-full text-base md:text-lg font-medium\r
         bg-gradient-to-r from-[#00f7ff]/80 to-[#ff4d00]/80 \r
         hover:from-[#00f7ff] hover:to-[#ff4d00]\r
         text-white shadow-lg shadow-black/50\r
         backdrop-blur-sm transition-all duration-300\r
         hover:shadow-[#00f7ff]/20`,children:"Explorar"}),e.jsx(s.div,{className:"absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block",animate:{y:[0,10,0]},transition:{duration:1.5,repeat:1/0},children:e.jsx("span",{className:"block w-6 h-6 border-b-2 border-r-2 border-white/50 transform rotate-45"})})]})]})}function j(){const[i,t]=d.useState("up"),[o,l]=d.useState(0);return d.useEffect(()=>{const a=()=>{const r=window.pageYOffset,c=r>o?"down":"up";c!==i&&Math.abs(r-o)>10&&t(c),l(r)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[i,o]),i}function w(){const[i,t]=d.useState(!1),[o,l]=d.useState(!1),[a,r]=d.useState("");j(),d.useEffect(()=>{const n=()=>{l(window.scrollY>50);const x=["gallery","about","products","contact"].find(u=>{const h=document.getElementById(u);if(h){const f=h.getBoundingClientRect();return f.top<=100&&f.bottom>=100}return!1});r(x||"")};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]);const c=[{title:"Galería",href:"#gallery",highlight:!0},{title:"Nosotros",href:"#about"},{title:"Productos",href:"#products"},{title:"Contacto",href:"#contact",isButton:!0}];return e.jsxs(s.nav,{initial:{y:-100},animate:{y:0},className:`fixed w-full z-50 transition-all duration-300 ${o?"bg-black/80 backdrop-blur-md py-2 shadow-lg":"bg-transparent py-4"}`,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(s.a,{href:"#",initial:{opacity:0},animate:{opacity:1},whileHover:{scale:1.05},className:"text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f7ff] to-[#ff4d00]",children:"FusionBioArt"}),e.jsx("div",{className:"hidden md:flex items-center space-x-8",children:c.map((n,m)=>n.isButton?e.jsx(s.a,{href:n.href,whileHover:{scale:1.05},whileTap:{scale:.95},className:"px-4 py-2 rounded-full bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#00f7ff]/20",children:n.title},m):e.jsxs(s.a,{href:n.href,className:`relative text-white/80 hover:text-white transition-colors ${a===n.href.slice(1)?"text-white font-semibold":""}`,whileHover:{scale:1.05},children:[n.title,e.jsx(s.span,{className:"absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00f7ff] to-[#ff4d00]",initial:{scaleX:0},animate:{scaleX:a===n.href.slice(1)?1:0},whileHover:{scaleX:1},transition:{duration:.2}})]},m))}),e.jsx(s.button,{onClick:()=>t(!i),className:"md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors",whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeWidth:"2",d:i?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})]})}),e.jsx(p,{children:i&&e.jsx(s.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10",children:e.jsx("div",{className:"py-4 px-4 space-y-1",children:c.map((n,m)=>e.jsx(s.a,{href:n.href,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:m*.1},onClick:()=>t(!1),className:`block py-2 px-4 text-sm text-center ${n.isButton?"mx-auto w-32 rounded-full bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] text-white font-medium hover:shadow-lg hover:shadow-[#00f7ff]/20":"text-white/80 hover:text-white hover:bg-white/5 rounded-lg"}`,children:n.title},m))})})})]})}function N(){const i=[{id:1,title:"Nebulosa Digital",image:"/obra1.jpg",description:"Fusión de elementos orgánicos y digitales"},{id:2,title:"Metamorfosis Cuántica",image:"/obra2.jpg",description:"Transformación de patrones naturales"},{id:3,title:"Sinergia Biológica",image:"/obra3.jpg",description:"Interacción entre tecnología y naturaleza"},{id:4,title:"Horizonte Sintético",image:"/obra4.jpg",description:"Una ventana al futuro donde la naturaleza y la tecnología crean un nuevo horizonte de posibilidades."},{id:5,title:"Ecosistema Dinámico",image:"/obra5.jpg",description:"Un sistema en constante cambio, que simula la coexistencia entre inteligencia artificial y procesos biológicos."},{id:6,title:"Luz Biofluida",image:"/obra6.jpg",description:"Explora cómo las luces líquidas pueden redefinir los límites entre lo físico y lo digital."}];return e.jsxs("section",{id:"gallery",className:"min-h-screen py-20 px-4",children:[e.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Galería"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto",children:i.map(t=>e.jsxs(s.div,{whileHover:{scale:1.05},className:"bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm",children:[e.jsxs("div",{className:"h-64 relative",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:t.title}),e.jsx("p",{className:"text-white/70",children:t.description})]})]},t.id))})]})}function y(){return e.jsxs("section",{id:"about",className:"min-h-screen py-20 px-4 relative overflow-hidden",children:[e.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-12",children:[e.jsxs(s.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},children:[e.jsx("h2",{className:"text-4xl font-bold mb-8",children:"Nuestra Visión"}),e.jsxs("div",{className:"space-y-6 text-lg",children:[e.jsx("p",{children:"FusionBioArt nace de la fascinación por el punto donde convergen la tecnología y la naturaleza. Somos un colectivo de artistas, científicos y tecnólogos unidos por la pasión de explorar nuevas formas de expresión artística."}),e.jsx("p",{children:"Utilizamos biotecnología avanzada y técnicas digitales para crear obras que desafían la percepción tradicional del arte, generando experiencias inmersivas únicas."})]}),e.jsxs("div",{className:"mt-12 grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"glass-effect p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Innovación"}),e.jsx("p",{children:"Fusionamos tecnologías emergentes con procesos biológicos naturales"})]}),e.jsxs("div",{className:"glass-effect p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Sostenibilidad"}),e.jsx("p",{children:"Comprometidos con prácticas artísticas ecológicamente responsables"})]})]})]}),e.jsx(s.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},className:"relative",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 h-full",children:[e.jsx(s.img,{src:"/about1.jpg",alt:"Proceso creativo",className:"w-full h-64 object-cover rounded-lg",whileHover:{scale:1.05}}),e.jsx(s.img,{src:"/about2.jpg",alt:"Instalación BioArt",className:"w-full h-64 object-cover rounded-lg mt-12",whileHover:{scale:1.05}}),e.jsx(s.img,{src:"/about3.jpg",alt:"Laboratorio creativo",className:"w-full h-64 object-cover rounded-lg",whileHover:{scale:1.05}}),e.jsx(s.div,{className:"glass-effect p-6 rounded-lg flex items-center",whileHover:{scale:1.05},children:e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"+500"}),e.jsx("p",{children:"Obras Creadas"})]})})]})})]}),e.jsxs("div",{className:"max-w-6xl mx-auto mt-20",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-center",children:"Nuestro Proceso"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{title:"Investigación",description:"Exploramos nuevas técnicas y tecnologías"},{title:"Experimentación",description:"Fusionamos elementos digitales y orgánicos"},{title:"Creación",description:"Materializamos visiones artísticas únicas"}].map((i,t)=>e.jsxs(s.div,{className:"glass-effect p-6 rounded-lg text-center",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[e.jsx("h4",{className:"text-xl font-semibold mb-3",children:i.title}),e.jsx("p",{children:i.description})]},t))})]})]})}function k(){const i=[{title:"Arte Digital NFT",description:"Colecciones exclusivas certificadas en blockchain",image:"/product1.jpg",features:["Certificación única","Trazabilidad","Edición limitada"]},{title:"Instalaciones Interactivas",description:"Experiencias inmersivas personalizadas",image:"/product2.jpg",features:["Sensores biométricos","Respuesta en tiempo real","Adaptación al espacio"]},{title:"Bioesculturas",description:"Fusión de organismos vivos y tecnología",image:"/product3.jpg",features:["Materiales orgánicos","Sistemas autorregulables","Monitoreo IoT"]}];return e.jsx("section",{id:"products",className:"py-20 px-4",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx(s.h2,{className:"text-4xl font-bold text-center mb-12",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},children:"Productos y Servicios"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:i.map((t,o)=>e.jsxs(s.div,{className:"glass-effect rounded-lg overflow-hidden",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:o*.2},whileHover:{scale:1.02},children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-48 object-cover"}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:t.title}),e.jsx("p",{className:"text-white/70 mb-4",children:t.description}),e.jsx("ul",{className:"space-y-2",children:t.features.map((l,a)=>e.jsxs("li",{className:"flex items-center",children:[e.jsx("span",{className:"w-2 h-2 bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] rounded-full mr-2"}),l]},a))})]})]},o))}),e.jsx(s.div,{className:"mt-16 text-center",initial:{opacity:0},whileInView:{opacity:1},children:e.jsx("a",{href:"#contact",className:"inline-block px-8 py-4 bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[#00f7ff]/50 transition-all",children:"Solicitar Información"})})]})})}function S(){const[i,t]=d.useState({name:"",email:"",service:"arte-digital",message:""}),o=l=>{l.preventDefault()};return e.jsx("section",{id:"contact",className:"py-20 px-4",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs(s.div,{className:"grid md:grid-cols-2 gap-12",initial:{opacity:0},whileInView:{opacity:1},children:[e.jsxs("div",{className:"space-y-8",children:[e.jsx("h2",{className:"text-4xl font-bold gradient-text",children:"Conectemos"}),e.jsx("p",{className:"text-lg text-white/80",children:"Transformemos tu visión en una experiencia artística única"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] flex items-center justify-center",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Email"}),e.jsx("p",{className:"text-white/70",children:"info@fusionbioart.com"})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] flex items-center justify-center",children:e.jsxs("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeWidth:"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),e.jsx("path",{strokeLinecap:"round",strokeWidth:"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Ubicación"}),e.jsx("p",{className:"text-white/70",children:"Digital Art District, Tech City"})]})]})]})]}),e.jsxs(s.form,{onSubmit:o,className:"glass-effect p-8 rounded-lg space-y-6",initial:{x:50,opacity:0},whileInView:{x:0,opacity:1},children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 font-medium",children:"Nombre"}),e.jsx("input",{type:"text",value:i.name,onChange:l=>t({...i,name:l.target.value}),className:"w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00f7ff] outline-none",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 font-medium",children:"Email"}),e.jsx("input",{type:"email",value:i.email,onChange:l=>t({...i,email:l.target.value}),className:"w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00f7ff] outline-none",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 font-medium",children:"Servicio"}),e.jsxs("select",{value:i.service,onChange:l=>t({...i,service:l.target.value}),className:"w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00f7ff] outline-none",children:[e.jsx("option",{value:"arte-digital",children:"Arte Digital"}),e.jsx("option",{value:"instalaciones",children:"Instalaciones Interactivas"}),e.jsx("option",{value:"bioesculturas",children:"Bioesculturas"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 font-medium",children:"Mensaje"}),e.jsx("textarea",{value:i.message,onChange:l=>t({...i,message:l.target.value}),className:"w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00f7ff] outline-none h-32",required:!0})]}),e.jsx(s.button,{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#00f7ff] to-[#ff4d00] rounded-lg font-semibold",whileHover:{scale:1.02},whileTap:{scale:.98},children:"Enviar Mensaje"})]})]})})})}function I(){const i=[{title:"FusionBioArt",links:[{name:"Sobre Nosotros",href:"#about"},{name:"Equipo",href:"#team"},{name:"Filosofía",href:"#philosophy"}]},{title:"Servicios",links:[{name:"Arte Digital",href:"#digital"},{name:"Instalaciones",href:"#installations"},{name:"NFTs",href:"#nft"}]},{title:"Recursos",links:[{name:"Blog",href:"#blog"},{name:"Newsletter",href:"#news"},{name:"Docs",href:"#docs"}]},{title:"Social",links:[{name:"Twitter",href:"#twitter"},{name:"Instagram",href:"#instagram"},{name:"LinkedIn",href:"#linkedin"}]}];return e.jsxs("footer",{className:"relative bg-black/90 backdrop-blur-lg overflow-hidden py-16",children:[e.jsx(s.div,{animate:{x:["120vw","-120vw"]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute top-0 md:top-[10%] -translate-y-1/2 z-0 w-full",children:e.jsx("img",{src:"/logo-footer.png",alt:"Logo",className:"w-96 h-96 md:w-[30vw] md:h-[30vw] object-contain opacity-20 hover:opacity-30 transition-opacity duration-300"})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",children:i.map((t,o)=>e.jsxs("div",{className:"glass-effect p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-bold mb-4 gradient-text",children:t.title}),e.jsx("ul",{className:"space-y-2",children:t.links.map((l,a)=>e.jsx("li",{children:e.jsx("a",{href:l.href,className:"text-white/70 hover:text-white transition-colors",children:l.name})},a))})]},o))}),e.jsx("div",{className:"mt-16 pt-8 border-t border-white/10 text-center",children:e.jsx("p",{className:"text-white/50",children:"© 2024 PanchoDev. Todos los derechos reservados."})})]})]})}function E(){return e.jsxs("div",{className:"min-h-screen bg-black text-white",children:[e.jsx(w,{}),e.jsx(v,{}),e.jsx(N,{}),e.jsx(y,{}),e.jsx(k,{}),e.jsx(S,{}),e.jsx(I,{})]})}b.createRoot(document.getElementById("root")).render(e.jsx(g.StrictMode,{children:e.jsx(E,{})}));
//# sourceMappingURL=index-BsA83MpN.js.map
