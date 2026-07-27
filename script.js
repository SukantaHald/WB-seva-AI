// ============================================
// WBseva AI - Main JavaScript File
// ============================================

// ============================================
// CONFIGURATION
// ============================================
const API_URL = '/api/chat';
let verifyMode = true;
let currentCategory = null;

// ============================================
// SCHEME CATEGORIES DATA
// ============================================
const categories = [
    { 
        id: 'education', 
        name: 'Education', 
        icon: 'fa-graduation-cap', 
        count: '15+', 
        color: '#667eea',
        schemes: ['Kanyashree', 'SVMCM', 'Student Credit Card', 'Oasis']
    },
    { 
        id: 'healthcare', 
        name: 'Healthcare', 
        icon: 'fa-heartbeat', 
        count: '8+', 
        color: '#f5576c',
        schemes: ['Health Insurance', 'Free Treatment', 'Medical Assistance']
    },
    { 
        id: 'women', 
        name: 'Women Empowerment', 
        icon: 'fa-female', 
        count: '10+', 
        color: '#f093fb',
        schemes: ['Kanyashree', 'Rupashree', 'Women Entrepreneurship']
    },
    { 
        id: 'employment', 
        name: 'Employment', 
        icon: 'fa-briefcase', 
        count: '12+', 
        color: '#43e97b',
        schemes: ['Yuvashree', 'WBPSC', 'Police Recruitment', 'Skill Development']
    },
    { 
        id: 'housing', 
        name: 'Housing', 
        icon: 'fa-home', 
        count: '6+', 
        color: '#f59e0b',
        schemes: ['PMAY', 'Bangla Awas', 'Housing Loan Subsidy']
    },
    { 
        id: 'agriculture', 
        name: 'Agriculture', 
        icon: 'fa-seedling', 
        count: '8+', 
        color: '#34d399',
        schemes: ['PM-KISAN', 'Farm Subsidies', 'Crop Insurance']
    },
    { 
        id: 'skill', 
        name: 'Skill Development', 
        icon: 'fa-tools', 
        count: '7+', 
        color: '#a78bfa',
        schemes: ['Skill Training', 'Youth Employment', 'Digital Skills']
    },
    { 
        id: 'rural', 
        name: 'Rural Development', 
        icon: 'fa-tree', 
        count: '9+', 
        color: '#34d399',
        schemes: ['MGNREGA', 'Rural Housing', 'Village Development']
    },
    { 
        id: 'digital', 
        name: 'Digital India', 
        icon: 'fa-laptop', 
        count: '8+', 
        color: '#4facfe',
        schemes: ['Digital Literacy', 'E-Governance', 'Online Services']
    },
    { 
        id: 'energy', 
        name: 'Energy', 
        icon: 'fa-bolt', 
        count: '6+', 
        color: '#fbbf24',
        schemes: ['Solar Subsidy', 'Energy Efficiency', 'Rural Electrification']
    },
    { 
        id: 'transport', 
        name: 'Transportation', 
        icon: 'fa-bus', 
        count: '5+', 
        color: '#f472b6',
        schemes: ['Bus Subsidy', 'Road Development', 'Vehicle Scheme']
    },
    { 
        id: 'senior', 
        name: 'Senior Citizens', 
        icon: 'fa-user-astronaut', 
        count: '7+', 
        color: '#a78bfa',
        schemes: ['Pension Scheme', 'Health Benefits', 'Elderly Care']
    }
];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    setupEventListeners();
    createParticles();
    console.log('🤖 WBseva AI Loaded Successfully!');
    console.log('📡 API Endpoint:', API_URL);
    console.log('📊 Categories Loaded:', categories.length);
});

// ============================================
// RENDER CATEGORIES
// ============================================
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.setProperty('--cat-color', cat.color);
        card.onclick = () => handleCategoryClick(cat);
        
        card.innerHTML = `
            <div class="category-icon" style="background: ${cat.color}20; color: ${cat.color};">
                <i class="fas ${cat.icon}"></i>
            </div>
            <h3 class="category-name">${cat.name}</h3>
            <p class="category-count">${cat.count} schemes available</p>
            <div class="category-tags">
                ${cat.schemes.slice(0, 2).map(s => `<span class="category-tag">${s}</span>`).join('')}
                ${cat.schemes.length > 2 ? `<span class="category-tag">+${cat.schemes.length - 2} more</span>` : ''}
            </div>
        `;
        grid.appendChild(card);
    });
}

// ============================================
// CATEGORY CLICK HANDLER
// ============================================
function handleCategoryClick(category) {
    currentCategory = category;
    const question = `Show me all ${category.name} schemes in West Bengal`;
    ask(question);
}

// ============================================
// SEND MESSAGE
// ============================================
async function sendMessage() {
    const input = document.getElementById('userInput');
    const query = input.value.trim();
    if (!query) return;

    addMessage('user', query);
    input.value = '';
    input.disabled = true;
    showTyping();
    scrollToChat();

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: query })
        });

        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        hideTyping();
        addMessage('ai', data.response, data.verified, data.schemes);
        scrollToChat();
    } catch (error) {
        hideTyping();
        addMessage('ai', '⚠️ Service temporarily unavailable. Please try again later.');
        scrollToChat();
    }

    input.disabled = false;
    input.focus();
}

