import React, { useState, useEffect } from 'react';

export default function LiveUser() {
  const [data, setData] = useState({ A: null, B: null });
  const [fade, setFade] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://edstack.onrender.com/liveUser');
      const json = await response.json();
      setFade(false);
      setTimeout(() => {
        setData(json);
        setFade(true);
      }, 300);
    } catch (error) {
      console.error('Failed to fetch live data', error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex gap-2 justify-center items-center px-3 bg-emerald-100 border border-emerald-800 w-32 h-10 mx-2 rounded shadow-2xs text-center font-sans">
      <h2 className="font-medium text-gray-600 text-center">Live User</h2>
      <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <p className="font-semibold text-emerald-800 text-center">
          {data.B !== null ? data.B : 'Loading...'}
        </p>
      </div>
    </div>
  );
}
