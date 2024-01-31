const author = "Kenneth"; // put your name
const mainImg = document.querySelector("#main-img");
const authorTag = document.querySelector("#author");
const body = document.body.style;
const imgs = [
  "images/amazed-sparkle.gif",
  "images/heart-love.gif",
  "images/kawaii-myaowl.gif",
  "images/cartu.gif",
  "images/trunggghiguys.gif",
  "images/flirty-flirt.gif",
  "images/myaowl-shy.gif",
];

renderImage(mainImg, imgs);

function renderImage(imageLoc, arr) {
  const mainNum = Math.floor(Math.random() * arr.length);
  const secretImage = Math.floor(Math.random() * 100);
  if (secretImage == 1) {
    imageLoc.src = "images/cat-meme.gif";
  } else {
    imageLoc.src = arr[mainNum];
  }
  authorTag.textContent = `Made by ${author}`; //change to whatever you like
}
