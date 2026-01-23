// "use client";
// import * as THREE from 'three'
// import { useMemo, useState, useRef, useLayoutEffect } from 'react' // <--- Added useLayoutEffect
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Image, Environment, OrbitControls } from '@react-three/drei'
// import { easing } from 'maath'

// // --- CONFIGURATION ---
// const NUM_IMAGES = 280;         
// const RADIUS = 13.4;              
// const IMAGE_SIZE = [2.1, 2.1];  
// const MANUAL_BASE_PATH = "/gallery";

// // --- FIBONACCI SPHERE ALGORITHM ---
// const generateSpherePositions = (count: number, radius: number) => {
//   const points = [];
//   const phi = Math.PI * (3 - Math.sqrt(5)); 

//   for (let i = 0; i < count; i++) {
//     const y = 1 - (i / (count - 1)) * 2; 
//     const radiusAtY = Math.sqrt(1 - y * y);
//     const theta = phi * i; 

//     const x = Math.cos(theta) * radiusAtY;
//     const z = Math.sin(theta) * radiusAtY;

//     points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
//   }
//   return points;
// };

// function GalleryItem({ position, url, onSelect }: { position: THREE.Vector3, url: string, onSelect: (url: string) => void }) {
//   const ref = useRef<THREE.Group>(null!);
//   const [hovered, setHover] = useState(false);

//   // 🔴 FIX: Use useLayoutEffect instead of useMemo
//   // This ensures 'ref.current' exists before we try to rotate it
//   useLayoutEffect(() => {
//     if (ref.current) {
//       ref.current.lookAt(0, 0, 0); 
//     }
//   }, [position]);

//   useFrame((state, delta) => {
//     const scale = hovered ? 1.15 : 1;
//     easing.damp3(ref.current.scale, [scale, scale, scale], 0.1, delta);
//   });

//   return (
//     <group position={position} ref={ref}>
//       <group rotation={[0, Math.PI, 0]}>
//         <Image 
//           url={url} 
//           scale={IMAGE_SIZE as [number, number]} 
//           transparent
//           side={THREE.DoubleSide} 
//           opacity={1}
//           radius={0.5} 
//           onPointerOver={() => setHover(true)}
//           onPointerOut={() => setHover(false)}
//           onClick={(e) => {
//             e.stopPropagation();
//             onSelect(url);
//           }}
//           color={hovered ? "#ffffff" : "#d4d4d4"} 
//         />
//       </group>
//     </group>
//   );
// }

// function Sphere({ onSelect }: { onSelect: (url: string) => void }) {
//   const positions = useMemo(() => generateSpherePositions(NUM_IMAGES, RADIUS), []);
//   const imageUrls = useMemo(() => Array.from({ length: NUM_IMAGES }, (_, i) => 
//     `${MANUAL_BASE_PATH}/${i + 1}.jpg`
//   ), []);

//   return (
//     <group>
//       {/* OPAQUE CORE */}
//       <mesh>
//         <sphereGeometry args={[RADIUS - 0.5, 64, 64]} />
//         <meshBasicMaterial color="#02020a" />
//       </mesh>

//       {positions.map((pos, i) => (
//         <GalleryItem 
//           key={i} 
//           position={pos} 
//           url={imageUrls[i]} 
//           onSelect={onSelect} 
//         />
//       ))}
//     </group>
//   );
// }

// export default function SphericalGallery({ onSelect }: { onSelect: (url: string) => void }) {
//   return (
//     <div className="w-full h-screen bg-[#02020a] cursor-grab active:cursor-grabbing">
//       <Canvas camera={{ position: [0, 0, 26], fov: 35 }}> 
//         <fog attach="fog" args={['#02020a', 22, 35]} /> 
//         <ambientLight intensity={1.1} />
//         <Environment preset="city" />
        
//         <Sphere onSelect={onSelect} />
        
//         <OrbitControls 
//           enableZoom={false} 
//           enablePan={false} 
//           enableDamping={true}
//           dampingFactor={0.05}
//           autoRotate={false} 
          
//           minAzimuthAngle={-Math.PI / 4} 
//           maxAzimuthAngle={Math.PI / 4}  
//           minPolarAngle={Math.PI / 2.5}  
//           maxPolarAngle={Math.PI / 1.6}    
//         />
//       </Canvas>
//     </div>
//   );
// }







// "use client";
// import * as THREE from 'three'
// import { useMemo, useState, useRef, useLayoutEffect } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Image, Environment, OrbitControls } from '@react-three/drei'
// import { easing } from 'maath'

