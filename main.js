const frame = document.querySelector(".frame");
const ul = frame.querySelector("ul");
const slides = frame.querySelectorAll("ul li");

const prev = frame.querySelector(".prev");
const next = frame.querySelector(".next");

prev.addEventListener("click", () => {
  ul.append(ul.firstElementChild);
});

next.addEventListener("click", () => {
  ul.prepend(ul.lastElementChild);
});