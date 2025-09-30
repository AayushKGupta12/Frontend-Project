import React from 'react';

// Skeleton Card Component
const SkeletonCard = () => (
  <div className="flex-shrink-0 animate-pulse">
    <div className="w-60 sm:w-72 md:w-80 h-75 sm:h-96 p-4 bg-white rounded-2xl shadow-lg flex flex-col">
      {/* Image Skeleton */}
      <div className="w-full h-32 sm:h-40 bg-gray-200 rounded-xl mb-3"></div>
      
      {/* Content Skeleton */}
      <div className="flex-1 flex flex-col space-y-3">
        {/* Title Lines */}
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="h-3 bg-gray-200 rounded w-20"></div>
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const Card = ({ data, hoverClass = "", loading = false, title = "Latest News" }) => {
    // Check if data is an array and has items
    const hasContent = Array.isArray(data) && data.length > 0;

    // Show skeleton when loading
    if (loading) {
        return (
            <div className="w-full">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 px-4 sm:px-6">
                    {title}
                </h2>
                <div className="px-3 sm:px-4 md:px-6">
                    <div className="relative flex flex-row flex-nowrap overflow-x-auto space-x-3 sm:space-x-4 pb-4 scrollbar-hide">
                        {/* Show 3-4 skeleton cards */}
                        {[...Array(4)].map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Title Section */}
            <div className="px-4 sm:px-6 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {title}
                </h2>
            </div>

            {/* Cards Container */}
            <div className="px-3 sm:px-4 md:px-6">
                <div className="relative flex flex-row flex-nowrap overflow-x-auto space-x-3 sm:space-x-4 pb-4 scrollbar-hide">
                    {hasContent ? (
                        data.map((curItem, index) => (
                            <div key={index} className="flex-shrink-0">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={curItem.link}
                                    className="block group"
                                >
                                    <article className={`w-64 sm:w-72 md:w-80 h-70 sm:h-96 p-3 sm:p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out ${hoverClass} flex flex-col border border-gray-100 group-hover:border-blue-200`}>
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden rounded-xl mb-3">
                                            <img
                                                className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                                alt={curItem.title || "News Image"}
                                                src={curItem.image_url}
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/320x160/f3f4f6/9ca3af?text=No+Image';
                                                }}
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        
                                        {/* Content Section */}
                                        <div className="flex-1 flex flex-col">
                                            {/* Title */}
                                            <h3 className="font-semibold text-sm sm:text-base text-gray-900 line-clamp-4 sm:line-clamp-5 flex-1 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                                                {curItem.title}
                                            </h3>
                                            
                                            {/* Bottom Section */}
                                            <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50">
                                                {/* Publication Date */}
                                                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {curItem.pubDate}
                                                </div>
                                                
                                                {/* Source Icon */}
                                                <div className="flex items-center">
                                                    {curItem.source_icon ? (
                                                        <img 
                                                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full ring-2 ring-gray-100" 
                                                            src={curItem.source_icon} 
                                                            alt="Source"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Read More Indicator */}
                                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <div className="bg-blue-500 text-white p-1.5 rounded-full shadow-md">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </div>
                        ))
                    ) : (
                        // Empty State
                        <div className="w-full min-h-[20rem] flex flex-col items-center justify-center text-center px-4">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">News Available</h3>
                            <p className="text-gray-500 text-sm sm:text-base max-w-md">
                                All Latest News in Past 48 Hours will appear here when available.
                            </p>
                        </div>
                    )}
                    
                    {/* Scroll Indicator */}
                    {hasContent && data.length > 1 && (
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-white via-white to-transparent w-8 h-full flex items-center justify-end pr-2 pointer-events-none">
                            <div className="bg-blue-500 text-white p-1 rounded-full shadow-md animate-pulse">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .line-clamp-4 {
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-5 {
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Card;