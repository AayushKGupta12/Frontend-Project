import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LiveUser from "./LiveUser";

const Hero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-2xl md:text-sm text-emerald-700 font-medium">
          Stalk Every Us Night
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          India's Largest <br/> {'{ IT Jobs Fair }'}
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6"> 
          <p className="text-xl text-gray-600 mb-6">
            Connecting you with <span className="text-xl font-bold mb-2 text-emerald-700">2800+ top Indian IT companies</span> and <span className="text-xl font-bold mb-2 text-emerald-700">4500+ job opportunities</span>, empowering <span className="text-xl font-bold mb-2 text-emerald-700">1250+ success stories</span> to achieve real milestones through our platform.
          </p>
        </p>

        <div className="flex items-center ">  {/* Reduce gap from gap-2 or gap-4 down to gap-1 */}
          <a href="https://edstack.onrender.com/about" className="inline-block">
            <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
              About-us
            </button>
          </a>
          <LiveUser />
        </div>


        
        

        
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = (logoData) => {
  return shuffle(logoData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full bg-white flex items-center justify-center p-4"
    >
      <img 
        src={sq.src} 
        alt={sq.name}
        className="max-w-full max-h-full object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = `<div class="text-gray-400 text-xs text-center">${sq.name}</div>`;
        }}
      />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [logoData, setLogoData] = useState([]);
  const [squares, setSquares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLogos();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (logoData.length > 0) {
      shuffleSquares();
    }
  }, [logoData]);

  const fetchLogos = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/hero');
      
      if (!response.ok) {
        throw new Error('Failed to fetch logos');
      }

      const data = await response.json();
      
      // Transform the backend data into the format needed for the grid
      const transformedData = Object.entries(data).map(([name, info], index) => ({
        id: index + 1,
        name: name,
        src: info.Logo
      }));

      setLogoData(transformedData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching logos:', err);
      setError(err.message);
      setLoading(false);
      
      // Fallback to placeholder data if fetch fails
      const fallbackData = Array.from({ length: 16 }, (_, i) => ({
        id: i + 1,
        name: `Company ${i + 1}`,
        src: `https://via.placeholder.com/200x100?text=Company+${i + 1}`
      }));
      setLogoData(fallbackData);
    }
  };

  const shuffleSquares = () => {
    setSquares(generateSquares(logoData));
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
        <div className="col-span-4 row-span-4 flex items-center justify-center text-gray-400">
          " Hope this Website Finds You :D "
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
        <div className="col-span-4 row-span-4 flex items-center justify-center text-red-400 text-sm text-center p-4">
          Error loading logos. Using placeholder images.
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[400px]">
      {squares}
    </div>
  );
};

export default Hero;
