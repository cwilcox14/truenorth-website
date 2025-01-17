// JavaScript Document
document.addEventListener('DOMContentLoaded', () => {
    // Fetch and insert the header
    fetch('header.html')
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

// Dynamic Featured Practice Section
document.addEventListener('DOMContentLoaded', () => {
    const practices = [
        {
            title: "LTSA Negotiation",
            description: "TrueNorth specializes in assisting clients in the power industry with negotiating Long-Term Service Agreements (LTSA) to optimize operational performance and cost efficiency. Leveraging deep industry expertise, TrueNorth provides guidance on contract terms, pricing structures, and performance guarantees, ensuring alignment with client objectives.",
            image: "images/LTSA.webp",
            link: "practices.html"
        },
        {
            title: "Rates and Regulatory",
            description: "TrueNorth Energy Partners provides comprehensive support for utility rate cases, offering expert analysis and strategic guidance to navigate complex regulatory environments.",
            image: "images/ScetionIIpc2.webp",
            link: "practices.html"
        }
    ];

    const randomPractice = practices[Math.floor(Math.random() * practices.length)];
    const featuredPracticeSection = document.getElementById('featured-practice');
    const practiceContent = document.getElementById('practice-content');

    // Set background image for the section
   if (featuredPracticeSection && practiceContent) {
    featuredPracticeSection.style.backgroundImage = `url(${randomPractice.image})`;

    practiceContent.innerHTML += `
        <h3>${randomPractice.title}</h3>
        <p>${randomPractice.description}</p>
        <a href="${randomPractice.link}" class="btn btn-primary">Learn More</a>
    `;
} else {
    console.error('Featured practice section or content container not found.');
}
});
