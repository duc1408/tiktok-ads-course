// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 0';
        navbar.style.background = 'rgba(9, 9, 11, 0.95)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(9, 9, 11, 0.8)';
    }
});

// Accordion functionality for Modules section
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
        // Find if there is an active item already
        const currentlyActive = document.querySelector('.accordion-item.active');
        
        // If clicking on a different item, close the active one
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
        }
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.card, .section-header, .accordion-item');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    // Initial state before revealing
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});
