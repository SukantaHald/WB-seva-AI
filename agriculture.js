// ============================================
// AGRICULTURE SCHEMES - West Bengal
// ============================================

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

// ============================================
// RENDER SCHEMES
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
// OPEN MODAL
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
// CLOSE MODAL
// ============================================
function closeModal() {
    document.getElementById('schemeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.getElementById('schemeModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// SAVE SCHEME
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
// SHARE SCHEME
// ============================================
function shareScheme(schemeId) {
    const scheme = agricultureSchemes.find(s => s.id === schemeId);
    if (!scheme) return;

    const shareText = `🌾 ${scheme.title}\n💰 ${scheme.amount}\n✅ ${scheme.eligibility}\n🔗 ${scheme.applyLink}`;

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
// THEME SWITCHER
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
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderSchemes();
    console.log('🌾 Agriculture schemes loaded successfully!');
    console.log(`📚 Total schemes: ${agricultureSchemes.length}`);
});