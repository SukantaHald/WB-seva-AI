// ============================================
// SCHEMES DATA - Complete Database
// ============================================

const schemesData = {
    // Education Schemes
    education: [
        {
            id: 'edu-1',
            title: 'West Bengal Student Scholarship',
            state: 'West Bengal',
            level: 'State',
            category: 'Education',
            tags: ['Scholarship', 'Student', 'Financial Aid'],
            overview: 'The West Bengal Student Scholarship provides financial assistance to meritorious students from economically weaker sections to pursue higher education.',
            eligibility: [
                'Must be a resident of West Bengal',
                'Family income less than ₹2.5 Lakhs per annum',
                'Minimum 60% marks in previous examination',
                'Enrolled in recognized institution'
            ],
            benefits: [
                'Up to ₹50,000 per year for college students',
                '₹25,000 per year for school students',
                'Book allowance of ₹5,000',
                'Hostel fee reimbursement'
            ],
            documents: [
                'Aadhaar Card',
                'Income Certificate',
                'Previous Year Marksheet',
                'Bank Account Details',
                'Passport Size Photo'
            ],
            applyLink: 'https://www.wb.gov.in/scholarship',
            subsidy: '₹25,000 - ₹50,000',
            color: '#6C3CE1'
        },
        {
            id: 'edu-2',
            title: 'Kanyashree Scheme',
            state: 'West Bengal',
            level: 'State',
            category: 'Education',
            tags: ['Girl Child', 'Education', 'Empowerment'],
            overview: 'Kanyashree Scheme is a flagship initiative by the West Bengal Government to empower girl children through education and financial support.',
            eligibility: [
                'Girl child aged 13-18 years',
                'Must be a resident of West Bengal',
                'Enrolled in recognized school/college',
                'Unmarried status'
            ],
            benefits: [
                'Annual scholarship of ₹1,000',
                'One-time grant of ₹25,000 at age 18',
                'Conditional cash transfer',
                'Life skills training'
            ],
            documents: [
                'Birth Certificate',
                'Aadhaar Card',
                'School/College ID',
                'Bank Account Details',
                'Parent\'s Income Certificate'
            ],
            applyLink: 'https://www.wb.gov.in/kanyashree',
            subsidy: '₹1,000 - ₹25,000',
            color: '#FF6B6B'
        }
    ],

    // Agriculture Schemes
    agriculture: [
        {
            id: 'agri-1',
            title: 'Assistance for Installation of Sprinkler / Drip Micro Irrigation Systems',
            state: 'All India',
            level: 'Central',
            category: 'Agriculture',
            tags: ['Agriculture', 'Crop', 'Farmer', 'Irrigation'],
            overview: 'This scheme provides financial assistance to farmers for installing modern irrigation systems to improve water efficiency and crop yield.',
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
            ],
            applyLink: 'https://www.wb.gov.in/irrigation-scheme',
            subsidy: '50% Subsidy',
            color: '#10B981'
        },
        {
            id: 'agri-2',
            title: 'Amar Fasal Amar Gola (AFAG)',
            state: 'West Bengal',
            level: 'State',
            category: 'Agriculture',
            tags: ['Farmer', 'Storage', 'Warehouse'],
            overview: 'The West Bengal Government announced this pilot project to provide financial assistance to marginal farmers for storehouses and vending carts.',
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
            ],
            applyLink: 'https://www.wb.gov.in/amar-fasal-amar-gola',
            subsidy: '₹5,000 - ₹25,000',
            color: '#10B981'
        }
    ],

    // Health Schemes
    health: [
        {
            id: 'health-1',
            title: 'Swasthya Sathi Scheme',
            state: 'West Bengal',
            level: 'State',
            category: 'Health',
            tags: ['Health', 'Medical', 'Family', 'Insurance'],
            overview: 'Swasthya Sathi is a comprehensive health insurance scheme for all residents of West Bengal providing coverage up to ₹5 Lakhs per family per year.',
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
            ],
            applyLink: 'https://www.wb.gov.in/swasthya-sathi',
            subsidy: '₹5,00,000 Coverage',
            color: '#FF6B6B'
        }
    ],

    // Skill Development
    skill: [
        {
            id: 'skill-1',
            title: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
            state: 'All India',
            level: 'Central',
            category: 'Skill Development',
            tags: ['Skill', 'Training', 'Employment', 'Certification'],
            overview: 'PMKVY is a flagship scheme that enables youth to take up industry-relevant skill training to secure a better livelihood.',
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
            ],
            applyLink: 'https://pmkvyofficial.org',
            subsidy: 'Free Training + Certification',
            color: '#6366F1'
        }
    ],

    // Rural Development
    rural: [
        {
            id: 'rural-1',
            title: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
            state: 'All India',
            level: 'Central',
            category: 'Rural Development',
            tags: ['Rural', 'Employment', 'Wage', 'Infrastructure'],
            overview: 'MGNREGA provides 100 days of guaranteed wage employment to rural households to enhance livelihood security.',
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
            ],
            applyLink: 'https://nrega.nic.in',
            subsidy: '100 Days Employment',
            color: '#14B8A6'
        }
    ],

    // Digital India
    digital: [
        {
            id: 'digital-1',
            title: 'Digital India Program',
            state: 'All India',
            level: 'Central',
            category: 'Digital India',
            tags: ['Digital', 'Technology', 'Infrastructure', 'Aadhaar'],
            overview: 'Digital India is a flagship program to transform India into a digitally empowered society and knowledge economy.',
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
            ],
            applyLink: 'https://digitalindia.gov.in',
            subsidy: 'Free Digital Services',
            color: '#8B5CF6'
        }
    ],

    // Energy
    energy: [
        {
            id: 'energy-1',
            title: 'Pradhan Mantri Ujjwala Yojana (PMUY)',
            state: 'All India',
            level: 'Central',
            category: 'Energy',
            tags: ['Energy', 'LPG', 'Women', 'Clean Fuel'],
            overview: 'PMUJ provides LPG connections to women from Below Poverty Line (BPL) households to promote clean cooking fuel.',
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
            ],
            applyLink: 'https://www.pmujjwala.gov.in',
            subsidy: 'Free LPG Connection',
            color: '#F59E0B'
        }
    ]
};

// Function to get schemes by category
function getSchemesByCategory(category) {
    return schemesData[category] || [];
}

// Function to get scheme by ID
function getSchemeById(id) {
    for (let category in schemesData) {
        const scheme = schemesData[category].find(s => s.id === id);
        if (scheme) return scheme;
    }
    return null;
}

// Function to search schemes
function searchSchemes(query) {
    const results = [];
    const q = query.toLowerCase();
    for (let category in schemesData) {
        schemesData[category].forEach(scheme => {
            if (scheme.title.toLowerCase().includes(q) || 
                scheme.category.toLowerCase().includes(q) ||
                scheme.tags.some(tag => tag.toLowerCase().includes(q))) {
                results.push(scheme);
            }
        });
    }
    return results;
}