// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').classList.remove('fa-times');
        mobileMenu.querySelector('i').classList.add('fa-bars');
    });
});

// Animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.hero-text, .hero-image, .section-title, .benefit-card, .service-card, .testimonial-card, .cta-content, .footer-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
}

// Initialize animations
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.querySelector('i').classList.remove('fa-times');
                mobileMenu.querySelector('i').classList.add('fa-bars');
            }
        }
    });
});

// Hero section floating animation
const heroImage = document.getElementById('heroImage');
if (heroImage) {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });
}

// Service card hover effect enhancement
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.service-image i');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.service-image i');
        if (icon) {
            icon.style.transform = 'scale(1)';
        }
    });
});

// Benefit card hover effect enhancement
const benefitCards = document.querySelectorAll('.benefit-card');
benefitCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.benefit-icon');
        if (icon) {
            icon.style.transform = 'rotateY(180deg) scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.benefit-icon');
        if (icon) {
            icon.style.transform = 'rotateY(0) scale(1)';
        }
    });
});

// CTA button pulse animation
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    setInterval(() => {
        button.style.boxShadow = '0 0 0 0 rgba(239, 70, 35, 0.7)';
        setTimeout(() => {
            button.style.boxShadow = '0 0 0 10px rgba(239, 70, 35, 0)';
        }, 500);
    }, 2000);
});