// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // Menu toggle functionality
    const menubar = document.querySelector('#menu');
    const Navbar = document.querySelector('.navbar');
    
    if (menubar && Navbar) {
        menubar.onclick = () => {
            menubar.classList.toggle('bx-x');
            Navbar.classList.toggle('active');
        };
    }
    
    // Scroll-based navigation and animations
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('.header');
    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            
            if (top > offset && top < offset + height) {
                sec.classList.add('start-animation');
                
                navlinks.forEach(links => {
                    links.classList.remove('active');
                });
                
                const activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
        
        // Sticky header
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }
        
        // Close mobile menu on scroll
        if (menubar && Navbar) {
            menubar.classList.remove('bx-x');
            Navbar.classList.remove('active');
        }
    };
    
    // Scroll button functionality - Fixed selector
    const scrollButton = document.querySelector('.about .btn');
    const aboutSection = document.querySelector('#about');
    
    if (scrollButton && aboutSection) {
        scrollButton.addEventListener('click', function (e) {
            e.preventDefault();
            // Scroll to education section (next section after about)
            const educationSection = document.querySelector('#education');
            if (educationSection) {
                educationSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Handle navbar link clicks for smooth scrolling
    navlinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    
                    // Close mobile menu after clicking
                    if (menubar && Navbar) {
                        menubar.classList.remove('bx-x');
                        Navbar.classList.remove('active');
                    }
                }
            }
        });
    });
    
});