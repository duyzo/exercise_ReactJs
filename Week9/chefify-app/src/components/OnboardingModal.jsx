import React from 'react';
import { X } from 'lucide-react';

const OnboardingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-8 relative shadow-xl text-center">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-4xl font-bold text-primary mb-3">Discover Chefify</h2>
        <p className="text-gray-600 mb-8">Easy and delicious cooking instructions right here. Start exploring now!</p>

        {/* Image Placeholder */}
        <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden mb-6 relative">
           <img 
             src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" 
             alt="Delicious food" 
             className="w-full h-full object-cover"
           />
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="w-64 bg-primary hover:bg-primary-hover text-white font-medium py-3 rounded-xl transition">
            Next
          </button>
          <button onClick={onClose} className="text-primary hover:text-primary-hover font-medium py-2">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
