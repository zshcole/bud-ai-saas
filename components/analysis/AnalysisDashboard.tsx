'use client';
import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, ActivitySquare, Leaf, Beaker, Clock, AlertCircle } from 'lucide-react';

// Sample data for visualizations
const wellnessData = [
  { date: 'Mon', wellness: 85, mood: 90, sleep: 75 },
  { date: 'Tue', wellness: 88, mood: 85, sleep: 80 },
  { date: 'Wed', wellness: 92, mood: 95, sleep: 85 },
  { date: 'Thu', wellness: 87, mood: 80, sleep: 90 },
  { date: 'Fri', wellness: 90, mood: 88, sleep: 82 },
  { date: 'Sat', wellness: 94, mood: 92, sleep: 88 },
  { date: 'Sun', wellness: 91, mood: 89, sleep: 85 }
];

const AnalysisPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Wellness Analysis</h1>
          <p className="text-gray-600">Track your health metrics and product effectiveness</p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Wellness Score Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-600" />
                <h2 className="font-semibold text-gray-900">Wellness Score</h2>
              </div>
              <span className="text-2xl font-bold text-emerald-600">91%</span>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={wellnessData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="wellness" stroke="#059669" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Mood & Sleep Tracking */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ActivitySquare className="w-5 h-5 text-emerald-600" />
              <h2 className="font-semibold text-gray-900">Mood & Sleep</h2>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={wellnessData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="mood" stackId="1" stroke="#059669" fill="#dcfce7" />
                  <Area type="monotone" dataKey="sleep" stackId="2" stroke="#0284c7" fill="#dbeafe" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Current Product Analysis */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-emerald-600" />
              <h2 className="font-semibold text-gray-900">Current Product</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">THC</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">CBD</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">CBN</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Terpene Profile */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Beaker className="w-5 h-5 text-emerald-600" />
              <h2 className="font-semibold text-gray-900">Terpene Profile</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TerpeneCard name="Myrcene" percentage="40%" description="Earthy, musky" />
              <TerpeneCard name="Limonene" percentage="30%" description="Citrus, fresh" />
              <TerpeneCard name="Pinene" percentage="15%" description="Pine, sharp" />
              <TerpeneCard name="Linalool" percentage="15%" description="Floral, sweet" />
            </div>
          </div>

          {/* Effect Timeline */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-emerald-600" />
              <h2 className="font-semibold text-gray-900">Effect Timeline</h2>
            </div>
            <div className="space-y-4">
              <TimelineItem time="0-15 min" effect="Onset" intensity="20%" />
              <TimelineItem time="15-45 min" effect="Peak Effects" intensity="100%" />
              <TimelineItem time="45-120 min" effect="Plateau" intensity="80%" />
              <TimelineItem time="120-240 min" effect="Gradual Decline" intensity="40%" />
            </div>
          </div>
        </div>

        {/* Lab Verification Section */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-emerald-600" />
            <h2 className="font-semibold text-gray-900">Lab Verification</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <VerificationCard title="Test Date" value="2024-01-10" />
            <VerificationCard title="Batch Number" value="BN123456" />
            <VerificationCard title="Lab Name" value="CannaLabs Inc." />
          </div>
        </div>
      </div>
    </div>
  );
};

const TerpeneCard = ({ name, percentage, description }) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium text-gray-900">{name}</span>
      <span className="text-emerald-600 font-semibold">{percentage}</span>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const TimelineItem = ({ time, effect, intensity }) => (
  <div className="flex items-center gap-4">
    <div className="w-24 text-sm text-gray-600">{time}</div>
    <div className="flex-1">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-900">{effect}</span>
        <span className="text-sm text-gray-600">{intensity}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-emerald-600 h-2 rounded-full" 
          style={{ width: intensity }}
        ></div>
      </div>
    </div>
  </div>
);

const VerificationCard = ({ title, value }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="text-sm text-gray-600 mb-1">{title}</div>
    <div className="font-medium text-gray-900">{value}</div>
  </div>
);

export default AnalysisPage;