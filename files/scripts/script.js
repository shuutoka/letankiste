document.addEventListener("DOMContentLoaded", function () {
    // Get the popup and OK button elements
    var popup = document.getElementById("cookie-popup");
    var okButton = document.getElementById("cookies-button");

    // Show the popup when the page is loaded
    popup.style.display = "block";

    // Close the popup when the OK button is clicked
    okButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
