// src/App.jsx
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
 return (
   <div className="min-h-screen bg-black text-white">
     <Navbar />
     <Hero />
     <Gallery />
     <About />
     <Products />
     <Contact />
     <Footer />
   </div>
 );
}