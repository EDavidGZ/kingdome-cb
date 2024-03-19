import { useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Bar from "../bar-menu/Bar";
import Swiper from "../assets/swiper/Swiper";
import Page from "./Page";


const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <div style={{ paddingLeft: ".5rem", paddingRight: ".5rem" }}>
        <Bar />
      </div>
      <div className="min-h-screen bg-gray-100 p-4">

        <Page />


        {/* <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.45}
            penumbra={3}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <OrbitControls />
        </Canvas> */}
      </div>
    </section>
  );
};

export default Home;
