document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
        dropdown.addEventListener("click", function () {
            this.querySelector(".dropdown-menu").classList.toggle("show");
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
            if (!menu.parentElement.contains(event.target)) {
                menu.classList.remove("show");
            }
        });
    });
});