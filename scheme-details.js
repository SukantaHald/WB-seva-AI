// ============================================
// COMPLETE SCHEME DATA - ALL CATEGORIES
// ============================================

const schemesData = {
    // ===== EDUCATION SCHEMES =====
    education: [
        {
            id: 'edu-1',
            title: 'Swami Vivekananda Merit-cum-Means (SVMCM) Scholarship',
            category: 'Education',
            state: 'West Bengal',
            level: 'State',
            subsidy: '₹1,000 - ₹8,000/month',
            overview: 'Flagship scholarship for meritorious students from economically weaker families. Covers HS, Diploma, UG, PG, M.Phil., Ph.D.',
            applyLink: 'https://svmcm.wbhed.gov.in',
            tags: ['Scholarship', 'Merit', 'Financial Aid'],
            eligibility: [
                'Permanent resident of West Bengal',
                'Minimum 60% marks in previous examination',
                'Family income ≤ ₹2.5 Lakh/year',
                'Enrolled in recognized institution'
            ],
            benefits: [
                'Monthly stipend up to ₹8,000',
                'Covers all levels of education',
                'Renewable based on performance'
            ],
            documents: [
                'Aadhaar Card',
                'Income Certificate',
                'Previous Year Marksheet',
                'Bank Account Details',
                'Residence Certificate'
            ]
        },
        {
            id: 'edu-2',
            title: 'Kanyashree Prakalpa Scheme (K1 & K2)',
            category: 'Education',
            state: 'West Bengal',
            level: 'State',
            subsidy: '₹1,000/year + ₹25,000 one-time',
            overview: 'Flagship social welfare initiative to empower girl students and prevent child marriage. K1 provides annual scholarship, K2 gives one-time grant.',
            applyLink: 'https://wbkanyashree.gov.in',
            tags: ['Girl Child', 'Empowerment', 'Scholarship'],
            eligibility: [
                'Unmarried girl students',
                'Age 13-18 years (K1)',
                'Class 8-12',
                'Family income ≤ ₹1.2 Lakh/year'
            ],
            benefits: [
                '₹1,000 annual scholarship (K1)',
                '₹25,000 one-time grant (K2)',
                'Prevents child marriage'
            ],
            documents: [
                'Birth Certificate',
                'Aadhaar Card',
                'School/College ID',
                'Bank Account Details',
                'Income Certificate'
            ]
        },
        {
            id: 'edu-3',
            title: 'Student Credit Card Scheme',
            category: 'Education',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Up to ₹10 Lakh',
            overview: 'Education loans up to ₹10 lakh at 4% simple interest with entire interest subsidy borne by the state government.',
            applyLink: 'https://www.wb.gov.in',
            tags: ['Loan', 'Education', 'Financial'],
            eligibility: [
                'Higher secondary to professional courses',
                'Admission to recognized institution',
                'Should have valid ID proof'
            ],
            benefits: [
                '4% simple interest rate',
                'Full interest subsidy by state',
                'Repayment up to 15 years'
            ],
            documents: [
                'Aadhaar Card',
                'Admission Letter',
                'Fee Structure',
                'Bank Account Details',
                'Income Certificate'
            ]
        }
    ],

    // ===== AGRICULTURE SCHEMES =====
    agriculture: [
        {
            id: 'agri-1',
            title: 'Assistance for Installation of Sprinkler / Drip Micro Irrigation Systems',
            category: 'Agriculture',
            state: 'West Bengal',
            level: 'State',
            subsidy: '50% Subsidy',
            overview: 'This scheme provides financial assistance to farmers for installing modern irrigation systems to improve water efficiency and crop yield.',
            applyLink: 'https://www.wb.gov.in/irrigation-scheme',
            tags: ['Agriculture', 'Crop', 'Farmer', 'Irrigation'],
            eligibility: [
                'Must be a farmer with cultivable land',
                'Land ownership documents required',
                'Should have bank account',
                'Should have Kisan Credit Card'
            ],
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
            ]
        },
        {
            id: 'agri-2',
            title: 'Amar Fasal Amar Gola (AFAG)',
            category: 'Agriculture',
            state: 'West Bengal',
            level: 'State',
            subsidy: '₹5,000 - ₹25,000',
            overview: 'The West Bengal Government announced this pilot project to provide financial assistance to marginal farmers for storehouses and vending carts.',
            applyLink: 'https://www.wb.gov.in/amar-fasal-amar-gola',
            tags: ['Farmer', 'Storage', 'Warehouse', 'Vending'],
            eligibility: [
                'Must be a marginal farmer in West Bengal',
                'Should own Kisan Credit Card',
                'Land holding less than 2 hectares',
                'Active farmer with valid records'
            ],
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
            ]
        },
        {
            id: 'agri-3',
            title: 'Advanced Animal Breeding Scheme (Supply of Breedable Pedigree Murrah Bulls)',
            category: 'Agriculture',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Subsidy Provided',
            overview: 'Supply of breedable pedigree Murrah bulls on subsidy to improve livestock quality and milk production.',
            applyLink: 'https://www.wb.gov.in/animal-breeding',
            tags: ['Animal', 'Breed', 'Cow', 'Subsidy'],
            eligibility: [
                'Farmers engaged in animal husbandry',
                'Should have proper animal housing',
                'Registered with animal husbandry department'
            ],
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
            ]
        },
        {
            id: 'agri-4',
            title: 'AGR 2 (Farm Mechanization) Scheme For Farmers Other Than SC/ST',
            category: 'Agriculture',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Financial Assistance',
            overview: 'Farm mechanization scheme providing financial assistance for purchasing agricultural equipment and machinery.',
            applyLink: 'https://www.wb.gov.in/farm-mechanization',
            tags: ['Agriculture', 'Equipment', 'Farmer', 'Mechanization'],
            eligibility: [
                'Farmers other than SC/ST',
                'Should have cultivable land',
                'Should be registered farmer'
            ],
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
            ]
        },
        {
            id: 'agri-5',
            title: 'Agroforestry Component under RKVV',
            category: 'Agriculture',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Financial Support',
            overview: 'Agroforestry component under Rashtriya Krishi Vikas Yojana (RKVV) for integrating trees with crops.',
            applyLink: 'https://www.wb.gov.in/agroforestry',
            tags: ['Agriculture', 'Forestry', 'Tree', 'Crop'],
            eligibility: [
                'Farmers with cultivable land',
                'Interested in agroforestry',
                'Should be registered farmer'
            ],
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
            ]
        },
        {
            id: 'agri-6',
            title: 'AGR 3 (Farm Mechanization) Scheme For ST Farmers',
            category: 'Agriculture',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Financial Assistance',
            overview: 'Farm mechanization scheme specifically for Scheduled Tribe farmers to help them modernize farming operations.',
            applyLink: 'https://www.wb.gov.in/farm-mechanization-st',
            tags: ['Adivasi', 'Agriculture', 'Equipment', 'Farmer'],
            eligibility: [
                'Scheduled Tribe farmers',
                'Should have cultivable land',
                'Should be registered farmer'
            ],
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
            ]
        },
        {
            id: 'agri-7',
            title: 'PM Kisan Samman Nidhi',
            category: 'Agriculture',
            state: 'All India',
            level: 'Central',
            subsidy: '₹6,000/year',
            overview: 'Direct income support of ₹6,000 per year to small and marginal farmers in three installments.',
            applyLink: 'https://pmkisan.gov.in',
            tags: ['Farmer', 'Income Support', 'Central'],
            eligibility: [
                'Small and marginal farmers',
                'Should have cultivable land',
                'Should be registered farmer'
            ],
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
            ]
        },
        {
            id: 'agri-8',
            title: 'Soil Health Card Scheme',
            category: 'Agriculture',
            state: 'All India',
            level: 'Central',
            subsidy: 'Free Service',
            overview: 'Provides soil health cards to farmers with recommendations on fertilizer usage based on soil analysis.',
            applyLink: 'https://soilhealth.dac.gov.in',
            tags: ['Soil', 'Health', 'Farmer', 'Testing'],
            eligibility: [
                'All farmers with cultivable land'
            ],
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
            ]
        },
        {
            id: 'agri-9',
            title: 'Crop Insurance Scheme (PMFBY)',
            category: 'Agriculture',
            state: 'All India',
            level: 'Central',
            subsidy: 'Insurance Coverage',
            overview: 'Pradhan Mantri Fasal Bima Yojana provides insurance coverage for crop loss due to natural calamities.',
            applyLink: 'https://pmfby.gov.in',
            tags: ['Insurance', 'Crop', 'Farmer', 'Protection'],
            eligibility: [
                'Farmers with cultivable land',
                'Should be registered farmer'
            ],
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
            ]
        }
    ],

    // ===== HEALTH SCHEMES =====
    health: [
        {
            id: 'health-1',
            title: 'Swasthya Sathi Scheme',
            category: 'Health',
            state: 'West Bengal',
            level: 'State',
            subsidy: '₹5,00,000 Coverage',
            overview: 'Comprehensive health insurance scheme for all residents of West Bengal providing coverage up to ₹5 Lakhs per family per year.',
            applyLink: 'https://www.wb.gov.in/swasthya-sathi',
            tags: ['Health', 'Medical', 'Family', 'Insurance'],
            eligibility: [
                'Must be a resident of West Bengal',
                'All families are eligible',
                'No income criteria',
                'Valid address proof required'
            ],
            benefits: [
                '₹5 Lakhs coverage per family',
                'Cashless treatment at empanelled hospitals',
                'Pre-existing diseases covered',
                'No age limit'
            ],
            documents: [
                'Aadhaar Card',
                'Address Proof',
                'Family Member Documents',
                'Bank Account Details',
                'Passport Size Photo'
            ]
        }
    ],

    // ===== HOUSING SCHEMES =====
    housing: [
        {
            id: 'housing-1',
            title: 'Jai Jawahar Awas Yojana',
            category: 'Housing',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Financial Assistance',
            overview: 'Housing scheme providing financial assistance for construction of houses to economically weaker sections and low-income groups.',
            applyLink: 'https://www.wb.gov.in/housing',
            tags: ['Housing', 'Construction', 'Subsidy'],
            eligibility: [
                'Economically weaker sections',
                'Low-income groups',
                'Should not own a pucca house',
                'Should be a resident of West Bengal'
            ],
            benefits: [
                'Financial assistance for house construction',
                'Affordable housing support',
                'Infrastructure development'
            ],
            documents: [
                'Aadhaar Card',
                'Income Certificate',
                'Land Ownership Documents',
                'Bank Account Details',
                'Passport Size Photo'
            ]
        }
    ],

    // ===== FINANCIAL SCHEMES =====
    financial: [
        {
            id: 'financial-1',
            title: 'Credit Link Capital Subsidy',
            category: 'Financial',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Subsidy Provided',
            overview: 'Credit linked capital subsidy for small entrepreneurs to start or expand their businesses.',
            applyLink: 'https://www.wb.gov.in/clcss',
            tags: ['Finance', 'Subsidy', 'Business'],
            eligibility: [
                'Small entrepreneurs',
                'MSMEs',
                'Should have a business plan',
                'Should be registered with the department'
            ],
            benefits: [
                'Capital subsidy for business',
                'Support for entrepreneurship',
                'Business development assistance'
            ],
            documents: [
                'Aadhaar Card',
                'Business Plan',
                'Bank Account Details',
                'Identity Proof',
                'Address Proof'
            ]
        }
    ],

    // ===== EMPLOYMENT SCHEMES =====
    employment: [
        {
            id: 'employment-1',
            title: 'Employment Exchange',
            category: 'Employment',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Job Support',
            overview: 'Employment exchange services connecting job seekers with employers and providing career guidance.',
            applyLink: 'https://www.wb.gov.in/employment',
            tags: ['Employment', 'Job', 'Career'],
            eligibility: [
                'Unemployed youth',
                'Job seekers',
                'Should have minimum educational qualification',
                'Should be registered with the exchange'
            ],
            benefits: [
                'Job registration',
                'Placement assistance',
                'Career guidance',
                'Skill development'
            ],
            documents: [
                'Aadhaar Card',
                'Educational Certificate',
                'Identity Proof',
                'Address Proof',
                'Passport Size Photo'
            ]
        }
    ],

    // ===== SKILL DEVELOPMENT =====
    skill: [
        {
            id: 'skill-1',
            title: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
            category: 'Skill Development',
            state: 'All India',
            level: 'Central',
            subsidy: 'Free Training',
            overview: 'PMKVY is a flagship scheme that enables youth to take up industry-relevant skill training to secure a better livelihood.',
            applyLink: 'https://pmkvyofficial.org',
            tags: ['Skill', 'Training', 'Employment', 'Certification'],
            eligibility: [
                'Indian citizen aged 15-45 years',
                'Minimum 5th pass education',
                'Willing to undergo training',
                'Valid ID proof'
            ],
            benefits: [
                'Free skill training',
                'Industry certification',
                'Placement assistance',
                'Monetary reward for certification'
            ],
            documents: [
                'Aadhaar Card',
                'Educational Certificate',
                'Bank Account Details',
                'Passport Size Photo',
                'Residence Proof'
            ]
        }
    ],

    // ===== RURAL DEVELOPMENT =====
    rural: [
        {
            id: 'rural-1',
            title: 'Mahatma Gandhi NREGA',
            category: 'Rural Development',
            state: 'All India',
            level: 'Central',
            subsidy: '100 Days Employment',
            overview: 'MGNREGA provides 100 days of guaranteed wage employment to rural households to enhance livelihood security.',
            applyLink: 'https://nrega.nic.in',
            tags: ['Rural', 'Employment', 'Wage', 'Infrastructure'],
            eligibility: [
                'Must be a resident of rural area',
                'Adult member of rural household',
                'Willing to do manual work',
                'Valid job card'
            ],
            benefits: [
                '100 days wage employment',
                'Wage payment within 15 days',
                'Work near residence',
                'Social security benefits'
            ],
            documents: [
                'Aadhaar Card',
                'Job Card',
                'Bank Account Details',
                'Passport Size Photo',
                'Residence Proof'
            ]
        }
    ],

    // ===== DIGITAL INDIA =====
    digital: [
        {
            id: 'digital-1',
            title: 'Digital India Program',
            category: 'Digital India',
            state: 'All India',
            level: 'Central',
            subsidy: 'Free Digital Services',
            overview: 'Digital India is a flagship program to transform India into a digitally empowered society and knowledge economy.',
            applyLink: 'https://digitalindia.gov.in',
            tags: ['Digital', 'Technology', 'Infrastructure', 'Aadhaar'],
            eligibility: [
                'All Indian citizens',
                'Valid Aadhaar number',
                'Access to digital services',
                'Internet connectivity'
            ],
            benefits: [
                'Digital identity (Aadhaar)',
                'Mobile governance',
                'Digital literacy',
                'Online services access'
            ],
            documents: [
                'Aadhaar Card',
                'Mobile Number',
                'Email ID',
                'Bank Account Details'
            ]
        }
    ],

    // ===== ENERGY =====
    energy: [
        {
            id: 'energy-1',
            title: 'Pradhan Mantri Ujjwala Yojana (PMUY)',
            category: 'Energy',
            state: 'All India',
            level: 'Central',
            subsidy: 'Free LPG Connection',
            overview: 'PMUJ provides LPG connections to women from Below Poverty Line (BPL) households to promote clean cooking fuel.',
            applyLink: 'https://www.pmujjwala.gov.in',
            tags: ['Energy', 'LPG', 'Women', 'Clean Fuel'],
            eligibility: [
                'Women from BPL households',
                'Age 18+ years',
                'No existing LPG connection',
                'Valid BPL card'
            ],
            benefits: [
                'Free LPG connection',
                'First refill free',
                'Safety training',
                'Subsidized cylinders'
            ],
            documents: [
                'Aadhaar Card',
                'BPL Card',
                'Bank Account Details',
                'Passport Size Photo',
                'Address Proof'
            ]
        }
    ],

    // ===== WOMEN EMPOWERMENT =====
    women: [
        {
            id: 'women-1',
            title: 'Kanyashree Prakalpa Scheme',
            category: 'Women Empowerment',
            state: 'West Bengal',
            level: 'State',
            subsidy: '₹1,000/year + ₹25,000 one-time',
            overview: 'Empower girl students and prevent child marriage through scholarships and financial support.',
            applyLink: 'https://wbkanyashree.gov.in',
            tags: ['Women', 'Education', 'Empowerment'],
            eligibility: [
                'Unmarried girl students',
                'Age 13-18 years',
                'Class 8-12',
                'Family income ≤ ₹1.2 Lakh/year'
            ],
            benefits: [
                '₹1,000 annual scholarship',
                '₹25,000 one-time grant',
                'Prevents child marriage',
                'Education support'
            ],
            documents: [
                'Birth Certificate',
                'Aadhaar Card',
                'School/College ID',
                'Bank Account Details',
                'Income Certificate'
            ]
        }
    ],

    // ===== LEGAL =====
    legal: [
        {
            id: 'legal-1',
            title: 'Legal Aid Scheme',
            category: 'Legal',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Free Legal Services',
            overview: 'Provides free legal aid and advice to those who cannot afford legal services, ensuring access to justice for all.',
            applyLink: 'https://www.wb.gov.in/legal-aid',
            tags: ['Legal', 'Aid', 'Justice'],
            eligibility: [
                'Economically weaker sections',
                'Marginalized groups',
                'Women and children',
                'Senior citizens'
            ],
            benefits: [
                'Free legal advice',
                'Legal representation in courts',
                'Awareness programs',
                'Legal literacy'
            ],
            documents: [
                'Aadhaar Card',
                'Income Certificate',
                'Case Details',
                'Identity Proof',
                'Address Proof'
            ]
        }
    ],

    // ===== FOOD & NUTRITION =====
    food: [
        {
            id: 'food-1',
            title: 'Mid-Day Meal Scheme',
            category: 'Food & Nutrition',
            state: 'All India',
            level: 'Central',
            subsidy: 'Free Meals',
            overview: 'Provides nutritious midday meals to school children to improve nutrition, attendance, and learning outcomes.',
            applyLink: 'https://mdm.gov.in',
            tags: ['Food', 'Nutrition', 'School'],
            eligibility: [
                'Primary school students',
                'Government and aided schools',
                'Children aged 6-14 years'
            ],
            benefits: [
                'Free nutritious meals',
                'Improved attendance',
                'Better nutrition',
                'Enhanced learning outcomes'
            ],
            documents: [
                'School Registration',
                'Aadhaar Card',
                'Student ID'
            ]
        }
    ],

    // ===== TRANSPORTATION =====
    transport: [
        {
            id: 'transport-1',
            title: 'Public Transport Subsidy',
            category: 'Transportation',
            state: 'West Bengal',
            level: 'State',
            subsidy: 'Subsidized Fares',
            overview: 'Subsidized public transport services for senior citizens, students, and persons with disabilities.',
            applyLink: 'https://www.wb.gov.in/transport',
            tags: ['Transport', 'Subsidy', 'Public'],
            eligibility: [
                'Senior citizens',
                'Students',
                'Persons with disabilities',
                'Should have valid ID proof'
            ],
            benefits: [
                'Discounted fares on public transport',
                'Special services for disabled persons',
                'Accessible transport options'
            ],
            documents: [
                'Aadhaar Card',
                'Age Proof',
                'Identity Card',
                'Address Proof',
                'Disability Certificate (if applicable)'
            ]
        }
    ]
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function getSchemeById(id) {
    for (let category in schemesData) {
        const scheme = schemesData[category].find(s => s.id === id);
        if (scheme) return scheme;
    }
    return null;
}

