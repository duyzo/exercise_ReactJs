import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { allRecipes } from '../data/mockData';

const TYPES_LIST = ['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'];
const RATINGS_LIST = [5, 4, 3, 2, 1];

const RecipeBox = () => {
  const [openFilters, setOpenFilters] = useState({ type: true, time: true, rating: true });
  
  // Filter States
  const [selectedTypes, setSelectedTypes] = useState(['Grilled', 'Roasted']);
  const [minTime, setMinTime] = useState(10);
  const [maxTime, setMaxTime] = useState(60);
  const [selectedRatings, setSelectedRatings] = useState([3, 4, 5]);

  // Results State
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  // Initialize
  useEffect(() => {
    handleApply();
  }, []);

  const toggleFilter = (section) => {
    setOpenFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(prev => 
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  const handleApply = () => {
    const results = allRecipes.filter(recipe => {
      // Filter by type (if no type is selected, maybe show all, or show none. Let's say if selectedTypes is not empty, it must match)
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(recipe.type);
      
      // Filter by time
      const matchTime = recipe.timeNum >= minTime && recipe.timeNum <= maxTime;

      // Filter by rating
      const matchRating = selectedRatings.length === 0 || selectedRatings.includes(recipe.rating);

      return matchType && matchTime && matchRating;
    });

    setFilteredRecipes(results);
    setIsEmpty(results.length === 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
            <h2 className="text-lg font-bold">FILTERS</h2>
          </div>

          {/* Type Filter */}
          <div className="mb-6 border-b border-gray-100 pb-6">
            <button className="flex justify-between w-full mb-4 font-semibold" onClick={() => toggleFilter('type')}>
              Type {openFilters.type ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {openFilters.type && (
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                {TYPES_LIST.map(type => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="accent-primary w-4 h-4" 
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                    /> 
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Time Filter */}
          <div className="mb-6 border-b border-gray-100 pb-6">
            <button className="flex justify-between w-full mb-4 font-semibold" onClick={() => toggleFilter('time')}>
              Time {openFilters.time ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {openFilters.time && (
              <div className="px-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>{minTime} minutes</span>
                    <span>{maxTime} minutes</span>
                  </div>
                  <div className="relative w-full h-4 flex items-center">
                    {/* Background Track */}
                    <div className="absolute w-full h-1 bg-gray-200 rounded-full"></div>
                    {/* Active Track */}
                    <div 
                      className="absolute h-1 bg-primary rounded-full"
                      style={{ left: `${minTime}%`, right: `${100 - maxTime}%` }}
                    ></div>
                    {/* Min Input */}
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={minTime} 
                      onChange={(e) => setMinTime(Math.min(Number(e.target.value), maxTime - 1))}
                      className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:rounded-full cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:rounded-full"
                    />
                    {/* Max Input */}
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={maxTime} 
                      onChange={(e) => setMaxTime(Math.max(Number(e.target.value), minTime + 1))}
                      className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:rounded-full cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:rounded-full"
                    />
                  </div>
              </div>
            )}
          </div>

          {/* Rating Filter */}
          <div className="mb-8">
            <button className="flex justify-between w-full mb-4 font-semibold" onClick={() => toggleFilter('rating')}>
              Rating {openFilters.rating ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {openFilters.rating && (
              <div className="space-y-3">
                 {RATINGS_LIST.map(stars => (
                   <label key={stars} className="flex items-center gap-3 cursor-pointer">
                     <input 
                       type="checkbox" 
                       className="accent-primary w-4 h-4" 
                       checked={selectedRatings.includes(stars)}
                       onChange={() => handleRatingChange(stars)}
                     />
                     <div className="flex gap-1 text-yellow-400">
                       {[...Array(5)].map((_, i) => (
                         <svg key={i} className={`w-4 h-4 ${i < stars ? 'fill-current' : 'text-gray-200 fill-current'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                       ))}
                     </div>
                   </label>
                 ))}
              </div>
            )}
          </div>

          <button onClick={handleApply} className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 rounded-xl transition">
            Apply
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Sorry, no results were found for your filters</h2>
            
            <div className="mb-12 relative w-48 h-48 flex items-center justify-center">
              <svg className="w-32 h-32 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              <div className="absolute top-8 right-8 bg-white p-1 rounded-full shadow-md"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg></div>
            </div>

            <p className="text-gray-600 text-lg mb-8">We have all your Independence Day sweets covered.</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-6 py-2 bg-pink-50 text-pink-500 rounded-full font-medium hover:bg-pink-100 transition">Sweet Cake</button>
              <button className="px-6 py-2 bg-purple-50 text-purple-500 rounded-full font-medium hover:bg-purple-100 transition">Black Cake</button>
              <button className="px-6 py-2 bg-pink-50 text-pink-500 rounded-full font-medium hover:bg-pink-100 transition">Pozole Verde</button>
              <button className="px-6 py-2 bg-cyan-50 text-cyan-500 rounded-full font-medium hover:bg-cyan-100 transition">Healthy food</button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900">Filtered Recipes ({filteredRecipes.length})</h1>
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:border-primary">
                <option>A-Z</option>
                <option>Z-A</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredRecipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)}
            </div>

            {/* Pagination Placeholder */}
            {filteredRecipes.length > 0 && (
              <div className="flex justify-center items-center gap-2">
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">&lt;</button>
                <button className="w-10 h-10 rounded-lg bg-primary text-white font-medium flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">&gt;</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeBox;
