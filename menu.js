var menu = document.getElementById("mobile-menu-2");

// Get the menu button element
var menuButton = document.getElementById("menuButton");

// Define a function to toggle the menu visibility
function toggleMenu() {
    // If the menu is hidden, show it and animate the button
    if (menu.style.display === "none") {
      menu.style.display = "block";
      menuButton.classList.add("animate");
    } else {
      // Otherwise, hide it and remove the animation
      menu.style.display = "none";
      menuButton.classList.remove("animate");
    }
}

// Add a click event listener to the menu button
menuButton.addEventListener("click", toggleMenu);