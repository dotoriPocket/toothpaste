import goalImg from "../assets/shape_goal.png";
import "./goal.css";

function GoalArea() {
  const goalSet = document.createElement("div");
  const goal = document.createElement("img");
  const goalText = document.createElement("p");

  goalSet.setAttribute("class", "goal_position");

  goal.setAttribute("src", goalImg);
  goal.setAttribute("class", "goal_style");

  goalText.setAttribute("class", "goal_text");
  goalText.innerText = "목표";

  goalSet.appendChild(goal);
  goalSet.appendChild(goalText);

  return goalSet;
}

export default GoalArea;
