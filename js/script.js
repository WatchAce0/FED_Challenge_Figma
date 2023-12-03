document.querySelector(".carousel-btn.left").addEventListener("click", () => {
  document.querySelector(".carousel").scrollLeft -= 300; // Adjust scroll amount as needed
});

document.querySelector(".carousel-btn.right").addEventListener("click", () => {
  document.querySelector(".carousel").scrollLeft += 300; // Adjust scroll amount as needed
});
