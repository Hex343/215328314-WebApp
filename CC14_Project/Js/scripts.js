document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".menu-icon").addEventListener("click", function() {
    var homeLink = document.querySelector(".home-link");
    if (homeLink.style.display === "none") {
      homeLink.style.display = "block";
    } else {
      homeLink.style.display = "none";
    }
  });
});