const upButton = document.querySelector(".up-btn");

upButton.addEventListener("click", scrollUp);

function scrollUp() {
  console.log("Clicked " + this.className);
  window.scrollTo({top: 0, behavior: "smooth"});
}
