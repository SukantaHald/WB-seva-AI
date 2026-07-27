// ============================================
// COMPLETE SCRIPT.JS - WBseva AI with Chatbot
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
// 3. COUNTER ANIMATION
// ============================================
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (counter) => {
    const target = parseFloat(counter.dataset.count);
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const updateCounter = () => {
        current += target / steps;
        if (current >= target) {
            counter.textContent = isDecimal ? target.toFixed(1) : Math.floor(target) + '+';
            return;
        }
        counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current) + '+';
        setTimeout(updateCounter, stepTime);
    };

    updateCounter();
};

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

// ============================================
// 4. CATEGORIES DATA & RENDER
// ============================================
const categories = [
    { icon: 'fa-graduation-cap', name: 'Education', count: '12 Schemes', color: '#6C3CE1' },
    { icon: 'fa-heart-pulse', name: 'Health', count: '8 Schemes', color: '#FF6B6B' },
    { icon: 'fa-building', name: 'Housing', count: '6 Schemes', color: '#F59E0B' },
    { icon: 'fa-hand-holding-dollar', name: 'Financial', count: '15 Schemes', color: '#06D6A0' },
    { icon: 'fa-briefcase', name: 'Employment', count: '10 Schemes', color: '#3B82F6' },
    { icon: 'fa-tractor', name: 'Agriculture', count: '9 Schemes', color: '#10B981' },
    { icon: 'fa-scale-balanced', name: 'Legal', count: '7 Schemes', color: '#8B5CF6' },
    { icon: 'fa-utensils', name: 'Food & Nutrition', count: '5 Schemes', color: '#F472B6' },
];

const categoriesGrid = document.getElementById('categoriesGrid');

if (categoriesGrid) {
    categories.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.setProperty('--cat-color', cat.color);
        card.innerHTML = `
            <div class="category-icon" style="background: ${cat.color}20; color: ${cat.color}">
                <i class="fas ${cat.icon}"></i>
            </div>
            <h3>${cat.name}</h3>
            <p>${cat.count}</p>
            <div class="category-hover-line" style="background: ${cat.color}"></div>
        `;
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
            // Open chatbot with category query
            openChatbot();
            setTimeout(() => {
                sendMessage(`Show me ${cat.name} schemes`);
            }, 500);
        });
        categoriesGrid.appendChild(card);
    });
}

// ============================================
// 5. SEARCH FUNCTIONALITY
// ============================================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

if (searchBtn && searchInput) {
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            setTimeout(() => {
                searchBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
                openChatbot();
                setTimeout(() => {
                    sendMessage(`Searching for "${query}"`);
                }, 500);
            }, 800);
        } else {
            searchInput.style.borderColor = '#FF6B6B';
            searchInput.placeholder = 'Please enter a search term!';
            setTimeout(() => {
                searchInput.style.borderColor = '';
                searchInput.placeholder = 'Search for schemes...';
            }, 2000);
        }
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Search suggestions
document.querySelectorAll('.search-suggestions span').forEach(suggestion => {
    suggestion.addEventListener('click', () => {
        searchInput.value = suggestion.textContent;
        searchBtn.click();
    });
});

// ============================================
// 6. CHATBOT FUNCTIONALITY
// ============================================
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatMessages = document.getElementById('chatbotMessages');

// Chatbot responses
const botResponses = {
    'hello': 'Hello! 👋 How can I help you with government schemes today?',
    'hi': 'Hi there! 😊 I\'m here to help you find the right government schemes.',
    'education': '🎓 I can help you find education schemes! Here are some:\n1. West Bengal Student Scholarship\n2. Kanyashree Scheme\n3. Sikshashree Scheme\n\nWould you like details on any specific scheme?',
    'health': '🏥 Here are some health schemes in West Bengal:\n1. Swasthya Sathi Scheme\n2. National Health Mission\n3. Arogya Sanjeevani\n\nWhich one interests you?',
    'housing': '🏠 Housing schemes available:\n1. Jai Jawahar Awas Yojana\n2. Pradhan Mantri Awas Yojana\n3. State Housing Scheme\n\nTell me which one you want to know about!',
    'financial': '💰 Financial assistance schemes:\n1. Credit Link Capital Subsidy\n2. Mudra Yojana\n3. Stand-Up India Scheme\n\nWould you like more details?',
    'farmer': '🌾 For farmers, we have:\n1. PM Kisan Samman Nidhi\n2. Soil Health Card Scheme\n3. Crop Insurance Scheme\n\nWhich one would you like to explore?',
    'help': '🤖 I\'m your WBseva AI Assistant! I can help you:\n- Find government schemes\n- Check eligibility\n- Apply for schemes\n- Get real-time updates\n\nJust tell me what you need!',
    'default': 'I understand you\'re looking for help! 🤔 Could you please tell me more specifically what you need? You can ask about:\n- Education schemes\n- Health benefits\n- Housing schemes\n- Financial assistance\n- Farmer schemes\n\nOr just type "help" for more options!'
};

