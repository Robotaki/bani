function changeText() {
  let textElement = document.getElementById("block1");

  let delay = 2000;

  let newText = document.getElementById("block2");

  textElement.style.opacity = 0;

  setTimeout(function () {
    textElement.textContent = newText;

    textElement.style.opacity = 1;
  }, delay);
}

changeText();