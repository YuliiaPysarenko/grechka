import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
// import { useControls } from "leva";

const options = {
  thickness: 0.3,
  transmission: 1,
  envMapIntensity: 1.2,
  roughness: 0.1,
  opacity: 0.1,
};

export default function Jar({ geometry, material, nodes }) {
  // const settings = {
  //   thickness: 0.1,
  //   ior: 1,
  //   transmission: 0.5,
  //   roughness: 0.5,
  //   clearcoat: 0.8,
  //   metalness: 0.5,
  // };

  // nodes.Cylinder.material.thickness = 0.1;
  // nodes.Cylinder.material.ior = 1;
  // nodes.Cylinder.material.transmission = 0.5;
  // nodes.Cylinder.material.roughness = 0.5;
  // nodes.Cylinder.material.clearcoat = 0.8;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const eulerRotation = new THREE.Euler(0, time * 3, 0);
    const quaternionRotation = new THREE.Quaternion();
  });

  return (
    <group>
      {/* <ConvexHullCollider args={[0.2, 0.5, 0.75]}> */}

      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={1}
        density={1}
        friction={0.9}
        castShadow
        receiveShadow
      >
        <mesh
          onClick={(e) => console.log(e)}
          geometry={geometry}
          position={[0, -0.65, 0]}
          // position={params.position1}
          material={material}
          scale={0.5}
          castShadow
          receiveShadow
          reflectivity={0.3}
        />
      </RigidBody>

      {/* </ConvexHullCollider> */}
      {/* <CapsuleCollider args={[0.2, 0.5, 0.75]} /> */}
      {/* <HeightfieldCollider args={[1, 1, [2, 3, 3], {x: 1, y: 1, z: 1}]} /> */}

      {/* <CylinderCollider
        args={[0.2, 0.5, 0.75]}
        position={[0, -0.79, 0]}
        density={1}
      /> */}

      {/* <CylinderCollider args={[0.05, 0.5, 0.1]} position={[0, -0.72, 0]} /> */}
    </group>
  );
}
