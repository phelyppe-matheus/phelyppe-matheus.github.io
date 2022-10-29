window.onload = () => {
    const toggleMenu = document.getElementById("toggle-menu");
    const sectionMenu = document.getElementById("hero-section");

    toggleMenu.onclick = () => {
        sectionMenu.dataset.menu = sectionMenu.dataset.menu === "true" ? "false" : "true";
    }
}