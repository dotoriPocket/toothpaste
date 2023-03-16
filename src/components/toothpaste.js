import toothpasteSrc from "../assets/shape_toothpaste.png";
import ToothpasteLine from "./toothpasteLine";
import "./toothpaste.css";
import "./toothpasteLine.css";

function ToothPaste() {
  const toothpasteContainer = document.createElement("div");
  const toothpasteImg = document.createElement("img");
  const toothpasteLine = ToothpasteLine();

  toothpasteImg.setAttribute("src", toothpasteSrc);
  toothpasteImg.setAttribute("class", "toothpaste_style");
  toothpasteContainer.appendChild(toothpasteImg);
  toothpasteContainer.appendChild(toothpasteLine);

  let interval = -1;
  let left = -587;

  const MouseDown = function mouseDownHandler() {
    interval = setInterval(() => {
      left += 20;
      if (left > 430) {
        toothpasteLine.style.left = `${430}px`;
      } else {
        toothpasteLine.style.left = `${left}px`;
      }
    }, 50);
  };

  const MouseUp = function mouseUpHandler() {
    clearInterval(interval);
  };

  toothpasteImg.addEventListener("mousedown", MouseDown);
  toothpasteImg.addEventListener("mouseup", MouseUp);

  return toothpasteContainer;
}

export default ToothPaste;
