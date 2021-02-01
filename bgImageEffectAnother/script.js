const blocks = document.getElementsByClassName("block");
const banner = document.querySelector(".banner");

for (let i = 1; i < 400; i++) {
  banner.innerHTML += `<div class="block"></div>`;
  const duration = Math.random() * 5;
  blocks[i].style.animationDuration = `${2 + duration}s`;
  blocks[i].style.animationDelay = `${duration}s`;
}

setTimeout(() => {
  banner.classList.add("active");
}, 15000);
