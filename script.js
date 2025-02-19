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
