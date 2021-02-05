const sky = document.querySelector(".sky");
const moon = document.querySelector(".moon");
const urban = document.querySelector(".urban");
const text = document.querySelector("section h2");

window.addEventListener("scroll", () => {
  const scrollMount = window.scrollY;
  sky.style.top = scrollMount + "px";
  moon.style.left = scrollMount * 4 + "px";
  text.style.top = scrollMount * 3 + "px";
});
