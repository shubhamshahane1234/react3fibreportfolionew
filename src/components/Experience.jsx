import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { AmbientLight } from "three";
import { useControls } from "leva";
import { Avatartwo } from "./Avatartwo";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Standing",
      options: [
        "Typing",
        "Falling",
        "Standing",
        "StandingGreeting",
        "blinking",
      ],
    },
  });

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Avatar /> */}
      <ambientLight intensity={1} />
      <group position={[0.5, -0.97, 0]} scale={1.04}>
        <Avatartwo animation={animation} />
        {/* <Avatar animation={animation} /> */}
      </group>

      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  );
};
