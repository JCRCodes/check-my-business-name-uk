
// Complete App.jsx with routing and professional design
import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7] font-sans">
      {/* Navigation */}
      <nav className="bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigateTo('home')}
              className="text-xl font-semibold text-white hover:text-gray-300 transition"
            >
              Check My Business Name
            </button>
            <div className="flex gap-6 items-center">
              <button 
                onClick={() => navigateTo('home')}
                className="text-gray-300 hover:text-white transition text-sm font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('check')}
                className="text-gray-300 hover:text-white transition text-sm font-medium"
              >
                Check Name
              </button>
              <button 
                onClick={() => navigateTo('assistant')}
                className="text-gray-300 hover:text-white transition text-sm font-medium"
              >
                AI Assistant
              </button>
              <button 
                onClick={() => navigateTo('check')}
                className="px-5 py-2 bg-[#6366f1] text-white rounded-full font-medium hover:bg-[#5558e3] transition text-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'check' && <CheckPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      {currentPage === 'assistant' && <AssistantPage />}

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <button onClick={() => navigateTo('check')} className="block text-gray-400 hover:text-white transition text-sm">
                  Name Checker
                </button>
                <button onClick={() => navigateTo('assistant')} className="block text-gray-400 hover:text-white transition text-sm">
                  AI Assistant
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition text-sm">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-sm">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition text-sm">Documentation</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-sm">Support</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition text-sm">Privacy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition text-sm">Terms</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm mb-2">🚧 Building in Public - Demo Version</p>
            <p className="text-gray-500 text-sm">© 2025 Check My Business Name. Made in Wales.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// HomePage Component
function HomePage({ navigateTo }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-[#1a1a1a] mb-6 leading-tight tracking-tight">
            Find Your Perfect Business Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Check availability across Companies House, domains, trademarks, and social media in seconds. 
            Then get AI-powered guidance to register your business.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigateTo('check')}
              className="px-8 py-4 bg-[#6366f1] text-white rounded-full font-semibold hover:bg-[#5558e3] transition text-lg shadow-lg hover:shadow-xl"
            >
              Check Name Availability
            </button>
            <button 
              onClick={() => navigateTo('assistant')}
              className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-semibold hover:bg-[#2a2a2a] transition text-lg"
            >
              Try AI Assistant
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">10k+</div>
              <div className="text-gray-400">Names Checked</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400">Data Sources</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">&lt;2s</div>
              <div className="text-gray-400">Average Check</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">Free</div>
              <div className="text-gray-400">Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Three simple steps to launch your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#6366f1] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
              1
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Check Your Name</h3>
            <p className="text-gray-600 leading-relaxed">
              Enter your business name and instantly check availability across Companies House, domain registrars, and trademark databases.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#6366f1] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
              2
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Get AI Guidance</h3>
            <p className="text-gray-600 leading-relaxed">
              Chat with our AI assistant to understand business structures, registration requirements, and get a personalized setup checklist.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#6366f1] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
              3
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Register & Launch</h3>
            <p className="text-gray-600 leading-relaxed">
              Follow your personalized checklist to register your business, open a bank account, and get ready to trade legally.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-400">Comprehensive tools for starting your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Companies House</h3>
              <p className="text-gray-400">Real-time availability checking against UK registered companies</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Domain Check</h3>
              <p className="text-gray-400">Check .co.uk, .com, and other popular domain availability</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">™️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Trademark Search</h3>
              <p className="text-gray-400">Search UK trademark registry for potential conflicts</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Assistant</h3>
              <p className="text-gray-400">Personalized guidance for your specific business type</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Checklists</h3>
              <p className="text-gray-400">Step-by-step guides tailored to your business structure</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Results</h3>
              <p className="text-gray-400">Get comprehensive availability results in under 2 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who used our platform to check their business name and get started
          </p>
          <button 
            onClick={() => navigateTo('check')}
            className="px-10 py-4 bg-white text-[#6366f1] rounded-full font-bold hover:bg-gray-100 transition text-lg shadow-lg"
          >
            Check Your Business Name Now
          </button>
        </div>
      </section>
    </div>
  )
}

