const banner = document.querySelector(".banner");
const blocks = document.getElementsByClassName("block");

for (let i = 1; i < 400; i++) {
  banner.innerHTML += "<div class='block'></div>";
  blocks[i].style.animationDelay = `${i * 0.05}s`;
}
