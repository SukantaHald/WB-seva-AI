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
// 3. THEME SWITCHER - 100% WORKING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Theme switcher initializing...');
    
    // Get elements
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const themeOptions = document.querySelectorAll('.theme-dropdown li');
    
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
    
    console.log('🎨 Theme switcher ready!');
});

// ============================================
// 4. STATISTICS COUNTER ANIMATION
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
// 5. CATEGORIES DATA
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
// 6. SEARCH FUNCTIONALITY
// ============================================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const searchResultsList = document.getElementById('searchResultsList');
const searchResultsClose = document.getElementById('searchResultsClose');

// ============================================
// EDUCATION SCHEMES DATA - WEST BENGAL
// ============================================
const educationSchemes = [
    {
        id: 'edu-1',
        title: 'Swami Vivekananda Merit-cum-Means (SVMCM) Scholarship',
        category: 'Merit-cum-Means',
        amount: '₹1,000 - ₹8,000/month',
        eligibility: 'Permanent WB resident, 60% marks, income ≤ ₹2.5 Lakh/year',
        description: 'Flagship scholarship for meritorious students from economically weaker families. Covers HS, Diploma, UG, PG, M.Phil., Ph.D.',
        applyLink: 'https://svmcm.wb.gov.in/',
        icon: 'fa-graduation-cap',
        color: '#6C3CE1',
        level: 'State',
        benefits: [
            'Monthly stipend up to ₹8,000',
            'Covers all levels of education',
            'Renewable based on performance'
        ]
    },
    {
        id: 'edu-2',
        title: 'Kanyashree Prakalpa Scheme (K1 & K2)',
        category: 'Girl Child Empowerment',
        amount: '₹1,000/year + ₹25,000 one-time',
        eligibility: 'Unmarried girls, Class 8-12, income ≤ ₹1.2 Lakh/year',
        description: 'Flagship social welfare initiative to empower girl students and prevent child marriage. K1 provides annual scholarship, K2 gives one-time grant.',
        applyLink: 'https://wbkanyashree.gov.in',
        icon: 'fa-venus',
        color: '#EC4899',
        level: 'State',
        benefits: [
            '₹1,000 annual scholarship (K1)',
            '₹25,000 one-time grant (K2)',
            'Prevents child marriage'
        ]
    },
    {
        id: 'edu-3',
        title: 'Student Credit Card Scheme',
        category: 'Education Loan',
        amount: 'Up to ₹10 Lakh',
        eligibility: 'Higher secondary to professional courses',
        description: 'Education loans up to ₹10 lakh at 4% simple interest with entire interest subsidy borne by the state government.',
        applyLink: 'https://www.wb.gov.in',
        icon: 'fa-credit-card',
        color: '#F59E0B',
        level: 'State',
        benefits: [
            '4% simple interest rate',
            'Full interest subsidy by state',
            'Repayment up to 15 years'
        ]
    },
    {
        id: 'edu-4',
        title: 'Aikyashree Scholarship (WBMDFC)',
        category: 'Minority Students',
        amount: 'Up to ₹60,000/year',
        eligibility: 'Minority students, 50% marks, income ≤ ₹2 Lakh/year',
        description: 'Pre-matric, post-matric, and merit-cum-means scholarships for minority students in West Bengal.',
        applyLink: 'https://www.wbmdfcscholarship.gov.in',
        icon: 'fa-hand-holding-heart',
        color: '#10B981',
        level: 'State',
        benefits: [
            'Pre-matric up to ₹11,000/year',
            'Post-matric up to ₹16,500/year',
            'Merit-cum-Means up to ₹33,000/year'
        ]
    },
    {
        id: 'edu-5',
        title: 'Nabanna Scholarship (CM Relief Fund)',
        category: 'Financial Aid',
        amount: '₹10,000',
        eligibility: 'Students in need of financial assistance',
        description: 'One-time financial assistance of ₹10,000 from Chief Minister\'s Relief Fund for students.',
        applyLink: 'https://cmrf.wb.gov.in',
        icon: 'fa-hand-holding-usd',
        color: '#F472B6',
        level: 'State',
        benefits: [
            '₹10,000 one-time assistance',
            'Direct bank transfer'
        ]
    },
    {
        id: 'edu-6',
        title: 'PM-SHRI Scheme',
        category: 'Infrastructure',
        amount: 'Infrastructure Upgrades',
        eligibility: 'Government schools in West Bengal',
        description: 'Upgrades school infrastructure, provides gas-based mid-day meals, solar panels, sanitary napkin vending machines in girls\' schools.',
        applyLink: 'https://www.pmshri.gov.in',
        icon: 'fa-school',
        color: '#3B82F6',
        level: 'Central',
        benefits: [
            'Infrastructure upgrades',
            'Gas-based mid-day meals',
            'Solar panels installation'
        ]
    },
    {
        id: 'edu-7',
        title: 'Annapurna Scheme - Female Student Support',
        category: 'Women Empowerment',
        amount: '₹50,000',
        eligibility: 'Unmarried female students in higher education',
        description: 'One-time financial assistance of ₹50,000 to unmarried female students to reduce dropout rates in higher education.',
        applyLink: 'https://www.wb.gov.in',
        icon: 'fa-female',
        color: '#EC4899',
        level: 'State',
        benefits: [
            '₹50,000 one-time assistance',
            'Reduces dropout rates'
        ]
    },
    {
        id: 'edu-8',
        title: 'JBNSTS Senior Scholarship Program',
        category: 'Science & Technology',
        amount: 'Tuition Support',
        eligibility: 'UG students in Basic Sciences, Engineering, Medicine',
        description: 'Since 1960, supports undergraduate students in Basic Sciences, Engineering, and Medicine from West Bengal.',
        applyLink: 'https://www.jbnsts.ac.in',
        icon: 'fa-flask',
        color: '#8B5CF6',
        level: 'State',
        benefits: [
            'Tuition support',
            'Multi-phased test selection'
        ]
    },
    {
        id: 'edu-9',
        title: 'JBNSTS Junior Scholarship (Bigyani Kanya Medha Britti)',
        category: 'Science & Technology',
        amount: 'Tuition Support',
        eligibility: 'Higher secondary science students',
        description: 'New initiative to identify and nurture science talent at the higher secondary level in West Bengal.',
        applyLink: 'https://www.jbnsts.ac.in',
        icon: 'fa-microscope',
        color: '#8B5CF6',
        level: 'State',
        benefits: [
            'Identify science talent',
            'Nurture at HS level'
        ]
    },
    {
        id: 'edu-10',
        title: 'Post-Matric Stipend (Talent Support Programme)',
        category: 'Stipend',
        amount: '₹2,550 - ₹4,900/year',
        eligibility: 'Students with <50% marks, income ≤ ₹2 Lakh/year',
        description: 'For students with less than 50% marks but from economically weaker backgrounds.',
        applyLink: 'https://www.wb.gov.in',
        icon: 'fa-trophy',
        color: '#06D6A0',
        level: 'State',
        benefits: [
            '₹2,550 - ₹4,900/year',
            'Supports weaker sections'
        ]
    },
    {
        id: 'edu-11',
        title: 'PM POSHAN (Mid-Day Meal) Enhancement',
        category: 'Nutrition',
        amount: '₹10/student/day',
        eligibility: 'Primary school students',
        description: 'Primary-level cooking cost increased from ₹6.78 to ₹10 per student per day effective August 1, 2026.',
        applyLink: 'https://www.poshan.gov.in',
        icon: 'fa-utensils',
        color: '#F59E0B',
        level: 'Central',
        benefits: [
            '₹10/student/day cooking cost',
            'Enhanced nutritional support'
        ]
    },
    {
        id: 'edu-12',
        title: 'Infrastructure & Facility Upgrades',
        category: 'Infrastructure',
        amount: 'Facility Upgrades',
        eligibility: 'All government schools',
        description: 'Comprehensive school infrastructure improvements including ceiling fans, clean toilets, arsenic-free drinking water, solar panels.',
        applyLink: 'https://www.wb.gov.in',
        icon: 'fa-building',
        color: '#14B8A6',
        level: 'State',
        benefits: [
            'Ceiling fans installation',
            'Clean toilets & arsenic-free water',
            'Solar panels & water purifiers'
        ]
    }
];