// CheckPage Component
function CheckPage({ searchTerm, setSearchTerm }) {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setIsLoading(true)
    
    setTimeout(() => {
      const mockResults = {
        businessName: searchTerm,
        available: Math.random() > 0.5,
        companiesHouseAvailable: Math.random() > 0.3,
        domainAvailable: Math.random() > 0.4,
        trademarkClear: Math.random() > 0.5,
        suggestions: [
          `${searchTerm} Ltd`,
          `${searchTerm} Solutions`,
          `${searchTerm} Group`,
          `The ${searchTerm} Company`,
          `${searchTerm} Pro`
        ]
      }
      
      setResults(mockResults)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4">Check Name Availability</h1>
        <p className="text-xl text-gray-600">Enter your business name to check across multiple sources</p>
      </div>

      {/* Search Bar */}
      <div className="bg-[#1a1a1a] rounded-3xl shadow-2xl p-10 mb-12">
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter your business name..."
            className="flex-1 px-8 py-5 text-lg bg-white text-gray-900 border-2 border-gray-300 rounded-2xl focus:border-[#6366f1] focus:outline-none placeholder-gray-400"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-12 py-5 bg-[#6366f1] text-white text-lg font-bold rounded-2xl hover:bg-[#5558e3] transition disabled:opacity-50"
          >
            {isLoading ? 'Checking...' : 'Check Now'}
          </button>
        </form>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-[#6366f1] mb-4"></div>
          <p className="text-xl text-gray-600">Checking availability across multiple databases...</p>
        </div>
      )}

      {/* Results */}
      {results && !isLoading && (
        <div className="space-y-8">
          {/* Main Result */}
          <div className={`p-8 rounded-2xl border-4 ${
            results.available 
              ? 'bg-green-50 border-green-300' 
              : 'bg-red-50 border-red-300'
          }`}>
            <h2 className="text-3xl font-bold mb-3">"{results.businessName}"</h2>
            <p className={`text-2xl font-bold ${
              results.available ? 'text-green-700' : 'text-red-700'
            }`}>
              {results.available ? '✅ Available!' : '❌ Not Available'}
            </p>
          </div>

          {/* Detailed Checks */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-4">Companies House</h3>
              <div className={`text-2xl mb-2 ${results.companiesHouseAvailable ? 'text-green-600' : 'text-red-600'}`}>
                {results.companiesHouseAvailable ? '✅' : '❌'}
              </div>
              <p className="text-gray-600">{results.companiesHouseAvailable ? 'Available to register' : 'Already registered'}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-4">Domain (.co.uk)</h3>
              <div className={`text-2xl mb-2 ${results.domainAvailable ? 'text-green-600' : 'text-red-600'}`}>
                {results.domainAvailable ? '✅' : '❌'}
              </div>
              <p className="text-gray-600">{results.domainAvailable ? 'Domain available' : 'Domain taken'}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-4">Trademarks</h3>
              <div className={`text-2xl mb-2 ${results.trademarkClear ? 'text-green-600' : 'text-orange-600'}`}>
                {results.trademarkClear ? '✅' : '⚠️'}
              </div>
              <p className="text-gray-600">{results.trademarkClear ? 'No conflicts found' : 'Similar trademarks exist'}</p>
            </div>
          </div>

          {/* Suggestions */}
          {!results.available && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Alternative Suggestions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {results.suggestions.map((suggestion, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-[#6366f1] cursor-pointer transition">
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// AssistantPage Component
function AssistantPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your business setup assistant. I can help you understand business structures, registration requirements, and create a personalized checklist. What type of business are you planning to start?" }
  ])
  const [input, setInput] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')

    // Mock AI response
    setTimeout(() => {
      const mockResponse = {
        role: 'assistant',
        content: "Great question! Based on what you've told me, I'd recommend considering a Limited Company structure. This gives you liability protection and looks professional. Would you like me to walk you through the registration process?"
      }
      setMessages(prev => [...prev, mockResponse])
    }, 1000)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4">AI Business Assistant</h1>
        <p className="text-xl text-gray-600">Get personalized guidance for setting up your business</p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Chat Messages */}
        <div className="h-[500px] overflow-y-auto p-8 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                message.role === 'user' 
                  ? 'bg-[#6366f1] text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="border-t border-gray-200 p-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about starting your business..."
              className="flex-1 px-6 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-[#6366f1] focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#6366f1] text-white font-bold rounded-2xl hover:bg-[#5558e3] transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Quick Questions */}
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <button className="p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-[#6366f1] transition text-left">
          <p className="font-semibold text-[#1a1a1a] mb-1">Should I be a sole trader or limited company?</p>
          <p className="text-sm text-gray-600">Get guidance on business structures</p>
        </button>
        <button className="p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-[#6366f1] transition text-left">
          <p className="font-semibold text-[#1a1a1a] mb-1">What do I need to register?</p>
          <p className="text-sm text-gray-600">Learn about registration requirements</p>
        </button>
        <button className="p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-[#6366f1] transition text-left">
          <p className="font-semibold text-[#1a1a1a] mb-1">How long does registration take?</p>
          <p className="text-sm text-gray-600">Understand the timeline</p>
        </button>
        <button className="p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-[#6366f1] transition text-left">
          <p className="font-semibold text-[#1a1a1a] mb-1">What are my tax obligations?</p>
          <p className="text-sm text-gray-600">Learn about taxes and compliance</p>
        </button>
      </div>
    </div>
  )
}

export default App