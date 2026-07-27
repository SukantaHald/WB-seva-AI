// ============================================
// CHATBOT - Entertainment Only
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
    
    // Check for matching keywords
    for (let item of funResponses) {
        for (let keyword of item.keywords) {
            if (msg.includes(keyword)) {
                return item.response;
            }
        }
    }
    
    // If message is short
    if (msg.length < 3) {
        return "😊 I love short conversations! What else would you like to talk about?";
    }
    
    return defaultResponse;
};

// Send message
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

    // Get response
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

// Open/Close chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.add('active');
    chatbotToggle.style.display = 'none';
});

chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
    chatbotToggle.style.display = 'flex';
});

// Send message
chatSendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        sendMessage(message);
        chatInput.value = '';
    }
});

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

console.log('🤖 Chatbot loaded! Ready to chat and entertain!');