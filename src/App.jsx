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
                <div class="flex-col gap-4 w-full flex items-center justify-center">
                  <div class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                    <div class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                  </div>
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
