var menu = document.getElementById("mobile-menu-2");

// Get the menu button element
var menuButton = document.getElementById("menuButton");

// Define a function to toggle the menu visibility
function toggleMenu() {
  // If the menu is hidden, show it
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    // Otherwise, hide it
    menu.style.display = "none";
  }
}

// Add a click event listener to the menu button
menuButton.addEventListener("click", toggleMenu);