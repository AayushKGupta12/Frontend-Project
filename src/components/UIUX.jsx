import React from "react";

// UI/UX Roadmap - Entry Level
// Usage: place <UIUX /> inside your React app. Requires TailwindCSS configured.

export function UIUX() {
  const nodes = [
    { id: 1, title: "1. Design Fundamentals", desc: "Color theory, typography, layout, visual hierarchy, contrast", done: 0, time: 5 },
    { id: 2, title: "2. User Research & Personas", desc: "Conduct surveys, interviews, create user personas, understand user needs", done: 0, time: 6 },
    { id: 3, title: "3. Wireframing & Sketching", desc: "Low-fidelity wireframes, paper sketches, rapid prototyping concepts", done: 0, time: 4 },
    { id: 4, title: "4. Prototyping Tools", desc: "Figma, Adobe XD, Sketch: create interactive prototypes and flows", done: 0, time: 5 },
    { id: 5, title: "5. UI Design & Visuals", desc: "Designing high-fidelity screens, micro-interactions, icons, style guides", done: 0, time: 6 },
    { id: 6, title: "6. UX Testing", desc: "Usability testing, A/B testing, heatmaps, user feedback analysis", done: 0, time: 5 },
    { id: 7, title: "7. Design Systems & Guidelines", desc: "Create reusable components, maintain consistency, accessibility standards", done: 0, time: 4 },
    { id: 8, title: "8. Frontend Basics for Designers", desc: "HTML, CSS, basic responsive design, optional React for prototyping", done: 0, time: 5 },
    { id: 9, title: "9. Collaboration & Agile Workflow", desc: "Work with developers, Jira/Confluence basics, version control awareness", done: 0, time: 3 },
    { id: 10, title: "10. Portfolio & Case Studies", desc: "Build portfolio with real/mini projects, document UX processes, storytelling", done: 0, time: 5 },
    { id: 11, title: "11. Soft Skills & Presentation", desc: "Effective communication, presenting designs, design critique, client interaction", done: 0, time: 4 },
    { id: 12, title: "12. Continuous Learning", desc: "Follow design trends, participate in challenges, learn new tools & frameworks", done: 0, time: 4 }
  ];

  const totalTime = nodes.reduce((sum, node) => sum + (node.time || 0), 0);

  return (
    <div className="min-h-screen p-3 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <header className="mb-6 sm:mb-8 text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-amber-700">
            UI/UX Designer Roadmap
          </h1>
          <p className="mt-2 text-sm sm:text-base text-amber-600">Estimated Time: <span className="text-green-700 font-bold ">{totalTime} hours</span></p>
          <p className="mt-2 text-sm sm:text-base text-amber-600">Estimated Salary Range:  <span className="text-green-700 font-bold ">Rs 4 - Rs 6.5 LPA</span> </p>
        </header>

        <div 
          className="relative bg-white/70 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 overflow-hidden" 
          style={{ border: '6px solid rgba(245,158,11,0.2)' }}
        >
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                {nodes.slice(0, 4).map((n) => (
                  <RoadCard key={n.id} node={n} />
                ))}
              </div>

              {/* Middle Column */}
              <div className="space-y-4 sm:space-y-6">
                {nodes.slice(4, 8).map((n) => (
                  <RoadCard key={n.id} node={n} />
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                {nodes.slice(8).map((n) => (
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
                    Entry Level UI/UX Designer
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

export default UIUX;
