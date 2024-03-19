// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useState } from "react";
// import { OrbitControls } from "@react-three/drei";
import Cubes from "./3d-elements/Cubes";
import '../index.css'


// const Cube = ({ position, size, color }) => {
//   const ref = useRef();
//   const [clicked, click] = useState(false);

//   useFrame((state, delta) => {
//     ref.current.rotation.x += delta / 2;
//     ref.current.rotation.y += delta * 2;
//     ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 2;
//   });

//   return (
//     <mesh
//       position={position}
//       ref={ref}
//       scale={clicked ? 1.4 : 1}
//       onClick={(event) => click(!clicked)}
//     >
//       <boxGeometry args={size} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// };

// const Sphere = ({ position, size, color }) => {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={size} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// };

const SignIn = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }} className="forms-sign mt-6">
      <div style={{width:"50%"}}>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
    </div>      </div>
      <Cubes style={{width:"50%"}}/>
    </div>
  );
};

export default SignIn;
