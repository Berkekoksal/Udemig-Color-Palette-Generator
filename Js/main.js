const ganeratePalette = () => {
  const baseColorInput = document.querySelector("#base-color");
  const colorPaletteContainer = document.querySelector(".color-palette");
  const baseColor = baseColorInput.value;
  document.body.style.backgroundColor = baseColor;
};
window.addEventListener("load", ganeratePalette);
const genareteButton = document.querySelector("#genarete-btn");
genareteButton.addEventListener("click", ganeratePalette);
