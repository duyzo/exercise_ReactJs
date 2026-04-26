import React from 'react';
import { Share2 } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { recentRecipes } from '../data/mockData';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-primary font-medium">Your Recipe Box</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-10">Emma Gonzalez's Recipe Box</h1>

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-40 h-40 flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Emma Gonzalez" className="w-full h-full rounded-full object-cover border-4 border-pink-100" />
        </div>
        
        <div className="flex-1 max-w-3xl">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-primary font-medium text-lg">6.5k Subscribers</span>
            <button className="bg-primary hover:bg-primary-hover text-white flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition">
              Share <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button className="px-6 py-3 border-b-2 border-pink-100 bg-pink-50 text-gray-900 font-medium rounded-t-lg">Saved Recipes</button>
        <button className="px-6 py-3 text-gray-500 font-medium hover:text-gray-700">Folders</button>
        <button className="px-6 py-3 text-gray-500 font-medium hover:text-gray-700">Recipes by Genevieve</button>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {recentRecipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)}
        {recentRecipes.map(recipe => <RecipeCard key={`${recipe.id}-2`} {...recipe} />)}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2">
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">&lt;</button>
        <button className="w-10 h-10 rounded-lg bg-primary text-white font-medium flex items-center justify-center">1</button>
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">2</button>
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">3</button>
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">4</button>
        <span className="text-gray-400 px-2">...</span>
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">10</button>
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">11</button>
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">&gt;</button>
      </div>
    </div>
  );
};

export default Profile;
