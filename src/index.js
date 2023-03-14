import { GamePageHeader, GamePageBody } from "./pages/GamePage";
import "./pages/stylesheet.css";

function component() {
  const element = document.createElement("div");

  element.appendChild(GamePageHeader());
  element.appendChild(GamePageBody());

  return element;
}

document.body.appendChild(component());
