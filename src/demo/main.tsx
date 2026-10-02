import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Showcase from "./Showcase";
import "../styles/index.css";
import "../styles/showcase.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Showcase />
  </StrictMode>,
);
