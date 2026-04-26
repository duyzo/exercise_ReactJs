import React from 'react';
import { Bookmark, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, image, title, time, isVideo, author, avatar, badge }) => {
  return (
    <Link to={`/recipe/${id}`} className="group block mb-6">
      <div className="relative rounded-2xl overflow-hidden mb-4 bg-gray-100 aspect-[4/3]">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
        
        {badge && (
          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {badge}
          </div>
        )}
        
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center pl-1">
               <Play className="w-5 h-5 text-primary fill-current" />
             </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-bold text-gray-900 group-hover:text-primary transition line-clamp-2">{title}</h3>
          
          {author ? (
            <div className="flex items-center gap-2 mt-2">
              <img src={avatar} alt={author} className="w-6 h-6 rounded-full object-cover" />
              <span className="text-sm text-gray-600 font-medium">{author}</span>
            </div>
          ) : (
            <div className="mt-2 inline-block px-3 py-1 bg-pink-50 text-primary text-xs font-medium rounded-full">
              {time}
            </div>
          )}
        </div>

        <button className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-pink-50 transition">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </Link>
  );
};

export default RecipeCard;
