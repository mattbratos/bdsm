"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import VintageButton from "./vintage-button";

const isMobile = () => {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

interface BoxWithEdgesProps {
  position: [number, number, number];
}

const BoxWithEdges = ({ position }: BoxWithEdgesProps) => {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhysicalMaterial
          color="#ff0000"
          roughness={0.2}
          metalness={0.9}
          transparent={true}
          opacity={0.95}
          transmission={0.2}
          clearcoat={1}
          emissive="#ff0000"
          emissiveIntensity={0.2}
        />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(0.5, 0.5, 0.5)]} />
        <lineBasicMaterial color="#ff3333" linewidth={2} />
      </lineSegments>
    </group>
  );
};

interface BoxLetterProps {
  letter: string;
  position: [number, number, number];
}

const BoxLetter = ({ letter, position }: BoxLetterProps) => {
  const group = useRef<THREE.Group>(null);

  const getLetterShape = (letter: string): number[][] => {
    const shapes: Record<string, number[][]> = {
      B: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
      ],
      R: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
      ],
      A: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
      ],
      T: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ],
      O: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      S: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
      ],
      D: [
        [1, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 0],
      ],
      E: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
      ],
      I: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
      G: [
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 1],
      ],
      N: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
      ],
      U: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      M: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
      ],
      K: [
        [1, 0, 0, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
      ],
      W: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
      ],
    };
    return shapes[letter] || [[1]];
  };

  const letterShape = getLetterShape(letter);

  return (
    <group ref={group} position={position}>
      {letterShape.map((row: number[], i: number) =>
        row.map((cell: number, j: number) => {
          if (cell) {
            const xOffset = j * 0.5; // Cubes touch each other
            return (
              <BoxWithEdges
                key={`${i}-${j}`}
                position={[xOffset, (4 - i) * 0.5, 0]}
              />
            );
          }
          return null;
        }),
      )}
    </group>
  );
};

const Scene = () => {
  const orbitControlsRef = useRef(null);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  const renderWord = (word: string, yPosition: number) => {
    const letterSpacing = 3; // Regular spacing between letters

    return (
      <group position={[-8, yPosition, 0]}>
        {word.split("").map((letter: string, index: number) => {
          // Add extra spacing after M in MOKOTOW
          const spacing =
            word === "MOKOTOW" && letter === "M"
              ? letterSpacing + 0.5
              : letterSpacing;

          return (
            <BoxLetter
              key={index}
              letter={letter}
              position={[index * spacing, 0, 0]}
            />
          );
        })}
      </group>
    );
  };

  return (
    <>
      <group rotation={[0, Math.PI / 8, 0]}>
        {renderWord("BRATOS", 6)}
        {renderWord("DESIGN", 3)}
        {renderWord("STUDIO", 0)}
        {renderWord("MOKOTOW", -3)}
      </group>
      <OrbitControls
        ref={orbitControlsRef}
        enableZoom
        enablePan
        enableRotate
        autoRotate
        autoRotateSpeed={0.5}
      />

      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <directionalLight
        position={[-5, -5, -5]}
        intensity={0.4}
        color="#ff0000"
      />

      <Environment
        files={
          isMobileDevice
            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download3-7FArHVIJTFszlXm2045mQDPzsZqAyo.jpg"
            : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dither_it_M3_Drone_Shot_equirectangular-jpg_San_Francisco_Big_City_1287677938_12251179%20(1)-NY2qcmpjkyG6rDp1cPGIdX0bHk3hMR.jpg"
        }
        background
      />
    </>
  );
};

export default function BG() {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Canvas camera={{ position: [20, 2, 20], fov: 60 }}>
        <Scene />
      </Canvas>
      <VintageButton />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
      `}</style>
    </div>
  );
}