// // --- CONFIGURATION ---
// const NUM_IMAGES = 280;         
// const RADIUS = 13.4;              
// const IMAGE_SIZE = [2.1, 2.1];  
// const MANUAL_BASE_PATH = "/gallery";
// const ROWS = 12; // <--- NEW: Controls how many horizontal rings (Higher = more rows)

// function GalleryItem({ position, url, onSelect }: { position: THREE.Vector3, url: string, onSelect: (url: string) => void }) {
//   const ref = useRef<THREE.Group>(null!);
//   const [hovered, setHover] = useState(false);

//   // Rotate panel to face the center of the sphere
//   useLayoutEffect(() => {
//     if (ref.current) {
//       ref.current.lookAt(0, 0, 0); 
//     }
//   }, [position]);

//   useFrame((state, delta) => {
//     const scale = hovered ? 1.15 : 1;
//     easing.damp3(ref.current.scale, [scale, scale, scale], 0.1, delta);
//   });

//   return (
//     <group position={position} ref={ref}>
//       {/* We rotate the inner group by 180 deg (Math.PI) on Y 
//          because lookAt points the Z-axis, but Images often face -Z 
//       */}
//       <group rotation={[0, Math.PI, 0]}>
//         <Image 
//           url={url} 
//           scale={IMAGE_SIZE as [number, number]} 
//           transparent
//           side={THREE.DoubleSide} 
//           opacity={1}
//           radius={0.5} 
//           onPointerOver={() => setHover(true)}
//           onPointerOut={() => setHover(false)}
//           onClick={(e) => {
//             e.stopPropagation();
//             onSelect(url);
//           }}
//           color={hovered ? "#ffffff" : "#d4d4d4"} 
//         />
//       </group>
//     </group>
//   );
// }

// function Sphere({ onSelect }: { onSelect: (url: string) => void }) {
//   // --- 1. HORIZONTAL GRID ALGORITHM ---
//   const positions = useMemo(() => {
//     const temp = [];
//     const imagesPerRow = Math.ceil(NUM_IMAGES / ROWS);

//     for (let i = 0; i < NUM_IMAGES; i++) {
//       // Calculate Row and Column index
//       const row = Math.floor(i / imagesPerRow);
//       const col = i % imagesPerRow;

//       // Calculate Latitude (Phi) - Vertical Angle
//       // We start at 0.15 PI and end at 0.85 PI to avoid bunching images at the very top/bottom poles
//       const phi = Math.PI * 0.15 + (Math.PI * 0.7 * (row / (ROWS - 1)));

//       // Calculate Longitude (Theta) - Horizontal Angle (0 to 2PI)
//       const theta = 2 * Math.PI * (col / imagesPerRow);

//       // Convert Spherical to Cartesian (X, Y, Z)
//       const x = RADIUS * Math.sin(phi) * Math.cos(theta);
//       const y = RADIUS * Math.cos(phi);
//       const z = RADIUS * Math.sin(phi) * Math.sin(theta);

//       temp.push(new THREE.Vector3(x, y, z));
//     }
//     return temp;
//   }, []);

//   const imageUrls = useMemo(() => Array.from({ length: NUM_IMAGES }, (_, i) => 
//     `${MANUAL_BASE_PATH}/${i + 1}.jpg`
//   ), []);

//   return (
//     <group>
//       {/* OPAQUE CORE */}
//       <mesh>
//         <sphereGeometry args={[RADIUS - 0.5, 64, 64]} />
//         <meshBasicMaterial color="#02020a" />
//       </mesh>

//       {positions.map((pos, i) => (
//         <GalleryItem 
//           key={i} 
//           position={pos} 
//           url={imageUrls[i]} 
//           onSelect={onSelect} 
//         />
//       ))}
//     </group>
//   );
// }

// export default function SphericalGallery({ onSelect }: { onSelect: (url: string) => void }) {
//   return (
//     <div className="w-full h-screen bg-[#02020a] cursor-grab active:cursor-grabbing">
//       <Canvas camera={{ position: [0, 0, 26], fov: 35 }}> 
//         <fog attach="fog" args={['#02020a', 22, 35]} /> 
//         <ambientLight intensity={1.1} />
//         <Environment preset="city" />
        
//         <Sphere onSelect={onSelect} />
        
//         <OrbitControls 
//           enableZoom={false} 
//           enablePan={false} 
//           enableDamping={true}
//           dampingFactor={0.05}    // <--- Turned autoRotate ON for better effect with horizontal lines
//           autoRotate={false} 
          
//           minAzimuthAngle={-Math.PI / 4} 
//           maxAzimuthAngle={Math.PI / 4}  
//           minPolarAngle={Math.PI / 2.5}  
//           maxPolarAngle={Math.PI / 1.6}
//         />
//       </Canvas>
//     </div>
//   );
// }






