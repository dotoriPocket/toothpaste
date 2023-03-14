import toothpasteSrc from "../assets/shape_toothpaste.png";
import ToothpasteLine from "./toothpasteLine";
import "./toothpaste.css";

function ToothPaste() {
  const toothpasteMerge = document.createElement("div");
  const toothpasteImg = document.createElement("img");

  toothpasteImg.setAttribute("src", toothpasteSrc);
  toothpasteImg.setAttribute("class", "toothpaste_style");
  toothpasteMerge.appendChild(toothpasteImg);
  toothpasteMerge.appendChild(ToothpasteLine());

  return toothpasteMerge;
}

export default ToothPaste;
