function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const spanColorName = document.querySelector(".color");

const onChangeColorBtnClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColorName.textContent = body.style.backgroundColor;
};
changeColorBtn.addEventListener("click", onChangeColorBtnClick);
