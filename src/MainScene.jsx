import { useRef } from "react";
import { Physics } from "@react-three/rapier";
import { Floor, Grechka, Jar, Lights, Quote } from "./components";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const deviceWidth = document.documentElement.clientWidth;

const camera = {
  fov: deviceWidth > 1024 ? 15 : 29,
  far: 500,
  position: deviceWidth > 1024 ? [8, 5, 8] : [8, 5, 8],
};

export default function MainScene() {
  const canvas = useRef();
  const { nodes } = useGLTF("./model/grechka.glb");

  return (
    <Canvas shadows ref={canvas} camera={camera}>
      <Lights />
      <Quote />
      <Physics
        gravity={[0, -9.81, 0]}
        // debug
      >
        <group>
          <Grechka geometry={nodes.Grechka.children[0].geometry} />
          {/* <Jar
            geometry={nodes.Grechka.children[0].geometry}
            material={nodes.Grechka.children[0].material}
          /> */}
          <Floor />
        </group>
      </Physics>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
