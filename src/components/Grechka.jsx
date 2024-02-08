import { useTexture } from "@react-three/drei";
import GrechkaItems from "./GrechkaItems";

export default function Grechka({ geometry }) {
  const bakedTextures = [
    useTexture("./model/grechka_map.jpg"),
    useTexture("./model/grechka_map2.jpg"),
    useTexture("./model/grechka_map3.jpg"),
  ];

  bakedTextures.forEach((element) => {
    element.flipY = false;
  });

  return (
    <group>
      <GrechkaItems
        count={250}
        geometry={geometry}
        texture={bakedTextures[0]}
        id={0}
      />
      <GrechkaItems
        count={150}
        geometry={geometry}
        texture={bakedTextures[1]}
        ior={1}
        id={1}
      />
      <GrechkaItems
        count={150}
        geometry={geometry}
        texture={bakedTextures[2]}
        ior={0.9}
        id={2}
      />
      <GrechkaItems
        count={60}
        geometry={geometry}
        texture={bakedTextures[2]}
        ior={0.85}
        id={3}
        color={"#795d46"}
      />
    </group>
  );
}
