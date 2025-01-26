// components/auth/sign-in-form.tsx
'use client';
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useAuth } from '@clerk/nextjs';
import { Dialog, DialogTitle } from '@radix-ui/react-dialog';


export default function SignInForm () {
  const { isLoaded, userId, sessionId } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!isLoaded || userId ) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in:', email, password);

    const formData = new FormData();
    formData.append('email', email as string);
    formData.append('password', password as string);

    console.log('formData:', formData);
  };

  return (
    <div className="space-y-6">
      <div>
        <Dialog>
        <DialogTitle className="text-2xl font-semibold text-gray-900">
          Welcome back 
        </DialogTitle>
        </Dialog>
        <p className="mt-2 text-gray-600">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2.5 px-4 rounded-xl hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
        >
          Sign in
        </button>
      </form>

      <div className="text-center">
        <button
          type="button"
          className="text-sm text-emerald-600 hover:text-emerald-700"
        >
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
};