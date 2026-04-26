import React, { useState } from 'react';
import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleContinue = () => {
    if (email === 'admin@chefify.com') {
      if (onLogin) onLogin();
      onClose();
    } else {
      alert('Vui lòng sử dụng tài khoản demo: admin@chefify.com');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
        <p className="text-gray-600 mb-6">Enter your email to log in.</p>

        <p className="text-xs text-primary font-medium mb-2">Tài khoản demo: admin@chefify.com</p>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />

        <button 
          onClick={handleContinue}
          className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 rounded-xl mb-6 transition"
        >
          Continue
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <p className="text-xs text-gray-500 text-center mb-6 leading-relaxed">
          By continuing, you agree to the updated <a href="#" className="font-semibold hover:underline">Terms of Sale</a>, <a href="#" className="font-semibold hover:underline">Terms of Service</a>, and <a href="#" className="font-semibold hover:underline">Privacy Policy</a>.
        </p>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl transition">
             Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl transition">
             Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl transition">
             Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
