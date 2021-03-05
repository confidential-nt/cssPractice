const menuBtn = document.querySelector(".menu__btn");
const curtain = document.querySelector(".curtains");
const menuList = document.querySelector(".menu__list");

function handleToggle() {
  curtain.classList.toggle("active");
  menuBtn.classList.toggle("active");
  menuList.classList.toggle("active");
  if (menuBtn.classList.contains("active")) {
    menuBtn.innerHTML = `❌`;
  } else {
    menuBtn.innerHTML = `<i class="fas fa-bars fa-2x"></i>`;
  }
}

menuBtn.addEventListener("click", handleToggle);
