import React from 'react';
import { Brain, LineChart, Heart, Compass, Activity, BookOpen, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-8 md:py-20 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Personal Guide to
                <span className="block text-emerald-600 mt-2">Wellness Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none mx-auto">
                Advanced AI-powered platform for personalized cannabis guidance 
                and comprehensive health tracking designed for your unique needs.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors text-lg">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-200 transition-colors text-lg">
                  View Demo
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img src="/api/placeholder/48/48" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-lg" />
                    <img src="/api/placeholder/48/48" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-lg" />
                    <img src="/api/placeholder/48/48" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-lg" />
                  </div>
                  <span className="text-gray-600 text-lg">2K+ Active Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-600 text-lg">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl lg:max-w-none">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Dashboard Preview" 
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                {/* Floating Stats Card */}
                <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <LineChart className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Daily Wellness Score</p>
                      <p className="text-2xl font-bold text-gray-900">92%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              One Platform for Your Complete Wellness Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and insights to support your health goals with personalized guidance.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain />}
              title="Personalized Profile"
              description="Smart questionnaire and AI-driven profile building for tailored recommendations based on your experience and goals."
              label="Profile Building"
            />
            
            <FeatureCard 
              icon={<LineChart />}
              title="Health Analysis"
              description="Detailed wellness analysis, progress tracking, and comprehensive health metrics visualization."
              label="Analysis"
            />
            
            <FeatureCard 
              icon={<Heart />}
              title="Wellness Integration"
              description="Comprehensive health tracking including mood, sleep quality, and symptom management with wellness goals."
              label="Health"
            />
            
            <FeatureCard 
              icon={<Compass />}
              title="Smart Guidance"
              description="AI-powered recommendations, safety guidelines, and usage optimization based on your profile and goals."
              label="Guidance"
            />
            
            <FeatureCard 
              icon={<Activity />}
              title="Progress Tracking"
              description="Monitor your wellness journey with detailed analytics and achievement tracking."
              label="Progress"
            />
            
            <FeatureCard 
              icon={<BookOpen />}
              title="Knowledge Base"
              description="Comprehensive educational resources and documentation to support your wellness journey."
              label="Resources"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, label }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
        <div className="text-emerald-600 w-7 h-7">
          {icon}
        </div>
      </div>
      <div className="text-sm font-medium text-emerald-600 mb-3">
        {label}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default LandingPage;