function getSchemesByCategory(category) {
    return schemesData[category] || [];
}

function getTotalSchemes() {
    let count = 0;
    for (let category in schemesData) {
        count += schemesData[category].length;
    }
    return count;
}

// ============================================
// SCHEME DETAILS JAVASCRIPT
// ============================================

// Get parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const schemeId = urlParams.get('id');
const category = urlParams.get('category');

// ============================================
// LOAD SCHEME DETAILS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔍 Page loaded with params:', { schemeId, category });
    console.log('📚 Total schemes available:', getTotalSchemes());
    
    if (schemeId) {
        loadSchemeDetails(schemeId);
    } else if (category) {
        loadSchemesByCategory(category);
    } else {
        showAllSchemes();
    }
});

// ============================================
// LOAD SINGLE SCHEME
// ============================================
function loadSchemeDetails(id) {
    console.log('📋 Loading scheme with ID:', id);
    
    const scheme = getSchemeById(id);
    
    if (!scheme) {
        console.error('❌ Scheme not found:', id);
        showError('Scheme not found. Please go back and try again.');
        return;
    }
    
    console.log('✅ Scheme found:', scheme.title);
    
    document.title = `${scheme.title} - WBseva AI`;
    
    // Update breadcrumb
    document.getElementById('schemeCategory').textContent = scheme.category;
    document.getElementById('schemeTitle').textContent = scheme.title;
    
    // Update header
    document.getElementById('schemeBadge').innerHTML = `
        <span class="badge-state">${scheme.state}</span>
        <span class="badge-level">${scheme.level}</span>
    `;
    document.getElementById('schemeName').textContent = scheme.title;
    
    // Update tags
    const tagsContainer = document.getElementById('schemeTags');
    if (tagsContainer) {
        tagsContainer.innerHTML = scheme.tags.map(tag => `<span>${tag}</span>`).join('');
    }
    
    // Update overview
    const overviewEl = document.getElementById('schemeOverview');
    if (overviewEl) {
        overviewEl.textContent = scheme.overview;
    }
    
    // Update eligibility
    const eligibilityList = document.getElementById('schemeEligibility');
    if (eligibilityList) {
        eligibilityList.innerHTML = scheme.eligibility.map(item => `<li>${item}</li>`).join('');
    }
    
    // Update benefits
    const benefitsList = document.getElementById('schemeBenefits');
    if (benefitsList) {
        benefitsList.innerHTML = scheme.benefits.map(item => `<li>${item}</li>`).join('');
    }
    
    // Update subsidy
    const subsidyEl = document.getElementById('schemeSubsidy');
    if (subsidyEl) {
        subsidyEl.textContent = scheme.subsidy;
    }
    
    // Update documents
    const docsList = document.getElementById('schemeDocuments');
    if (docsList) {
        docsList.innerHTML = scheme.documents.map(doc => `<li>${doc}</li>`).join('');
    }
    
    // Update apply link
    const applyLink = document.getElementById('schemeApplyLink');
    if (applyLink) {
        applyLink.href = scheme.applyLink;
    }
    
    // Load related schemes
    loadRelatedSchemes(scheme.category, scheme.id);
}

