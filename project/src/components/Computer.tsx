import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface ComputerProps {
  isOn: boolean;
}

function ComputerModel({ isOn }: { isOn: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Group>(null);
  const [bootPhase, setBootPhase] = useState(0);

  useEffect(() => {
    if (isOn) {
      const timer = setTimeout(() => {
        setBootPhase((prev) => Math.min(prev + 1, 3));
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setBootPhase(0);
    }
  }, [isOn, bootPhase]);

  useFrame(({ clock, mouse }) => {
    if (meshRef.current && groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (mouse.x * Math.PI) / 6,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (mouse.y * Math.PI) / 6,
        0.05
      );
    }

    if (textRef.current && isOn) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.02;
    }
  });

  const getBootText = () => {
    switch (bootPhase) {
      case 1:
        return "System Initializing...";
      case 2:
        return "Loading Profile...";
      case 3:
        return (
          <group>
            <Text
              position={[0, 0.5, 0.1]}
              fontSize={0.25}
              color="#6366f1"
              anchorX="center"
              anchorY="middle"
              material-toneMapped={false}
              outlineWidth={0.02}
              outlineColor="#312e81"
            >
              Hi, I'm Periyanan
            </Text>
            <Text
              position={[0, 0, 0.1]}
              fontSize={0.2}
              color="#818cf8"
              anchorX="center"
              anchorY="middle"
              material-toneMapped={false}
              outlineWidth={0.02}
              outlineColor="#312e81"
            >
              Software Developer
            </Text>
            <Text
              position={[0, -0.5, 0.1]}
              fontSize={0.15}
              color="#a5b4fc"
              anchorX="center"
              anchorY="middle"
              material-toneMapped={false}
              outlineWidth={0.02}
              outlineColor="#312e81"
            >
              SDE Intern @Hypnotism
            </Text>
          </group>
        );
      default:
        return "";
    }
  };

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, 0.5, 0]}>
        <boxGeometry args={[4, 2.5, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[3.8, 2.3]} />
          <meshStandardMaterial 
            emissive={isOn ? "#312e81" : "#000000"} 
            emissiveIntensity={isOn ? 0.8 : 0}
          />
          {isOn && (
            <group ref={textRef}>
              {getBootText()}
            </group>
          )}
        </mesh>
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

export function Computer({ isOn }: ComputerProps) {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight 
          position={[-10, 10, -10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1.5} 
          castShadow
        />
        <ComputerModel isOn={isOn} />
      </Canvas>
    </div>
  );
}