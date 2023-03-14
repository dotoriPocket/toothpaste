import "./mainBtn.css";

function MainBtn(type) {
  const MainBtnType = document.createElement("button");

  MainBtnType.setAttribute("class", "main_btn");
  if (type === "게임방법") {
    MainBtnType.innerText = "게임방법";
  } else if (type === "순위보기") {
    MainBtnType.innerText = "순위보기";
  }

  return MainBtnType;
}

export default MainBtn;
