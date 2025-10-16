import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Jobs from './components/Jobs';
import Newsapp from './components/ITnews';
import Technology from './components/Technology';
import Health from './components/Health';
import Business from './components/Business';
import Soon from './components/Soon';
import Sports from './components/Sports';
import ML from './components/ML';
import DataSci from './components/DataSci';
import DataAnalyst from './components/DataAnalyst';
import WebDev from './components/WebDev';
import Cybersecurity from './components/Cybersecurity';
import DevOps from './components/DevOps';
import UIUX from './components/UIUX';
import BusinessAnalyst from './components/BusinessAnalyst';
import SoftwareEng from './components/SoftwareEng';
import MobileApp from './components/MobileApp';
import DatabaseAdmin from './components/DatabaseAdmin';
import Footer from './components/Footer';
import Science from './components/Science';
import Stock from './components/Stock';
import Hero from './components/Hero';
import Job1 from './components/Job1';
import Job2 from './components/Job2';
import Job3 from './components/Job3';
import Job4 from './components/Job4';

function App() {
  const [activeSection, setActiveSection] = useState("Jobs");
  const [activeSection1, setActiveSection1] = useState("ML");

  const toggleButton = (label) => (
    <button
      onClick={() => setActiveSection(label)}
      className={`px-3 py-1.5 rounded-lg font-semibold transition-all border ${
        activeSection === label
          ? "bg-blue-100 text-blue-700 border-blue-300"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );

  const toggleButton1 = (label1) => (
    <button
      onClick={() => setActiveSection1(label1)}
      className={`px-3 py-1.5 rounded-lg font-semibold transition-all border ${
        activeSection1 === label1
          ? "bg-blue-100 text-blue-700 border-blue-300"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
      }`}
    >
      {label1}
    </button>
  );

  return (
    <>
      <Nav />
      <Hero/>

      {/* Toggle Bar */}
      <div className="flex flex-wrap justify-center my-5 gap-2">
        {toggleButton("Jobs")}
        {toggleButton("Roadmap")}
        {toggleButton("News")}
        {toggleButton("Ai-Resume")}
        {toggleButton("Internship")}
      </div>


      {/* Section Rendering */}
      {activeSection === "Jobs" && (
        <div className="mx-2 my-8">

          

          {/* <Feat/> */}
          
          <div className='my-6'>
            <Jobs/>
            <Job1/>
            <Job2/>
            <Job3/>
            <Job4/>
          </div>
          

          
        </div>
      )}

      {activeSection === "Roadmap" && (
        <>
        <div className='text-center text-amber-50 bg-emerald-700 font-semibold rounded-2xl p-2 mx-4 sm:mx-6 md:mx-6 text-base sm:text-lg md:text-xl'><span className='text-2xl font-bold text-gray-100'>Select The Road Map</span>
          {/* Horizontal scroll buttons */}
          <div className="my-2 mx-1.5">
            <div className="flex gap-2 overflow-x-auto scroll-hidden scrollbar-hide scroll-smooth px-2">
              {toggleButton1("Machine Learning")}
              {toggleButton1("Data Science")}
              {toggleButton1("Data Analyst")}
              {toggleButton1("Web Dev")}
              {toggleButton1("Cyber security")}
              {toggleButton1("DevOps Engineer")}
              {toggleButton1("UI/UX Designer")}
              {toggleButton1("Business Analyst")}
              {toggleButton1("Software Engineer")}
              {toggleButton1("Mobile App Developer")}
              {toggleButton1("Database Administrator")}
            </div>
          </div>
          </div>

          {/* Section Rendering */}
          <div className="mx-6 my-10">
            {activeSection1 === "Machine Learning" && <ML />}
            {activeSection1 === "Data Science" && <DataSci />}
            {activeSection1 === "Data Analyst" && <DataAnalyst />}
            {activeSection1 === "Web Dev" && <WebDev />}
            {activeSection1 === "Cyber security" && <Cybersecurity />}
            {activeSection1 === "DevOps Engineer" && <DevOps />}
            {activeSection1 === "UI/UX Designer" && <UIUX />}
            {activeSection1 === "Business Analyst" && <BusinessAnalyst />}
            {activeSection1 === "Software Engineer" && <SoftwareEng />}
            {activeSection1 === "Mobile App Developer" && <MobileApp />}
            {activeSection1 === "Database Administrator" && <DatabaseAdmin />}
          </div>
        </>
      )}

      {activeSection === "Ai-Resume" && (
        <div className="mx-6 my-10">
          <Soon />
        </div>
      )}

      {activeSection === "Internship" && (
        <div className="mx-6 my-10">
          <Soon />
        </div>
      )}

      {activeSection === "News" && (
        <>
          {/* News Section */}
          <div className="px-4 sm:px-10 md:px-20 lg:px-40">
            <div className="p-5 bg-gray-100 rounded-2xl md:rounded-4xl">
              <Newsapp />
            </div>
          </div>

          {/* Technology */}
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-6 md:py-10">
            <div className="p-5 bg-gray-100 rounded-2xl md:rounded-4xl space-y-6">
              <Technology />
            </div>
          </div>

          {/* Stock */}
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-6 md:py-10">
            <div className="p-5 bg-gray-100 rounded-2xl md:rounded-4xl">
              <Stock />
            </div>
          </div>

          {/* Sports */}
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-6 md:py-10">
            <div className="p-5 bg-gray-100 rounded-2xl md:rounded-4xl">
              <Sports />
            </div>
          </div>

          {/* Science */}
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-6 md:py-10">
            <div className="p-5 bg-gray-100 rounded-2xl md:rounded-4xl">
              <Science />
            </div>
          </div>

          {/* Business */}
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-6 md:py-10">
            <div className="py-5 p-6 bg-amber-100 rounded-2xl md:rounded-4xl space-y-4 text-white">
              <Business />
            </div>
          </div>

          {/* Health */}
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-6 md:py-10">
            <div className="p-5 bg-gray-100 rounded-2xl md:rounded-4xl">
              <Health />
            </div>
          </div>

        </>
      )}

      <Footer/>

      
    </>
  );
}

export default App;
