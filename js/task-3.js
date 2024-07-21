const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === "") {
    outputEl.textContent = "Anonymous";
  }
});
