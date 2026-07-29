// ============================================
// COMPLETE SCRIPT.JS - ALL 14 CATEGORIES
// ============================================

// ============================================
// ALL SCHEMES DATA (14 Categories)
// ============================================
const allSchemesData = {
    education: [
        { id: 'edu1', title: 'SVMCM Scholarship', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹1,000–8,000/month', overview: 'Merit scholarship for economically weaker students.', applyLink: 'https://svmcm.wbhed.gov.in', tags: ['Scholarship', 'Merit'], eligibility: ['60% marks', 'Income < ₹2.5L'], benefits: ['Monthly stipend', 'Covers all levels'], documents: ['Marksheet', 'Income proof', 'Aadhaar'] },
        { id: 'edu2', title: 'Kanyashree Prakalpa', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹1,000/yr + ₹25,000', overview: 'Empowers girl students and prevents child marriage.', applyLink: 'https://wbkanyashree.gov.in', tags: ['Girl Child', 'Scholarship'], eligibility: ['13-18 yrs', 'Class 8-12', 'Income < ₹1.2L'], benefits: ['Annual scholarship', 'One-time grant'], documents: ['Birth cert', 'Aadhaar', 'Income proof'] },
        { id: 'edu3', title: 'Student Credit Card', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Up to ₹10 Lakh', overview: 'Interest-free education loan for higher studies.', applyLink: 'https://www.wb.gov.in', tags: ['Loan', 'Education'], eligibility: ['18-45 yrs', 'Higher education'], benefits: ['4% interest', 'Subsidy by state'], documents: ['Aadhaar', 'Admission letter', 'Income proof'] }
    ],
    agriculture: [
        { id: 'agri1', title: 'Sprinkler / Drip Irrigation', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: '50% Subsidy', overview: 'Financial aid for modern irrigation systems.', applyLink: 'https://www.wb.gov.in/irrigation', tags: ['Irrigation', 'Farmer'], eligibility: ['Farmer with land', 'Kisan Card'], benefits: ['50% subsidy', 'Technical support'], documents: ['Land papers', 'Aadhaar', 'Kisan Card'] },
        { id: 'agri2', title: 'Amar Fasal Amar Gola', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: '₹5,000–25,000', overview: 'Storage and vending support for marginal farmers.', applyLink: 'https://www.wb.gov.in/afag', tags: ['Storage', 'Farmer'], eligibility: ['Marginal farmer', 'Kisan Card'], benefits: ['Warehouse support', 'Vending cart'], documents: ['Land records', 'Aadhaar', 'Kisan Card'] },
        { id: 'agri3', title: 'PM Kisan Samman Nidhi', category: 'Agriculture', state: 'All India', level: 'Central', subsidy: '₹6,000/year', overview: 'Income support for small and marginal farmers.', applyLink: 'https://pmkisan.gov.in', tags: ['Income', 'Farmer'], eligibility: ['Small farmer', 'Cultivable land'], benefits: ['₹6,000/year', '3 instalments'], documents: ['Aadhaar', 'Land papers', 'Bank account'] }
    ],
    health: [
        { id: 'health1', title: 'Swasthya Sathi', category: 'Health', state: 'West Bengal', level: 'State', subsidy: '₹5 Lakh Cover', overview: 'Health insurance for all WB residents.', applyLink: 'https://www.wb.gov.in/swasthya-sathi', tags: ['Insurance', 'Family'], eligibility: ['WB resident'], benefits: ['₹5L cover', 'Cashless treatment'], documents: ['Aadhaar', 'Address proof'] }
    ],
    housing: [
        { id: 'housing1', title: 'Jai Jawahar Awas Yojana', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Financial Aid', overview: 'Housing for EWS and LIG groups.', applyLink: 'https://www.wb.gov.in/housing', tags: ['Housing', 'Subsidy'], eligibility: ['EWS/LIG', 'No pucca house'], benefits: ['Financial aid', 'Affordable housing'], documents: ['Income proof', 'Land papers'] }
    ],
    financial: [
        { id: 'fin1', title: 'Credit Link Capital Subsidy', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Subsidy', overview: 'Capital subsidy for small businesses.', applyLink: 'https://www.wb.gov.in/clcss', tags: ['Business', 'Subsidy'], eligibility: ['Small entrepreneur', 'MSME'], benefits: ['Capital support', 'Business aid'], documents: ['Business plan', 'Aadhaar'] }
    ],
    employment: [
        { id: 'emp1', title: 'Employment Exchange', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Job Support', overview: 'Connects job seekers with employers.', applyLink: 'https://www.wb.gov.in/employment', tags: ['Job', 'Career'], eligibility: ['Unemployed youth', 'Qualified'], benefits: ['Job registration', 'Placement'], documents: ['Educational certs', 'Aadhaar'] }
    ],
    skill: [
        { id: 'skill1', title: 'PMKVY', category: 'Skill Development', state: 'All India', level: 'Central', subsidy: 'Free Training', overview: 'Skill training for youth.', applyLink: 'https://pmkvyofficial.org', tags: ['Training', 'Certification'], eligibility: ['15–45 years', '5th pass'], benefits: ['Free training', 'Placement'], documents: ['Aadhaar', 'Education cert'] }
    ],
    rural: [
        { id: 'rural1', title: 'MGNREGA', category: 'Rural Development', state: 'All India', level: 'Central', subsidy: '100 Days Work', overview: 'Guaranteed rural employment.', applyLink: 'https://nrega.nic.in', tags: ['Employment', 'Rural'], eligibility: ['Rural resident', 'Adult'], benefits: ['100 days work', 'Wage'], documents: ['Job card', 'Aadhaar'] }
    ],
    digital: [
        { id: 'digital1', title: 'Digital India', category: 'Digital India', state: 'All India', level: 'Central', subsidy: 'Free Services', overview: 'Digital empowerment for citizens.', applyLink: 'https://digitalindia.gov.in', tags: ['Technology', 'Aadhaar'], eligibility: ['All citizens', 'Aadhaar'], benefits: ['Digital identity', 'Online services'], documents: ['Aadhaar', 'Mobile'] }
    ],
    energy: [
        { id: 'energy1', title: 'Ujjwala Yojana', category: 'Energy', state: 'All India', level: 'Central', subsidy: 'Free LPG', overview: 'LPG for BPL women.', applyLink: 'https://www.pmujjwala.gov.in', tags: ['LPG', 'Women'], eligibility: ['BPL', '18+ woman'], benefits: ['Free connection', 'Subsidized cylinders'], documents: ['BPL card', 'Aadhaar'] }
    ],
    women: [
        { id: 'women1', title: 'Kanyashree', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: '₹1,000/yr + ₹25,000', overview: 'Girl child education support.', applyLink: 'https://wbkanyashree.gov.in', tags: ['Girl child', 'Scholarship'], eligibility: ['13–18 yrs', 'Class 8–12'], benefits: ['Annual scholarship', 'One-time grant'], documents: ['Birth cert', 'Income proof'] }
    ],
    legal: [
        { id: 'legal1', title: 'Legal Aid', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free Services', overview: 'Free legal help for the needy.', applyLink: 'https://www.wb.gov.in/legal-aid', tags: ['Justice', 'Aid'], eligibility: ['EWS', 'Marginalized'], benefits: ['Free advice', 'Representation'], documents: ['Income proof', 'Case details'] }
    ],
    food: [
        { id: 'food1', title: 'Mid-Day Meal', category: 'Food & Nutrition', state: 'All India', level: 'Central', subsidy: 'Free Meals', overview: 'Nutritional meals for school children.', applyLink: 'https://mdm.gov.in', tags: ['Nutrition', 'School'], eligibility: ['Primary students'], benefits: ['Free meals', 'Better attendance'], documents: ['School ID', 'Aadhaar'] }
    ],
    transport: [
        { id: 'transport1', title: 'Public Transport Subsidy', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Subsidized Fares', overview: 'Discounted travel for seniors/students.', applyLink: 'https://www.wb.gov.in/transport', tags: ['Travel', 'Subsidy'], eligibility: ['Senior/Student/Disabled'], benefits: ['Discount on fares'], documents: ['ID card', 'Aadhaar'] }
    ]
};

// ============================================
// CATEGORIES DISPLAY
// ============================================
const categories = [
    { icon: 'fa-graduation-cap', name: 'Education', count: '3 Schemes', color: '#6C3CE1', key: 'education' },
    { icon: 'fa-heart-pulse', name: 'Healthcare', count: '1 Schemes', color: '#FF6B6B', key: 'health' },
    { icon: 'fa-venus-mars', name: 'Women Empowerment', count: '1 Schemes', color: '#EC4899', key: 'women' },
    { icon: 'fa-building', name: 'Housing', count: '1 Schemes', color: '#F59E0B', key: 'housing' },
    { icon: 'fa-hand-holding-dollar', name: 'Financial', count: '1 Schemes', color: '#06D6A0', key: 'financial' },
    { icon: 'fa-briefcase', name: 'Employment', count: '1 Schemes', color: '#3B82F6', key: 'employment' },
    { icon: 'fa-tractor', name: 'Agriculture', count: '3 Schemes', color: '#10B981', key: 'agriculture' },
    { icon: 'fa-scale-balanced', name: 'Legal', count: '1 Schemes', color: '#8B5CF6', key: 'legal' },
    { icon: 'fa-utensils', name: 'Food & Nutrition', count: '1 Schemes', color: '#F472B6', key: 'food' },
    { icon: 'fa-people-arrows', name: 'Skill Development', count: '1 Schemes', color: '#6366F1', key: 'skill' },
    { icon: 'fa-truck', name: 'Transportation', count: '1 Schemes', color: '#14B8A6', key: 'transport' },
    { icon: 'fa-bolt', name: 'Energy', count: '1 Schemes', color: '#F59E0B', key: 'energy' },
    { icon: 'fa-wifi', name: 'Digital India', count: '1 Schemes', color: '#8B5CF6', key: 'digital' },
    { icon: 'fa-tree', name: 'Rural Development', count: '1 Schemes', color: '#10B981', key: 'rural' }
];

// ============================================
// RENDER CATEGORIES
// ============================================
const categoriesGrid = document.getElementById('categoriesGrid');

categories.forEach((cat, index) => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <div class="category-icon" style="background: ${cat.color}20; color: ${cat.color}">
            <i class="fas ${cat.icon}"></i>
        </div>
        <h3>${cat.name}</h3>
        <p>${cat.count}</p>
        <div class="category-hover-line" style="background: ${cat.color}"></div>
    `;
    
    card.addEventListener('click', function() {
        const categoryKey = cat.key;
        const categoryName = cat.name;
        showSchemesByCategory(categoryKey, categoryName);
    });
    
    categoriesGrid.appendChild(card);
});

// ============================================
// SHOW SCHEMES BY CATEGORY
// ============================================
function showSchemesByCategory(key, name) {
    const schemes = allSchemesData[key] || [];
    
    if (schemes.length === 0) {
        alert(`No schemes found for "${name}". Please try another category.`);
        return;
    }
    
    document.querySelector('.categories').style.display = 'none';
    const displaySection = document.getElementById('educationSchemes');
    displaySection.style.display = 'block';
    displaySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    const header = displaySection.querySelector('.section-header');
    header.querySelector('.section-tag').textContent = `${name} Schemes`;
    header.querySelector('h2').innerHTML = `West Bengal <span class="gradient-text">${name} Schemes</span>`;
    header.querySelector('p').textContent = `${schemes.length} schemes available`;
    
    const grid = document.getElementById('educationSchemesGrid');
    grid.innerHTML = schemes.map((scheme, index) => `
        <div class="scheme-card-item" onclick="showSchemeDetail('${scheme.id}', '${key}')" style="animation-delay: ${index * 0.1}s">
            <div class="scheme-card-icon" style="background: ${getCategoryColor(key)}20; color: ${getCategoryColor(key)}">
                <i class="fas fa-file-alt"></i>
            </div>
            <div class="scheme-card-content">
                <h3>${scheme.title}</h3>
                <div class="scheme-card-meta">
                    <span class="scheme-category">${scheme.category}</span>
                    <span class="scheme-amount">${scheme.subsidy}</span>
                </div>
                <p>${scheme.overview}</p>
                <div class="scheme-card-footer">
                    <span class="scheme-eligibility">👤 ${scheme.eligibility.join(', ')}</span>
                    <button class="view-detail-btn" onclick="event.stopPropagation(); showSchemeDetail('${scheme.id}', '${key}')">
                        View Details →
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('schemeDetailView').style.display = 'none';
}

// ============================================
// GET CATEGORY COLOR
// ============================================
function getCategoryColor(key) {
    const colors = {
        education: '#6C3CE1', agriculture: '#10B981', health: '#FF6B6B',
        housing: '#F59E0B', financial: '#06D6A0', employment: '#3B82F6',
        skill: '#6366F1', rural: '#14B8A6', digital: '#8B5CF6',
        energy: '#F59E0B', women: '#EC4899', legal: '#8B5CF6',
        food: '#F472B6', transport: '#14B8A6'
    };
    return colors[key] || '#6C3CE1';
}

// ============================================
// SHOW SCHEME DETAIL
// ============================================
function showSchemeDetail(id, categoryKey) {
    const schemes = allSchemesData[categoryKey] || [];
    const scheme = schemes.find(s => s.id === id);
    if (!scheme) return;
    
    const grid = document.getElementById('educationSchemesGrid');
    const detailView = document.getElementById('schemeDetailView');
    
    grid.style.display = 'none';
    detailView.style.display = 'block';
    detailView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    detailView.innerHTML = `
        <div class="scheme-detail-card">
            <button class="close-detail-btn" onclick="closeSchemeDetail()">
                <i class="fas fa-times"></i>
            </button>
            <div class="scheme-detail-header">
                <div class="scheme-detail-icon" style="background: ${getCategoryColor(categoryKey)}20; color: ${getCategoryColor(categoryKey)}">
                    <i class="fas fa-file-alt"></i>
                </div>
                <div>
                    <span class="scheme-detail-badge" style="background: ${getCategoryColor(categoryKey)}20; color: ${getCategoryColor(categoryKey)}">
                        ${scheme.level}
                    </span>
                    <h2>${scheme.title}</h2>
                    <div class="scheme-detail-meta">
                        <span>📂 ${scheme.category}</span>
                        <span>💰 ${scheme.subsidy}</span>
                        <span>📍 ${scheme.state}</span>
                    </div>
                </div>
            </div>
            <div class="scheme-detail-body">
                <div class="scheme-detail-section"><h4>📋 Description</h4><p>${scheme.overview}</p></div>
                <div class="scheme-detail-section"><h4>✅ Eligibility</h4><ul>${scheme.eligibility.map(e => `<li>${e}</li>`).join('')}</ul></div>
                <div class="scheme-detail-section"><h4>🎯 Benefits</h4><ul>${scheme.benefits.map(b => `<li>${b}</li>`).join('')}</ul></div>
                <div class="scheme-detail-section"><h4>📄 Documents</h4><ul>${scheme.documents.map(d => `<li>${d}</li>`).join('')}</ul></div>
                <div class="scheme-detail-actions">
                    <a href="${scheme.applyLink}" target="_blank" class="apply-now-btn"><i class="fas fa-external-link-alt"></i> Apply Now</a>
                    <button class="save-scheme-btn" onclick="saveScheme('${scheme.id}')"><i class="fas fa-bookmark"></i> Save</button>
                    <button class="share-scheme-btn" onclick="shareScheme('${scheme.id}')"><i class="fas fa-share-alt"></i> Share</button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// CLOSE DETAIL
// ============================================
function closeSchemeDetail() {
    document.getElementById('educationSchemesGrid').style.display = 'grid';
    document.getElementById('schemeDetailView').style.display = 'none';
}

// ============================================
// BACK TO CATEGORIES
// ============================================
function showCategories() {
    document.querySelector('.categories').style.display = 'block';
    document.getElementById('educationSchemes').style.display = 'none';
    document.getElementById('schemeDetailView').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// SAVE & SHARE
// ============================================
function saveScheme(id) {
    const saved = JSON.parse(localStorage.getItem('savedSchemes') || '[]');
    if (!saved.includes(id)) {
        saved.push(id);
        localStorage.setItem('savedSchemes', JSON.stringify(saved));
        alert('✅ Scheme saved successfully!');
    } else {
        alert('⚠️ Scheme already saved.');
    }
}

function shareScheme(id) {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({ title: 'WBseva AI Scheme', url: url }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url).then(() => alert('✅ Link copied!'));
    }
}

// ============================================
// NAVBAR SCROLL
// ============================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================
// MOBILE NAV TOGGLE
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

// ============================================
// THEME SWITCHER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const themeOptions = document.querySelectorAll('.theme-dropdown li');
    
    if (themeBtn) {
        themeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            this.classList.toggle('active');
            themeDropdown.classList.toggle('active');
        });
    }
    
    function applyTheme(theme) {
        const root = document.documentElement;
        root.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-orange', 'theme-pink', 'theme-red', 'theme-teal');
        if (theme !== 'default') root.classList.add(`theme-${theme}`);
        themeOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.theme === theme) opt.classList.add('active');
        });
        localStorage.setItem('wbseva-theme', theme);
    }
    
    const savedTheme = localStorage.getItem('wbseva-theme') || 'default';
    applyTheme(savedTheme);
    
    themeOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            applyTheme(this.dataset.theme);
            themeDropdown.classList.remove('active');
            themeBtn.classList.remove('active');
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!themeDropdown?.contains(e.target) && !themeBtn?.contains(e.target)) {
            themeDropdown?.classList.remove('active');
            themeBtn?.classList.remove('active');
        }
    });
});

// ============================================
// STATISTICS COUNTER
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
// SEARCH FUNCTIONALITY
// ============================================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const searchResultsList = document.getElementById('searchResultsList');
const searchResultsClose = document.getElementById('searchResultsClose');

if (searchInput && searchBtn) {
    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            searchResults.style.display = 'none';
            return;
        }
        
        let results = [];
        for (let key in allSchemesData) {
            allSchemesData[key].forEach(scheme => {
                if (scheme.title.toLowerCase().includes(query) || 
                    scheme.category.toLowerCase().includes(query) ||
                    scheme.tags.some(t => t.toLowerCase().includes(query))) {
                    results.push(scheme);
                }
            });
        }
        
        searchResults.style.display = 'block';
        searchResultsList.innerHTML = results.length === 0 ? 
            `<div class="search-no-results">No schemes found for "${searchInput.value}"</div>` :
            results.map(scheme => `
                <div class="search-result-item">
                    <span class="result-title">${scheme.title}</span>
                    <div style="display:flex;align-items:center;gap:10px;">
                        <span class="result-badge">${scheme.category}</span>
                        <a href="${scheme.applyLink}" target="_blank" class="result-link">View <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            `).join('');
    };
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') searchResults.style.display = 'none';
    });
}

if (searchResultsClose) {
    searchResultsClose.addEventListener('click', () => {
        searchResults.style.display = 'none';
    });
}

document.addEventListener('click', (e) => {
    if (searchResults && !searchResults.contains(e.target) && 
        e.target !== searchInput && e.target !== searchBtn) {
        searchResults.style.display = 'none';
    }
});

// ============================================
// FAQ TOGGLE
// ============================================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

// ============================================
// PARALLAX EFFECT
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
// SCROLL TOP BUTTON
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
// CATEGORY CARD ANIMATION
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
// ACTIVE NAV LINK
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
// DYNAMIC YEAR
// ============================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
}

console.log('✅ WBseva AI loaded successfully!');
console.log('📚 All 14 categories working!');