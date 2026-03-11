// ===============================================
// FAVERO ADVOCACIA - Main JavaScript
// ===============================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize I18n
    const i18n = new I18nManager();
    i18n.init();
    window.i18n = i18n;

    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Theme Management
    initTheme();

    // Mobile Menu
    initMobileMenu();

    // Language Switcher Dropdown
    initLanguageSwitcher();

    // Back to Top Button
    initBackToTop();

    // Newsletter Form
    initNewsletterForm();

    // Contact Form
    initContactForm();

    // Scroll Animations
    initScrollAnimations();

    // Image Protection
    initImageProtection();

    // Cookie Consent
    initCookieConsent();

    // Hero Carousel
    initHeroCarousel();

    // About Page Carousel
    initAboutCarousel();
});

// ===============================================
// HERO CAROUSEL
// ===============================================

function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    const intervalTime = 6000; // 6 seconds per slide

    setInterval(function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }, intervalTime);
}

// ===============================================
// ABOUT PAGE CAROUSEL
// ===============================================

function initAboutCarousel() {
    const carousel = document.getElementById('aboutCarousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.about-carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');

    if (slides.length <= 1) return;

    let current = 0;
    let autoplayInterval;

    function goToSlide(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function startAutoplay() {
        autoplayInterval = setInterval(function () {
            goToSlide(current + 1);
        }, 5000);
    }

    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }

    // Arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            goToSlide(current - 1);
            resetAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            goToSlide(current + 1);
            resetAutoplay();
        });
    }

    // Dot navigation
    dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
            goToSlide(parseInt(this.dataset.index));
            resetAutoplay();
        });
    });

    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', function () {
        clearInterval(autoplayInterval);
    });

    carousel.addEventListener('mouseleave', function () {
        startAutoplay();
    });

    startAutoplay();
}


// ===============================================
// THEME MANAGEMENT
// ===============================================

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Get stored theme or use system preference
    const storedTheme = localStorage.getItem('favero-theme');
    const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark.matches);

    if (isDark) {
        document.documentElement.classList.add('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.documentElement.classList.toggle('dark');
            const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('favero-theme', theme);
            updateLogo();
        });
    }

    // Listen for system theme changes for website theme (if no storage)
    prefersDark.addEventListener('change', function (e) {
        if (!localStorage.getItem('favero-theme')) {
            document.documentElement.classList.toggle('dark', e.matches);
            updateLogo();
        }
    });

    // Listen for system theme changes for Favicon (always)
    prefersDark.addEventListener('change', updateFavicon);

    // Initial sets
    updateLogo();
    updateFavicon();
}

function updateLogo() {
    const isDark = document.documentElement.classList.contains('dark');
    
    const headerLogo = document.querySelector('.logo img');
    if (headerLogo) {
        headerLogo.src = isDark ? 'img/logo_fav_dark.png' : 'img/logo_fav_white.png';
    }

    const footerLogo = document.querySelector('.footer-logo img');
    if (footerLogo) {
        footerLogo.src = 'img/logo_fav_dark.png';
    }
}

function updateFavicon() {
    const favicon = document.getElementById('favicon') || document.querySelector('link[rel="icon"]');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (favicon) {
        // Favicon must match the BROWSER theme (tab background), not necessarily the site theme
        const isDark = prefersDark.matches;
        favicon.href = isDark ? 'img/fav_dark.ico' : 'img/fav_white.ico';
        favicon.type = 'image/x-icon';
    }
}

// ===============================================
// MOBILE MENU
// ===============================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', function () {
                mobileMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }
}

// ===============================================
// LANGUAGE SWITCHER
// ===============================================

function initLanguageSwitcher() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langSwitcher = langBtn?.closest('.lang-switcher');

    if (langBtn && langSwitcher) {
        langBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            langSwitcher.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!langSwitcher.contains(e.target)) {
                langSwitcher.classList.remove('active');
            }
        });

        // Close dropdown when selecting an option
        if (langDropdown) {
            langDropdown.querySelectorAll('.lang-option').forEach(option => {
                option.addEventListener('click', function () {
                    langSwitcher.classList.remove('active');
                });
            });
        }
    }
}

