// ============================================
// CHATBOT - Entertainment & FAQ
// ============================================

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatMessages = document.getElementById('chatbotMessages');

// ============================================
// CHATBOT KNOWLEDGE BASE
// ============================================
const chatbotKnowledge = [
    // Greetings
    {
        keywords: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good evening'],
        response: "👋 Namaskar! I'm WBseva AI Assistant. How can I help you today? 😊"
    },
    // Jokes
    {
        keywords: ['joke', 'funny', 'laugh', 'humor'],
        response: "😂 Here's a joke for you:\n\nWhy don't scientists trust atoms?\nBecause they make up everything!\n\n😄 Want another one? Just ask!"
    },
    // About West Bengal
    {
        keywords: ['west bengal', 'wb', 'kolkata', 'bengal'],
        response: "🏛️ West Bengal is a beautiful state in eastern India! 🎨\n\n✨ Famous for:\n• Rich culture and art\n• Delicious food (Roshogolla! 🍬)\n• Howrah Bridge 🌉\n• Sundarbans Mangrove Forest 🌿\n• Durga Puja festival 🎭\n\nAnything specific you want to know about WB?"
    },
    // Education Schemes
    {
        keywords: ['education', 'scholarship', 'student', 'school', 'college', 'study'],
        response: "🎓 **Education Schemes in West Bengal:**\n\n1. **SVMCM Scholarship** - ₹1,000-8,000/month\n2. **Kanyashree** - ₹1,000/year + ₹25,000 one-time\n3. **Student Credit Card** - Up to ₹10 Lakh loan\n4. **Oasis Scholarship** - For SC/ST/OBC students\n5. **Nabanna Scholarship** - ₹10,000 one-time\n\n💡 Click on 'Education' category for full details!"
    },
    // Agriculture Schemes
    {
        keywords: ['agriculture', 'farmer', 'irrigation', 'crop', 'kisan', 'farming'],
        response: "🌾 **Agriculture Schemes in West Bengal:**\n\n1. **Sprinkler/Drip Irrigation** - 50% subsidy\n2. **Amar Fasal Amar Gola** - ₹5,000-25,000\n3. **Animal Breeding** - Subsidized bulls\n4. **PM Kisan** - ₹6,000/year\n5. **Soil Health Card** - Free testing\n6. **Crop Insurance** - Insurance coverage\n\n💡 Click on 'Agriculture' category for full details!"
    },
    // Health Schemes
    {
        keywords: ['health', 'medical', 'hospital', 'doctor', 'insurance', 'treatment'],
        response: "🏥 **Health Schemes in West Bengal:**\n\n1. **Swasthya Sathi** - ₹5 Lakh coverage per family\n2. **National Health Mission** - Healthcare services\n3. **Arogya Sanjeevani** - Health insurance\n\n💡 Click on 'Healthcare' category for full details!"
    },
    // Housing Schemes
    {
        keywords: ['housing', 'house', 'home', 'awas', 'construction', 'rent'],
        response: "🏠 **Housing Schemes in West Bengal:**\n\n1. **Jai Jawahar Awas Yojana** - Financial assistance\n2. **Pradhan Mantri Awas Yojana** - Interest subsidy\n3. **Bangla Awas Yojana** - Rural housing\n\n💡 Click on 'Housing' category for full details!"
    },
    // Financial Schemes
    {
        keywords: ['financial', 'money', 'loan', 'credit', 'subsidy', 'business'],
        response: "💰 **Financial Schemes in West Bengal:**\n\n1. **Credit Link Capital Subsidy** - For small businesses\n2. **Mudra Yojana** - Business loans\n3. **Stand-Up India** - For SC/ST women\n\n💡 Click on 'Financial' category for full details!"
    },
    // Employment/Jobs
    {
        keywords: ['job', 'employment', 'career', 'work', 'recruitment', 'vacancy'],
        response: "💼 **Government Jobs in West Bengal:**\n\n1. **WBPSC** - Civil Services\n2. **West Bengal Police** - Constable/SI\n3. **Health Department** - Various positions\n4. **ICDS** - Anganwadi workers\n5. **Employment Exchange** - Job registration\n\n📌 Check official websites for latest notifications!"
    },
    // Skill Development
    {
        keywords: ['skill', 'training', 'course', 'learn', 'certification'],
        response: "📚 **Skill Development Schemes:**\n\n1. **PMKVY** - Free training + certification\n2. **Skill India Mission** - Various courses\n3. **Skill Development Mission WB** - State programs\n\n💡 Click on 'Skill Development' category for full details!"
    },
    // Rural Development
    {
        keywords: ['rural', 'village', 'nrega', 'gram', 'panchayat'],
        response: "🏡 **Rural Development Schemes:**\n\n1. **MGNREGA** - 100 days employment\n2. **PM Gram Sadak Yojana** - Rural roads\n3. **Rural Housing** - Housing support\n\n💡 Click on 'Rural Development' category for full details!"
    },
    // Digital India
    {
        keywords: ['digital', 'technology', 'internet', 'online', 'aadhaar', 'tech'],
        response: "💻 **Digital India Initiatives:**\n\n1. **Digital India Program** - Digital services\n2. **Common Service Centres** - Online access\n3. **Aadhaar** - Digital identity\n4. **Mobile Governance** - Services on phone\n\n💡 Click on 'Digital India' category for full details!"
    },
    // Energy
    {
        keywords: ['energy', 'electricity', 'lpg', 'solar', 'power', 'fuel'],
        response: "⚡ **Energy Schemes:**\n\n1. **Ujjwala Yojana** - Free LPG connection\n2. **Solar Rooftop Scheme** - Solar installation\n3. **Energy Conservation** - Various programs\n\n💡 Click on 'Energy' category for full details!"
    },
    // Women Empowerment
    {
        keywords: ['women', 'woman', 'girl', 'female', 'ladies', 'empowerment'],
        response: "👩 **Women Empowerment Schemes:**\n\n1. **Kanyashree** - Girl child education\n2. **Annapurna** - Female student support\n3. **Swayamsiddha** - Women's development\n4. **Rupashree** - Marriage assistance\n\n💡 Click on 'Women Empowerment' category for full details!"
    },
    // Legal
    {
        keywords: ['legal', 'law', 'justice', 'court', 'lawyer', 'advocate'],
        response: "⚖️ **Legal Services in West Bengal:**\n\n1. **Legal Aid Scheme** - Free legal services\n2. **Consumer Protection** - Consumer rights\n3. **Women Legal Cells** - Women's legal rights\n\n💡 Click on 'Legal' category for full details!"
    },
    // Food & Nutrition
    {
        keywords: ['food', 'nutrition', 'meal', 'mid-day', 'ration', 'nutrition'],
        response: "🍽️ **Food & Nutrition Schemes:**\n\n1. **Mid-Day Meal** - School meals\n2. **Public Distribution System** - Ration cards\n3. **Nutrition Programs** - Women & children\n\n💡 Click on 'Food & Nutrition' category for full details!"
    },
    // Transportation
    {
        keywords: ['transport', 'bus', 'train', 'travel', 'commute', 'vehicle'],
        response: "🚌 **Transportation Services:**\n\n1. **Public Transport Subsidy** - For seniors/students\n2. **State Transport** - Bus services\n3. **Railway Services** - Train connections\n\n💡 Click on 'Transportation' category for full details!"
    },
    // Thank You
    {
        keywords: ['thanks', 'thank you', 'thankyou', 'dhanyabad'],
        response: "🙏 You're most welcome! I'm here to help.\n\n💡 If you have more questions, just ask!\n\n✨ Have a wonderful day!"
    },
    // Bye
    {
        keywords: ['bye', 'goodbye', 'tata', 'see you', 'see ya'],
        response: "👋 Goodbye, my friend! 😊\n\n🌟 Stay happy and keep smiling!\n\nCome back anytime for a chat! 💬"
    },
    // Help
    {
        keywords: ['help', 'support', 'assist', 'guide'],
        response: "💬 **I can help you with:**\n\n1. 🔍 Find government schemes\n2. 📚 Explain scheme details\n3. ✅ Check eligibility\n4. 📄 Required documents\n5. 🌐 Official portals\n\n**Ask me about:**\n• Education • Agriculture • Health • Housing\n• Financial • Jobs • Skill • Rural • Digital\n• Energy • Women • Legal • Food • Transport"
    }
];

