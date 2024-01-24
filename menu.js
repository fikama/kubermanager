var menu = document.getElementById("mobile-menu-2");

// Get the menu button element
var menuButton = document.getElementById("menuButton");

// Define a function to toggle the menu visibility
function toggleMenu() {
    // If the menu is hidden, show it and animate the button
    if (menu.classList.contains("hidden")) {
    //   menu.style.display = "block";
      menu.classList.add("animate");
      menuButton.classList.add("animate");
      menu.classList.remove("hidden");
    } else {
      menu.classList.remove("animate");
      menuButton.classList.remove("animate");
      menu.classList.add("hidden");
    }
}

// Add a click event listener to the menu button
menuButton.addEventListener("click", toggleMenu);