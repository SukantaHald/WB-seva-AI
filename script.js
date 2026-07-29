// ============================================
// COMPLETE SCRIPT.JS - ALL CATEGORIES WORK
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
// 3. THEME SWITCHER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const themeOptions = document.querySelectorAll('.theme-dropdown li');
    
    if (!themeBtn) return;
    
    themeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        this.classList.toggle('active');
        themeDropdown.classList.toggle('active');
    });
    
    function applyTheme(theme) {
        const root = document.documentElement;
        root.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-orange', 'theme-pink', 'theme-red', 'theme-teal');
        if (theme !== 'default') {
            root.classList.add(`theme-${theme}`);
        }
        themeOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.theme === theme) {
                opt.classList.add('active');
            }
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
// 4. STATISTICS COUNTER
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
// 5. ALL CATEGORIES DATA (14 Categories)
// ============================================
const allSchemesData = {
    education: [
        { id: 'edu1', title: 'SVMCM Scholarship', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹1,000–8,000/month', overview: 'Merit scholarship for economically weaker students.', applyLink: 'https://svmcm.wbhed.gov.in', tags: ['Scholarship', 'Merit'], eligibility: ['60% marks', 'Income < ₹2.5L'], benefits: ['Monthly stipend', 'Covers all levels'], documents: ['Marksheet', 'Income proof', 'Aadhaar'] },
        { id: 'edu2', title: 'Kanyashree Prakalpa', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹1,000/yr + ₹25,000', overview: 'Empowers girl students and prevents child marriage.', applyLink: 'https://wbkanyashree.gov.in', tags: ['Girl Child', 'Scholarship'], eligibility: ['13-18 yrs', 'Class 8-12', 'Income < ₹1.2L'], benefits: ['Annual scholarship', 'One-time grant'], documents: ['Birth cert', 'Aadhaar', 'Income proof'] },
        { id: 'edu3', title: 'Student Credit Card', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Up to ₹10 Lakh', overview: 'Interest-free education loan for higher studies.', applyLink: 'https://www.wb.gov.in', tags: ['Loan', 'Education'], eligibility: ['18-45 yrs', 'Higher education'], benefits: ['4% interest', 'Subsidy by state'], documents: ['Aadhaar', 'Admission letter', 'Income proof'] },
        { id: 'edu4', title: 'Aikyashree Scholarship', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Up to ₹60,000/yr', overview: 'Scholarship for minority students.', applyLink: 'https://www.wbmdfcscholarship.gov.in', tags: ['Minority', 'Scholarship'], eligibility: ['50% marks', 'Income < ₹2L'], benefits: ['Pre-matric', 'Post-matric', 'Merit-cum-Means'], documents: ['Minority cert', 'Marksheet', 'Income proof'] },
        { id: 'edu5', title: 'Nabanna Scholarship', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹10,000', overview: 'One-time financial aid from CM Relief Fund.', applyLink: 'https://cmrf.wb.gov.in', tags: ['Financial Aid'], eligibility: ['Students in need'], benefits: ['₹10,000 assistance', 'Direct transfer'], documents: ['Aadhaar', 'Income proof', 'Bank account'] },
        { id: 'edu6', title: 'PM-SHRI Scheme', category: 'Education', state: 'West Bengal', level: 'Central', subsidy: 'Infrastructure Upgrades', overview: 'Upgrades school infrastructure and facilities.', applyLink: 'https://www.pmshri.gov.in', tags: ['Infrastructure'], eligibility: ['Government schools'], benefits: ['Infrastructure upgrades', 'Solar panels', 'Mid-day meals'], documents: ['School registration', 'Aadhaar'] },
        { id: 'edu7', title: 'Annapurna Scheme', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹50,000', overview: 'Support for unmarried female students in higher education.', applyLink: 'https://www.wb.gov.in', tags: ['Women', 'Financial Aid'], eligibility: ['Unmarried female', 'Higher education'], benefits: ['₹50,000 assistance', 'Reduces dropout'], documents: ['Aadhaar', 'Income proof', 'College ID'] },
        { id: 'edu8', title: 'JBNSTS Senior Scholarship', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Tuition Support', overview: 'Science talent scholarship for UG students.', applyLink: 'https://www.jbnsts.ac.in', tags: ['Science', 'Scholarship'], eligibility: ['UG in Science/Engg/Medicine'], benefits: ['Tuition support', 'Multi-phased test'], documents: ['Aadhaar', 'Marksheet', 'College ID'] },
        { id: 'edu9', title: 'JBNSTS Junior Scholarship', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Tuition Support', overview: 'Science talent identification at HS level.', applyLink: 'https://www.jbnsts.ac.in', tags: ['Science', 'Talent'], eligibility: ['HS Science students'], benefits: ['Identify talent', 'Nurture at HS level'], documents: ['Aadhaar', 'Marksheet', 'School ID'] },
        { id: 'edu10', title: 'Post-Matric Stipend', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹2,550–4,900/yr', overview: 'Stipend for weaker section students.', applyLink: 'https://www.wb.gov.in', tags: ['Stipend'], eligibility: ['<50% marks', 'Income < ₹2L'], benefits: ['₹2,550–4,900/yr', 'Supports weaker sections'], documents: ['Aadhaar', 'Marksheet', 'Income proof'] },
        { id: 'edu11', title: 'PM POSHAN', category: 'Education', state: 'West Bengal', level: 'Central', subsidy: '₹10/student/day', overview: 'Enhanced mid-day meal nutrition support.', applyLink: 'https://www.poshan.gov.in', tags: ['Nutrition'], eligibility: ['Primary students'], benefits: ['₹10/student/day', 'Better nutrition'], documents: ['School registration', 'Student list'] },
        { id: 'edu12', title: 'Infrastructure & Facility Upgrades', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Facility Upgrades', overview: 'Comprehensive school infrastructure improvements.', applyLink: 'https://www.wb.gov.in', tags: ['Infrastructure'], eligibility: ['All government schools'], benefits: ['Ceiling fans', 'Clean toilets', 'Solar panels', 'Water purifiers'], documents: ['School registration', 'Aadhaar'] }
    ],
    agriculture: [
        { id: 'agri1', title: 'Sprinkler / Drip Irrigation', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: '50% Subsidy', overview: 'Financial aid for modern irrigation systems.', applyLink: 'https://www.wb.gov.in/irrigation', tags: ['Irrigation', 'Farmer'], eligibility: ['Farmer with land', 'Kisan Card'], benefits: ['50% subsidy', 'Technical support'], documents: ['Land papers', 'Aadhaar', 'Kisan Card'] },
        { id: 'agri2', title: 'Amar Fasal Amar Gola', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: '₹5,000–25,000', overview: 'Storage and vending support for marginal farmers.', applyLink: 'https://www.wb.gov.in/afag', tags: ['Storage', 'Farmer'], eligibility: ['Marginal farmer', 'Kisan Card'], benefits: ['Warehouse support', 'Vending cart'], documents: ['Land records', 'Aadhaar', 'Kisan Card'] },
        { id: 'agri3', title: 'Animal Breeding Scheme', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Subsidy Provided', overview: 'Supply of breedable Murrah bulls on subsidy.', applyLink: 'https://www.wb.gov.in/animal-breeding', tags: ['Animal', 'Breed'], eligibility: ['Animal husbandry farmer'], benefits: ['Breedable bulls', 'Better milk production'], documents: ['Aadhaar', 'Animal husbandry registration'] },
        { id: 'agri4', title: 'AGR 2 (Farm Mechanization)', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Financial Assistance', overview: 'Farm mechanization for non-SC/ST farmers.', applyLink: 'https://www.wb.gov.in/farm-mechanization', tags: ['Mechanization'], eligibility: ['Non-SC/ST farmer', 'Cultivable land'], benefits: ['Equipment aid', 'Subsidy on machinery'], documents: ['Aadhaar', 'Land papers', 'Farmer registration'] },
        { id: 'agri5', title: 'Agroforestry under RKVV', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Financial Support', overview: 'Integrating trees with crops.', applyLink: 'https://www.wb.gov.in/agroforestry', tags: ['Forestry', 'Crop'], eligibility: ['Farmer with land'], benefits: ['Financial support', 'Sustainable farming'], documents: ['Aadhaar', 'Land papers', 'Farmer registration'] },
        { id: 'agri6', title: 'AGR 3 (Farm Mechanization-ST)', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Financial Assistance', overview: 'Farm mechanization for ST farmers.', applyLink: 'https://www.wb.gov.in/farm-mechanization-st', tags: ['Mechanization', 'ST'], eligibility: ['ST farmer', 'Cultivable land'], benefits: ['Equipment aid', 'Special subsidy'], documents: ['Aadhaar', 'ST cert', 'Land papers'] },
        { id: 'agri7', title: 'PM Kisan Samman Nidhi', category: 'Agriculture', state: 'All India', level: 'Central', subsidy: '₹6,000/year', overview: 'Income support for small and marginal farmers.', applyLink: 'https://pmkisan.gov.in', tags: ['Income', 'Farmer'], eligibility: ['Small farmer', 'Cultivable land'], benefits: ['₹6,000/year', '3 instalments'], documents: ['Aadhaar', 'Land papers', 'Bank account'] },
        { id: 'agri8', title: 'Soil Health Card', category: 'Agriculture', state: 'All India', level: 'Central', subsidy: 'Free Service', overview: 'Soil testing and fertilizer recommendations.', applyLink: 'https://soilhealth.dac.gov.in', tags: ['Soil', 'Health'], eligibility: ['All farmers'], benefits: ['Free testing', 'Fertilizer advice'], documents: ['Aadhaar', 'Land papers'] },
        { id: 'agri9', title: 'Crop Insurance (PMFBY)', category: 'Agriculture', state: 'All India', level: 'Central', subsidy: 'Insurance Coverage', overview: 'Crop loss insurance due to natural calamities.', applyLink: 'https://pmfby.gov.in', tags: ['Insurance', 'Crop'], eligibility: ['Registered farmer'], benefits: ['Insurance coverage', 'Low premium'], documents: ['Aadhaar', 'Land papers', 'Crop details'] }
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
// 6. CATEGORIES DISPLAY
// ============================================
const categories = [
    { icon: 'fa-graduation-cap', name: 'Education', count: '12 Schemes', color: '#6C3CE1', key: 'education' },
    { icon: 'fa-heart-pulse', name: 'Healthcare', count: '8 Schemes', color: '#FF6B6B', key: 'health' },
    { icon: 'fa-venus-mars', name: 'Women Empowerment', count: '6 Schemes', color: '#EC4899', key: 'women' },
    { icon: 'fa-building', name: 'Housing', count: '6 Schemes', color: '#F59E0B', key: 'housing' },
    { icon: 'fa-hand-holding-dollar', name: 'Financial', count: '15 Schemes', color: '#06D6A0', key: 'financial' },
    { icon: 'fa-briefcase', name: 'Employment', count: '10 Schemes', color: '#3B82F6', key: 'employment' },
    { icon: 'fa-tractor', name: 'Agriculture', count: '9 Schemes', color: '#10B981', key: 'agriculture' },
    { icon: 'fa-scale-balanced', name: 'Legal', count: '7 Schemes', color: '#8B5CF6', key: 'legal' },
    { icon: 'fa-utensils', name: 'Food & Nutrition', count: '5 Schemes', color: '#F472B6', key: 'food' },
    { icon: 'fa-people-arrows', name: 'Skill Development', count: '14 Schemes', color: '#6366F1', key: 'skill' },
    { icon: 'fa-truck', name: 'Transportation', count: '8 Schemes', color: '#14B8A6', key: 'transport' },
    { icon: 'fa-bolt', name: 'Energy', count: '10 Schemes', color: '#F59E0B', key: 'energy' },
    { icon: 'fa-wifi', name: 'Digital India', count: '12 Schemes', color: '#8B5CF6', key: 'digital' },
    { icon: 'fa-tree', name: 'Rural Development', count: '15 Schemes', color: '#10B981', key: 'rural' }
];

// ============================================
// 7. RENDER CATEGORIES
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
    
    // ALL categories show schemes on same page like Education
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3')?.textContent || '';
        const categoryKey = cat.key;
        showSchemesByCategory(categoryKey, categoryName);
    });
    
    categoriesGrid.appendChild(card);
});

// ============================================
// 8. SHOW SCHEMES BY CATEGORY (Like Education)
// ============================================
function showSchemesByCategory(key, name) {
    const schemes = allSchemesData[key] || [];
    
    // Hide categories, show schemes
    document.querySelector('.categories').style.display = 'none';
    const displaySection = document.getElementById('educationSchemes');
    displaySection.style.display = 'block';
    displaySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Update header
    const header = displaySection.querySelector('.section-header');
    header.querySelector('.section-tag').textContent = `${name} Schemes`;
    header.querySelector('h2').innerHTML = `West Bengal <span class="gradient-text">${name} Schemes</span>`;
    header.querySelector('p').textContent = `${schemes.length}+ schemes available`;
    
    // Render schemes
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
    
    // Hide detail view
    document.getElementById('schemeDetailView').style.display = 'none';
}

// ============================================
// 9. GET CATEGORY COLOR
// ============================================
function getCategoryColor(key) {
    const colors = {
        education: '#6C3CE1',
        agriculture: '#10B981',
        health: '#FF6B6B',
        housing: '#F59E0B',
        financial: '#06D6A0',
        employment: '#3B82F6',
        skill: '#6366F1',
        rural: '#14B8A6',
        digital: '#8B5CF6',
        energy: '#F59E0B',
        women: '#EC4899',
        legal: '#8B5CF6',
        food: '#F472B6',
        transport: '#14B8A6'
    };
    return colors[key] || '#6C3CE1';
}

// ============================================
// 10. SHOW SCHEME DETAIL
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
                <div class="scheme-detail-section">
                    <h4>📋 Description</h4>
                    <p>${scheme.overview}</p>
                </div>
                <div class="scheme-detail-section">
                    <h4>✅ Eligibility</h4>
                    <ul>${scheme.eligibility.map(e => `<li>${e}</li>`).join('')}</ul>
                </div>
                <div class="scheme-detail-section">
                    <h4>🎯 Benefits</h4>
                    <ul>${scheme.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
                </div>
                <div class="scheme-detail-section">
                    <h4>📄 Documents Required</h4>
                    <ul>${scheme.documents.map(d => `<li>${d}</li>`).join('')}</ul>
                </div>
                <div class="scheme-detail-actions">
                    <a href="${scheme.applyLink}" target="_blank" class="apply-now-btn">
                        <i class="fas fa-external-link-alt"></i> Apply Now
                    </a>
                    <button class="save-scheme-btn" onclick="saveScheme('${scheme.id}')">
                        <i class="fas fa-bookmark"></i> Save
                    </button>
                    <button class="share-scheme-btn" onclick="shareScheme('${scheme.id}')">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// 11. CLOSE DETAIL
// ============================================
function closeSchemeDetail() {
    document.getElementById('educationSchemesGrid').style.display = 'grid';
    document.getElementById('schemeDetailView').style.display = 'none';
}

// ============================================
// 12. BACK TO CATEGORIES
// ============================================
function showCategories() {
    document.querySelector('.categories').style.display = 'block';
    document.getElementById('educationSchemes').style.display = 'none';
    document.getElementById('schemeDetailView').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// 13. SAVE SCHEME
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

// ============================================
// 14. SHARE SCHEME
// ============================================
function shareScheme(id) {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({ title: 'WBseva AI Scheme', url: url }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert('✅ Link copied to clipboard!');
        });
    }
}

// ============================================
// 15. SEARCH FUNCTIONALITY
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
                        <a href="${scheme.applyLink}" target="_blank" class="result-link">
                            View <i class="fas fa-external-link-alt"></i>
                        </a>
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
// 16. FAQ TOGGLE
// ============================================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) other.classList.remove('active');
        });
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// ============================================
// 17. PARALLAX EFFECT
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
// 18. SCROLL TOP BUTTON
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
// 19. CATEGORY CARD ANIMATION
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
// 20. ACTIVE NAV LINK
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
// 21. DYNAMIC YEAR
// ============================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
}

console.log('✅ WBseva AI loaded successfully!');
console.log('📚 All 14 categories working like Education!');