import React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Leaf, Activity, Brain, Beaker, BookOpen } from 'lucide-react';

const Navigation = () => {
  return (
    <div className="w-full">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <Link href="/" className="text-xl font-semibold text-gray-800">BudAI</Link>
          </div>

          {/* Main Navigation */}
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
            <button className="p-2 text-gray-600 hover:text-emerald-600">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Category Navigation */}
      <div className="bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto">
          <CategoryButton icon={<Brain />} label="Profile Builder" color="bg-violet-100" textColor="text-violet-700" />
          <CategoryButton icon={<Beaker />} label="Product Analysis" color="bg-blue-100" textColor="text-blue-700" />
          <CategoryButton icon={<Activity />} label="Health Tracking" color="bg-emerald-100" textColor="text-emerald-700" />
          <CategoryButton icon={<BookOpen />} label="Documentation" color="bg-amber-100" textColor="text-amber-700" />
        </div>
      </div>
    </div>
  );
};

// Category Button Component
const CategoryButton = ({ icon, label, color, textColor }: 
    {icon: React.ReactElement, label: string, color: string, textColor: string}) => {
  return (
    <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${color} ${textColor} hover:opacity-90 transition-opacity`}>
      <span className="w-5 h-5">{icon}</span>
      <span className="whitespace-nowrap font-medium">{label}</span>
    </button>
  );
};

export default Navigation;