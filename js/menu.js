document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuBtn = document.getElementById("burger-menu-btn");
  const burgerMenu = document.getElementById("burger-menu");

  burgerMenuBtn.addEventListener("click", function () {
    if (burgerMenu.style.display === "block") {
      burgerMenu.style.display = "none";
    } else {
      burgerMenu.style.display = "block";
    }
  });
});
