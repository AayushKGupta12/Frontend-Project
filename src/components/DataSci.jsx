import React from "react";

// DataSci Roadmap - Single-file React component using TailwindCSS (cartoon style)
// Usage: place <MLRoadmap /> inside your React app. Requires TailwindCSS configured.

export function DataSci() {
  const nodes = [
  { id: 1, title: "1. Excel Basics", desc: "Data entry, formulas, functions, pivot tables, charts", done: 0, time: 7 },
  { id: 2, title: "2. Python Basics", desc: "Variables, data types, loops, conditionals, functions, basic OOP", done: 0, time: 2 },
  { id: 3, title: "3. NumPy & Pandas", desc: "Array operations, DataFrames, indexing, data cleaning, preprocessing", done: 0, time: 4 },
  { id: 4, title: "4. Data Visualization", desc: "Matplotlib, Seaborn, plots, charts, storytelling with data", done: 0, time: 4 },
  { id: 5, title: "5. Power BI / Tableau", desc: "Connecting data sources, dashboards, filters, slicers, visual storytelling", done: 0, time: 3 },
  { id: 6, title: "6. Supervised Learning Basics", desc: "Regression, classification, decision trees, random forest, evaluation metrics", done: 0, time: 4 },
  { id: 7, title: "7. Unsupervised Learning Basics", desc: "Clustering (K-Means, Hierarchical), PCA, anomaly detection basics", done: 0, time: 3 },
  { id: 8, title: "8. Semi-Supervised & Simple ML Pipelines", desc: "Handling small labeled datasets, basic pipeline creation", done: 0, time: 4 },
  { id: 9, title: "9. Introduction to Dashboards & Reporting", desc: "Design dashboards, KPI metrics, interactive charts", done: 0, time: 3 },
  { id: 10, title: "10. Web App Basics with Streamlit & Flask", desc: "Build simple web apps to deploy ML models and dashboards", done: 0, time: 8 },
  { id: 11, title: "11. HTML, CSS & Frontend Basics", desc: "Basic web layout, forms, tables; React optional for advanced apps", done: 0, time: 8 },
  { id: 12, title: "12. Project Deployment & Portfolio", desc: "Host projects, GitHub portfolio, sharing dashboards and web apps", done: 0, time: 2 },
  { id: 13, title: "13. Presentation Skills", desc: "PowerPoint, storytelling, explaining data insights clearly", done: 0, time: null },
  { id: 14, title: "14. Communication & Soft Skills", desc: "Team collaboration, effective communication, report writing, data storytelling", done: 0, time: null },
  { id: 15, title: "15. Continuous Learning & Projects", desc: "Kaggle competitions, mini-projects, internships, staying updated with tools and trends", done: 0, time: null }
];


  return (
    <div className="min-h-screen p-3 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <header className="mb-6 sm:mb-8 text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-amber-700">
            Data Science Roadmap
          </h1>
          <p className="mt-2 text-sm sm:text-base text-amber-600">Estimated Time:<span className="text-green-700 font-bold"> 64 hours</span> </p>
          <p className="mt-2 text-sm sm:text-base text-amber-600">Estimated Salary Range: <span className="text-green-700 font-bold">Rs 8 - 13 LPA</span></p>
        </header>

        <div 
          className="relative bg-white/70 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 overflow-hidden" 
          style={{ border: '6px solid rgba(245,158,11,0.2)' }}
        >
          <div className="relative z-10">
            {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns */}
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
                    Entry Level Data Science
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
          style={{
            background: 'linear-gradient(135deg, #fde68a, #b45309)'
          }}
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

export default DataSci;