const banners = document.querySelectorAll(".banners__banner");
let i = 0;

function nextStep(currentBanner) {
  currentBanner.classList.remove("active");
  if (!currentBanner.nextElementSibling) i = 0;
  makeMove();
}

function makeMove() {
  const currentBanner = banners[i];

  setTimeout(() => {
    nextStep(currentBanner);
  }, 3000);

  currentBanner.classList.add("active");
  i++;
}

function main() {
  setTimeout(makeMove, 0);
}

main();
