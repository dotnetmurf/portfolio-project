function toggleNavMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('open');
    }
}

// Example: Attach to a button with id 'menuButton'
document.getElementById('menuButton').addEventListener('click', toggleNavMenu);