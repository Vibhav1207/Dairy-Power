// Enhanced JavaScript functionality for better user experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initPreloader();
    initScrollToTop();
    initProgressBar();
    initStatsCounter();
    initLazyLoading();
    initTypeWriter();
    
    console.log('Dairy Power website initialized successfully!');
});

// Preloader functionality
function initPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <img src="assets/images/logo.png" alt="Loading..." class="preloader-logo">
            <div class="preloader-text">Dairy Power Pvt Ltd</div>
            <div class="preloader-spinner"></div>
        </div>
    `;
    
    document.body.insertBefore(preloader, document.body.firstChild);
    
    // Hide preloader when page is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                if (preloader.parentNode) {
                    preloader.remove();
                }
            }, 500);
        }, 1000);
    });
}

// Scroll to top button
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    document.body.appendChild(scrollBtn);
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

// Progress bar for page scroll
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Animated counter for stats
function initStatsCounter() {
    // Add stats section if it doesn't exist
    if (!document.querySelector('.stats-section')) {
        const statsHTML = `
            <section class="stats-section">
                <div class="stats-container">
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-number" data-count="50">0</span>
                            <span class="stat-label">Years of Excellence</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number" data-count="10000">0</span>
                            <span class="stat-label">Happy Customers</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number" data-count="25">0</span>
                            <span class="stat-label">Products</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number" data-count="99">0</span>
                            <span class="stat-label">Quality Assurance</span>
                        </div>
                    </div>
                </div>
            </section>
        `;
        
        // Insert after about section
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            aboutSection.insertAdjacentHTML('afterend', statsHTML);
        }
    }
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (element.textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else if (target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString() + '+';
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, stepTime);
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy-img');
        imageObserver.observe(img);
    });
}

// Typewriter effect for hero title
function initTypeWriter() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }
}

// Enhanced form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        const errorElement = input.parentNode.querySelector('.form-error') || 
                           createErrorElement(input.parentNode);
        
        // Reset previous errors
        input.classList.remove('error');
        errorElement.classList.remove('show');
        
        // Validate based on input type
        if (!input.value.trim()) {
            showError(input, errorElement, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            showError(input, errorElement, 'Please enter a valid email address');
            isValid = false;
        } else if (input.type === 'tel' && !isValidPhone(input.value)) {
            showError(input, errorElement, 'Please enter a valid phone number');
            isValid = false;
        }
    });
    
    return isValid;
}

function createErrorElement(parent) {
    const errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    parent.appendChild(errorElement);
    return errorElement;
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Smooth reveal animations
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Add reveal classes to elements
document.addEventListener('DOMContentLoaded', function() {
    const elementsToReveal = document.querySelectorAll('.product-card, .facility-card, .about-text, .contact-item');
    elementsToReveal.forEach(element => {
        element.classList.add('reveal');
    });
    
    initRevealAnimations();
});

// Performance optimization
function optimizePerformance() {
    // Preload critical images
    const criticalImages = [
        'assets/images/logo.png',
        'assets/images/topimage.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Enable passive event listeners for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
}

function handleScroll() {
    // Throttled scroll handling
    requestAnimationFrame(() => {
        // Your scroll logic here
    });
}

function handleResize() {
    // Debounced resize handling
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        // Your resize logic here
    }, 250);
}

// Initialize performance optimizations
optimizePerformance();

// Error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace with placeholder if image fails to load
            this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999">Image</text></svg>';
            this.alt = 'Placeholder image';
        });
    });
});

// Add CSS for reveal animations
const revealStyles = document.createElement('style');
revealStyles.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .reveal:nth-child(1) { transition-delay: 0.1s; }
    .reveal:nth-child(2) { transition-delay: 0.2s; }
    .reveal:nth-child(3) { transition-delay: 0.3s; }
    .reveal:nth-child(4) { transition-delay: 0.4s; }
`;
document.head.appendChild(revealStyles);