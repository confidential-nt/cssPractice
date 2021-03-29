function makeBubbleElements() {
  for (let i = 0; i < 6000; i++) {
    let div = document.createElement("div");
    document.querySelector(".container").appendChild(div);
  }
}

function main() {
  makeBubbleElements();
}

main();
