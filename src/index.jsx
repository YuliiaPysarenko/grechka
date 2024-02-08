import "./style.css";
import ReactDOM from "react-dom/client";
import MainScene from "./MainScene.jsx";
import { StrictMode } from "react";

import './services/i18n/config.js';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <MainScene />
  </StrictMode>
);
