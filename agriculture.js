// ============================================
// EDUCATION SCHEMES - Complete JavaScript
// ============================================

// ============================================
// 1. EDUCATION SCHEMES DATA
// ============================================
const agricultureSchemes = [
    {
        id: 'edu-1',
        title: 'Swami Vivekananda Merit-cum-Means (SVMCM) Scholarship',
        category: 'Education',
        amount: '₹1,000 - ₹8,000/month',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Permanent WB resident, 60% marks, income ≤ ₹2.5 Lakh/year',
        description: 'Flagship scholarship for meritorious students from economically weaker families. Covers HS, Diploma, UG, PG, M.Phil., Ph.D.',
        applyLink: 'https://svmcm.wbhed.gov.in',
        tags: ['Scholarship', 'Merit', 'Financial Aid'],
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
        ],
        icon: 'fa-graduation-cap',
        color: '#6C3CE1'
    },
    {
        id: 'edu-2',
        title: 'Kanyashree Prakalpa Scheme (K1 & K2)',
        category: 'Education',
        amount: '₹1,000/year + ₹25,000 one-time',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Unmarried girls, Class 8-12, income ≤ ₹1.2 Lakh/year',
        description: 'Flagship social welfare initiative to empower girl students and prevent child marriage. K1 provides annual scholarship, K2 gives one-time grant.',
        applyLink: 'https://wbkanyashree.gov.in',
        tags: ['Girl Child', 'Empowerment', 'Scholarship'],
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
        ],
        icon: 'fa-venus',
        color: '#EC4899'
    },
    {
        id: 'edu-3',
        title: 'Student Credit Card Scheme',
        category: 'Education',
        amount: 'Up to ₹10 Lakh',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Higher secondary to professional courses',
        description: 'Education loans up to ₹10 lakh at 4% simple interest with entire interest subsidy borne by the state government.',
        applyLink: 'https://www.wb.gov.in',
        tags: ['Loan', 'Education', 'Financial'],
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
        ],
        icon: 'fa-credit-card',
        color: '#F59E0B'
    },
    {
        id: 'edu-4',
        title: 'Aikyashree Scholarship (WBMDFC)',
        category: 'Education',
        amount: 'Up to ₹60,000/year',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Minority students, 50% marks, income ≤ ₹2 Lakh/year',
        description: 'Pre-matric, post-matric, and merit-cum-means scholarships for minority students in West Bengal.',
        applyLink: 'https://www.wbmdfcscholarship.gov.in',
        tags: ['Minority', 'Scholarship', 'Financial Aid'],
        benefits: [
            'Pre-matric up to ₹11,000/year',
            'Post-matric up to ₹16,500/year',
            'Merit-cum-Means up to ₹33,000/year'
        ],
        documents: [
            'Aadhaar Card',
            'Minority Certificate',
            'Income Certificate',
            'Bank Account Details',
            'Previous Marksheet'
        ],
        icon: 'fa-hand-holding-heart',
        color: '#10B981'
    },
    {
        id: 'edu-5',
        title: 'Nabanna Scholarship (CM Relief Fund)',
        category: 'Education',
        amount: '₹10,000',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Students in need of financial assistance',
        description: 'One-time financial assistance of ₹10,000 from Chief Minister\'s Relief Fund for students.',
        applyLink: 'https://cmrf.wb.gov.in',
        tags: ['Financial Aid', 'Emergency', 'Support'],
        benefits: [
            '₹10,000 one-time assistance',
            'Direct bank transfer'
        ],
        documents: [
            'Aadhaar Card',
            'Income Certificate',
            'Bank Account Details',
            'Application Form'
        ],
        icon: 'fa-hand-holding-usd',
        color: '#F472B6'
    },
    {
        id: 'edu-6',
        title: 'PM-SHRI Scheme',
        category: 'Education',
        amount: 'Infrastructure Upgrades',
        state: 'West Bengal',
        level: 'Central',
        eligibility: 'Government schools in West Bengal',
        description: 'Upgrades school infrastructure, provides gas-based mid-day meals, solar panels, sanitary napkin vending machines in girls\' schools.',
        applyLink: 'https://www.pmshri.gov.in',
        tags: ['Infrastructure', 'School', 'Development'],
        benefits: [
            'Infrastructure upgrades',
            'Gas-based mid-day meals',
            'Solar panels installation'
        ],
        documents: [
            'School Registration',
            'Aadhaar Card',
            'School ID'
        ],
        icon: 'fa-school',
        color: '#3B82F6'
    },
    {
        id: 'edu-7',
        title: 'Annapurna Scheme - Female Student Support',
        category: 'Education',
        amount: '₹50,000',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Unmarried female students in higher education',
        description: 'One-time financial assistance of ₹50,000 to unmarried female students to reduce dropout rates in higher education.',
        applyLink: 'https://www.wb.gov.in',
        tags: ['Women', 'Empowerment', 'Financial Aid'],
        benefits: [
            '₹50,000 one-time assistance',
            'Reduces dropout rates'
        ],
        documents: [
            'Aadhaar Card',
            'Income Certificate',
            'Bank Account Details',
            'College ID'
        ],
        icon: 'fa-female',
        color: '#EC4899'
    },
    {
        id: 'edu-8',
        title: 'JBNSTS Senior Scholarship Program',
        category: 'Education',
        amount: 'Tuition Support',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'UG students in Basic Sciences, Engineering, Medicine',
        description: 'Since 1960, supports undergraduate students in Basic Sciences, Engineering, and Medicine from West Bengal.',
        applyLink: 'https://www.jbnsts.ac.in',
        tags: ['Science', 'Technology', 'Scholarship'],
        benefits: [
            'Tuition support',
            'Multi-phased test selection'
        ],
        documents: [
            'Aadhaar Card',
            'Previous Marksheet',
            'College ID',
            'Bank Account Details'
        ],
        icon: 'fa-flask',
        color: '#8B5CF6'
    },
    {
        id: 'edu-9',
        title: 'JBNSTS Junior Scholarship (Bigyani Kanya Medha Britti)',
        category: 'Education',
        amount: 'Tuition Support',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Higher secondary science students',
        description: 'New initiative to identify and nurture science talent at the higher secondary level in West Bengal.',
        applyLink: 'https://www.jbnsts.ac.in',
        tags: ['Science', 'Talent', 'Scholarship'],
        benefits: [
            'Identify science talent',
            'Nurture at HS level'
        ],
        documents: [
            'Aadhaar Card',
            'Previous Marksheet',
            'School ID',
            'Bank Account Details'
        ],
        icon: 'fa-microscope',
        color: '#8B5CF6'
    },
    {
        id: 'edu-10',
        title: 'Post-Matric Stipend (Talent Support Programme)',
        category: 'Education',
        amount: '₹2,550 - ₹4,900/year',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'Students with <50% marks, income ≤ ₹2 Lakh/year',
        description: 'For students with less than 50% marks but from economically weaker backgrounds.',
        applyLink: 'https://www.wb.gov.in',
        tags: ['Stipend', 'Support', 'Financial Aid'],
        benefits: [
            '₹2,550 - ₹4,900/year',
            'Supports weaker sections'
        ],
        documents: [
            'Aadhaar Card',
            'Income Certificate',
            'Previous Marksheet',
            'Bank Account Details'
        ],
        icon: 'fa-trophy',
        color: '#06D6A0'
    },
    {
        id: 'edu-11',
        title: 'PM POSHAN (Mid-Day Meal) Enhancement',
        category: 'Education',
        amount: '₹10/student/day',
        state: 'West Bengal',
        level: 'Central',
        eligibility: 'Primary school students',
        description: 'Primary-level cooking cost increased from ₹6.78 to ₹10 per student per day effective August 1, 2026.',
        applyLink: 'https://www.poshan.gov.in',
        tags: ['Nutrition', 'School', 'Health'],
        benefits: [
            '₹10/student/day cooking cost',
            'Enhanced nutritional support'
        ],
        documents: [
            'School Registration',
            'Student List'
        ],
        icon: 'fa-utensils',
        color: '#F59E0B'
    },
    {
        id: 'edu-12',
        title: 'Infrastructure & Facility Upgrades',
        category: 'Education',
        amount: 'Facility Upgrades',
        state: 'West Bengal',
        level: 'State',
        eligibility: 'All government schools',
        description: 'Comprehensive school infrastructure improvements including ceiling fans, clean toilets, arsenic-free drinking water, solar panels.',
        applyLink: 'https://www.wb.gov.in',
        tags: ['Infrastructure', 'Development', 'School'],
        benefits: [
            'Ceiling fans installation',
            'Clean toilets & arsenic-free water',
            'Solar panels & water purifiers'
        ],
        documents: [
            'School Registration',
            'Aadhaar Card'
        ],
        icon: 'fa-building',
        color: '#14B8A6'
    }
];