"use client";
import * as THREE from 'three'
import { useMemo, useState, useRef, useLayoutEffect, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, OrbitControls } from '@react-three/drei'
import { easing } from 'maath'

// --- CONSTANTS ---
const MANUAL_BASE_PATH = "/gallery";

// --- CUSTOM HOOK FOR RESPONSIVENESS ---
function useGalleryConfig() {
  const [config, setConfig] = useState({
    count: 280,      // Desktop: More images
    radius: 13.4,    // Desktop: Larger sphere
    rows: 12,        // Desktop: More rows
    imageSize: [2.1, 2.1],
    cameraZ: 26      // Desktop: Closer camera
  });

  useEffect(() => {
    const updateConfig = () => {
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        setConfig({
          count: 80,          // Mobile: Fewer images for performance & cleanup
          radius: 10,         // Mobile: Smaller sphere to fit screen
          rows: 6,            // Mobile: Fewer rows looks cleaner
          imageSize: [2.5, 2.5], // Mobile: Slightly bigger images to be tappable
          cameraZ: 38         // Mobile: Move camera back to fit the sphere in narrow width
        });
      } else {
        setConfig({
          count: 280,
          radius: 13.4,
          rows: 12,
          imageSize: [2.1, 2.1],
          cameraZ: 26
        });
      }
    };

    // Run on mount
    updateConfig();

    // Run on resize
    window.addEventListener('resize', updateConfig);
    return () => window.removeEventListener('resize', updateConfig);
  }, []);

  return config;
}

function GalleryItem({ position, url, size, onSelect }: { position: THREE.Vector3, url: string, size: number[], onSelect: (url: string) => void }) {
  const ref = useRef<THREE.Group>(null!);
  const [hovered, setHover] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.lookAt(0, 0, 0); 
    }
  }, [position]);

  useFrame((state, delta) => {
    const scale = hovered ? 1.2 : 1;
    easing.damp3(ref.current.scale, [scale, scale, scale], 0.1, delta);
  });

  return (
    <group position={position} ref={ref}>
      <group rotation={[0, Math.PI, 0]}>
        <Image 
          url={url} 
          scale={size as [number, number]} 
          transparent
          side={THREE.DoubleSide} 
          opacity={1}
          radius={0.1} 
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(url);
          }}
          color={hovered ? "#ffffff" : "#c0c0c0"} 
        />
      </group>
    </group>
  );
}

function Sphere({ config, onSelect }: { config: any, onSelect: (url: string) => void }) {
  const { count, radius, rows, imageSize } = config;

  // --- RECALCULATE POSITIONS WHEN CONFIG CHANGES ---
  const positions = useMemo(() => {
    const temp = [];
    const imagesPerRow = Math.ceil(count / rows);

    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / imagesPerRow);
      const col = i % imagesPerRow;

      // Adjust Phi range based on device to avoid bunching
      const phi = Math.PI * 0.15 + (Math.PI * 0.7 * (row / (rows - 1)));
      const theta = 2 * Math.PI * (col / imagesPerRow);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, [count, radius, rows]);

  // Generate Image URLs based on the count
  const imageUrls = useMemo(() => Array.from({ length: count }, (_, i) => 
    `${MANUAL_BASE_PATH}/${(i % 20) + 1}.jpg` // Cycles through 1-20 images (safe fallback)
  ), [count]);

  return (
    <group>
      {/* OPAQUE CORE */}
      <mesh>
        <sphereGeometry args={[radius - 0.5, 64, 64]} />
        <meshBasicMaterial color="#02020a" />
      </mesh>

      {positions.map((pos, i) => (
        <GalleryItem 
          key={i} 
          position={pos} 
          url={imageUrls[i]} 
          size={imageSize}
          onSelect={onSelect} 
        />
      ))}
    </group>
  );
}

export default function SphericalGallery({ onSelect }: { onSelect: (url: string) => void }) {
  const config = useGalleryConfig();

  return (
    <div className="w-full h-screen bg-[#02020a] cursor-grab active:cursor-grabbing">
      {/* Key forces re-render when cameraZ changes to update initial position immediately */}
      <Canvas key={config.cameraZ} camera={{ position: [0, 0, config.cameraZ], fov: 35 }}> 
        <fog attach="fog" args={['#02020a', config.cameraZ - 5, config.cameraZ + 10]} /> 
        <ambientLight intensity={1.1} />
        <Environment preset="city" />
        
        <Sphere config={config} onSelect={onSelect} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={false} 
          
          minAzimuthAngle={-Math.PI / 4} 
          maxAzimuthAngle={Math.PI / 4}  
          minPolarAngle={Math.PI / 4}  
          maxPolarAngle={Math.PI / 1.5}    
        />
      </Canvas>
    </div>
  );
}