// ============================================
// EDUCATION SCHEMES DISPLAY FUNCTIONS
// ============================================

// Show education schemes section
function showEducationSchemes() {
    const mainCategories = document.querySelector('.categories');
    const moreCategories = document.querySelector('.more-categories');
    const schemesDisplay = document.getElementById('educationSchemes');
    const schemesGrid = document.getElementById('educationSchemesGrid');
    const detailView = document.getElementById('schemeDetailView');
    
    // Hide categories
    if (mainCategories) mainCategories.style.display = 'none';
    if (moreCategories) moreCategories.style.display = 'none';
    
    // Show schemes
    if (schemesDisplay) {
        schemesDisplay.style.display = 'block';
        schemesDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Hide detail view if visible
    if (detailView) detailView.style.display = 'none';
    
    // Render schemes
    renderEducationSchemes();
}

// Render education schemes grid
function renderEducationSchemes() {
    const grid = document.getElementById('educationSchemesGrid');
    if (!grid) return;
    
    grid.innerHTML = educationSchemes.map((scheme, index) => `
        <div class="scheme-card-item" onclick="showSchemeDetail('${scheme.id}')" style="animation-delay: ${index * 0.1}s">
            <div class="scheme-card-icon" style="background: ${scheme.color}20; color: ${scheme.color}">
                <i class="fas ${scheme.icon}"></i>
            </div>
            <div class="scheme-card-content">
                <h3>${scheme.title}</h3>
                <div class="scheme-card-meta">
                    <span class="scheme-category">${scheme.category}</span>
                    <span class="scheme-amount">${scheme.amount}</span>
                </div>
                <p>${scheme.description.substring(0, 100)}${scheme.description.length > 100 ? '...' : ''}</p>
                <div class="scheme-card-footer">
                    <span class="scheme-eligibility">👤 ${scheme.eligibility}</span>
                    <button class="view-detail-btn" onclick="event.stopPropagation(); showSchemeDetail('${scheme.id}')">
                        View Details →
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Show scheme detail
function showSchemeDetail(schemeId) {
    const scheme = educationSchemes.find(s => s.id === schemeId);
    if (!scheme) return;
    
    const grid = document.getElementById('educationSchemesGrid');
    const detailView = document.getElementById('schemeDetailView');
    
    if (grid) grid.style.display = 'none';
    if (detailView) {
        detailView.style.display = 'block';
        detailView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        detailView.innerHTML = `
            <div class="scheme-detail-card">
                <button class="close-detail-btn" onclick="closeSchemeDetail()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="scheme-detail-header">
                    <div class="scheme-detail-icon" style="background: ${scheme.color}20; color: ${scheme.color}">
                        <i class="fas ${scheme.icon}"></i>
                    </div>
                    <div>
                        <span class="scheme-detail-badge" style="background: ${scheme.color}20; color: ${scheme.color}">
                            ${scheme.level}
                        </span>
                        <h2>${scheme.title}</h2>
                        <div class="scheme-detail-meta">
                            <span>📂 ${scheme.category}</span>
                            <span>💰 ${scheme.amount}</span>
                        </div>
                    </div>
                </div>
                
                <div class="scheme-detail-body">
                    <div class="scheme-detail-section">
                        <h4>📋 Description</h4>
                        <p>${scheme.description}</p>
                    </div>
                    
                    <div class="scheme-detail-section">
                        <h4>✅ Eligibility</h4>
                        <p>${scheme.eligibility}</p>
                    </div>
                    
                    <div class="scheme-detail-section">
                        <h4>🎯 Benefits</h4>
                        <ul>
                            ${scheme.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
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
}
const agricultureSchemes = [
    {
        id: 'agri-1',
        title: 'Assistance for Installation of Sprinkler / Drip Micro Irrigation Systems',
        category: 'Agriculture',
        amount: '50% Subsidy',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Must be a farmer with cultivable land, land ownership documents required, should have bank account, should have Kisan Credit Card',
        description: 'This scheme provides financial assistance to farmers for installing modern irrigation systems to improve water efficiency and crop yield.',
        applyLink: 'https://www.wb.gov.in/irrigation-scheme',
        tags: ['Agriculture', 'Crop', 'Farmer', 'Irrigation'],
        benefits: [
            '50% subsidy on irrigation equipment',
            'Technical support and training',
            'Water conservation benefits',
            'Increased crop productivity'
        ],
        documents: [
            'Land Ownership Documents',
            'Aadhaar Card',
            'Bank Account Details',
            'Kisan Credit Card',
            'Passport Size Photo'
        ],
        icon: 'fa-tractor',
        color: '#10B981'
    },
    {
        id: 'agri-2',
        title: 'Amar Fasal Amar Gola (AFAG)',
        category: 'Agriculture',
        amount: '₹5,000 - ₹25,000',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Must be a marginal farmer in West Bengal, should own Kisan Credit Card, land holding less than 2 hectares, active farmer with valid records',
        description: 'The West Bengal Government announced this pilot project to provide financial assistance to marginal farmers for storehouses and vending carts.',
        applyLink: 'https://www.wb.gov.in/amar-fasal-amar-gola',
        tags: ['Farmer', 'Storage', 'Warehouse', 'Vending'],
        benefits: [
            '₹5,000 to ₹25,000 for warehouses',
            '₹10,000 flat for vending carts',
            'Direct bank transfer',
            'Support for direct selling'
        ],
        documents: [
            'Land Records',
            'Aadhaar Card',
            'Kisan Credit Card',
            'Bank Account Details',
            'Passport Size Photo'
        ],
        icon: 'fa-warehouse',
        color: '#10B981'
    },
    {
        id: 'agri-3',
        title: 'Advanced Animal Breeding Scheme (Supply of Breedable Pedigree Murrah Bulls)',
        category: 'Agriculture',
        amount: 'Subsidy Provided',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Farmers engaged in animal husbandry, should have proper animal housing, registered with animal husbandry department',
        description: 'Supply of breedable pedigree Murrah bulls on subsidy to improve livestock quality and milk production.',
        applyLink: 'https://www.wb.gov.in/animal-breeding',
        tags: ['Animal', 'Breed', 'Cow', 'Subsidy'],
        benefits: [
            'Breedable Murrah bulls at subsidized rates',
            'Improved milk production',
            'Better livestock quality',
            'Income generation'
        ],
        documents: [
            'Aadhaar Card',
            'Animal Husbandry Registration',
            'Bank Account Details',
            'Land Documents',
            'Passport Size Photo'
        ],
        icon: 'fa-horse',
        color: '#10B981'
    },
    {
        id: 'agri-4',
        title: 'AGR 2 (Farm Mechanization) Scheme For Farmers Other Than SC/ST',
        category: 'Agriculture',
        amount: 'Financial Assistance',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Farmers other than SC/ST, should have cultivable land, should be registered farmer',
        description: 'Farm mechanization scheme providing financial assistance for purchasing agricultural equipment and machinery.',
        applyLink: 'https://www.wb.gov.in/farm-mechanization',
        tags: ['Agriculture', 'Equipment', 'Farmer', 'Mechanization'],
        benefits: [
            'Financial assistance for farm equipment',
            'Subsidy on machinery purchase',
            'Improved farming efficiency',
            'Reduced labor costs'
        ],
        documents: [
            'Aadhaar Card',
            'Land Ownership Documents',
            'Bank Account Details',
            'Farmer Registration',
            'Passport Size Photo'
        ],
        icon: 'fa-tractor',
        color: '#10B981'
    },
    {
        id: 'agri-5',
        title: 'Agroforestry Component under RKVV',
        category: 'Agriculture',
        amount: 'Financial Support',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Farmers with cultivable land, interested in agroforestry, should be registered farmer',
        description: 'Agroforestry component under Rashtriya Krishi Vikas Yojana (RKVV) for integrating trees with crops.',
        applyLink: 'https://www.wb.gov.in/agroforestry',
        tags: ['Agriculture', 'Forestry', 'Tree', 'Crop'],
        benefits: [
            'Financial support for agroforestry',
            'Sustainable farming practices',
            'Additional income from trees',
            'Environmental benefits'
        ],
        documents: [
            'Aadhaar Card',
            'Land Ownership Documents',
            'Bank Account Details',
            'Farmer Registration',
            'Passport Size Photo'
        ],
        icon: 'fa-tree',
        color: '#10B981'
    },
    {
        id: 'agri-6',
        title: 'AGR 3 (Farm Mechanization) Scheme For ST Farmers',
        category: 'Agriculture',
        amount: 'Financial Assistance',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Scheduled Tribe farmers, should have cultivable land, should be registered farmer',
        description: 'Farm mechanization scheme specifically for Scheduled Tribe farmers to help them modernize farming operations.',
        applyLink: 'https://www.wb.gov.in/farm-mechanization-st',
        tags: ['Adivasi', 'Agriculture', 'Equipment', 'Farmer'],
        benefits: [
            'Financial assistance for farm equipment',
            'Special subsidy for ST farmers',
            'Improved farming efficiency',
            'Modernization of agriculture'
        ],
        documents: [
            'Aadhaar Card',
            'ST Certificate',
            'Land Ownership Documents',
            'Bank Account Details',
            'Farmer Registration'
        ],
        icon: 'fa-tractor',
        color: '#10B981'
    },
    {
        id: 'agri-7',
        title: 'PM Kisan Samman Nidhi',
        category: 'Agriculture',
        amount: '₹6,000/year',
        state: 'All India',
        level: 'Central',
        eligibility: 'Small and marginal farmers, should have cultivable land, should be registered farmer',
        description: 'Direct income support of ₹6,000 per year to small and marginal farmers in three installments.',
        applyLink: 'https://pmkisan.gov.in',
        tags: ['Farmer', 'Income Support', 'Central'],
        benefits: [
            '₹6,000 per year direct benefit',
            'Three installments per year',
            'Direct bank transfer',
            'Support for small farmers'
        ],
        documents: [
            'Aadhaar Card',
            'Land Ownership Documents',
            'Bank Account Details',
            'Farmer Registration',
            'Passport Size Photo'
        ],
        icon: 'fa-hand-holding-usd',
        color: '#10B981'
    },
    {
        id: 'agri-8',
        title: 'Soil Health Card Scheme',
        category: 'Agriculture',
        amount: 'Free Service',
        state: 'All India',
        level: 'Central',
        eligibility: 'All farmers with cultivable land',
        description: 'Provides soil health cards to farmers with recommendations on fertilizer usage based on soil analysis.',
        applyLink: 'https://soilhealth.dac.gov.in',
        tags: ['Soil', 'Health', 'Farmer', 'Testing'],
        benefits: [
            'Free soil testing',
            'Soil health card',
            'Fertilizer recommendations',
            'Improved crop yield'
        ],
        documents: [
            'Aadhaar Card',
            'Land Ownership Documents',
            'Farmer Registration'
        ],
        icon: 'fa-seedling',
        color: '#10B981'
    },
    {
        id: 'agri-9',
        title: 'Crop Insurance Scheme (PMFBY)',
        category: 'Agriculture',
        amount: 'Insurance Coverage',
        state: 'All India',
        level: 'Central',
        eligibility: 'Farmers with cultivable land, should be registered farmer',
        description: 'Pradhan Mantri Fasal Bima Yojana provides insurance coverage for crop loss due to natural calamities.',
        applyLink: 'https://pmfby.gov.in',
        tags: ['Insurance', 'Crop', 'Farmer', 'Protection'],
        benefits: [
            'Insurance for crop loss',
            'Low premium rates',
            'Protection against natural calamities',
            'Financial security'
        ],
        documents: [
            'Aadhaar Card',
            'Land Ownership Documents',
            'Bank Account Details',
            'Farmer Registration',
            'Crop Details'
        ],
        icon: 'fa-shield-halved',
        color: '#10B981'
    }
];

// Close scheme detail
function closeSchemeDetail() {
    const grid = document.getElementById('educationSchemesGrid');
    const detailView = document.getElementById('schemeDetailView');
    
    if (grid) grid.style.display = 'grid';
    if (detailView) detailView.style.display = 'none';
}

// Show categories (back button)
function showCategories() {
    const mainCategories = document.querySelector('.categories');
    const moreCategories = document.querySelector('.more-categories');
    const schemesDisplay = document.getElementById('educationSchemes');
    const detailView = document.getElementById('schemeDetailView');
    
    if (mainCategories) mainCategories.style.display = 'block';
    if (moreCategories) moreCategories.style.display = 'block';
    if (schemesDisplay) schemesDisplay.style.display = 'none';
    if (detailView) detailView.style.display = 'none';
}

// Save scheme to localStorage
function saveScheme(schemeId) {
    const scheme = educationSchemes.find(s => s.id === schemeId);
    if (!scheme) return;
    
    const saved = JSON.parse(localStorage.getItem('savedEducationSchemes') || '[]');
    if (!saved.includes(schemeId)) {
        saved.push(schemeId);
        localStorage.setItem('savedEducationSchemes', JSON.stringify(saved));
        alert(`✅ "${scheme.title}" saved successfully!`);
    } else {
        alert(`⚠️ "${scheme.title}" is already saved.`);
    }
}

// Share scheme
function shareScheme(schemeId) {
    const scheme = educationSchemes.find(s => s.id === schemeId);
    if (!scheme) return;
    
    const shareText = `📚 ${scheme.title}\n💰 ${scheme.amount}\n✅ ${scheme.eligibility}\n🔗 ${scheme.applyLink}`;
    
    if (navigator.share) {
        navigator.share({
            title: scheme.title,
            text: shareText,
            url: scheme.applyLink
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('✅ Scheme details copied to clipboard!');
        }).catch(() => {
            prompt('Copy this:', shareText);
        });
    }
}

// ============================================
// UPDATE CATEGORY CLICK HANDLER
// ============================================

// Modify the category card click to show education schemes
// Find this in your existing code and update the education card click
document.addEventListener('DOMContentLoaded', function() {
    // Update education category click
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3')?.textContent || '';
            if (categoryName === 'Education') {
                showEducationSchemes();
            } else {
                // For other categories, open in new window
                const cat = this.getAttribute('data-category') || categoryName.toLowerCase();
                window.open(`scheme-details.html?category=${cat}`, '_blank');
            }
        });
    });
});

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
// 7. FAQ TOGGLE
// ============================================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) {
                other.classList.remove('active');
            }
        });
        
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// ============================================
// 8. PARALLAX EFFECT
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
// 9. SCROLL TOP BUTTON
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
// 10. CATEGORY CARD SCROLL ANIMATION
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
// 11. ACTIVE NAV LINK
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
// 12. DYNAMIC YEAR IN FOOTER
// ============================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
}

