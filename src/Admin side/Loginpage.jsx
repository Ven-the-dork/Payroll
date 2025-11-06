// src/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // 👈 for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password, rememberMe });

    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-800 to-green-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src="src/assets/cvsu.png" className="w-40 h-35" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            CvSU Payroll Management System
          </h1>
          <p className="text-white/90 text-lg">Login to your account.</p>
        </div>

        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-white font-semibold mb-2">
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-white font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              required
            />
          </div>

          {/* Remember Me + Reset Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 rounded cursor-pointer accent-yellow-400"
              />
              <span className="text-white font-medium">Remember me</span>
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log('Reset password clicked');
              }}
              className="text-white font-semibold hover:underline bg-transparent border-none cursor-pointer"
            >
              Reset Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 font-bold py-4 rounded-lg hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-200 shadow-lg border-2 border-red-500"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
