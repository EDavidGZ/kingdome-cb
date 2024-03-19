import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";

const Cube = ({ position, size, color }) => {
  const ref = useRef();
  const [clicked, click] = useState(false);
  const [hovered, hover] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 1;
    ref.current.rotation.y += delta * 1;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      scale={clicked ? 1.4 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={hovered ? "#b97df5" : color}/>
    </mesh>
  );
};


const Cubes = () => {
  return (
    <div style={{ width: "45%", height: "600px", cursor:"-moz-grab" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={Math.PI / 2} />

        <directionalLight position={[0, 0, 2]} />

        <Cube position={[1, 0, 0]} color={"skyblue"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"purple"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"hotpink"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"red"} size={[1, 1, 1]} />
        <OrbitControls />

      </Canvas>
    </div>
  );
};

export default Cubes;
