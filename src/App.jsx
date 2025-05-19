import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/Interface";
import Menu from "./components/Menu";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 20 }}>
        <color attach="background" args={["#f6f6f6"]} />
        <ScrollControls pages={4}>
          <Experience />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu />
    </>
  );
}

export default App;
