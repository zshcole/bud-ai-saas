'use client';

import React from 'react';
import { Heart, Moon, Activity, BarChart2, User, Clock, MapPin, AlertCircle, Calendar } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const healthData = [
  { date: 'Mon', wellness: 85, mood: 90, sleep: 7.5 },
  { date: 'Tue', wellness: 88, mood: 85, sleep: 8 },
  { date: 'Wed', wellness: 92, mood: 95, sleep: 8.5 },
  { date: 'Thu', wellness: 87, mood: 80, sleep: 7 },
  { date: 'Fri', wellness: 90, mood: 88, sleep: 7.8 },
  { date: 'Sat', wellness: 94, mood: 92, sleep: 8.2 },
  { date: 'Sun', wellness: 91, mood: 89, sleep: 7.6 }
];

const HealthDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Patient Info Card */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-100">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden">
                    <img src="/api/placeholder/64/64" alt="Patient" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">John Smith</h1>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-gray-600">
                        <User className="w-4 h-4" />
                        <span>32 years old</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium">
                  Update Health Info
                </button>
              </div>
            </div>
          </div>

          {/* Key Health Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            <HealthMetricCard
              label="Blood Pressure"
              value="120/80"
              unit="mmHg"
              status="Normal range"
              statusColor="text-emerald-600"
            />
            <HealthMetricCard
              label="Heart Rate"
              value="72"
              unit="bpm"
              status="Resting"
              statusColor="text-blue-600"
            />
            <HealthMetricCard
              label="Sleep Quality"
              value="8.2"
              unit="hrs/night"
              status="Above target"
              statusColor="text-emerald-600"
            />
            <HealthMetricCard
              label="Daily Activity"
              value="8,152"
              unit="steps"
              status="Below target"
              statusColor="text-amber-600"
            />
          </div>
        </div>

        {/* Detailed Health Tracking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Wellness Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-600" />
                <h2 className="font-semibold text-gray-900">Wellness Overview</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Last 7 Days</span>
                <button className="text-emerald-600 hover:text-emerald-700">
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <MetricTracker 
                label="Overall Wellness"
                value={92}
                target={100}
                color="emerald"
              />
              <MetricTracker 
                label="Mood Balance"
                value={85}
                target={100}
                color="blue"
              />
              <MetricTracker 
                label="Physical Activity"
                value={78}
                target={100}
                color="indigo"
              />
              <MetricTracker 
                label="Sleep Quality"
                value={88}
                target={100}
                color="purple"
              />
            </div>
          </div>

          {/* Recent Health Updates */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600" />
                <h2 className="font-semibold text-gray-900">Recent Updates</h2>
              </div>
            </div>
            <div className="space-y-4">
              <HealthUpdate
                date="Today"
                time="9:41 AM"
                title="Wellness Check"
                description="All vital signs within normal range. Sleep quality improved."
                type="check"
              />
              <HealthUpdate
                date="Yesterday"
                time="8:30 PM"
                title="Activity Goal"
                description="Daily step count goal achieved. Maintained active hours target."
                type="activity"
              />
              <HealthUpdate
                date="Yesterday"
                time="2:15 PM"
                title="Medication Reminder"
                description="Daily supplement intake completed on schedule."
                type="medication"
              />
            </div>
          </div>

          {/* Trends Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-emerald-600" />
                <h2 className="font-semibold text-gray-900">Health Trends</h2>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="wellness" stroke="#059669" />
                  <Line type="monotone" dataKey="mood" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-5 h-5 text-emerald-600" />
              <h2 className="font-semibold text-gray-900">Health Insights</h2>
            </div>
            <div className="space-y-4">
              <RecommendationCard
                title="Sleep Schedule"
                description="Consider going to bed 30 minutes earlier to improve sleep quality."
                action="View sleep data"
              />
              <RecommendationCard
                title="Activity Level"
                description="You're 2,000 steps below your daily goal. A short walk could help."
                action="Start activity"
              />
              <RecommendationCard
                title="Wellness Check"
                description="Time for your weekly wellness assessment."
                action="Begin check"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HealthMetricCard = ({ label, value, unit, status, statusColor }) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <div className="text-sm text-gray-600 mb-1">{label}</div>
    <div className="text-xl font-bold text-gray-900 mb-1">
      {value} <span className="text-sm font-normal text-gray-600">{unit}</span>
    </div>
    <div className={`text-sm ${statusColor}`}>{status}</div>
  </div>
);

const MetricTracker = ({ label, value, target, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-baseline">
      <span className="text-sm font-medium text-gray-900">{label}</span>
      <span className="text-sm text-gray-600">{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`bg-${color}-600 h-2 rounded-full`}
        style={{ width: `${(value / target) * 100}%` }}
      ></div>
    </div>
  </div>
);

const HealthUpdate = ({ date, time, title, description, type }) => (
  <div className="border-l-2 border-emerald-600 pl-4">
    <div className="text-sm text-gray-500">{date} at {time}</div>
    <div className="font-medium text-gray-900 mt-1">{title}</div>
    <div className="text-sm text-gray-600 mt-1">{description}</div>
  </div>
);

const RecommendationCard = ({ title, description, action }) => (
  <div className="border border-gray-100 rounded-lg p-4">
    <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-3">{description}</p>
    <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
      {action}
    </button>
  </div>
);

export default HealthDashboard;