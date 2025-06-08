const upButton = document.querySelector(".up-btn");

upButton.addEventListener("click", scrollUp);

function scrollUp() {
  console.log("Clicked");
  window.scrollTo({behavior: "smooth", top: 0});
}
