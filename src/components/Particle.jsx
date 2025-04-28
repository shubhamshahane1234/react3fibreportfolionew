import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

export const Particle = () => {
  const ref = useRef();

  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 500; i++) {
      positions.push(
        (Math.random() - 0.5) * 10, // x
        Math.random() * 10, // y
        (Math.random() - 0.5) * 10 // z
      );
    }
    return new Float32Array(positions);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= delta * 2; // move Y down
        if (positions[i] < -5) positions[i] = 5; // reset to top
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="black" size={1} sizeAttenuation transparent />
    </Points>
  );
};
