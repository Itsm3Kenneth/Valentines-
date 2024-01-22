const mainImg = document.querySelector("#main-img");
const imgs = [
  "images/amazed-sparkle.gif",
  "images/heart-love.gif",
  "images/kawaii-myaowl.gif",
  "images/cartu.gif",
  "images/trunggghiguys.gif",
];

renderCatImage(imgs)

function renderCatImage(arr) {
  const mainNum = Math.floor(Math.random() * imgs.length);
  const secretImage = Math.floor(Math.random() * 500);
  if (secretImage == 1) {
    mainImg.src = "images/cat-meme.gif";
  } else {
    mainImg.src = imgs[mainNum];
  }
}
