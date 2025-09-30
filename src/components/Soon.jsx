import React from "react";
import { Construction, Code2, Rocket } from "lucide-react";

export function Soon() {
  return (
    <div className="min-h-125 flex flex-col items-center justify-center bg-white text-gray-800 px-2">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4 animate-fade-in">
        Coming Soon
      </h1>

      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-10 animate-fade-in-delay">
        Our best engineers are crafting the finest user experience for you. Stay tuned while we build something exceptional.
      </p>

      <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="flex transform transition-transform duration-300 hover:scale-105">
          <div className="w-full shadow-md rounded-2xl border border-gray-200 bg-white">
            <div className="flex flex-col items-center p-6">
              <Construction className="w-12 h-12 text-emerald-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Architect Development</h3>
              <p className="text-sm text-gray-500 text-center">
                Designing the foundation of a seamless experience.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex transform transition-transform duration-300 hover:scale-105">
          <div className="w-full shadow-md rounded-2xl border border-gray-200 bg-white">
            <div className="flex flex-col items-center p-6">
              <Code2 className="w-12 h-12 text-emerald-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Coding in Progress</h3>
              <p className="text-sm text-gray-500 text-center">
                Turning ideas into elegant and efficient code.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex transform transition-transform duration-300 hover:scale-105">
          <div className="w-full shadow-md rounded-2xl border border-gray-200 bg-white">
            <div className="flex flex-col items-center p-6">
              <Rocket className="w-12 h-12 text-emerald-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-sm text-gray-500 text-center">
                Preparing for launch to deliver the best experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soon;

// Extra animation class for slow spin
// Add in globals.css (Tailwind custom animation)
// .animate-spin-slow {
//   animation: spin 6s linear infinite;
// }

// Fade-in animations
// .animate-fade-in {
//   animation: fadeIn 1s ease-in-out;
// }
// .animate-fade-in-delay {
//   animation: fadeIn 1.5s ease-in-out;
// }
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }