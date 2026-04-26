import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import OnboardingModal from '../components/OnboardingModal';
import { summerRecipes, videoRecipes, editorPicks } from '../data/mockData';

const Home = () => {
  const [isOnboardingOpen, setOnboardingOpen] = useState(false);

  useEffect(() => {
    // Show onboarding modal on first load
    setTimeout(() => {
      setOnboardingOpen(true);
    }, 1000);
  }, []);

  return (
    <div className="w-full">
      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setOnboardingOpen(false)} />

      {/* Hero Section */}
      <section className="mb-20">
        <div className="relative w-full h-[500px] bg-gray-100 flex items-center">
          <img 
            src="https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Woman cooking" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
             <div className="relative w-[350px] bg-white rounded-3xl p-8 shadow-xl mt-16">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                 Recipe of the day
               </div>
               <h2 className="text-2xl font-bold text-center text-primary mb-3 mt-4">Salad Caprese</h2>
               <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                 Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
               </p>
               <div className="flex flex-col items-center">
                 <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" alt="Salad Caprese" className="w-12 h-12 rounded-full mb-3 object-cover shadow-md" />
                 <button className="bg-primary hover:bg-primary-hover text-white text-sm font-medium py-2 px-6 rounded-full transition w-full">
                   View now &rarr;
                 </button>
               </div>
             </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* This Summer Recipes */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-2">This Summer Recipes</h2>
          <p className="text-gray-600">We have all your Independence Day sweets covered.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summerRecipes.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>

      {/* Recipes With Videos */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-2">Recipes With Videos</h2>
          <p className="text-gray-600">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoRecipes.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>

      {/* Editor's Pick */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-2">Editor's pick</h2>
          <p className="text-gray-600">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editorPicks.map(recipe => (
            <div key={recipe.id} className="flex gap-6 items-center p-4 border border-gray-100 rounded-3xl hover:shadow-lg transition bg-white">
              <div className="w-40 h-40 flex-shrink-0 rounded-2xl overflow-hidden">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition">{recipe.title}</h3>
                  <button className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-pink-50 transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <img src={recipe.avatar} alt={recipe.author} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-sm text-gray-600">{recipe.author}</span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                  Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;
