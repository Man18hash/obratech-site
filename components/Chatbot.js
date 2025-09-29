import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm the ObraTech assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const knowledgeBase = {
    services: {
      keywords: ['services', 'what do you do', 'offer', 'provide'],
      response: "ObraTech offers comprehensive technology solutions including:\n• Software Development (POS Systems, Web Applications)\n• 3D Printing Services\n• Arduino/Hardware Development\n• Custom Technology Solutions\n\nWe specialize in creating innovative solutions tailored to your business needs."
    },
    pricing: {
      keywords: ['price', 'cost', 'pricing', 'how much', 'rates'],
      response: "Our pricing varies based on project complexity and requirements:\n• Software Development: Starting from ₱5,000\n• 3D Printing: Starting from ₱300\n• Arduino/Hardware: Starting from ₱5,000\n• Consultation: ₱500/hour\n\nContact us for a detailed quote tailored to your specific needs!"
    },
    portfolio: {
      keywords: ['portfolio', 'projects', 'work', 'examples', 'showcase'],
      response: "Check out our featured projects:\n• POS System - Complete point-of-sale solution\n• 3D Printed Phone Stand - Custom design and printing\n• Smart Cane - Arduino-powered assistive device\n\nAll projects showcase our expertise in software development, 3D printing, and hardware integration."
    },
    contact: {
      keywords: ['contact', 'reach', 'get in touch', 'phone', 'email'],
      response: "You can reach us through:\n• Email: obratech18@gmail.com\n• Phone: 09568618070\n• Visit our office for consultation\n• Fill out the contact form on our website\n\nWe're here to help with your technology needs!"
    },
    about: {
      keywords: ['about', 'who are you', 'company', 'team'],
      response: "ObraTech is a technology company specializing in innovative solutions. We combine software development, 3D printing, and hardware expertise to deliver cutting-edge products and services. Our team is passionate about technology and committed to helping businesses and individuals achieve their goals through smart solutions."
    },
    location: {
      keywords: ['location', 'where', 'address', 'office'],
      response: "Our office is located in the heart of the city, easily accessible by public transportation. We also offer remote consultation services for clients worldwide. Contact us to schedule a visit or virtual meeting!"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    let bestMatch = null;
    let maxScore = 0;

    Object.keys(knowledgeBase).forEach(key => {
      const item = knowledgeBase[key];
      const score = item.keywords.reduce((acc, keyword) => {
        return acc + (lowerQuery.includes(keyword) ? 1 : 0);
      }, 0);
      
      if (score > maxScore) {
        maxScore = score;
        bestMatch = item.response;
      }
    });

    return bestMatch || "I'm here to help! I can answer questions about our services, pricing, portfolio, contact information, and more. What would you like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: findBestResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-brand-yellow text-brand-blue p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 z-50"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-brand-blue dark:bg-gray-900 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">ObraTech Assistant</h3>
            <p className="text-sm text-gray-300">Ask me anything!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      : 'bg-brand-blue text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
