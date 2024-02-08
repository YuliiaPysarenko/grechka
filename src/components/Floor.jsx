import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";

const options = {
  color: "#b79494",
  transparent: true,
};

export default function Floor() {
  const floorMaterial = new THREE.ShadowMaterial({
    fog: true,
    color: options.color,
    transparent: options.transparent,
  });

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

  return (
    <RigidBody type="fixed" friction={0.1} receiveShadow>
      <mesh
        material={floorMaterial}
        geometry={boxGeometry}
        position={[0, -0.25, 0]} // [0, -0.75, 0]
        scale={[30, 0.2, 30]}
        receiveShadow
        toneMapped={false}
        density={1}
        friction={1}
        restitution={1}
      />
    </RigidBody>
  );
}
