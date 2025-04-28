import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Environment,
  useScroll,
  Points,
  PointMaterial,
  Point,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; // you forgot this, needed for animation per frame
import { useRef, useState } from "react";
import { Avatartwo } from "./Avatartwo";
import { Particle } from "./Particle";
import { BufferGeometry } from "three";

export const Experience = () => {
  const scroll = useScroll(); // useScroll hook
  const groupRef = useRef();

  const [animation, setAnimation] = useState("Standing"); // manage animation manually

  useFrame(() => {
    const offset = scroll.offset; // 0 to 1 value

    // Logic: Based on scroll, change animation
    if (offset < 0.2) {
      setAnimation("Standing");
    } else if (offset >= 0.2 && offset < 0.6) {
      setAnimation("Falling");
    } else {
      setAnimation("Standing");
    }
  });
  const points = new Float32Array(1000 * 3);
  for (let i = 0; i < points.length; i++) {
    points[i] = (Math.random() - 0.5) * 1;
  }
  return (
    <>
      <ambientLight intensity={0.1} />

      <group ref={groupRef} position={[0.5, -0.97, 0]} scale={1.04}>
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        {/* <Environment preset="sunset" /> */}

        <Float>
          <mesh position={[1, -5, -15]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.5}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>

        <Float>
          <mesh scale={[2, 2, 2]} position={[3, -5, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"cyan"}
            />
          </mesh>
        </Float>

        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[2, -5, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"yellow"}
            />
          </mesh>
        </Float>
      </group>

      {/* Avatartwo with dynamic animation */}
      <group position={[0.5, -0.97, 0]} scale={1.04}>
        <Avatartwo animation={animation} />
      </group>
      <group>
        <Particle />
      </group>
    </>
  );
};
