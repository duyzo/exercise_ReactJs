import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  const [plan, setPlan] = useState('monthly');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 mb-12">
        <Link to="/recipes" className="hover:text-primary">Recipes</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-primary font-medium">Subscribe</span>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
        {/* Left */}
        <div className="flex-1">
          <p className="font-bold text-gray-900 mb-4">This recipe is exclusively available to subscribers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">Join now to access effortless, hassle-free recipes</h1>
          
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">20,000+ recipes to suit all tastes and skill levels</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Filter for diets, cook times, and more</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Personal Recipe Box for favorites</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Gain exclusive access to our subscriber-only mobile app.</span>
            </li>
          </ul>

          <div className="mb-8">
            <div className="text-2xl font-bold text-gray-900 mb-1">0.25USD / Week</div>
            <div className="text-gray-500">Billed as $1 every 4 weeks for the first year</div>
          </div>

          <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-medium py-3 px-12 rounded-lg transition mb-4">
            Subscribe Now
          </button>
          
          <div className="text-center sm:text-left text-primary text-sm">
            Cancel or Pause anytime
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 w-full relative">
          <img src="https://images.unsplash.com/photo-1547592180-85f173990554" alt="Subscription Food" className="w-full h-auto rounded-3xl object-cover shadow-2xl" />
        </div>
      </div>

      {/* Includes Section */}
      <div className="text-center mb-24">
        <h2 className="text-3xl font-bold text-primary mb-12">An All Access subscription includes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cooking</h3>
            <p className="text-gray-600">Enjoy recipes, advice and inspiration for any occasion.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Wirecutter</h3>
            <p className="text-gray-600">Explore independent reviews for thousands of products.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Games</h3>
            <p className="text-gray-600">Unwind with Spelling Bee, Wordle, The Crossword</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Athletic</h3>
            <p className="text-gray-600">Discover in-depth, personalized sports journalism.</p>
          </div>
        </div>
      </div>

      {/* Bottom Subscribe */}
      <div className="max-w-2xl mx-auto text-center mb-16">
         <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">C</div>
            <span className="text-primary text-xl font-bold">Chefify</span>
         </div>
         <h2 className="text-3xl font-bold text-primary mb-4">Subscribe to Chefify Cooking only</h2>
         <p className="text-gray-600 mb-10">Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.</p>

         <div className="space-y-4 max-w-md mx-auto mb-8 text-left">
           <label 
              className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition ${plan === 'monthly' ? 'border-primary bg-pink-50' : 'border-gray-200 hover:border-primary'}`}
              onClick={() => setPlan('monthly')}
           >
             <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${plan === 'monthly' ? 'border-primary' : 'border-gray-300'}`}>
                {plan === 'monthly' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
             </div>
             <span className="text-gray-900 font-medium">$2/month (Billed every 4 weeks)</span>
           </label>

           <label 
              className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition ${plan === 'yearly' ? 'border-primary bg-pink-50' : 'border-gray-200 hover:border-primary'}`}
              onClick={() => setPlan('yearly')}
           >
             <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${plan === 'yearly' ? 'border-primary' : 'border-gray-300'}`}>
                {plan === 'yearly' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
             </div>
             <span className="text-gray-900 font-medium">$20/year (Billed one annually)</span>
           </label>
         </div>

         <button className="w-full max-w-md bg-primary hover:bg-primary-hover text-white font-medium py-4 rounded-xl transition mb-4">
            Subscribe Now
         </button>
         
         <div className="text-primary text-sm">
            Cancel or Pause anytime
         </div>
      </div>
    </div>
  );
};

export default Subscribe;
