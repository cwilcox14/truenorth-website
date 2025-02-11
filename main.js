// JavaScript Document
document.addEventListener('DOMContentLoaded', () => {
    // Fetch and insert the header
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Debug: Confirm the header was injected
            const header = document.getElementById('main-header');
            console.log('Header element:', header);

            if (header) {
                // Add scroll functionality to hide/reveal header
                let lastScrollY = window.scrollY;
                window.addEventListener('scroll', () => {
                    if (window.scrollY > lastScrollY) {
                        header.style.transform = 'translateY(-100%)'; // Hide header
                    } else {
                        header.style.transform = 'translateY(0)'; // Show header
                    }
                    lastScrollY = window.scrollY;
                });
            } else {
                console.error('Main header not found after injection.');
            }

            // Initialize menu toggle functionality
            const menuToggle = document.getElementById('menu-toggle');
            const dropdownMenu = document.getElementById('dropdown-menu');
            if (menuToggle && dropdownMenu) {
                const menuIcon = menuToggle.querySelector(".hamburger-icon");
                menuToggle.addEventListener("click", () => {
                    dropdownMenu.classList.toggle("show");
                    if (menuIcon) {
                        menuIcon.classList.toggle("open");
                    }
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));
});
window.addEventListener("load", function() {
    // Hide preloader and show the main content
    document.getElementById("preloader").style.display = "none";
    document.querySelector("main").style.display = "block";
    document.querySelector("footer").style.display = "block";
});

