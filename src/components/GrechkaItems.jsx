import { InstancedRigidBodies } from "@react-three/rapier";
// import { ThreeEvent } from "@react-three/fiber";
import { useState, useEffect, useMemo, useRef } from "react";

export default function GrechkaItems({
  count = 50,
  geometry,
  texture,
  ior = 0.85,
  color = "",
  id = 0,
}) {
  const items = useRef();

  const instances = useMemo(() => {
    const instances = [];
    for (let i = 0; i < count; i++) {
      instances.push({
        key: "instance" + id + i,
        position: [
          8 + (Math.random() - 0.5) * 8,
          35 + 8.2 * i,
          -8 + (Math.random() - 0.5) * 5,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      });
    }
    return instances;
  });

  const handleClickInstance = (e) => {
    console.log(items.current);
    if (items.current) {
      items.current;
      // .at(e.instanceId!)!
      // .applyTorqueImpulse({ x: 0, y: 100, z: 0 }, true);
    }
  };

  useEffect(() => {
    if (items.current) {
      items.current.forEach((body) => {
        body.applyImpulse(
          {
            x: -Math.random() * 5,
            y: Math.random() * 5,
            z: -Math.random() * 5,
          },
          true
        );
      });
    }
  }, []);

  return (
    <group>
      <InstancedRigidBodies
        instances={instances}
        ref={items}
        colliders={"hull"}
        shape={"cone"}
        scale={0.07}
        type={"dynamic"}
        friction={1}
        restitution={0.8}
        density={1}
        linearDamping={1.1}
        canSleep={true}
      >
        <instancedMesh
          castShadow
          args={[geometry, null, count]}
          // geometry={geometry}
          onClick={(e) => console.log(1)}
        >
          <meshPhysicalMaterial
            map={texture}
            transmissionMap={texture}
            castShadow
            receiveShadow
            reflectivity={0.8}
            lightMapIntensity={0.3}
            ior={ior}
            color={color}
            transparent={true}
          />
        </instancedMesh>
      </InstancedRigidBodies>
    </group>
  );
}
