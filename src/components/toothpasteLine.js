import LineImg from "../assets/shape_line.png";
import "./toothpasteLine.css";

function ToothpasteLine() {
  const Line = document.createElement("img");

  Line.setAttribute("src", LineImg);
  Line.setAttribute("class", "line_style");

  return Line;
}

export default ToothpasteLine;
