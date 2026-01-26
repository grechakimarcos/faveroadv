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
});

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
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
        const isDark = document.documentElement.classList.contains('dark');
        logoImg.src = isDark ? 'img/logo_theme_dark.png' : 'img/logo_cabecalho.png';
    }
}

function updateFavicon() {
    const favicon = document.getElementById('favicon') || document.querySelector('link[rel="icon"]');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (favicon) {
        // Favicon must match the BROWSER theme (tab background), not necessarily the site theme
        const isDark = prefersDark.matches;
        favicon.href = isDark ? 'img/fav_icone_white.png' : 'img/fav_icone_black.png';
        favicon.type = 'image/png';
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

            const consent = form.querySelector('#contactConsent')?.checked;

            if (consent) {
                // Simulate form submission
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = '...';
                submitBtn.disabled = true;

                setTimeout(function () {
                    form.closest('.contact-form-wrapper').style.display = 'none';
                    successMessage.style.display = 'flex';

                    // Re-initialize Lucide icons for the success message
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }, 1500);
            }
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
    // Disable right-click context menu on images
    document.addEventListener('contextmenu', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Disable drag and drop on images
    document.addEventListener('dragstart', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
}
