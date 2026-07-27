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
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
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
// 3. STATISTICS COUNTER ANIMATION
// ============================================
const statsCounters = document.querySelectorAll('.stat-number-large');

const animateStatsCounter = (counter) => {
    const target = parseFloat(counter.dataset.count);
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const updateCounter = () => {
        current += target / steps;
        if (current >= target) {
            counter.textContent = Math.floor(target) + '+';
            return;
        }
        counter.textContent = Math.floor(current) + '+';
        setTimeout(updateCounter, stepTime);
    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStatsCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsCounters.forEach(counter => statsObserver.observe(counter));

// ============================================
// 4. CATEGORIES DATA - UPDATED WITH MORE CATEGORIES
// ============================================
const categories = [
    { icon: 'fa-graduation-cap', name: 'Education', count: '12 Schemes', color: '#6C3CE1', category: 'education' },
    { icon: 'fa-heart-pulse', name: 'Healthcare', count: '8 Schemes', color: '#FF6B6B', category: 'health' },
    { icon: 'fa-venus-mars', name: 'Women Empowerment', count: '6 Schemes', color: '#EC4899', category: 'women' },
    { icon: 'fa-building', name: 'Housing', count: '6 Schemes', color: '#F59E0B', category: 'housing' },
    { icon: 'fa-hand-holding-dollar', name: 'Financial', count: '15 Schemes', color: '#06D6A0', category: 'financial' },
    { icon: 'fa-briefcase', name: 'Employment', count: '10 Schemes', color: '#3B82F6', category: 'employment' },
    { icon: 'fa-tractor', name: 'Agriculture', count: '9 Schemes', color: '#10B981', category: 'agriculture' },
    { icon: 'fa-scale-balanced', name: 'Legal', count: '7 Schemes', color: '#8B5CF6', category: 'legal' },
    { icon: 'fa-utensils', name: 'Food & Nutrition', count: '5 Schemes', color: '#F472B6', category: 'food' },
    { icon: 'fa-people-arrows', name: 'Skill Development', count: '14 Schemes', color: '#6366F1', category: 'skill' },
    { icon: 'fa-truck', name: 'Transportation', count: '8 Schemes', color: '#14B8A6', category: 'transport' },
    { icon: 'fa-bolt', name: 'Energy', count: '10 Schemes', color: '#F59E0B', category: 'energy' },
    { icon: 'fa-wifi', name: 'Digital India', count: '12 Schemes', color: '#8B5CF6', category: 'digital' },
    { icon: 'fa-tree', name: 'Rural Development', count: '15 Schemes', color: '#10B981', category: 'rural' },
];

// Future categories to add
// { icon: 'fa-water', name: 'Water Resources', count: '7 Schemes', color: '#0EA5E9', category: 'water' },
// { icon: 'fa-industry', name: 'Industrial Development', count: '9 Schemes', color: '#F97316', category: 'industry' },
// { icon: 'fa-child', name: 'Child Welfare', count: '6 Schemes', color: '#06D6A0', category: 'child' },
// { icon: 'fa-wheelchair', name: 'Disability Welfare', count: '4 Schemes', color: '#6366F1', category: 'disability' },

// Render Categories
const categoriesGrid = document.getElementById('categoriesGrid');
const moreCategoriesGrid = document.getElementById('moreCategoriesGrid');

const renderCategories = (data, container) => {
    if (!container) return;
    container.innerHTML = '';
    data.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.setAttribute('data-category', cat.name);
        card.innerHTML = `
            <div class="category-icon" style="background: ${cat.color}20; color: ${cat.color}">
                <i class="fas ${cat.icon}"></i>
            </div>
            <h3>${cat.name}</h3>
            <p>${cat.count}</p>
            <div class="category-hover-line" style="background: ${cat.color}"></div>
        `;
        
        card.addEventListener('click', () => {
            window.open(`scheme-details.html?category=${cat.category}`, '_blank');
        });
        
        container.appendChild(card);
    });
};

