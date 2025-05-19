import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/Interface";
import Menu from "./components/Menu";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Html } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 20 }}>
        <color attach="background" args={["#f6f6f6"]} />
        <Suspense
          fallback={
            <>
              <Html center>
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
                  <div className="animate-spin rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
                  <div className="animate-spin rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
                </div>
              </Html>
            </>
          }
        >
          <ScrollControls pages={4}>
            <Experience />
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>

      <Menu />
    </>
  );
}

export default App;
