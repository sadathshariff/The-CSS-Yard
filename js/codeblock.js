let codeBlocks = document.querySelectorAll("pre code");
codeBlocks.forEach((codeBlock) => {
  let code = codeBlock.innerHTML;
  code = code.replaceAll("<", "&lt;");
  codeBlock.innerHTML = code;
});

const closeBtn = document.querySelector(".card-close-icon");
const cardDismiss = document.querySelector("#card-dismiss");
closeBtn.addEventListener("click", () => {
  cardDismiss.style.display = "none";
});
