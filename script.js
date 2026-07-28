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
        
        // ============================================
        // FIXED: ALL categories open scheme-details.html
        // ============================================
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3')?.textContent || '';
            
            // Map category names to URL parameters
            const categoryMap = {
                'Education': 'education',
                'Healthcare': 'health',
                'Women Empowerment': 'women',
                'Housing': 'housing',
                'Financial': 'financial',
                'Employment': 'employment',
                'Agriculture': 'agriculture',
                'Legal': 'legal',
                'Food & Nutrition': 'food',
                'Skill Development': 'skill',
                'Transportation': 'transport',
                'Energy': 'energy',
                'Digital India': 'digital',
                'Rural Development': 'rural'
            };
            
            const categoryKey = categoryMap[categoryName] || categoryName.toLowerCase();
            
            // ALL categories open the same way
            window.open(`scheme-details.html?category=${categoryKey}`, '_blank');
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