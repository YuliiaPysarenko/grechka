import { useRef } from "react";
import { useTranslation } from "react-i18next";

import translations from "../services/i18n/locales/uk/translation.json";
import { Text } from "@react-three/drei";

const deviceWidth = document.documentElement.clientWidth;

function getQuoteNumber() {
  const quantity = Object.keys(translations.quotes)
    ? Object.keys(translations.quotes).length
    : 1;
  return Math.floor(Math.random() * quantity);
}

export default function Quote() {
  const { t } = useTranslation();

  const text = useRef();

  return (
    <Text
      ref={text}
      scale={0.17}
      font="./fonts/BadScript-Regular.ttf"
      maxWidth={13}
      lineHeight={1.2}
      textAlign="left"
      position={deviceWidth > 1024 ? [-1.25, 0.45, 0.8] : [0.25, 1.85, 0.8]}
      rotation={[-0.44, 0.78, 0.3]}
      color={"#131313"}
    >
      {t(`quotes.${getQuoteNumber()}`)}
      <meshBasicMaterial toneMapped={false} />
    </Text>
  );
}