// ============================================
// LOAD SCHEMES BY CATEGORY
// ============================================
function loadSchemesByCategory(cat) {
    console.log('📂 Loading schemes for category:', cat);
    
    const catLower = cat.toLowerCase();
    const schemes = getSchemesByCategory(catLower);
    
    if (!schemes || schemes.length === 0) {
        console.warn('⚠️ No schemes found for category:', cat);
        showError(`No schemes found for "${cat}". Please try another category.`);
        return;
    }
    
    console.log(`✅ Found ${schemes.length} schemes in ${cat}`);
    
    const displayName = cat.charAt(0).toUpperCase() + cat.slice(1);
    document.title = `${displayName} Schemes - WBseva AI`;
    
    // Update breadcrumb
    document.getElementById('schemeCategory').textContent = displayName;
    document.getElementById('schemeTitle').textContent = 'Schemes';
    
    // Update header
    document.getElementById('schemeBadge').innerHTML = `
        <span class="badge-state">${schemes[0]?.state || 'Various'}</span>
        <span class="badge-level">${schemes[0]?.level || 'Various'}</span>
    `;
    document.getElementById('schemeName').textContent = `${displayName} Schemes`;
    
    // Hide tabs and show scheme list
    document.querySelector('.scheme-tabs').style.display = 'none';
    document.querySelector('.scheme-tab-content').style.display = 'none';
    document.querySelector('.scheme-actions').style.display = 'none';
    
    // Show scheme grid
    const overviewEl = document.getElementById('schemeOverview');
    if (overviewEl) {
        overviewEl.innerHTML = `
            <div style="margin-bottom:20px;color:var(--text-gray);">
                <p>${schemes.length} schemes available in this category</p>
            </div>
            <div class="schemes-grid">
                ${schemes.map(scheme => `
                    <div class="scheme-card" onclick="window.location.href='scheme-details.html?id=${scheme.id}'">
                        <div class="scheme-card-header">
                            <h3>${scheme.title}</h3>
                            <span class="scheme-card-badge">${scheme.state}</span>
                        </div>
                        <p>${scheme.overview.substring(0, 120)}${scheme.overview.length > 120 ? '...' : ''}</p>
                        <div class="scheme-card-tags">
                            ${scheme.tags.slice(0, 3).map(tag => `<span>#${tag}</span>`).join('')}
                        </div>
                        <div class="scheme-card-footer">
                            <span class="scheme-subsidy">💰 ${scheme.subsidy}</span>
                            <button class="view-details-btn" onclick="event.stopPropagation(); window.location.href='scheme-details.html?id=${scheme.id}'">
                                View Details →
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// ============================================
// SHOW ALL SCHEMES
// ============================================
function showAllSchemes() {
    console.log('📋 Showing all schemes');
    
    let allSchemes = [];
    for (let category in schemesData) {
        allSchemes = allSchemes.concat(schemesData[category]);
    }
    
    if (allSchemes.length === 0) {
        showError('No schemes available. Please try again later.');
        return;
    }
    
    console.log(`✅ Found ${allSchemes.length} total schemes`);
    
    document.title = 'All Schemes - WBseva AI';
    document.getElementById('schemeCategory').textContent = 'All';
    document.getElementById('schemeTitle').textContent = 'Schemes';
    
    document.getElementById('schemeBadge').innerHTML = `
        <span class="badge-state">West Bengal</span>
        <span class="badge-level">All</span>
    `;
    document.getElementById('schemeName').textContent = 'All Government Schemes';
    
    document.querySelector('.scheme-tabs').style.display = 'none';
    document.querySelector('.scheme-tab-content').style.display = 'none';
    document.querySelector('.scheme-actions').style.display = 'none';
    
    const overviewEl = document.getElementById('schemeOverview');
    if (overviewEl) {
        overviewEl.innerHTML = `
            <div style="margin-bottom:20px;color:var(--text-gray);">
                <p>${allSchemes.length} total schemes available across all categories</p>
            </div>
            <div class="schemes-grid">
                ${allSchemes.map(scheme => `
                    <div class="scheme-card" onclick="window.location.href='scheme-details.html?id=${scheme.id}'">
                        <div class="scheme-card-header">
                            <h3>${scheme.title}</h3>
                            <span class="scheme-card-badge">${scheme.category}</span>
                        </div>
                        <p>${scheme.overview.substring(0, 120)}${scheme.overview.length > 120 ? '...' : ''}</p>
                        <div class="scheme-card-tags">
                            ${scheme.tags.slice(0, 3).map(tag => `<span>#${tag}</span>`).join('')}
                        </div>
                        <div class="scheme-card-footer">
                            <span class="scheme-subsidy">💰 ${scheme.subsidy}</span>
                            <button class="view-details-btn" onclick="event.stopPropagation(); window.location.href='scheme-details.html?id=${scheme.id}'">
                                View Details →
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// ============================================
// LOAD RELATED SCHEMES
// ============================================
function loadRelatedSchemes(category, excludeId) {
    const schemes = getSchemesByCategory(category.toLowerCase());
    const related = schemes.filter(s => s.id !== excludeId).slice(0, 3);
    
    const container = document.getElementById('relatedSchemes');
    if (!container) return;
    
    if (related.length === 0) {
        container.innerHTML = '<p style="color: var(--text-gray);">No related schemes found.</p>';
        return;
    }
    
    container.innerHTML = related.map(scheme => `
        <div class="related-card" onclick="window.location.href='scheme-details.html?id=${scheme.id}'">
            <h4>${scheme.title}</h4>
            <p>${scheme.category} • ${scheme.state}</p>
        </div>
    `).join('');
}

// ============================================
// SHOW ERROR
// ============================================
function showError(message) {
    console.error('❌ Error:', message);
    
    const overviewEl = document.getElementById('schemeOverview');
    if (overviewEl) {
        overviewEl.innerHTML = `
            <div class="error-container">
                <i class="fas fa-exclamation-circle" style="font-size:3rem;color:#FF6B6B;display:block;margin-bottom:16px;"></i>
                <h3>${message}</h3>
                <p style="color: var(--text-gray);margin-top:10px;">Please go back and try again.</p>
                <button onclick="window.location.href='index.html'" style="margin-top:20px;padding:12px 30px;background:var(--primary-gradient);border:none;border-radius:50px;color:white;font-weight:600;cursor:pointer;">
                    Go to Home
                </button>
            </div>
        `;
    }
}

// ============================================
// TAB SWITCHING
// ============================================
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const tabId = `tab-${btn.dataset.tab}`;
        const tabPane = document.getElementById(tabId);
        if (tabPane) {
            tabPane.classList.add('active');
        }
    });
});