renderCategories(categories, categoriesGrid);
renderCategories(moreCategories, moreCategoriesGrid);

// ============================================
// 5. SEARCH FUNCTIONALITY
// ============================================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const searchResultsList = document.getElementById('searchResultsList');
const searchResultsClose = document.getElementById('searchResultsClose');

// Scheme Database for Search
const schemeDatabase = [
    // Education Schemes
    { title: 'West Bengal Student Scholarship', category: 'Education', link: 'https://www.wb.gov.in/scholarship', badge: 'Education' },
    { title: 'Kanyashree Scheme', category: 'Education', link: 'https://www.wb.gov.in/kanyashree', badge: 'Education' },
    { title: 'Sikshashree Scheme', category: 'Education', link: 'https://www.wb.gov.in/sikshashree', badge: 'Education' },
    
    // Health Schemes
    { title: 'Swasthya Sathi Scheme', category: 'Health', link: 'https://www.wb.gov.in/swasthya-sathi', badge: 'Health' },
    { title: 'National Health Mission', category: 'Health', link: 'https://www.nhm.gov.in', badge: 'Health' },
    { title: 'Arogya Sanjeevani', category: 'Health', link: 'https://www.wb.gov.in/arogya', badge: 'Health' },
    
    // Housing Schemes
    { title: 'Jai Jawahar Awas Yojana', category: 'Housing', link: 'https://www.wb.gov.in/housing', badge: 'Housing' },
    { title: 'Pradhan Mantri Awas Yojana', category: 'Housing', link: 'https://pmaymis.gov.in', badge: 'Housing' },
    { title: 'State Housing Scheme', category: 'Housing', link: 'https://www.wb.gov.in/state-housing', badge: 'Housing' },
    
    // Financial Schemes
    { title: 'Credit Link Capital Subsidy', category: 'Financial', link: 'https://www.wb.gov.in/clcss', badge: 'Financial' },
    { title: 'Mudra Yojana', category: 'Financial', link: 'https://www.mudra.org.in', badge: 'Financial' },
    { title: 'Stand-Up India Scheme', category: 'Financial', link: 'https://www.standupmitra.in', badge: 'Financial' },
    
    // Employment Schemes
    { title: 'Employment Exchange', category: 'Employment', link: 'https://www.wb.gov.in/employment', badge: 'Employment' },
    { title: 'Skill India Mission', category: 'Employment', link: 'https://www.skillindia.gov.in', badge: 'Employment' },
    
    // Agriculture Schemes
    { title: 'PM Kisan Samman Nidhi', category: 'Agriculture', link: 'https://pmkisan.gov.in', badge: 'Agriculture' },
    { title: 'Soil Health Card Scheme', category: 'Agriculture', link: 'https://soilhealth.dac.gov.in', badge: 'Agriculture' },
    { title: 'Crop Insurance Scheme', category: 'Agriculture', link: 'https://pmfby.gov.in', badge: 'Agriculture' },
    
    // Legal Schemes
    { title: 'Legal Aid Scheme', category: 'Legal', link: 'https://www.wb.gov.in/legal-aid', badge: 'Legal' },
    { title: 'Consumer Protection', category: 'Legal', link: 'https://consumeraffairs.nic.in', badge: 'Legal' },
    
    // Food & Nutrition
    { title: 'Mid-Day Meal Scheme', category: 'Food & Nutrition', link: 'https://mdm.gov.in', badge: 'Food' },
    { title: 'Public Distribution System', category: 'Food & Nutrition', link: 'https://www.wb.gov.in/pds', badge: 'Food' },
    
    // Skill Development
    { title: 'Pradhan Mantri Kaushal Vikas Yojana', category: 'Skill Development', link: 'https://pmkvyofficial.org', badge: 'Skill' },
    { title: 'Skill Development Mission', category: 'Skill Development', link: 'https://www.wb.gov.in/skill', badge: 'Skill' },
    
    // Rural Development
    { title: 'Mahatma Gandhi NREGA', category: 'Rural Development', link: 'https://nrega.nic.in', badge: 'Rural' },
    { title: 'Pradhan Mantri Gram Sadak Yojana', category: 'Rural Development', link: 'https://pmgsy.nic.in', badge: 'Rural' },
    
    // Digital India
    { title: 'Digital India Program', category: 'Digital India', link: 'https://digitalindia.gov.in', badge: 'Digital' },
    { title: 'Common Service Centres', category: 'Digital India', link: 'https://www.csc.gov.in', badge: 'Digital' },
    
    // Energy
    { title: 'Ujjwala Yojana', category: 'Energy', link: 'https://www.pmujjwala.gov.in', badge: 'Energy' },
    { title: 'Solar Rooftop Scheme', category: 'Energy', link: 'https://www.wb.gov.in/solar', badge: 'Energy' },
];

