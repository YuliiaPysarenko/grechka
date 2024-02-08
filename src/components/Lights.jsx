// import { useControls } from "leva";
import { useRef } from "react";

export default function Lights() {
  const innerLight1 = useRef();

  // const controls = useControls({
  //   light1: [-1, 3, 5], // 1, 3, 2
  //   intensity1: 3, // 14
  //   intensity4: 3.7
  // });

  return (
    <>
      <directionalLight
        castShadow
        ref={innerLight1}
        position={[-1, 3, 5]}
        intensity={3}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
      />
      <ambientLight intensity={3.7} />
    </>
  );
}
