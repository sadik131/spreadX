// toggle button
function handleToggle(toggle) {
    const icon = document.getElementById("toggle-icon");
  
    // Update the icon based on the toggle state
    if (toggle.checked) {
      icon.innerHTML = "→"; // Icon when toggled on
    } else {
      icon.innerHTML = "←"; // Icon when toggled off
    }
  }
  