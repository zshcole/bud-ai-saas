'use client';
import Link from 'next/link';   
import React, { useState } from 'react';
import { Search, ShoppingBag, Brain, LineChart, Heart, BookOpen, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full relative">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-emerald-600" />
            <Link href="/" className="text-xl font-semibold text-gray-800">BudAI</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600">Home</Link>
            <Link href="/analysis" className="text-gray-700 hover:text-emerald-600">Analysis</Link>
            <Link href="/health" className="text-gray-700 hover:text-emerald-600">Health</Link>
            <Link href="/guidance" className="text-gray-700 hover:text-emerald-600">Guide</Link>
            <Link href="/docs" className="text-gray-700 hover:text-emerald-600">Documentation</Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-emerald-600">
              <Search className="w-5 h-5" />
            </button>
          <Link href="/cart">
            <button className="p-2 text-gray-600 hover:text-emerald-600">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </Link>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-emerald-600" />
              <span className="text-xl font-semibold text-gray-800">BudAI</span>
            </div>
            <button 
              className="p-2 text-gray-600 hover:text-emerald-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-2">Home</Link>
              <Link href="/analysis" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-2">Analysis</Link>
              <Link href="/health" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-2">Health</Link>
              <Link href="/guidance" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-2">Guide</Link>
              <Link href="/docs" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-2">Documentation</Link>
            </div>

            {/* Mobile Category Buttons */}
            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase">Categories</h3>
              <div className="flex flex-col space-y-2">
                <CategoryButton 
                  icon={<Brain />} 
                  label="Profile Builder" 
                  color="bg-emerald-100" 
                  textColor="text-emerald-700"
                  fullWidth
                />
                <CategoryButton 
                  icon={<LineChart />} 
                  label="Health Analysis" 
                  color="bg-emerald-100" 
                  textColor="text-emerald-700"
                  fullWidth
                />
                <CategoryButton 
                  icon={<Heart />} 
                  label="Wellness Tracking" 
                  color="bg-emerald-100" 
                  textColor="text-emerald-700"
                  fullWidth
                />
                <CategoryButton 
                  icon={<BookOpen />} 
                  label="Documentation" 
                  color="bg-emerald-100" 
                  textColor="text-emerald-700"
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Category Navigation */}
      <div className="hidden md:block bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto">
          <CategoryButton icon={<Brain />} label="Profile Builder" color="bg-emerald-100" textColor="text-emerald-700" />
          <CategoryButton icon={<LineChart />} label="Health Analysis" color="bg-emerald-100" textColor="text-emerald-700" />
          <CategoryButton icon={<Heart />} label="Wellness Tracking" color="bg-emerald-100" textColor="text-emerald-700" />
          <CategoryButton icon={<BookOpen />} label="Documentation" color="bg-emerald-100" textColor="text-emerald-700" />
        </div>
      </div>
    </div>
  );
};

const CategoryButton = ({ icon, label, color, textColor, fullWidth = false }) => {
  return (
    <button className={`
      flex items-center space-x-2 px-4 py-2 rounded-lg ${color} ${textColor} 
      hover:opacity-90 transition-opacity
      ${fullWidth ? 'w-full' : ''}
    `}>
      <span className="w-5 h-5">{icon}</span>
      <span className="whitespace-nowrap font-medium">{label}</span>
    </button>
  );
};

export default Navigation;