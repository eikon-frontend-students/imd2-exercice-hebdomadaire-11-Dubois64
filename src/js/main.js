var button = document.querySelector(".button");

function changeColor() {
  button.classList.toggle("is-active");
}

button.addEventListener("click", changeColor);
