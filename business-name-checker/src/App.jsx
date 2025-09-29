

import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
  <div className="min-h-screen bg-[#FFF8E7] overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="bg-[#1a1a1a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Check My Business Name</h1>
            <div className="flex gap-4 items-center">
              <button className="text-gray-300 hover:text-white transition">About</button>
              <button className="text-gray-300 hover:text-white transition">How it works</button>
              <button className="px-6 py-2.5 bg-[#646cff] text-white rounded-full font-semibold hover:bg-[#535bf2] transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
  <div className="max-w-6xl mx-auto px-4 py-20">
  <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Find Your Perfect Business Name
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check availability across Companies House, domains, trademarks, and social media in seconds
            </p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-2xl">
            <h3 className="text-white text-xl font-semibold mb-4">Ready to check your name?</h3>
            <p className="text-gray-400 mb-6">Get instant availability results across multiple databases</p>
            <button className="w-full px-6 py-3 bg-[#646cff] text-white rounded-full font-semibold hover:bg-[#535bf2] transition">
              Start checking now
            </button>
            <p className="text-gray-500 text-sm text-center mt-4">It's free to check</p>
          </div>
        </div>

        {/* Search Section */}
  <div className="bg-[#1a1a1a] rounded-3xl shadow-2xl p-6 mb-16">
          <form className="flex gap-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter your business name idea..."
              className="flex-1 px-8 py-5 text-lg bg-[#2a2a2a] text-white border-2 border-gray-700 rounded-2xl focus:border-[#4ADE80] focus:outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-12 py-5 bg-[#646cff] text-white text-lg font-bold rounded-2xl hover:bg-[#535bf2] transition"
            >
              Check Now
            </button>
          </form>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1a1a1a] mb-2">10k+</div>
            <div className="text-gray-600">Names Checked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1a1a1a] mb-2">5</div>
            <div className="text-gray-600">Data Sources</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1a1a1a] mb-2">&lt;2s</div>
            <div className="text-gray-600">Average Check Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1a1a1a] mb-2">100%</div>
            <div className="text-gray-600">Free to Use</div>
          </div>
        </div>

        {/* Results Overview Cards */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-[#1a1a1a] mb-8">What We Check</h3>
        </div>
        
  <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Companies House Card */}
          <div className="bg-[#1a1a1a] rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Companies House</h3>
              <div className="w-14 h-14 bg-[#2a2a2a] rounded-full flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
            </div>
            <div className="h-28 bg-[#2a2a2a] rounded-xl flex items-center justify-center mb-4">
              <span className="text-gray-500">Search to see results</span>
            </div>
            <p className="text-gray-400 text-sm">Check if your business name is registered with Companies House UK</p>
          </div>

          {/* Domain Availability Card */}
          <div className="bg-[#1a1a1a] rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Domain Names</h3>
              <div className="w-14 h-14 bg-[#2a2a2a] rounded-full flex items-center justify-center">
                <span className="text-3xl">🌐</span>
              </div>
            </div>
            <div className="h-28 bg-[#2a2a2a] rounded-xl flex items-center justify-center mb-4">
              <span className="text-gray-500">Search to see results</span>
            </div>
            <p className="text-gray-400 text-sm">Check availability for .co.uk, .com, and other popular domains</p>
          </div>

          {/* Trademark Card */}
          <div className="bg-[#1a1a1a] rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Trademarks</h3>
              <div className="w-14 h-14 bg-[#2a2a2a] rounded-full flex items-center justify-center">
                <span className="text-3xl">™️</span>
              </div>
            </div>
            <div className="h-28 bg-[#2a2a2a] rounded-xl flex items-center justify-center mb-4">
              <span className="text-gray-500">Search to see results</span>
            </div>
            <p className="text-gray-400 text-sm">Search UK trademark database for potential conflicts</p>
          </div>
        </div>

        {/* Detailed Results Section */}
  <div className="bg-[#1a1a1a] rounded-3xl shadow-2xl p-6 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Detailed Analysis</h3>
          
          {/* Availability Status */}
          <div className="mb-10">
            <h4 className="text-xl font-semibold text-gray-300 mb-5">Overall Availability</h4>
            <div className="h-40 bg-[#2a2a2a] rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-700">
              <span className="text-gray-500 text-lg">Results will appear here after you search</span>
            </div>
          </div>

          {/* Alternative Suggestions */}
          <div className="mb-10">
            <h4 className="text-xl font-semibold text-gray-300 mb-5">Alternative Name Suggestions</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-[#2a2a2a] rounded-xl border-2 border-dashed border-gray-700 flex items-center justify-center">
                  <span className="text-gray-600">Suggestion {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Existing Names */}
          <div>
            <h4 className="text-xl font-semibold text-gray-300 mb-5">Similar Existing Names</h4>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-[#2a2a2a] rounded-xl border-2 border-dashed border-gray-700 flex items-center justify-center">
                  <span className="text-gray-600">Similar name {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Why Use Our Tool?</h3>
        </div>
        
  <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#646cff] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">⚡</span>
            </div>
            <h4 className="font-bold text-[#1a1a1a] text-lg mb-3">Instant Results</h4>
            <p className="text-gray-600">Get availability status in under 2 seconds</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-[#646cff] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🔍</span>
            </div>
            <h4 className="font-bold text-[#1a1a1a] text-lg mb-3">Multi-Source</h4>
            <p className="text-gray-600">Check across 5+ different databases</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-[#646cff] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">💡</span>
            </div>
            <h4 className="font-bold text-[#1a1a1a] text-lg mb-3">Smart Suggestions</h4>
            <p className="text-gray-600">AI-powered alternative name ideas</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-[#646cff] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📊</span>
            </div>
            <h4 className="font-bold text-[#1a1a1a] text-lg mb-3">Detailed Reports</h4>
            <p className="text-gray-600">Comprehensive analysis and insights</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center text-gray-400">
            <p className="mb-3 text-lg">🚧 Demo Version - Building in Public</p>
            <p className="text-sm text-gray-500">Check My Business Name © 2025 • Made with ☕ in Wales</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App