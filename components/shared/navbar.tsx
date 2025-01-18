'use client';
import Link from 'next/link';   
import React, { useEffect, useState } from 'react';
import { Search, ShoppingBag, Brain, LineChart, Heart, BookOpen, Menu, X, Cannabis, User } from 'lucide-react';
import { useAuth } from '@clerk/nextjs';
import AuthForm from '../forms/auth/auth';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const Navigation = () => {
  const { isSignedIn } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isSignedIn ?? false);
  }, [isSignedIn])

  return (
    <div className="w-full relative">
      <nav className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Cannabis className="w-8 h-8 text-emerald-600" />
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
            
            {/* Auth Button */}
            <button 
              onClick={() => setShowAuthModal(true)}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">{isLoggedIn ? 'Account' : 'Sign In'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Categories */}
      <div className="hidden md:block bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <CategoryButton icon={<Brain />} label="Profile Builder" color="bg-emerald-100" textColor="text-emerald-700" />
          <CategoryButton icon={<LineChart />} label="Health Analysis" color="bg-emerald-100" textColor="text-emerald-700" />
          <CategoryButton icon={<Heart />} label="Wellness Tracking" color="bg-emerald-100" textColor="text-emerald-700" />
          <CategoryButton icon={<BookOpen />} label="Documentation" color="bg-emerald-100" textColor="text-emerald-700" />
        </div>
      </div>

       {/* Auth Dialog */}
       <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
          <DialogContent className="sm:max-w-md p-6 bg-white rounded-2xl">
            <AuthForm onClose={() => setShowAuthModal(false)} />
          </DialogContent>
        </Dialog>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="p-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <Cannabis className="w-8 h-8 text-emerald-600" />
                <span className="text-xl font-semibold">BudAI</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-lg text-gray-700 hover:text-emerald-600">Home</Link>
              <Link href="/analysis" className="text-lg text-gray-700 hover:text-emerald-600">Analysis</Link>
              <Link href="/health" className="text-lg text-gray-700 hover:text-emerald-600">Health</Link>
              <Link href="/guidance" className="text-lg text-gray-700 hover:text-emerald-600">Guide</Link>
              <Link href="/docs" className="text-lg text-gray-700 hover:text-emerald-600">Documentation</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const CategoryButton = ({ icon, label, color, textColor }) => {
  return (
    <button className={`
      flex items-center space-x-2 px-4 py-2 rounded-lg ${color} ${textColor} 
      hover:opacity-90 transition-opacity
    `}>
      <span className="w-5 h-5">{icon}</span>
      <span className="whitespace-nowrap font-medium">{label}</span>
    </button>
  );
};

export default Navigation;