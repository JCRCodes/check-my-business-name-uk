import React, { useState } from 'react';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-[#FFF8E7] overflow-x-hidden flex flex-col items-center py-20">
      <h1 className="text-3xl font-bold mb-4 text-[#1a1a1a]">Business Name Search</h1>
      <p className="text-gray-600 mb-8 text-lg">Enter your business name idea below to check availability across Companies House, domains, trademarks, and social media.</p>
      <form className="w-full max-w-2xl flex gap-4 bg-[#1a1a1a] rounded-3xl shadow-2xl p-6 mb-16">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter your business name idea..."
          className="flex-1 px-8 py-5 text-lg bg-[#2a2a2a] text-white border-2 border-gray-700 rounded-2xl focus:border-[#646cff] focus:outline-none placeholder-gray-500"
        />
        <button
          type="submit"
          className="px-12 py-5 bg-[#646cff] text-white text-lg font-bold rounded-2xl hover:bg-[#535bf2] transition"
        >
          Check Now
        </button>
      </form>
    </div>
  );
}