// ============================================
// 2. RENDER SCHEMES
// ============================================
function renderSchemes() {
    const grid = document.getElementById('schemesGrid');
    if (!grid) return;

    grid.innerHTML = agricultureSchemes.map((scheme, index) => `
        <div class="scheme-card" style="animation-delay: ${index * 0.05}s">
            <div class="scheme-card-header">
                <h3>${scheme.title}</h3>
                <span class="scheme-card-amount">${scheme.amount}</span>
            </div>
            <p>${scheme.description.substring(0, 120)}${scheme.description.length > 120 ? '...' : ''}</p>
            <div class="scheme-card-tags">
                ${scheme.tags.slice(0, 3).map(tag => `<span>#${tag}</span>`).join('')}
            </div>
            <div class="scheme-card-footer">
                <span class="scheme-card-eligibility">👤 ${scheme.eligibility.substring(0, 50)}${scheme.eligibility.length > 50 ? '...' : ''}</span>
                <button class="view-detail-btn" onclick="openModal('${scheme.id}')">
                    View Details →
                </button>
            </div>
        </div>
    `).join('');
}

// ============================================
// 3. OPEN MODAL
// ============================================
function openModal(schemeId) {
    const scheme = agricultureSchemes.find(s => s.id === schemeId);
    if (!scheme) return;

    const modal = document.getElementById('schemeModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h2 class="modal-scheme-title">${scheme.title}</h2>
        <div class="modal-scheme-meta">
            <span>📂 ${scheme.category}</span>
            <span class="modal-amount">💰 ${scheme.amount}</span>
            <span>📍 ${scheme.state}</span>
            <span>🏷️ ${scheme.level}</span>
        </div>

        <div class="modal-section">
            <h4>📋 Description</h4>
            <p>${scheme.description}</p>
        </div>

        <div class="modal-section">
            <h4>✅ Eligibility</h4>
            <p>${scheme.eligibility}</p>
        </div>

        <div class="modal-section">
            <h4>🎯 Benefits</h4>
            <ul>
                ${scheme.benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h4>📄 Required Documents</h4>
            <ul>
                ${scheme.documents.map(d => `<li>${d}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-actions">
            <a href="${scheme.applyLink}" target="_blank" class="modal-apply-btn">
                <i class="fas fa-external-link-alt"></i> Apply Now
            </a>
            <button class="modal-save-btn" onclick="saveScheme('${scheme.id}')">
                <i class="fas fa-bookmark"></i> Save
            </button>
            <button class="modal-share-btn" onclick="shareScheme('${scheme.id}')">
                <i class="fas fa-share-alt"></i> Share
            </button>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ============================================
// 4. CLOSE MODAL
// ============================================
function closeModal() {
    document.getElementById('schemeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('schemeModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// 5. SAVE SCHEME
// ============================================
function saveScheme(schemeId) {
    const scheme = agricultureSchemes.find(s => s.id === schemeId);
    if (!scheme) return;

    const saved = JSON.parse(localStorage.getItem('savedSchemes') || '[]');
    if (!saved.includes(schemeId)) {
        saved.push(schemeId);
        localStorage.setItem('savedSchemes', JSON.stringify(saved));
        alert(`✅ "${scheme.title}" saved successfully!`);
    } else {
        alert(`⚠️ "${scheme.title}" is already saved.`);
    }
}

// ============================================
// 6. SHARE SCHEME
// ============================================
function shareScheme(schemeId) {
    const scheme = agricultureSchemes.find(s => s.id === schemeId);
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
// 7. THEME SWITCHER
// ============================================
const themeBtn = document.getElementById('themeToggleBtn');
const themeDropdown = document.getElementById('themeDropdown');
const themeOptions = document.querySelectorAll('.theme-dropdown li');

if (themeBtn) {
    themeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        themeDropdown.classList.toggle('active');
        this.classList.toggle('active');
    });
}

document.addEventListener('click', function(e) {
    if (!themeDropdown?.contains(e.target) && !themeBtn?.contains(e.target)) {
        themeDropdown?.classList.remove('active');
        themeBtn?.classList.remove('active');
    }
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
    option.addEventListener('click', function() {
        const theme = this.dataset.theme;
        applyTheme(theme);
        themeDropdown?.classList.remove('active');
        themeBtn?.classList.remove('active');
    });
});

// ============================================
// 8. INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderSchemes();
    console.log('✅ Agriculture schemes loaded successfully!');
    console.log(`📚 Total schemes: $(agr).length}`);
});