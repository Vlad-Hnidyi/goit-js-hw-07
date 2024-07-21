function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesPlace = document.querySelector("#boxes");
const input = document.querySelector("input");

const createBoxes = (amount) => {
  let newBox = "";
  let boxSize = 30;

  for (let i = 1; i <= amount; i++) {
    newBox += `<div style="width: ${boxSize}px; height: ${boxSize}px; 
		background-color:${getRandomHexColor()};"></div> `;
    boxSize += 10;
  }
  boxesPlace.innerHTML = newBox;
};

const destroyBoxes = () => {
  boxesPlace.innerHTML = "";
};

const onCreatebtnClick = () => {
  if (input.value <= 100 && input.value >= 1) {
    createBoxes(input.value);
  }
  input.value = "";
};

const onDestroybtnClick = () => {
  destroyBoxes();
};
createBtn.addEventListener("click", onCreatebtnClick);
destroyBtn.addEventListener("click", onDestroybtnClick);