const defaultResponse = "🤔 That's interesting! Tell me more.\n\n💡 **Try asking about:**\n• Education • Agriculture • Health\n• Housing • Jobs • Financial\n• Skill Development • Rural Development\n• Digital India • Energy\n• Women Empowerment • Legal\n\nOr say 'help' to see all options! 😊";

// ============================================
// GET BOT RESPONSE
// ============================================
function getBotResponse(message) {
    const msg = message.toLowerCase().trim();
    
    // Check knowledge base
    for (let item of chatbotKnowledge) {
        for (let keyword of item.keywords) {
            if (msg.includes(keyword)) {
                return item.response;
            }
        }
    }
    
    // Short messages
    if (msg.length < 3) {
        return "😊 I love short conversations! What would you like to know about?";
    }
    
    return defaultResponse;
}

// ============================================
// SEND MESSAGE
// ============================================
function sendMessage(message) {
    // User message
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

    // Typing indicator
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

    // Bot response
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
    }, 800);
}

// ============================================
// CHATBOT CONTROLS
// ============================================
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

// Send message on click
if (chatSendBtn) {
    chatSendBtn.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            sendMessage(message);
            chatInput.value = '';
        }
    });
}

// Send message on Enter
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

// Typing animation CSS
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

console.log('🤖 Chatbot loaded successfully!');
console.log('💡 Ask me about: Education, Agriculture, Health, Housing, Jobs, and more!');