const authorTag = document.querySelector("#author");
const localStorageName = localStorage.getItem("name");
const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
const noBtnStyle = document.getElementById("no").style;
const mainImg = document.querySelector("#main-img");
const imgs = [
  "images/amazed-sparkle.gif",
  "images/heart-love.gif",
  "images/kawaii-myaowl.gif",
  "images/cartu.gif",
  "images/trunggghiguys.gif",
];
const names = ["John", "Steven", "Bob", "Yuming", "Kitty", "Doggy", "Bleh"];

renderCatImage(imgs);
if (localStorageName) {
  authorTag.textContent = `Made by ${localStorageName}`;
} else {
  renderAuthorName(names);
  renderCatImage(imgs);
}

noBtn.addEventListener("mouseover", () => {
  const xPos = Math.floor((Math.random() * 850) / 10);
  const yPos = Math.floor((Math.random() * 850) / 10);
  noBtnStyle.top = `${yPos}%`;
  noBtnStyle.left = `${xPos}%`;
  noBtnStyle.position = "absolute";
});

yesBtn.addEventListener("click", () => {
  console.log("clicked")
  window.open("yippe.html", "_self")
})

function renderCatImage(arr) {
  const mainNum = Math.floor(Math.random() * imgs.length);
  const secretImage = Math.floor(Math.random() * 100);
  if (secretImage == 1) {
    mainImg.src = "images/cat-meme.gif";
  } else {
    mainImg.src = imgs[mainNum];
  }
}

function renderAuthorName(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = arr[Math.floor(Math.random() * arr.length)];
  }
  localStorage.setItem("name", result);
  authorTag.textContent = `Made by ${result}`;
}
