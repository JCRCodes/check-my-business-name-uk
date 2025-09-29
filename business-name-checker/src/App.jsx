// Enhanced App.jsx with Interactive Features
import { useState, useEffect } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        navigateTo('check')
        setTimeout(() => {
          document.querySelector('input[type="text"]')?.focus()
        }, 100)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

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
            <p className="text-gray-600 text-xs mt-2">💡 Tip: Press Cmd/Ctrl + K to quick search</p>
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
              className="px-8 py-4 bg-[#6366f1] text-white rounded-full font-semibold hover:bg-[#5558e3] transition text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Check Name Availability
            </button>
            <button 
              onClick={() => navigateTo('assistant')}
              className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-semibold hover:bg-[#2a2a2a] transition text-lg transform hover:scale-105"
            >
              Try AI Assistant
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={10247} />+
              </div>
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
          <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-[#6366f1] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
              1
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Check Your Name</h3>
            <p className="text-gray-600 leading-relaxed">
              Enter your business name and instantly check availability across Companies House, domain registrars, and trademark databases.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-[#6366f1] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
              2
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Get AI Guidance</h3>
            <p className="text-gray-600 leading-relaxed">
              Chat with our AI assistant to understand business structures, registration requirements, and get a personalized setup checklist.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
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
            {[
              { icon: '🏢', title: 'Companies House', desc: 'Real-time availability checking against UK registered companies' },
              { icon: '🌐', title: 'Domain Check', desc: 'Check .co.uk, .com, and other popular domain availability' },
              { icon: '™️', title: 'Trademark Search', desc: 'Search UK trademark registry for potential conflicts' },
              { icon: '🤖', title: 'AI Assistant', desc: 'Personalized guidance for your specific business type' },
              { icon: '📋', title: 'Smart Checklists', desc: 'Step-by-step guides tailored to your business structure' },
              { icon: '⚡', title: 'Instant Results', desc: 'Get comprehensive availability results in under 2 seconds' }
            ].map((feature, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform">
                <div className="w-20 h-20 bg-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
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
            className="px-10 py-4 bg-white text-[#6366f1] rounded-full font-bold hover:bg-gray-100 transition text-lg shadow-lg transform hover:scale-105"
          >
            Check Your Business Name Now
          </button>
        </div>
      </section>
    </div>
  )
}

// CheckPage Component with Enhanced Interactivity
function CheckPage({ searchTerm, setSearchTerm }) {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const popularSearches = [
    "Tech Innovations Ltd",
    "Green Energy Solutions",
    "Digital Marketing Pro",
    "Fitness First UK"
  ]

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setIsLoading(true)
    setProgress(0)
    setResults(null)
    
    // Simulate progress
    const progressSteps = [25, 50, 75, 100]
    progressSteps.forEach((step, index) => {
      setTimeout(() => setProgress(step), (index + 1) * 375)
    })

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
      setToastMessage('Search completed!')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    }, 1500)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4">Check Name Availability</h1>
        <p className="text-xl text-gray-600">Enter your business name to check across multiple sources</p>
      </div>

      {/* Search Bar with Suggestions */}
      <div className="bg-[#1a1a1a] rounded-3xl shadow-2xl p-10 mb-12">
        <form onSubmit={handleSearch} className="relative">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Try: TechStart Solutions"
                className="w-full px-8 py-5 text-lg bg-white text-gray-900 border-2 border-gray-300 rounded-2xl focus:border-[#6366f1] focus:outline-none placeholder-gray-400"
              />
              
              {showSuggestions && searchTerm === '' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-200 p-4 z-50 animate-fadeIn">
                  <p className="text-sm font-semibold text-gray-500 mb-3">POPULAR SEARCHES</p>
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSearchTerm(search)}
                      className="block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition text-gray-700"
                    >
                      🔍 {search}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-12 py-5 bg-[#6366f1] text-white text-lg font-bold rounded-2xl hover:bg-[#5558e3] transition disabled:opacity-50 transform hover:scale-105"
            >
              {isLoading ? 'Checking...' : 'Check Now'}
            </button>
          </div>
          
          {searchTerm && (
            <p className="text-gray-400 text-sm mt-3">{searchTerm.length} characters</p>
          )}
        </form>
      </div>

      {/* Progress Bar */}
      {isLoading && (
        <div className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center text-gray-600 font-medium">{progress}% Complete</p>
            <div className="space-y-2 mt-6">
              {[
                { name: "Companies House", step: 25 },
                { name: "Domain Registry", step: 50 },
                { name: "Trademark Database", step: 75 },
                { name: "Social Media", step: 100 }
              ].map((check, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    progress >= check.step ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    {progress >= check.step && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className="text-gray-700">{check.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {results && !isLoading && (
        <div className="space-y-8 animate-fadeIn">
          {/* Main Result with Save Button */}
          <div className={`p-8 rounded-2xl border-4 ${
            results.available 
              ? 'bg-green-50 border-green-300' 
              : 'bg-red-50 border-red-300'
          }`}>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-3">"{results.businessName}"</h2>
                <p className={`text-2xl font-bold ${
                  results.available ? 'text-green-700' : 'text-red-700'
                }`}>
                  {results.available ? '✅ Available!' : '❌ Not Available'}
                </p>
              </div>
              <SaveButton businessName={results.businessName} />
            </div>
          </div>

          {/* Interactive Result Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <InteractiveResultCard 
              title="Companies House"
              available={results.companiesHouseAvailable}
              icon="🏢"
              details="This name is not currently registered with Companies House UK. You can proceed with registration."
            />
            <InteractiveResultCard 
              title="Domain (.co.uk)"
              available={results.domainAvailable}
              icon="🌐"
              details="The .co.uk domain is available for registration. Secure it before someone else does!"
            />
            <InteractiveResultCard 
              title="Trademarks"
              available={results.trademarkClear}
              icon="™️"
              details="No exact trademark matches found in the UK registry. Consider registering your own trademark."
            />
          </div>

          {/* Suggestions with Copy */}
          {!results.available && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Alternative Suggestions</h3>
              <div className="space-y-3">
                {results.suggestions.map((suggestion, index) => (
                  <CopyableName key={index} name={suggestion} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 px-6 py-4 rounded-xl shadow-2xl bg-green-500 text-white font-semibold z-50 animate-slideIn">
          ✓ {toastMessage}
        </div>
      )}
    </div>
  )
}

// Interactive Result Card Component
function InteractiveResultCard({ title, available, icon, details }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className={`text-3xl ${available ? 'text-green-600' : 'text-red-600'}`}>
          {available ? '✅' : '❌'}
        </div>
      </div>
      
      <p className={`font-semibold ${available ? 'text-green-700' : 'text-red-700'}`}>
        {available ? 'Available' : 'Not Available'}
      </p>
      
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
          <p className="text-gray-600 text-sm">{details}</p>
        </div>
      )}
    </div>
  )
}

// Copyable Name Component
function CopyableName({ name }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(name)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
      <span className="flex-1 font-medium">{name}</span>
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#5558e3] transition text-sm font-medium"
      >
        {copied ? '✓ Copied!' : 'Copy'}
      </button>
    </div>
  )
}

// Save Button Component
function SaveButton({ businessName }) {
  const [saved, setSaved] = useState(false)

  return (
    <button
      onClick={() => setSaved(!saved)}
      className={`px-6 py-3 rounded-full font-semibold transition-all ${
        saved 
          ? 'bg-green-100 text-green-700 border-2 border-green-300' 
          : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#6366f1]'
      }`}
    >
      {saved ? '❤️ Saved' : '🤍 Save'}
    </button>
  )
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration
      
      if (progress < 1) {
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <>{count.toLocaleString()}</>
}

// AssistantPage Component
function AssistantPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your business setup assistant. I can help you understand business structures, registration requirements, and create a personalized checklist. What type of business are you planning to start?" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickQuestions = [
    { q: "Should I be a sole trader or limited company?", a: "Great question! A sole trader is simpler and cheaper to set up, but you're personally liable. A limited company offers liability protection and looks more professional. For most tech startups, I'd recommend a limited company. Want me to explain the registration process?" },
    { q: "What do I need to register?", a: "To register a limited company in the UK, you'll need: 1) A company name, 2) A registered address, 3) At least one director, 4) Details of shares and shareholders, 5) A SIC code for your business type. The process takes about 24 hours online. Should I walk you through it?" },
    { q: "How long does registration take?", a: "Online registration with Companies House typically takes 24 hours. You'll get your certificate of incorporation by email. After that, you'll need to register for Corporation Tax within 3 months. Want a full timeline checklist?" },
    { q: "What are my tax obligations?", a: "As a limited company, you'll need to: 1) Pay Corporation Tax on profits (19%), 2) File annual accounts, 3) File a confirmation statement, 4) Register for VAT if turnover exceeds £90k. Would you like help understanding any of these?" }
  ]

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const mockResponse = {
        role: 'assistant',
        content: "That's a great point! Based on what you've told me, I'd recommend starting with a Limited Company structure. This gives you liability protection and looks professional to clients. Would you like me to walk you through the registration process step by step?"
      }
      setMessages(prev => [...prev, mockResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question, answer) => {
    setMessages([...messages, 
      { role: 'user', content: question },
      { role: 'assistant', content: answer }
    ])
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
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                message.role === 'user' 
                  ? 'bg-[#6366f1] text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fadeIn">
              <div className="bg-gray-100 p-4 rounded-2xl">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
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
              disabled={isTyping}
              className="px-8 py-4 bg-[#6366f1] text-white font-bold rounded-2xl hover:bg-[#5558e3] transition disabled:opacity-50 transform hover:scale-105"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Quick Questions */}
      <div className="mt-8">
        <p className="text-sm font-semibold text-gray-500 mb-4">POPULAR QUESTIONS</p>
        <div className="grid md:grid-cols-2 gap-4">
          {quickQuestions.map((item, index) => (
            <button 
              key={index}
              onClick={() => handleQuickQuestion(item.q, item.a)}
              className="p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-[#6366f1] transition text-left transform hover:scale-105"
            >
              <p className="font-semibold text-[#1a1a1a] mb-1">{item.q}</p>
              <p className="text-sm text-gray-600">Get instant guidance</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App