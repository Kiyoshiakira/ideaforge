// main.js: Shared JS for navigation, button handlers, etc.

// Dynamically inject navigation for all pages
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <header>
            <div class="logo">🎨 IdeaForge</div>
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="showcase.html">Showcase</a>
                <a href="studio.html">Studio</a>
            </nav>
        </header>
    `;
    const navContainer = document.getElementById('main-nav');
    if (navContainer) navContainer.innerHTML = navHTML;

    // Highlight current navigation item
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.style.color = '#ffd86b';
        }
    });

    // Example: Button events for studio page
    const startBtn = document.getElementById('start-project-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            alert('Project creation is coming soon!');
        });
    }

    // Example: Populate gallery on showcase.html
    if (document.getElementById('gallery')) {
        const gallery = document.getElementById('gallery');
        const items = [
            { img: 'https://placehold.co/400x300', caption: 'Artwork 1' },
            { img: 'https://placehold.co/400x300', caption: 'Artwork 2' },
            { img: 'https://placehold.co/400x300', caption: 'Artwork 3' }
        ];
        gallery.innerHTML = items.map(item => `
            <div class="gallery-item">
                <img src="${item.img}" alt="${item.caption}">
                <div class="caption">${item.caption}</div>
            </div>
        `).join('');
    }
});
