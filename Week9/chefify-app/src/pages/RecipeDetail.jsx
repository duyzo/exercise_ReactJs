import React from 'react';
import { Bookmark, Star, ThumbsUp, MessageSquare } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { recentRecipes } from '../data/mockData';
import { Link } from 'react-router-dom';

const RecipeDetail = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-primary font-medium">Cooking guide</span>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        
        {/* Left Column (Info & Ingredients) */}
        <div className="w-full lg:w-[400px] flex-shrink-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How to make a Strawberry Shortcake</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            It seems like there may be a misunderstanding. If you're asking how a user can make a Strawberry Shortcake, the process would be identical to the recipe I shared earlier. It involves preparing the strawberries, making the shortcakes, preparing whipped cream, and finally assembling the shortcake.
          </p>

          {/* Author */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Emma Gonzalez" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-bold text-gray-900">Emma Gonzalez</span>
            </div>
            <button className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-pink-200">
              <Bookmark className="w-5 h-5 fill-current" />
            </button>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-center divide-x divide-gray-100">
            <div>
              <p className="text-xs text-gray-500 mb-1">Time</p>
              <p className="font-semibold text-gray-900">45 minutes</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Notes</p>
              <p className="font-semibold text-gray-900">352 notes</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Rating</p>
              <div className="flex items-center justify-center text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 text-gray-300 fill-current" />
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="border border-dashed border-primary/50 bg-pink-50/30 rounded-2xl p-6">
            <ul className="space-y-4 mb-8 text-gray-700">
              <li>- Yield: 4 generous servings</li>
              <li>- 2 pints ripe, well-rinsed strawberries</li>
              <li>- 1/2 cup sugar, or more to taste</li>
              <li>- 4 cups flour</li>
              <li>- 3 tablespoons sugar</li>
              <li>- 1/4 teaspoon salt</li>
              <li>- 5 teaspoons baking powder</li>
              <li>- 1/4 cups butter</li>
              <li>- 3 cups whipping cream</li>
              <li>- 1/4 teaspoon vanilla extract</li>
            </ul>
            <button className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 rounded-xl transition">
              + Add to Your Grocery List
            </button>
          </div>
        </div>

        {/* Right Column (Steps) */}
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84" alt="Strawberry Shortcake" className="w-full h-[400px] object-cover rounded-2xl mb-12" />

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-3">Step 1</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Pick over and hull strawberries. Cut in half or slice, depending on size. Gently crush about a quarter of the berries with a fork to release their juices. Mix with remaining berries and the 1/2 cup of sugar, adding more sugar if necessary. Set aside, covered, for about half an hour to develop flavor.</p>
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="Step 1" className="w-full h-80 object-cover rounded-xl" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Step 2</h3>
              <p className="text-gray-600 leading-relaxed">Preheat oven to 450 degrees.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Step 3</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Into a large mixing bowl, sift together flour, 3 tablespoons sugar, salt and baking powder. Add 1/4 cup of softened butter, and rub into dry ingredients as for pastry. Add 1 1/4 cups cream, and mix to a soft dough. Knead the dough for one minute on a lightly floured pastry board, then roll it out to about 1/2-inch thickness. Using a 3-inch biscuit cutter, cut an even number of rounds - 2 rounds per serving.</p>
              <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655" alt="Step 3" className="w-full h-80 object-cover rounded-xl" />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Step 4</h3>
              <p className="text-gray-600 leading-relaxed">Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds; place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Step 5</h3>
              <p className="text-gray-600 leading-relaxed">Beat remaining cream until it thickens. Add vanilla. Beat again just until thick.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cooking Notes */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Cooking note</h2>
      
      {/* Input Box */}
      <div className="border border-gray-200 rounded-xl p-4 mb-8 relative bg-white">
        <textarea 
          placeholder="State your opinion about the article" 
          className="w-full h-24 focus:outline-none resize-none"
        ></textarea>
        <button className="absolute bottom-4 right-4 bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-medium transition">
          Send
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button className="px-6 py-3 border-b-2 border-primary text-primary font-medium">All Notes (32)</button>
        <button className="px-6 py-3 text-gray-500 font-medium hover:text-gray-700">Most Helpful (20)</button>
        <button className="px-6 py-3 text-gray-500 font-medium hover:text-gray-700">Private (1)</button>
      </div>

      {/* Comments List */}
      <div className="space-y-8 mb-12">
        <div className="flex gap-4">
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61" alt="Jimmy Will" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-gray-900">Jimmy Will</h4>
              <span className="text-xs text-gray-400">08:10 AM</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">Enim consectetur enim magna sit sit ullamco et dolore veniam nulla labore laboris anim eiusmod voluptate qui esse amet. Non cupidatat sunt duis occ.</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <button className="flex items-center gap-1 hover:text-primary"><ThumbsUp className="w-3 h-3" /> Reply</button>
            </div>
          </div>
        </div>
      </div>

      {/* Your Recently Viewed */}
      <section className="mb-8 pt-8 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Recently Viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentRecipes.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecipeDetail;
