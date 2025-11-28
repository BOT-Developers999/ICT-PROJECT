document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".book-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Thank you! Titan Athletics team will contact you shortly.");
        });
    });
});
