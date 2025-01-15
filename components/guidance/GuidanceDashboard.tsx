'use client';

import React from 'react';
import { Brain, LineChart, Heart, Compass, Book, ArrowRight, CheckCircle, Info } from 'lucide-react';

const GuidePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">How BudAI Works</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your personalized wellness journey begins here. Learn how our AI-powered platform helps you make informed decisions for your health and wellness.
            </p>
            <div className="flex gap-4">
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-emerald-700">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ProcessCard 
            step="1"
            icon={<Brain />}
            title="Profile Creation"
            description="Complete our smart questionnaire to help us understand your wellness goals, experience level, and medical background."
          />
          <ProcessCard 
            step="2"
            icon={<Heart />}
            title="Health Integration"
            description="Connect your health metrics and start tracking your wellness journey with our comprehensive monitoring system."
          />
          <ProcessCard 
            step="3"
            icon={<Compass />}
            title="Personalized Guidance"
            description="Receive AI-powered recommendations tailored to your profile, goals, and ongoing wellness metrics."
          />
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard 
              icon={<Brain />}
              title="Smart Profile Analysis"
              points={[
                "AI-driven questionnaire",
                "Experience level assessment",
                "Goal setting assistance",
                "Medical history integration"
              ]}
            />
            <FeatureCard 
              icon={<LineChart />}
              title="Health Tracking"
              points={[
                "Comprehensive wellness metrics",
                "Sleep quality monitoring",
                "Mood and energy tracking",
                "Activity level analysis"
              ]}
            />
            <FeatureCard 
              icon={<Heart />}
              title="Wellness Optimization"
              points={[
                "Personalized recommendations",
                "Progress monitoring",
                "Goal adjustment",
                "Achievement tracking"
              ]}
            />
            <FeatureCard 
              icon={<Book />}
              title="Educational Resources"
              points={[
                "Product information library",
                "Usage guidelines",
                "Safety information",
                "Best practices"
              ]}
            />
          </div>
        </div>

        {/* Safety & Guidelines */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <Info className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Guidelines</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Our platform prioritizes your safety and well-being. We follow strict guidelines and best practices to ensure you receive accurate, helpful guidance for your wellness journey.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Regular health metric monitoring and alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Integration with healthcare providers when needed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Privacy-first data handling and protection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Evidence-based recommendations and guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessCard = ({ step, icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
        {icon}
      </div>
      <div className="text-sm font-medium text-emerald-600">Step {step}</div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, points }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-600">
          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default GuidePage;