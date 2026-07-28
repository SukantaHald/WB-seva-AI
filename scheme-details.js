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
            <div style="margin-bottom:20px;color:var(--text-gray);font-size:1rem;">
                <p><strong>${schemes.length}</strong> schemes available in this category</p>
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