if (searchInput && searchBtn) {
    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        
        if (!query) {
            if (searchResults) {
                searchResults.style.display = 'none';
            }
            return;
        }
        
        const results = schemeDatabase.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.category.toLowerCase().includes(query) ||
            item.badge.toLowerCase().includes(query)
        );
        
        if (searchResults) {
            searchResults.style.display = 'block';
        }
        
        if (searchResultsList) {
            searchResultsList.innerHTML = '';
            
            if (results.length === 0) {
                searchResultsList.innerHTML = `
                    <div class="search-no-results">
                        <i class="fas fa-search" style="font-size:1.5rem;display:block;margin-bottom:8px;"></i>
                        No schemes found for "${searchInput.value}"
                    </div>
                `;
            } else {
                results.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <span class="result-title">${item.title}</span>
                        <div style="display:flex;align-items:center;gap:10px;">
                            <span class="result-badge">${item.badge}</span>
                            <a href="${item.link}" target="_blank" class="result-link">
                                View <i class="fas fa-external-link-alt" style="font-size:0.6rem;"></i>
                            </a>
                        </div>
                    `;
                    searchResultsList.appendChild(resultItem);
                });
            }
        }
    };
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchResults) {
                searchResults.style.display = 'none';
            }
        }
    });
}

if (searchResultsClose) {
    searchResultsClose.addEventListener('click', () => {
        if (searchResults) {
            searchResults.style.display = 'none';
        }
    });
}

document.addEventListener('click', (e) => {
    if (searchResults && !searchResults.contains(e.target) && 
        e.target !== searchInput && e.target !== searchBtn) {
        searchResults.style.display = 'none';
    }
});

document.querySelectorAll('.search-suggestions span').forEach(suggestion => {
    suggestion.addEventListener('click', () => {
        if (searchInput) {
            searchInput.value = suggestion.dataset.search || suggestion.textContent;
            if (searchBtn) {
                searchBtn.click();
            }
        }
    });
});

// ============================================
// 6. FAQ TOGGLE - NEW
// ============================================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) {
                other.classList.remove('active');
            }
        });
        
        // Toggle current
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// ============================================
// 7. PARALLAX EFFECT
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
// 8. SCROLL TOP BUTTON
// ============================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// 9. CATEGORY CARD SCROLL ANIMATION
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
// 10. ACTIVE NAV LINK
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
// 11. DYNAMIC YEAR IN FOOTER
// ============================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
}

// ============================================
// THEME SWITCHER - COMPLETE FIX
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get elements
    const themeBtn = document.getElementById('themeToggleBtn');
    const themePanel = document.getElementById('themeDropdownPanel');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    console.log('🔍 Theme elements found:', {
        btn: themeBtn,
        panel: themePanel,
        options: themeOptions.length
    });
    
    // Toggle dropdown on button click
    if (themeBtn && themePanel) {
        themeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            // Toggle active class
            this.classList.toggle('active');
            themePanel.classList.toggle('active');
            
            console.log('🎨 Theme dropdown toggled:', themePanel.classList.contains('active'));
        });
    } else {
        console.error('❌ Theme elements not found!');
    }
    
    // Apply theme function
    function applyTheme(theme) {
        const root = document.documentElement;
        
        // Remove all theme classes
        root.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-orange', 'theme-pink', 'theme-red', 'theme-teal');
        
        // Apply new theme (if not default)
        if (theme !== 'default') {
            root.classList.add(`theme-${theme}`);
        }
        
        // Update active state in dropdown
        themeOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.theme === theme) {
                opt.classList.add('active');
            }
        });
        
        // Save to localStorage
        localStorage.setItem('wbseva-theme', theme);
        
        console.log(`✅ Theme changed to: ${theme}`);
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('wbseva-theme') || 'default';
    applyTheme(savedTheme);
    
    // Theme option click
    themeOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const theme = this.dataset.theme;
            if (theme) {
                applyTheme(theme);
                
                // Close dropdown
                if (themePanel) {
                    themePanel.classList.remove('active');
                }
                if (themeBtn) {
                    themeBtn.classList.remove('active');
                }
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInside = themePanel?.contains(e.target) || themeBtn?.contains(e.target);
        if (!isClickInside) {
            if (themePanel) {
                themePanel.classList.remove('active');
            }
            if (themeBtn) {
                themeBtn.classList.remove('active');
            }
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (themePanel) {
                themePanel.classList.remove('active');
            }
            if (themeBtn) {
                themeBtn.classList.remove('active');
            }
        }
    });
    
    console.log('🎨 Theme switcher initialized successfully!');
});
// ============================================
// 13. KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }
    if (e.key === 'Escape') {
        if (searchResults) {
            searchResults.style.display = 'none';
        }
        if (searchInput && document.activeElement === searchInput) {
            searchInput.blur();
        }
    }
});

console.log('✅ WBseva AI loaded successfully!');
console.log('💡 Press Ctrl+K to search');
console.log('📋 All sections loaded: Hero, Stats, Categories, How to Apply, About, FAQ');
// ============================================
// STANDALONE THEME BUTTON - 100% WORKING
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Theme button script loaded...');
    
    // Get elements
    const themeBtn = document.getElementById('standaloneThemeBtn');
    const themeDropdown = document.getElementById('standaloneThemeDropdown');
    const themeOptions = document.querySelectorAll('.theme-option-item');
    
    // Check if elements exist
    if (!themeBtn) {
        console.error('❌ Theme button not found!');
        return;
    }
    
    console.log('✅ Theme button found!');
    
    // Toggle dropdown
    themeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        this.classList.toggle('active');
        themeDropdown.classList.toggle('active');
        
        console.log('📂 Dropdown toggled:', themeDropdown.classList.contains('active'));
    });
    
    // Apply theme function
    function applyTheme(theme) {
        const root = document.documentElement;
        
        // Remove all theme classes
        root.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-orange', 'theme-pink', 'theme-red', 'theme-teal');
        
        // Apply new theme
        if (theme !== 'default') {
            root.classList.add(`theme-${theme}`);
        }
        
        // Update active state
        themeOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.theme === theme) {
                opt.classList.add('active');
            }
        });
        
        // Save to localStorage
        localStorage.setItem('wbseva-theme', theme);
        
        console.log(`🎨 Theme changed to: ${theme}`);
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('wbseva-theme') || 'default';
    applyTheme(savedTheme);
    
    // Theme option clicks
    themeOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const theme = this.dataset.theme;
            if (theme) {
                applyTheme(theme);
                
                // Close dropdown
                themeDropdown.classList.remove('active');
                themeBtn.classList.remove('active');
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInside = themeDropdown?.contains(e.target) || themeBtn?.contains(e.target);
        if (!isClickInside) {
            themeDropdown?.classList.remove('active');
            themeBtn?.classList.remove('active');
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            themeDropdown?.classList.remove('active');
            themeBtn?.classList.remove('active');
        }
    });
    
    console.log('🎨 Theme button ready!');
});