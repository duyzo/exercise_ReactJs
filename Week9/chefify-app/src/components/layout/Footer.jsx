import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="w-full px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-2 pr-12">
          <h3 className="font-bold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex gap-2 max-w-xs">
            <input 
              type="text" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none"
            />
            <button className="bg-primary hover:bg-primary-hover px-6 py-2 rounded-lg font-medium transition">
              Send
            </button>
          </div>
        </div>

        <div>
           <h3 className="font-bold mb-4">Learn More</h3>
           <ul className="text-sm text-gray-400 space-y-3">
             <li><Link to="/" className="hover:text-white">Our Cooks</Link></li>
             <li><Link to="/" className="hover:text-white">See Our Features</Link></li>
             <li><Link to="/" className="hover:text-white">FAQ</Link></li>
           </ul>

           <h3 className="font-bold mt-8 mb-4">Shop</h3>
           <ul className="text-sm text-gray-400 space-y-3">
             <li><Link to="/subscribe" className="hover:text-white">Gift Subscription</Link></li>
             <li><Link to="/" className="hover:text-white">Send Us Feedback</Link></li>
           </ul>
        </div>

        <div>
           <h3 className="font-bold mb-4">Recipes</h3>
           <ul className="text-sm text-gray-400 space-y-3">
             <li><Link to="/recipes" className="hover:text-white">What to Cook This Week</Link></li>
             <li><Link to="/recipes" className="hover:text-white">Pasta</Link></li>
             <li><Link to="/recipes" className="hover:text-white">Dinner</Link></li>
             <li><Link to="/recipes" className="hover:text-white">Healthy</Link></li>
             <li><Link to="/recipes" className="hover:text-white">Vegetarian</Link></li>
             <li><Link to="/recipes" className="hover:text-white">Vegan</Link></li>
             <li><Link to="/recipes" className="hover:text-white">Christmas</Link></li>
           </ul>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 pt-8 border-t border-gray-800 flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white text-dark rounded-md flex items-center justify-center font-bold text-xs">C</div>
          <span className="font-bold text-white">Chefify</span>
        </div>
        <p>2023 Chefify Company</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