// ===============================================
// BACK TO TOP BUTTON
// ===============================================

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // Scroll to top when clicked
        backToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===============================================
// NEWSLETTER FORM
// ===============================================

function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const successMessage = document.getElementById('newsletterSuccess');

    if (form && successMessage) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = form.querySelector('input[type="email"]').value;
            const consent = form.querySelector('input[type="checkbox"]').checked;

            if (email && consent) {
                // Simulate form submission
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = '...';
                submitBtn.disabled = true;

                setTimeout(function () {
                    form.style.display = 'none';
                    successMessage.style.display = 'flex';

                    // Re-initialize Lucide icons for the success message
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }, 1000);
            }
        });
    }
}

// ===============================================
// CONTACT FORM
// ===============================================


function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('contactSuccess');

    if (form && successMessage) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validate Consent
            const consent = form.querySelector('#contactConsent')?.checked;
            if (!consent) {
                alert('Por favor, aceite os termos de uso de dados.');
                return;
            }

            // UI Loading State
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            // Collect Data
            const formData = new FormData(form);

            // AJAX Submission
            fetch("https://formsubmit.co/ajax/SEU_TOKEN_AQUI", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        // Success
                        form.style.display = 'none';
                        successMessage.style.display = 'flex';

                        // Re-initialize icons
                        if (typeof lucide !== 'undefined') {
                            lucide.createIcons();
                        }
                    } else {
                        return response.json().then(data => {
                            throw new Error(data.message || 'Falha no envio');
                        });
                    }
                })
                .catch(error => {
                    console.error('Form Error:', error);
                    alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
}

// ===============================================
// SCROLL ANIMATIONS
// ===============================================

function initScrollAnimations() {
    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.area-card, .blog-card, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

// ===============================================
// BLOG FUNCTIONALITY
// ===============================================

// Blog page filter and search
function initBlogFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const searchInput = document.getElementById('blogSearch');

    window.selectedBlogCategory = 0;
    window.blogSearchQuery = '';

    if (categoryButtons.length > 0) {
        categoryButtons.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                window.selectedBlogCategory = index;
                window.i18n.renderBlogPage();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            window.blogSearchQuery = e.target.value;
            window.i18n.renderBlogPage();
        });
    }
}

// ===============================================
// UTILITY FUNCTIONS
// ===============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===============================================
// IMAGE PROTECTION
// ===============================================

function initImageProtection() {
    // Image protection removed for accessibility and standard UX.
}

// ===============================================
// COOKIE CONSENT
// ===============================================

function initCookieConsent() {
    // Check if consent is already stored
    if (localStorage.getItem('favero-cookie-consent')) {
        return;
    }

    // Create banner HTML
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
        <div class="cookie-content">
            <div class="cookie-text">
                <h3><i data-lucide="cookie"></i> Configurações de Cookies</h3>
                <p>
                    Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa 
                    <a href="privacy.html">Política de Privacidade</a>.
                </p>
            </div>
            <div class="cookie-actions">
                <button id="rejectCookies" class="btn btn-outline">Recusar</button>
                <button id="acceptCookies" class="btn btn-primary">Aceitar</button>
            </div>
        </div>
    `;

    // Append to body
    document.body.appendChild(banner);

    // Initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Show banner with animation
    setTimeout(() => {
        banner.classList.add('visible');
    }, 1000);

    // Handle interactions
    document.getElementById('acceptCookies').addEventListener('click', () => {
        localStorage.setItem('favero-cookie-consent', 'true');
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 500);
    });

    document.getElementById('rejectCookies').addEventListener('click', () => {
        localStorage.setItem('favero-cookie-consent', 'false');
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 500);
    });
}
