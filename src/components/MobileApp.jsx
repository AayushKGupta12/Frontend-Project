import React from "react";

// Mobile App Developer Roadmap - Entry Level
// Usage: place <MobileApp /> inside your React app. Requires TailwindCSS configured.

export function MobileApp() {
  const nodes = [
    { id: 1, title: "1. Programming Basics", desc: "Learn Java/Kotlin for Android or Swift for iOS; understand variables, loops, functions, OOP basics", done: 0, time: 6 },
    { id: 2, title: "2. Data Structures & Algorithms", desc: "Arrays, lists, stacks, queues, recursion, sorting, searching; essential for coding interviews", done: 0, time: 6 },
    { id: 3, title: "3. Android Development Basics", desc: "Activities, Intents, Views, Layouts, XML UI, lifecycle management, RecyclerView", done: 0, time: 5 },
    { id: 4, title: "4. iOS Development Basics", desc: "Swift, UIKit/SwiftUI, ViewControllers, Storyboards, AutoLayout, basic navigation", done: 0, time: 5 },
    { id: 5, title: "5. Cross-Platform Frameworks", desc: "React Native or Flutter: build apps for both Android and iOS, widgets, components, state management", done: 0, time: 6 },
    { id: 6, title: "6. Backend & API Integration", desc: "Connect apps to REST APIs, fetch and display data, JSON parsing, basic Firebase integration", done: 0, time: 5 },
    { id: 7, title: "7. Database & Storage", desc: "SQLite, Room (Android), CoreData (iOS), Firebase Realtime DB/Firestore for app data storage", done: 0, time: 4 },
    { id: 8, title: "8. App Architecture & Patterns", desc: "MVC, MVVM, Singleton, Provider/Bloc in Flutter, state management best practices", done: 0, time: 4 },
    { id: 9, title: "9. Testing & Debugging", desc: "Unit tests, widget tests, integration tests, crash reports, performance profiling", done: 0, time: 4 },
    { id: 10, title: "10. App Deployment & Stores", desc: "Publishing on Google Play Store and Apple App Store, app signing, versioning, release management", done: 0, time: 3 },
    { id: 11, title: "11. UI/UX Best Practices", desc: "Mobile-first design, responsive layouts, animations, accessibility, user-friendly interfaces", done: 0, time: 4 },
    { id: 12, title: "12. Portfolio & Projects", desc: "Build multiple apps, include source code on GitHub, show working apps in portfolio", done: 0, time: 5 },
    { id: 13, title: "13. Soft Skills & Communication", desc: "Explain app workflows, document code, present projects effectively, teamwork", done: 0, time: null },
    { id: 14, title: "14. Continuous Learning & Trends", desc: "Stay updated with new SDKs, libraries, Kotlin/Swift updates, cross-platform tools", done: 0, time: null },
  ];

  const totalTime = nodes.reduce((sum, node) => sum + (node.time || 0), 0);

  return (
    <div className="min-h-screen p-3 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <header className="mb-6 sm:mb-8 text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-amber-700">
            Mobile App Developer Roadmap
          </h1>
          <p className="mt-2 text-sm sm:text-base text-amber-600">Estimated Time: <span className="text-green-700 font-bold ">{totalTime} hours</span></p>
          <p className="mt-2 text-sm sm:text-base text-amber-600">Estimated Salary Range:  <span className="text-green-700 font-bold ">Rs 6 - Rs 9 LPA</span> </p>
        </header>

        <div 
          className="relative bg-white/70 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 overflow-hidden" 
          style={{ border: '6px solid rgba(245,158,11,0.2)' }}
        >
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                {nodes.slice(0, 5).map((n) => <RoadCard key={n.id} node={n} />)}
              </div>
              <div className="space-y-4 sm:space-y-6">
                {nodes.slice(5, 10).map((n) => <RoadCard key={n.id} node={n} />)}
              </div>
              <div className="space-y-4 sm:space-y-6">
                {nodes.slice(10).map((n) => <RoadCard key={n.id} node={n} />)}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-200 text-amber-800 font-semibold text-sm sm:text-base">
                  ✓
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-amber-700">
                    Entry-Level Mobile App Developer
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

export default MobileApp;
