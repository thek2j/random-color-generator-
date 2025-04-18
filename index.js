const containerEl = document.querySelector(".container");

function colorCodeGenerator() {
  const codeCharacters = "0123456789abcdef";

  let colorCode = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * codeCharacters.length);
    colorCode = colorCode + codeCharacters[randomIndex];
  }

  return colorCode;
}

for (let i = 0; i < 30; i++) {
  const boxEl = document.createElement("div");
  boxEl.classList.add("color-box");
  containerEl.appendChild(boxEl);
}

const boxEls = document.querySelectorAll(".color-box");

boxEls.forEach((boxEl) => {
  const textEl = "#" + colorCodeGenerator();
  boxEl.innerText = textEl;
  boxEl.style.backgroundColor = textEl;
});
