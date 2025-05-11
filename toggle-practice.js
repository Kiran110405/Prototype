const background = document.querySelector(".background");

const button = document.getElementById("darkmode-toggle");
button.addEventListener("click", () => {
  background.style.backgroundColor = "green";
});

