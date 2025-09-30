import Card from './Card';
import React, { useState, useEffect } from 'react'


const Business = () =>{

    const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/business");
      const jsonData = await response.json();
      setArticles(jsonData.results || []);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const hasContent = articles.length > 0;

  return (
    <div>
        <div className='bg-emerald-700 rounded-2xl text-white text-4xl font-semibold py-2 font-serif flex justify-center'>
            <h1 className=''>Business</h1>   
        </div>
      <div className="custom-scrollbar scroll-hidden px-4 relative p-6 flex flex-row flex-nowrap overflow-x-auto space-x-12 mb-7">
        {hasContent ? (
          articles.map((item, index) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              key={index}
              className="flex-shrink-0"
            >
              <div className="w-[200px] h-[285px] p-4 bg-white rounded-2xl shadow-xl transform hover:scale-102 transition-transform duration-300 ease-in-out flex flex-col hover:bg-emerald-100">
                <img
                  className="w-full h-[140px] object-cover rounded-xl"
                
                  src={item.image_url || "https://aayushkgupta12.netlify.app/Avatar2.png"}
                />
                <div className="py-3 flex-1 flex flex-col">
                  <h2 className="font-medium line-clamp-5 flex-1 text-sm text-gray-900">{item.title}</h2>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="font-extralight text-xs text-gray-600">{item.pubDate || "Unknown Date"}</div>
                    {item.source_icon && (
                      <img className="w-8.5 rounded" src={item.source_icon} alt="Source Icon" />
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="w-full min-h-[20rem] flex flex-col items-center justify-center text-center px-4">
                            <div className="w-10 h-10 sm:w-20 sm:h-20 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No News Available</h3>
                            <p className="text-gray-500 text-sm sm:text-base max-w-md">
                                All Latest News in Past 48 Hours will appear here when available.
                            </p>
                        </div>
        )}
      </div>
    </div>
  );
}

export default Business;