// ============================================
// HERO SEARCH
// ============================================
function sendHeroMessage() {
    const input = document.getElementById('heroInput');
    const query = input.value.trim();
    if (!query) return;
    document.getElementById('userInput').value = query;
    document.getElementById('chatSection').scrollIntoView({ behavior: 'smooth' });
    setTimeout(sendMessage, 500);
}

// ============================================
// ADD MESSAGE
// ============================================
function addMessage(type, content, verified = null, schemes = null) {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');

    if (type === 'user') {
        div.className = 'message-user';
        div.innerHTML = `
            <div class="message-bubble bubble-user">
                <div class="message-text">${escapeHtml(content)}</div>
                <div class="message-footer">
                    <span class="message-time">You • Just now</span>
                </div>
            </div>
            <div class="message-avatar user-avatar">👤</div>
        `;
    } else {
        const verifiedBadge = verified === true ?
            '<span class="badge-verified">✅ Verified</span>' :
            verified === false ?
            '<span class="badge-unverified">⚠️ Unverified</span>' :
            '';

        let schemesHTML = '';
        if (schemes && schemes.length > 0) {
            schemesHTML = `
                <div class="message-schemes">
                    <span class="schemes-title"><i class="fas fa-list"></i> Related Schemes</span>
                    ${schemes.slice(0, 3).map(s => `
                        <div class="scheme-chip">
                            <span class="scheme-chip-name">${s.name}</span>
                            ${s.portal ? `<a href="http://${s.portal}" target="_blank" class="scheme-chip-link"><i class="fas fa-external-link-alt"></i></a>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }

        div.className = 'message-ai';
        div.innerHTML = `
            <div class="message-avatar">
                <img src="wbmap.png" alt="WBseva AI" style="width:36px;height:36px;border-radius:50%;object-fit:cover;" />
            </div>
            <div class="message-bubble bubble-ai">
                <div class="message-text">${escapeHtml(content)}</div>
                ${schemesHTML}
                <div class="message-footer">
                    ${verifiedBadge}
                    <span class="message-time">AI • Just now</span>
                </div>
            </div>
        `;
    }

    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

// ============================================
// TYPING INDICATOR
// ============================================
function showTyping() {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.id = 'typingIndicator';
    div.className = 'message-ai';
    div.innerHTML = `
        <div class="message-avatar">
            <img src="wbmap.png" alt="WBseva AI" style="width:36px;height:36px;border-radius:50%;object-fit:cover;" />
        </div>
        <div class="message-bubble bubble-ai">
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function hideTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

// ============================================
// HELPERS
// ============================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function ask(text) {
    document.getElementById('userInput').value = text;
    document.getElementById('chatSection').scrollIntoView({ behavior: 'smooth' });
    setTimeout(sendMessage, 500);
}

function scrollToChat() {
    const container = document.getElementById('chatMessages');
    container.scrollTop = container.scrollHeight;
}

function clearChat() {
    if (confirm('Clear all messages?')) {
        const container = document.getElementById('chatMessages');
        container.innerHTML = `
            <div class="message-ai">
                <div class="message-avatar">
                    <img src="wbmap.png" alt="WBseva AI" style="width:36px;height:36px;border-radius:50%;object-fit:cover;" />
                </div>
                <div class="message-bubble bubble-ai">
                    <div class="message-text">
                        <strong>👋 Namaskar!</strong> I'm <strong>WBseva AI</strong>, your smart assistant for West Bengal government services.
                    </div>
                    <div class="message-footer">
                        <span class="badge-verified">✅ Verified</span>
                        <span class="message-time">Just now</span>
                    </div>
                </div>
            </div>
        `;
    }
}

function toggleVerifyMode() {
    verifyMode = !verifyMode;
    const icon = document.getElementById('verifyIcon');
    const badge = document.getElementById('statusBadge');
    if (verifyMode) {
        icon.style.color = '#10b981';
        badge.innerHTML = '<i class="fas fa-circle"></i> Verify ON';
        badge.className = 'chat-status-online';
    } else {
        icon.style.color = '#f59e0b';
        badge.innerHTML = '<i class="fas fa-circle"></i> Verify OFF';
        badge.className = 'chat-status-warning';
    }
}

// ============================================
// NAV TOGGLE (Mobile)
// ============================================
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Close nav when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.navbar');
        const toggle = document.getElementById('navToggle');
        if (nav && !nav.contains(event.target)) {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) navLinks.classList.remove('active');
        }
    });

    // Close nav when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // Enter key for user input
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !this.disabled) sendMessage();
        });
    }

    // Enter key for hero input
    const heroInput = document.getElementById('heroInput');
    if (heroInput) {
        heroInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendHeroMessage();
        });
    }

    // Auto focus
    setTimeout(() => {
        const input = document.getElementById('userInput');
        if (input) input.focus();
    }, 1000);
}

// ============================================
// PARTICLES
// ============================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ============================================
// EXPOSE FUNCTIONS TO GLOBAL SCOPE
// ============================================
window.sendMessage = sendMessage;
window.sendHeroMessage = sendHeroMessage;
window.ask = ask;
window.clearChat = clearChat;
window.toggleVerifyMode = toggleVerifyMode;
window.toggleNav = toggleNav;
window.handleCategoryClick = handleCategoryClick;