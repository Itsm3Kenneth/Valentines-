const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
const noBtnStyle = document.getElementById("no").style;

noBtn.addEventListener("mouseover", () => {
  moveNoBtn();
});

noBtn.addEventListener("click", () => {
  moveNoBtn();
});

yesBtn.addEventListener("click", () => {
  window.open("yippe.html", "_self");
});

function moveNoBtn() {
  const xPos = Math.floor((Math.random() * 850) / 10);
  const yPos = Math.floor((Math.random() * 850) / 10);
  noBtnStyle.top = `${yPos}%`;
  noBtnStyle.left = `${xPos}%`;
  noBtnStyle.position = "absolute";
}
