// ============================================
// COMPLETE SCRIPT.JS - WBseva AI
// ============================================

// ============================================
// 1. NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// 2. MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        // Reset toggle icon
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});

// ============================================
// 3. COUNTER ANIMATION
// ============================================
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (counter) => {
    const target = parseFloat(counter.dataset.count);
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const updateCounter = () => {
        current += target / steps;
        if (current >= target) {
            counter.textContent = isDecimal ? target.toFixed(1) : Math.floor(target) + '+';
            return;
        }
        counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current) + '+';
        setTimeout(updateCounter, stepTime);
    };

    updateCounter();
};

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

// ============================================
// 4. CATEGORIES DATA & RENDER
// ============================================
const categories = [
    { icon: 'fa-graduation-cap', name: 'Education', count: '12 Schemes', color: '#6C3CE1' },
    { icon: 'fa-heart-pulse', name: 'Health', count: '8 Schemes', color: '#FF6B6B' },
    { icon: 'fa-building', name: 'Housing', count: '6 Schemes', color: '#F59E0B' },
    { icon: 'fa-hand-holding-dollar', name: 'Financial', count: '15 Schemes', color: '#06D6A0' },
    { icon: 'fa-briefcase', name: 'Employment', count: '10 Schemes', color: '#3B82F6' },
    { icon: 'fa-tractor', name: 'Agriculture', count: '9 Schemes', color: '#10B981' },
    { icon: 'fa-scale-balanced', name: 'Legal', count: '7 Schemes', color: '#8B5CF6' },
    { icon: 'fa-utensils', name: 'Food & Nutrition', count: '5 Schemes', color: '#F472B6' },
];

const categoriesGrid = document.getElementById('categoriesGrid');

if (categoriesGrid) {
    categories.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.setProperty('--cat-color', cat.color);
        card.innerHTML = `
            <div class="category-icon" style="background: ${cat.color}20; color: ${cat.color}">
                <i class="fas ${cat.icon}"></i>
            </div>
            <h3>${cat.name}</h3>
            <p>${cat.count}</p>
            <div class="category-hover-line" style="background: ${cat.color}"></div>
        `;
        
        // Add click event
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
            console.log(`Category clicked: ${cat.name}`);
        });
        
        categoriesGrid.appendChild(card);
    });
}

// ============================================
// 5. SEARCH FUNCTIONALITY
// ============================================
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn && searchInput) {
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            console.log(`Searching for: ${query}`);
            searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            // Simulate search
            setTimeout(() => {
                searchBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
                alert(`Searching for "${query}"...\nThis feature will show matching schemes.`);
            }, 1000);
        } else {
            searchInput.style.borderColor = '#FF6B6B';
            searchInput.placeholder = 'Please enter a search term!';
            setTimeout(() => {
                searchInput.style.borderColor = '';
                searchInput.placeholder = 'Search for schemes...';
            }, 2000);
        }
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// ============================================
// 6. PARALLAX EFFECT ON ORBS
// ============================================
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    orbs.forEach((orb, i) => {
        const speed = 1 + i * 0.3;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// ============================================
// 7. RANDOM PARTICLE GENERATOR
// ============================================
const heroParticles = document.querySelector('.hero-bg-animation');

if (heroParticles) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 6 + 2;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(108, 60, 225, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 5 + 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            pointer-events: none;
        `;
        heroParticles.appendChild(particle);
    }
}

// ============================================
// 8. SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// 9. AVATAR INTERACTIVE EFFECTS
// ============================================
const avatarWrapper = document.querySelector('.avatar-wrapper');
const avatarImg = document.querySelector('.avatar-img');

if (avatarWrapper) {
    // Hover effect
    avatarWrapper.addEventListener('mouseenter', () => {
        const rings = document.querySelectorAll('.glow-ring');
        rings.forEach(ring => {
            ring.style.animationDuration = '5s';
        });
    });

    avatarWrapper.addEventListener('mouseleave', () => {
        const rings = document.querySelectorAll('.glow-ring');
        rings.forEach(ring => {
            ring.style.animationDuration = '';
        });
    });

    // Click effect
    avatarWrapper.addEventListener('click', () => {
        avatarWrapper.style.transform = 'scale(0.9)';
        setTimeout(() => {
            avatarWrapper.style.transform = '';
        }, 300);
        console.log('👋 Hello from WBseva AI!');
    });
}

// ============================================
// 10. STATS HOVER ANIMATION
// ============================================
const statItems = document.querySelectorAll('.stat-item');

statItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// ============================================
// 11. AUTO TYPING EFFECT FOR SEARCH (Optional)
// ============================================
const searchPlaceholders = [
    'Search for schemes...',
    'Try: Education schemes...',
    'Try: Health benefits...',
    'Try: Housing schemes...',
    'Search for schemes...'
];

let placeholderIndex = 0;
if (searchInput) {
    setInterval(() => {
        placeholderIndex = (placeholderIndex + 1) % searchPlaceholders.length;
        searchInput.placeholder = searchPlaceholders[placeholderIndex];
    }, 3000);
}

// ============================================
// 12. DYNAMIC YEAR IN FOOTER
// ============================================
const footer = document.querySelector('.footer p');
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2026', year);
}

// ============================================
// 13. KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Ctrl + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }
    // Escape to blur search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.blur();
    }
});

// ============================================
// 14. CONSOLE WELCOME MESSAGE
// ============================================
console.log('%c🚀 WBseva AI - Your Smart Assistant', 'font-size: 24px; font-weight: bold; color: #6C3CE1;');
console.log('%c💡 Tip: Press Ctrl+K to search!', 'font-size: 14px; color: #06D6A0;');
console.log('%c📋 Version: 2.0 | Made with ❤️', 'font-size: 14px; color: #A0A0B8;');

// ============================================
// 15. RESPONSIVE CATEGORIES GRID ADJUSTMENT
// ============================================
function adjustCategoriesGrid() {
    const grid = document.querySelector('.categories-grid');
    if (grid) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 480) {
            grid.style.gridTemplateColumns = '1fr 1fr';
        } else if (screenWidth < 768) {
            grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else {
            grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        }
    }
}

window.addEventListener('resize', adjustCategoriesGrid);
adjustCategoriesGrid();

// ============================================
// 16. CATEGORY CARD ANIMATION ON SCROLL
// ============================================
const categoryCards = document.querySelectorAll('.category-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

categoryCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});

// ============================================
// 17. NAVBAR ACTIVE LINK HIGHLIGHT
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-links a');

if (sections.length > 0 && navLinkItems.length > 0) {
    const highlightNav = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav);
}

// ============================================
// 18. PREVENT DEFAULT CONTEXT MENU (Optional)
// ============================================
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        console.log('🛡️ Image right-click disabled');
    }
});

// ============================================
// 19. CUSTOM CURSOR EFFECT (Optional)
// ============================================
// Uncomment to add custom cursor
/*
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add this CSS for custom cursor:
// .custom-cursor { position: fixed; width: 20px; height: 20px; border: 2px solid #6C3CE1; border-radius: 50%; pointer-events: none; z-index: 9999; transition: all 0.1s ease; }
*/

// ============================================
// 20. SCROLL TO TOP BUTTON
// ============================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #6C3CE1, #06D6A0);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 8px 30px rgba(108, 60, 225, 0.4);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.transform = 'translateY(0)';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.transform = 'translateY(20px)';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

console.log('✅ WBseva AI script loaded successfully!');