document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const mainDoc = document.getElementById("main-doc");

    window.addEventListener("scroll", function() {
        const offsetTop = mainDoc.offsetTop;
        if (window.pageYOffset >= offsetTop) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
});
