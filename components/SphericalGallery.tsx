"use client";
import * as THREE from 'three'
import { useMemo, useState, useRef, useLayoutEffect } from 'react' // <--- Added useLayoutEffect
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, OrbitControls } from '@react-three/drei'
import { easing } from 'maath'

// --- CONFIGURATION ---
const NUM_IMAGES = 280;         
const RADIUS = 13.4;              
const IMAGE_SIZE = [2.1, 2.1];  
const MANUAL_BASE_PATH = "/gallery";

// --- FIBONACCI SPHERE ALGORITHM ---
const generateSpherePositions = (count: number, radius: number) => {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); 

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; 
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i; 

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return points;
};

function GalleryItem({ position, url, onSelect }: { position: THREE.Vector3, url: string, onSelect: (url: string) => void }) {
  const ref = useRef<THREE.Group>(null!);
  const [hovered, setHover] = useState(false);

  // 🔴 FIX: Use useLayoutEffect instead of useMemo
  // This ensures 'ref.current' exists before we try to rotate it
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.lookAt(0, 0, 0); 
    }
  }, [position]);

  useFrame((state, delta) => {
    const scale = hovered ? 1.15 : 1;
    easing.damp3(ref.current.scale, [scale, scale, scale], 0.1, delta);
  });

  return (
    <group position={position} ref={ref}>
      <group rotation={[0, Math.PI, 0]}>
        <Image 
          url={url} 
          scale={IMAGE_SIZE as [number, number]} 
          transparent
          side={THREE.DoubleSide} 
          opacity={1}
          radius={0.5} 
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(url);
          }}
          color={hovered ? "#ffffff" : "#d4d4d4"} 
        />
      </group>
    </group>
  );
}

function Sphere({ onSelect }: { onSelect: (url: string) => void }) {
  const positions = useMemo(() => generateSpherePositions(NUM_IMAGES, RADIUS), []);
  const imageUrls = useMemo(() => Array.from({ length: NUM_IMAGES }, (_, i) => 
    `${MANUAL_BASE_PATH}/${i + 1}.jpg`
  ), []);

  return (
    <group>
      {/* OPAQUE CORE */}
      <mesh>
        <sphereGeometry args={[RADIUS - 0.5, 64, 64]} />
        <meshBasicMaterial color="#02020a" />
      </mesh>

      {positions.map((pos, i) => (
        <GalleryItem 
          key={i} 
          position={pos} 
          url={imageUrls[i]} 
          onSelect={onSelect} 
        />
      ))}
    </group>
  );
}

export default function SphericalGallery({ onSelect }: { onSelect: (url: string) => void }) {
  return (
    <div className="w-full h-screen bg-[#02020a] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 26], fov: 35 }}> 
        <fog attach="fog" args={['#02020a', 22, 35]} /> 
        <ambientLight intensity={1.1} />
        <Environment preset="city" />
        
        <Sphere onSelect={onSelect} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={false} 
          
          minAzimuthAngle={-Math.PI / 4} 
          maxAzimuthAngle={Math.PI / 4}  
          minPolarAngle={Math.PI / 2.5}  
          maxPolarAngle={Math.PI / 1.6}    
        />
      </Canvas>
    </div>
  );
}