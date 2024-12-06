// src/components/Background.jsx
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function Background() {
 const mountRef = useRef(null);
 
 useEffect(() => {
   const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   const renderer = new THREE.WebGLRenderer({ 
     alpha: true, 
     antialias: true,
     powerPreference: "high-performance"
   });
   
   renderer.setSize(window.innerWidth, window.innerHeight);
   renderer.setClearColor(0x000000, 0.1);
   mountRef.current.appendChild(renderer.domElement);
   
   const geometry = new THREE.TorusGeometry(15, 4, 32, 100);
   const material = new THREE.ShaderMaterial({
     uniforms: {
       time: { value: 0 },
       color1: { value: new THREE.Color(0x00f7ff) },
       color2: { value: new THREE.Color(0xff4d00) }
     },
     vertexShader: `
       varying vec2 vUv;
       uniform float time;
       void main() {
         vUv = uv;
         vec3 pos = position;
         pos.x += sin(pos.z * 0.3 + time) * 0.8;
         pos.y += cos(pos.x * 0.3 + time) * 0.8;
         gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
       }
     `,
     fragmentShader: `
       uniform vec3 color1;
       uniform vec3 color2;
       varying vec2 vUv;
       uniform float time;
       void main() {
         vec3 color = mix(color1, color2, sin(vUv.x * 10.0 + time) * 0.5 + 0.5);
         gl_FragColor = vec4(color, 0.8);
       }
     `
   });
   
   const torus = new THREE.Mesh(geometry, material);
   scene.add(torus);
   camera.position.z = 40;
   
   const animate = () => {
     requestAnimationFrame(animate);
     material.uniforms.time.value += 0.01;
     torus.rotation.x += 0.001;
     torus.rotation.y += 0.002;
     renderer.render(scene, camera);
   };
   
   animate();
   
   const handleResize = () => {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(window.innerWidth, window.innerHeight);
   };
   
   window.addEventListener('resize', handleResize);
   
   return () => {
     window.removeEventListener('resize', handleResize);
     mountRef.current?.removeChild(renderer.domElement);
   };
 }, []);
 
 return <div ref={mountRef} className="fixed inset-0" style={{ zIndex: -1 }} />;
}