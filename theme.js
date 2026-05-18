// 1. RUN INSTANTLY ON LOAD: Check if a theme was previously saved in this browser
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    // If a theme button exists on this specific page, update its icon text
    const themeBtn = document.getElementById("theme-btn");
    if (themeBtn) themeBtn.innerText = "☀️ Light Mode";
}

// 2. TOGGLE LOGIC FUNCTION: To be called when the user clicks the button
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const themeBtn = document.getElementById("theme-btn");

    if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light"); // Save choice to database
        if (themeBtn) themeBtn.innerText = "🌙 Dark Mode";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");  // Save choice to database
        if (themeBtn) themeBtn.innerText = "☀️ Light Mode";
    }
}

// 3. EVENT LISTENERS ASSIGNMENT
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);
    }
});
