import React from "react";

// WebDev Roadmap - MERN & MEAN Stack for Freshers
// Usage: place <WebDev /> inside your React app. Requires TailwindCSS configured.

export function WebDev() {
  const nodes = [
    { id: 1, title: "1. HTML & CSS Basics", desc: "Structure web pages, styling, layout, forms, tables, responsive design", done: 0, time: 6 },
    { id: 2, title: "2. JavaScript Basics", desc: "Variables, loops, functions, DOM manipulation, events", done: 0, time: 6 },
    { id: 3, title: "3. Advanced JS & ES6+", desc: "Arrow functions, promises, async/await, modules, fetch API", done: 0, time: 6 },
    { id: 4, title: "4. Frontend Frameworks", desc: "React.js basics: components, state, props, hooks; Angular basics for MEAN", done: 0, time: 8 },
    { id: 5, title: "5. Version Control & Git", desc: "Git commands, GitHub repositories, branching, pull requests, collaboration", done: 0, time: 3 },
    { id: 6, title: "6. Node.js & Express", desc: "Server-side JS, building REST APIs, routing, middleware, CRUD operations", done: 0, time: 8 },
    { id: 7, title: "7. Database Basics", desc: "MongoDB: collections, documents, queries, aggregation; SQL optional", done: 0, time: 6 },
    { id: 8, title: "8. Authentication & Security", desc: "JWT, OAuth, password hashing, sessions, secure routes", done: 0, time: 4 },
    { id: 9, title: "9. Full Stack Integration", desc: "Connect frontend with backend APIs, fetch data, handle responses", done: 0, time: 6 },
    { id: 10, title: "10. Testing & Debugging", desc: "Unit testing, integration testing, debugging techniques, Chrome DevTools", done: 0, time: 4 },
    { id: 11, title: "11. Deployment & Cloud Hosting", desc: "Deploy apps on Vercel, Netlify, Heroku, or AWS; CI/CD basics", done: 0, time: 5 },
    { id: 12, title: "12. UI Libraries & Styling", desc: "Bootstrap, TailwindCSS, Material UI for responsive design", done: 0, time: 4 },
    { id: 13, title: "13. Project Portfolio", desc: "Build and host real-world projects", done: 0, time: 8 },
    { id: 14, title: "14. Presentation Skills", desc: "Showcase projects, explain architecture and features clearly to recruiters", done: 0, time: 3 },
    { id: 15, title: "15. Soft Skills & Networking", desc: "Communication, teamwork, problem-solving, GitHub contributions, LinkedIn networking", done: 0, time: 3 }
  ];

  // Calculate total time
  const totalTime = nodes.reduce((sum, node) => sum + (node.time || 0), 0);

  return (
    <div className="min-h-screen p-3 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <header className="mb-6 sm:mb-8 text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-amber-700">
            Web Development Roadmap (MERN & MEAN Stack)
          </h1>
          <p className="mt-2 text-sm sm:text-base text-amber-600">Estimated Time: <span className="text-green-700 font-bold ">{totalTime} hours</span></p>
          <p className="mt-2 text-sm sm:text-base text-amber-600">Estimated Salary Range:  <span className="text-green-700 font-bold ">Rs 9 - Rs 15 LPA</span> </p>
        </header>

        <div 
          className="relative bg-white/70 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 overflow-hidden" 
          style={{ border: '6px solid rgba(245,158,11,0.2)' }}
        >
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                {nodes.slice(0, 5).map((n) => (
                  <RoadCard key={n.id} node={n} />
                ))}
              </div>

              {/* Middle Column */}
              <div className="space-y-4 sm:space-y-6">
                {nodes.slice(5, 10).map((n) => (
                  <RoadCard key={n.id} node={n} />
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                {nodes.slice(10).map((n) => (
                  <RoadCard key={n.id} node={n} />
                ))}
              </div>
            </div>

            {/* Footer legend */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-200 text-amber-800 font-semibold text-sm sm:text-base">
                  ✓
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-amber-700">
                    Entry Level Web Developer
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function RoadCard({ node }) {
  return (
    <div className="flex items-start bg-amber-50/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-3 sm:gap-4 w-full">
        <div 
          className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-full flex items-center justify-center shadow-inner text-amber-900 font-bold text-xs sm:text-sm"
          style={{ background: 'linear-gradient(135deg, #fde68a, #b45309)' }}
        >
          {node.id}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-amber-800 text-sm sm:text-base">{node.title}</h3>
          <p className="text-xs sm:text-sm text-amber-600 mt-1 leading-relaxed">{node.desc}</p>

          <div className="mt-2 sm:mt-3 flex items-center gap-2">
            <div
              className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                node.done ? "bg-amber-600 text-white" : "bg-amber-100 text-amber-800"
              }`}
            >
              {node.time ? `${node.time} hours` : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDev;
