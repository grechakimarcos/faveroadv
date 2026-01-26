// ===============================================
// FAVERO ADVOCACIA - Advanced Animations
// ===============================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all animations
    initRippleEffect();
    initMagneticButtons();
    initScrollAnimations();
    initParallaxEffect();
    initTextReveal();
    initSmoothHoverCards();
    initCounterAnimation();
    initTypingEffect();
    initButtonPressEffect();
    initMenuAnimations();
});

// ===============================================
// RIPPLE EFFECT ON BUTTONS
// ===============================================

function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .btn-outline, .btn-white');

    buttons.forEach(button => {
        button.classList.add('ripple-container');

        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ===============================================
// MAGNETIC BUTTON EFFECT
// ===============================================

function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-white');

    magneticBtns.forEach(btn => {
        btn.classList.add('magnetic');

        btn.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', function () {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// ===============================================
// SCROLL-TRIGGERED ANIMATIONS
// ===============================================

function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = [
        { selector: '.area-card', animation: 'slideUp' },
        { selector: '.blog-card', animation: 'slideUp' },
        { selector: '.stat-card', animation: 'slideLeft' },
        { selector: '.sidebar-card', animation: 'slideRight' },
        { selector: '.timeline-item', animation: 'slideUp' },
        { selector: '.contact-item', animation: 'slideUp' },
        { selector: '.service-type', animation: 'scaleIn' },
        { selector: '.area-full-card', animation: 'slideUp' },
        { selector: '.section-header', animation: 'fadeIn' },
        { selector: '.newsletter-content', animation: 'scaleIn' },
        { selector: '.about-photo, .about-page-photo', animation: 'slideRight' },
        { selector: '.about-content, .about-page-intro', animation: 'slideLeft' },
    ];

    animatedElements.forEach(({ selector, animation }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.classList.add('scroll-animate', animation);
            el.style.transitionDelay = `${index * 100}ms`;
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// ===============================================
// PARALLAX EFFECT
// ===============================================

function initParallaxEffect() {
    const hero = document.querySelector('.hero-bg-image');
    const heroDecoration = document.querySelector('.hero-decoration');

    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;

            hero.style.transform = `translateY(${rate}px) scale(${1 + scrolled * 0.0002})`;

            if (heroDecoration) {
                heroDecoration.style.transform = `translate(33%, 33%) scale(${1 + scrolled * 0.001})`;
            }
        }, { passive: true });
    }
}

// ===============================================
// TEXT REVEAL ANIMATION
// ===============================================

function initTextReveal() {
    const titles = document.querySelectorAll('.hero-title, .page-title');

    titles.forEach(title => {
        const text = title.textContent;
        const words = text.split(' ');

        title.innerHTML = words.map((word, index) =>
            `<span class="word-reveal" style="--delay: ${index * 0.1}s">${word}</span>`
        ).join(' ');

        title.classList.add('text-reveal-container');

        // Trigger animation after load
        setTimeout(() => {
            title.classList.add('reveal');
        }, 300);
    });
}

// ===============================================
// SMOOTH HOVER CARDS
// ===============================================

function initSmoothHoverCards() {
    const cards = document.querySelectorAll('.area-card, .blog-card, .stat-card, .area-full-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

            // Move highlight
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ===============================================
// COUNTER ANIMATION
// ===============================================

function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-counter]');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.counter);
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// ===============================================
// TYPING EFFECT
// ===============================================

function initTypingEffect() {
    const typingElements = document.querySelectorAll('[data-typing]');

    typingElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.classList.add('typing-cursor');

        let index = 0;

        setTimeout(() => {
            const typeInterval = setInterval(() => {
                if (index < text.length) {
                    el.textContent += text.charAt(index);
                    index++;
                } else {
                    clearInterval(typeInterval);
                    el.classList.remove('typing-cursor');
                }
            }, 50);
        }, 500);
    });
}

// ===============================================
// BUTTON PRESS EFFECT
// ===============================================

function initButtonPressEffect() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.95)';
        });

        btn.addEventListener('mouseup', function () {
            this.style.transform = 'scale(1)';
        });

        btn.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
}

// ===============================================
// MENU ANIMATIONS
// ===============================================

function initMenuAnimations() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Animate menu items on open
    if (mobileNav) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    if (mobileNav.classList.contains('active')) {
                        mobileNavLinks.forEach((link, index) => {
                            link.style.animation = `slideInRight 0.3s ease forwards`;
                            link.style.animationDelay = `${index * 0.05}s`;
                            link.style.opacity = '0';
                        });

                        setTimeout(() => {
                            mobileNavLinks.forEach(link => {
                                link.style.opacity = '1';
                            });
                        }, 300);
                    }
                }
            });
        });

        observer.observe(mobileNav, { attributes: true });
    }
}

// ===============================================
// SMOOTH SCROLL WITH EASING
// ===============================================

function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ===============================================
// CURSOR FOLLOW EFFECT (Optional - disabled by default)
// ===============================================

function initCursorFollow() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.classList.add('custom-cursor-dot');
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Scale cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover');
        });
    });
}

// ===============================================
// STAGGER ANIMATION HELPER
// ===============================================

function staggerAnimation(elements, animationClass, delayIncrement = 100) {
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add(animationClass);
        }, index * delayIncrement);
    });
}

// ===============================================
// LOADING ANIMATION
// ===============================================

function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.classList.add('page-loader');
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">Favero Advocacia</div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    `;
    document.body.appendChild(loader);

    // Animate page load
    setTimeout(() => {
        loader.classList.add('loaded');
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 800);
}

// Uncomment to enable page loading animation:
// showLoadingAnimation();

// ===============================================
// SCROLL PROGRESS INDICATOR
// ===============================================

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        progressBar.style.width = scrollPercent + '%';
    }, { passive: true });
}

// Initialize scroll progress
initScrollProgress();

// ===============================================
// EXPOSE FUNCTIONS GLOBALLY (optional)
// ===============================================

window.animations = {
    smoothScrollTo,
    staggerAnimation,
    showLoadingAnimation
};