// ============================================
// 13. CHATBOT FUNCTIONALITY
// ============================================
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatMessages = document.getElementById('chatbotMessages');

// Fun responses - Entertainment only
const funResponses = [
    { keywords: ['joke', 'funny', 'laugh'], response: "😂 Why don't scientists trust atoms?\nBecause they make up everything!\n\nHere's another one:\nWhat did the farmer say to the cow?\n'You're udderly amazing!' 🐄" },
    { keywords: ['hello', 'hi', 'hey', 'namaste'], response: "👋 Hello there! How are you doing today? I hope you're having a great day! 😊" },
    { keywords: ['how are you', 'how are you doing'], response: "🤖 I'm doing fantastic! Thanks for asking! I'm here to chat and make you smile. How about you? 😊" },
    { keywords: ['weather', 'hot', 'cold', 'rain'], response: "🌤️ The weather in West Bengal is lovely today! But you know what's better? Your smile! 😊\n\nP.S. - I'm just a bot, I don't really know the weather! 😄" },
    { keywords: ['what can you do', 'help', 'what do you do'], response: "🤖 I'm your friendly AI chat companion! I can:\n💬 Have fun conversations\n😂 Tell you jokes\n📚 Share interesting facts\n😊 Keep you company\n\nBut for schemes, please check the main page! 📋" },
    { keywords: ['west bengal', 'wb', 'kolkata'], response: "🏛️ West Bengal is wonderful! 🎨 Rich in culture, delicious food (roshogolla anyone? 😋), and beautiful places. The people are amazing too! ❤️\n\nFun fact: The famous 'Howrah Bridge' in Kolkata is one of the busiest bridges in the world! 🌉" },
    { keywords: ['food', 'hungry', 'eat', 'machher jhol'], response: "🍛 Ah, Bengali food! Let me tell you about some delicious dishes:\n\n🍚 Machher Jhol (Fish Curry) - A classic!\n🍬 Roshogolla - The sweetest delight!\n🥘 Shorshe Ilish - Mustard Hilsa fish\n\nNow I'm hungry too! 😋" },
    { keywords: ['thanks', 'thank you'], response: "🙏 You're most welcome! It's my pleasure to chat with you. Have a wonderful day! ✨" },
    { keywords: ['bye', 'goodbye', 'see you', 'tata'], response: "👋 Goodbye, my friend! It was lovely talking to you. Come back anytime for a fun chat! 😊\n\nStay happy and keep smiling! ✨" },
    { keywords: ['cricket', 'sport', 'football', 'game'], response: "🏏 Oh, sports are exciting! Did you know?\n\n⚽ Kolkata has one of the oldest football clubs in India - Mohun Bagan!\n🏏 Cricket is followed like a religion in India!\n\nWhat's your favorite sport? 😊" },
    { keywords: ['music', 'song', 'dance', 'rabindra', 'nazrul'], response: "🎵 Bengali music is soulful and beautiful! 🎶\n\n🎼 Rabindra Sangeet - Songs by Tagore\n🎸 Nazrul Geeti - Songs by Nazrul\n\nWho's your favorite singer? 🎤" },
    { keywords: ['movie', 'film', 'cinema'], response: "🎬 Bengali cinema has produced some amazing movies!\n\n🎥 Satyajit Ray's 'Apu Trilogy' - A masterpiece!\n🎬 'Mahanagar' - Another classic!\n\nHave you watched any Bengali films? 🍿" }
];

