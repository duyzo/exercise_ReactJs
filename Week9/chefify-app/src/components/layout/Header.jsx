import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from '../LoginModal';

const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="text-primary text-xl font-bold">Chefify</span>
            </Link>

            {/* Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
              <Search className="absolute left-3 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="What would you like to cook?" 
                className="w-full bg-gray-50 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link to="/recipes" className="hover:text-primary">What to cook</Link>
              <Link to="/recipes" className="hover:text-primary">Recipes</Link>
              <Link to="/recipes" className="hover:text-primary">Ingredients</Link>
              <Link to="/recipes" className="hover:text-primary">Occasions</Link>
              <Link to="/" className="hover:text-primary">About Us</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <Link to="/profile" className="w-10 h-10 rounded-full border border-pink-200 overflow-hidden hover:opacity-80 transition cursor-pointer">
                   <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Avatar" className="w-full h-full object-cover" />
                </Link>
              ) : (
                <button 
                  onClick={() => setLoginOpen(true)}
                  className="px-4 py-2 text-sm font-medium text-primary bg-pink-light rounded-lg hover:bg-pink-100 transition"
                >
                  Login
                </button>
              )}
              <Link to="/subscribe" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-hover transition">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setLoginOpen(false)} 
        onLogin={() => setIsLoggedIn(true)} 
      />
    </>
  );
};

export default Header;