// Predefined responses for better UX
const getBotResponse = (message) => {
    const msg = message.toLowerCase().trim();
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return botResponses.hello;
    } else if (msg.includes('education') || msg.includes('school') || msg.includes('student')) {
        return botResponses.education;
    } else if (msg.includes('health') || msg.includes('medical') || msg.includes('hospital')) {
        return botResponses.health;
    } else if (msg.includes('housing') || msg.includes('house') || msg.includes('home')) {
        return botResponses.housing;
    } else if (msg.includes('financial') || msg.includes('money') || msg.includes('loan')) {
        return botResponses.financial;
    } else if (msg.includes('farmer') || msg.includes('agriculture') || msg.includes('crop')) {
        return botResponses.farmer;
    } else if (msg.includes('help') || msg.includes('support')) {
        return botResponses.help;
    } else {
        return botResponses.default;
    }
};

// Send message function
const sendMessage = (message) => {
    // Add user message
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

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <img src="wbseva.png" alt="WBseva" />
        </div>
        <div class="message-content">
            <p style="color: var(--text-gray);">Typing<span class="typing-dots">...</span></p>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Get bot response
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
                <img src="wbseva.png" alt="WBseva" />
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

// Open chatbot
const openChatbot = () => {
    chatbotContainer.classList.add('active');
    chatbotToggle.style.display = 'none';
};

// Close chatbot
const closeChatbot = () => {
    chatbotContainer.classList.remove('active');
    chatbotToggle.style.display = 'flex';
};

// Toggle chatbot
chatbotToggle.addEventListener('click', openChatbot);
chatbotClose.addEventListener('click', closeChatbot);

// Send message on button click
chatSendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        sendMessage(message);
        chatInput.value = '';
    }
});

// Send message on Enter key
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const message = chatInput.value.trim();
        if (message) {
            sendMessage(message);
            chatInput.value = '';
        }
    }
});

// Suggestion buttons
document.querySelectorAll('.suggestion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const message = btn.dataset.msg;
        if (message) {
            sendMessage(message);
        }
    });
});

// ============================================
// 7. PARALLAX EFFECT
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
// 8. SCROLL TOP BUTTON
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
// 9. AVATAR INTERACTIVE EFFECTS
// ============================================
const avatarImg = document.getElementById('avatarImg');

if (avatarImg) {
    avatarImg.addEventListener('mouseenter', () => {
        document.querySelectorAll('.glow-ring').forEach(ring => {
            ring.style.animationDuration = '5s';
        });
    });

    avatarImg.addEventListener('mouseleave', () => {
        document.querySelectorAll('.glow-ring').forEach(ring => {
            ring.style.animationDuration = '';
        });
    });

    avatarImg.addEventListener('click', () => {
        openChatbot();
        setTimeout(() => {
            sendMessage('Hello! I need help with government schemes.');
        }, 500);
    });
}

// ============================================
// 10. KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.blur();
    }
    if (e.key === 'Escape' && chatbotContainer.classList.contains('active')) {
        closeChatbot();
    }
});

// ============================================
// 11. CONSOLE WELCOME
// ============================================
console.log('%c🚀 WBseva AI - Your Smart Assistant', 'font-size: 24px; font-weight: bold; color: #6C3CE1;');
console.log('%c💡 Tips:', 'font-size: 16px; color: #06D6A0;');
console.log('%c   • Click the avatar to chat with AI', 'font-size: 14px; color: #A0A0B8;');
console.log('%c   • Press Ctrl+K to search', 'font-size: 14px; color: #A0A0B8;');
console.log('%c   • Click category cards for AI recommendations', 'font-size: 14px; color: #A0A0B8;');
console.log('%c📋 Version: 3.0 | Made with ❤️ for West Bengal', 'font-size: 14px; color: #A0A0B8;');

// ============================================
// 12. CATEGORY CARD SCROLL ANIMATION
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
// 13. ACTIVE NAV LINK
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
// 14. DYNAMIC YEAR IN FOOTER
// ============================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
}

console.log('✅ WBseva AI loaded successfully!');
// ============================================
// THEME SWITCHER
// ============================================
const themeToggle = document.getElementById('themeToggle');
const themeDropdown = document.getElementById('themeDropdown');
const themeOptions = document.querySelectorAll('.theme-dropdown li');

// Toggle dropdown
if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        themeDropdown.classList.toggle('active');
    });
}

// Close dropdown on outside click
document.addEventListener('click', () => {
    if (themeDropdown) {
        themeDropdown.classList.remove('active');
    }
});

// Apply theme
const applyTheme = (theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-orange', 'theme-pink', 'theme-red', 'theme-teal');
    
    if (theme !== 'default') {
        root.classList.add(`theme-${theme}`);
    }
    
    // Update active state
    themeOptions.forEach(opt => {
        opt.classList.remove('active');
        if (opt.dataset.theme === theme) {
            opt.classList.add('active');
        }
    });
    
    // Save to localStorage
    localStorage.setItem('wbseva-theme', theme);
};

// Load saved theme
const savedTheme = localStorage.getItem('wbseva-theme') || 'default';
applyTheme(savedTheme);

// Theme option click
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const theme = option.dataset.theme;
        applyTheme(theme);
        themeDropdown.classList.remove('active');
    });
});