const defaultResponse = "🤔 That's interesting! Tell me more about it.\n\n💡 You can also ask me:\n- Tell me a joke\n- How are you\n- Tell me about West Bengal\n- What can you do\n\nOr just have a friendly chat with me! 😊";

// Get bot response
const getBotResponse = (message) => {
    const msg = message.toLowerCase().trim();
    
    for (let item of funResponses) {
        for (let keyword of item.keywords) {
            if (msg.includes(keyword)) {
                return item.response;
            }
        }
    }
    
    if (msg.length < 3) {
        return "😊 I love short conversations! What else would you like to talk about?";
    }
    
    return defaultResponse;
};

// Send message
const sendMessage = (message) => {
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'chat-message user';
    userMsgDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
            <span class="message-time">Just now</span>
        </div>
    `;
    chatMessages.appendChild(userMsgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <img src="wbmap.png" alt="WBseva" />
        </div>
        <div class="message-content">
            <p style="color: var(--text-gray);">Typing<span class="typing-dots">...</span></p>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }

        const response = getBotResponse(message);
        const botMsgDiv = document.createElement('div');
        botMsgDiv.className = 'chat-message bot';
        botMsgDiv.innerHTML = `
            <div class="message-avatar">
                <img src="wbmap.png" alt="WBseva" />
            </div>
            <div class="message-content">
                <p>${response.replace(/\n/g, '<br>')}</p>
                <span class="message-time">Just now</span>
            </div>
        `;
        chatMessages.appendChild(botMsgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
};

// Open/Close chatbot
if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.add('active');
        chatbotToggle.style.display = 'none';
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
        chatbotToggle.style.display = 'flex';
    });
}

// Send message
if (chatSendBtn) {
    chatSendBtn.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            sendMessage(message);
            chatInput.value = '';
        }
    });
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                sendMessage(message);
                chatInput.value = '';
            }
        }
    });
}

// Suggestion buttons
document.querySelectorAll('.suggestion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const message = btn.dataset.msg;
        if (message) {
            sendMessage(message);
        }
    });
});

// Add typing animation CSS
const style = document.createElement('style');
style.textContent = `
    .typing-dots::after {
        content: '...';
        animation: typingDot 1.5s steps(4) infinite;
    }
    @keyframes typingDot {
        0% { content: '.'; }
        33% { content: '..'; }
        66% { content: '...'; }
    }
`;
document.head.appendChild(style);

console.log('✅ WBseva AI loaded successfully!');
console.log('🎨 Theme button in navbar should work now!');
console.log('💡 Press Ctrl+K to search');