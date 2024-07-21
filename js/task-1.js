const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

for (const child of categories.children) {
  console.log(`Category: ${child.firstElementChild.textContent}`);
  console.log(`Element: ${child.lastElementChild.children.length}`);
}
