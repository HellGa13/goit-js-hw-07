function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.querySelector('body');
const changeColorButton = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor(); 
  bodyElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor; 
});

