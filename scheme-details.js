// ============================================
// SCHEME DETAILS JAVASCRIPT
// ============================================

// Get scheme ID from URL
const urlParams = new URLSearchParams(window.location.search);
const schemeId = urlParams.get('id');

// Load scheme details
document.addEventListener('DOMContentLoaded', () => {
    if (schemeId) {
        loadSchemeDetails(schemeId);
    } else {
        // Redirect to home if no ID
        window.location.href = 'index.html';
    }
});

function loadSchemeDetails(id) {
    const scheme = getSchemeById(id);
    
    if (!scheme) {
        document.getElementById('schemeOverview').textContent = 'Scheme not found. Please go back and try again.';
        return;
    }
    
    // Update page title
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
    tagsContainer.innerHTML = scheme.tags.map(tag => `<span>${tag}</span>`).join('');
    
    // Update overview
    document.getElementById('schemeOverview').textContent = scheme.overview;
    
    // Update eligibility
    const eligibilityList = document.getElementById('schemeEligibility');
    eligibilityList.innerHTML = scheme.eligibility.map(item => `<li>${item}</li>`).join('');
    
    // Update benefits
    const benefitsList = document.getElementById('schemeBenefits');
    benefitsList.innerHTML = scheme.benefits.map(item => `<li>${item}</li>`).join('');
    
    // Update subsidy
    document.getElementById('schemeSubsidy').textContent = scheme.subsidy;
    
    // Update documents
    const docsList = document.getElementById('schemeDocuments');
    docsList.innerHTML = scheme.documents.map(doc => `<li>${doc}</li>`).join('');
    
    // Update apply link
    document.getElementById('schemeApplyLink').href = scheme.applyLink;
    
    // Load related schemes
    loadRelatedSchemes(scheme.category, scheme.id);
}

function loadRelatedSchemes(category, excludeId) {
    const schemes = getSchemesByCategory(category.toLowerCase());
    const related = schemes.filter(s => s.id !== excludeId).slice(0, 3);
    
    const container = document.getElementById('relatedSchemes');
    
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

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab
        btn.classList.add('active');
        const tabId = `tab-${btn.dataset.tab}`;
        document.getElementById(tabId).classList.add('active');
    });
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        item.classList.toggle('active');
    });
});

// Save scheme
function saveScheme() {
    const title = document.getElementById('schemeName').textContent;
    const saved = JSON.parse(localStorage.getItem('savedSchemes') || '[]');
    
    if (!saved.includes(title)) {
        saved.push(title);
        localStorage.setItem('savedSchemes', JSON.stringify(saved));
        alert(`✅ "${title}" saved successfully!`);
    } else {
        alert(`⚠️ "${title}" is already saved.`);
    }
}

// Download PDF (simulated)
function downloadPDF() {
    const title = document.getElementById('schemeName').textContent;
    alert(`📄 Downloading "${title}" as PDF...\n\nThis feature will be available soon.`);
}

// Share scheme
function shareScheme() {
    const url = window.location.href;
    const title = document.getElementById('schemeName').textContent;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Check out this scheme: ${title}`,
            url: url
        }).catch(() => {});
    } else {
        // Fallback
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
        themeDropdown.classList.toggle('active');
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
        themeDropdown.classList.remove('active');
    });
});

console.log('✅ Scheme details page loaded successfully!');