import MainBtn from "../components/mainBtn";
import ToothPaste from "../components/toothpaste";
import GoalArea from "../components/goal";
import "./GamePage.css";

function GamePageHeader() {
  const GamePageBtn = document.createElement("div");

  GamePageBtn.setAttribute("class", "game_page_header");
  GamePageBtn.appendChild(MainBtn("게임방법"));
  GamePageBtn.appendChild(MainBtn("순위보기"));

  return GamePageBtn;
}

function GamePageBody() {
  const GamePageMain = document.createElement("div");

  GamePageMain.setAttribute("class", "game_page_body");
  GamePageMain.appendChild(ToothPaste());
  GamePageMain.appendChild(GoalArea());

  return GamePageMain;
}

export { GamePageHeader, GamePageBody };
