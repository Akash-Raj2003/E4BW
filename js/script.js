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


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-btn").forEach(button => {
        button.addEventListener("click", function () {
            const dropdown = this.nextElementSibling;

            // Close any other open dropdowns
            document.querySelectorAll(".dropdown-content").forEach(content => {
                if (content !== dropdown) {
                    content.style.display = "none";
                    content.previousElementSibling.classList.remove("active");
                }
            });

            // Toggle the current dropdown
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
                this.classList.remove("active");
            } else {
                dropdown.style.display = "block";
                this.classList.add("active");
            }
        });
    });
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