// ============================================
// FAQ TOGGLE
// ============================================
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        item.classList.toggle('active');
    });
});

// ============================================
// SAVE SCHEME
// ============================================
function saveScheme() {
    const title = document.getElementById('schemeName')?.textContent || 'Scheme';
    const saved = JSON.parse(localStorage.getItem('savedSchemes') || '[]');
    
    if (!saved.includes(title)) {
        saved.push(title);
        localStorage.setItem('savedSchemes', JSON.stringify(saved));
        alert(`✅ "${title}" saved successfully!`);
    } else {
        alert(`⚠️ "${title}" is already saved.`);
    }
}

// ============================================
// DOWNLOAD PDF (Simulated)
// ============================================
function downloadPDF() {
    const title = document.getElementById('schemeName')?.textContent || 'Scheme';
    alert(`📄 Downloading "${title}" as PDF...\n\nThis feature will be available soon.`);
}

// ============================================
// SHARE SCHEME
// ============================================
function shareScheme() {
    const url = window.location.href;
    const title = document.getElementById('schemeName')?.textContent || 'Scheme';
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Check out this scheme: ${title}`,
            url: url
        }).catch(() => {});
    } else {
        const shareText = `Check out this scheme: ${title}\n${url}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('✅ Link copied to clipboard! Share it with others.');
        }).catch(() => {
            prompt('Copy this link:', url);
        });
    }
}

// ============================================
// THEME SWITCHER
// ============================================
const themeToggle = document.getElementById('themeToggle');
const themeDropdown = document.getElementById('themeDropdown');
const themeOptions = document.querySelectorAll('.theme-dropdown li');

if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (themeDropdown) {
            themeDropdown.classList.toggle('active');
        }
    });
}

document.addEventListener('click', (e) => {
    if (themeDropdown && !themeDropdown.contains(e.target) && e.target !== themeToggle) {
        themeDropdown.classList.remove('active');
    }
});

const applyTheme = (theme) => {
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
};

const savedTheme = localStorage.getItem('wbseva-theme') || 'default';
applyTheme(savedTheme);

themeOptions.forEach(option => {
    option.addEventListener('click', function(e) {
        e.stopPropagation();
        const theme = this.dataset.theme;
        applyTheme(theme);
        if (themeDropdown) {
            themeDropdown.classList.remove('active');
        }
    });
});

console.log('✅ Scheme details page loaded successfully!');
console.log('📋 Current params:', { schemeId, category });
console.log('📚 Total categories:', Object.keys(schemesData).length);
console.log('📚 Total schemes:', getTotalSchemes());