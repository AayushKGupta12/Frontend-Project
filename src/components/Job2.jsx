import { useEffect, useState } from "react";

function Job2() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/company-news2");
      const jsonData = await response.json();

      const companyJobs = Object.keys(jsonData).map((company) => ({
        company,
        ...jsonData[company],
      }));

      setJobs(companyJobs);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const hasContent = jobs.length > 0;

  const getWhatsappLink = (job) => {
    const msg = `*Exciting Opportunity!*
       
*${job.company}* is hiring!   
They’ve opened up _off-campus recruitment_   

🔗 Visit their site: ${job.Link || "https://edstack.netlify.app"}   

━━━━━━━━━━━━━━━━━━━━━━━   
-> Stay updated with:   
\t *IT Job Updates*   
\t *Internship Opportunities*   
\t *Career Roadmaps*   
\t *Tech & IT News*   
━━━━━━━━━━━━━━━━━━━━━━━   

Explore more at: https://edstack.netlify.app`;

    return `https://wa.me/?text=${encodeURIComponent(msg)}`;
  };

  if (loading) {
    return (
      <div className="px-4 py-6 min-h-screen flex items-center justify-center">
        <div className="text-gray-500 text-lg font-semibold">Loading jobs...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-emerald-100 mx-1 sm:mx-3 md:mx-6 lg:mx-10 mt-8 sm:mt-8 rounded-3xl sm:rounded-4xl">

        <div className="px-1 py-4 sm:px-4 sm:py- mx-auto">
          {hasContent ? (
            <div className="mx-2 grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {jobs.map((job, index) => (
                <div key={index} className="w-full">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden border border-gray-100">
                    {/* Mobile Layout - Stacked */}
                    <div className="block sm:hidden">
                      {/* Company Logo and Name */}
                      <div className="p-4 pb-2 flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 object-cover rounded-lg ring-2 ring-gray-100"
                            alt={job.company}
                            src={
                              job.Logo && job.Logo.trim() !== ""
                                ? job.Logo
                                : `https://via.placeholder.com/48x48/4F46E5/ffffff?text=${job.company.charAt(0)}`
                            }
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="font-bold text-lg text-gray-900 truncate">
                            {job.company}
                          </h2>
                          <p className="text-sm text-gray-600 truncate">{job.Role}</p>
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className="px-4 pb-3 space-y-2">
                        <div className="flex items-center text-xs text-gray-500">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.Loc}
                        </div>
                        
                        <div className="flex items-center text-xs text-gray-500">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Batch: {job.Batch}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="font-bold text-green-600 text-sm">
                            {job.Stipend}
                          </div>
                          <div className="text-2xs text-gray-400">
                            {job.Date_of_publish || "Fews Days Left"}
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="px-4 py-3 bg-gray-50 flex gap-2 w-full">
                        <a
                          href={job.Link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-xl font-semibold shadow-md text-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Apply Now
                        </a>
                        <a
                          href={getWhatsappLink(job)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img
                            src="https://img.logo.dev/whatsapp.com?token=pk_djKZ3gIOQqyja8btgxBpBA"
                            alt="WhatsApp"
                            width={45}
                            height={40}
                            className="rounded-xl"
                          />
                          <div>
                        </div>
                        </a>
                      </div>
                    </div>

                    {/* Desktop Layout - Side by side */}
                    <div className="hidden sm:block">
                      <a
                        href={job.Link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="p-5 sm:p-6 flex flex-row min-h-[180px]">
                          {/* Logo Section */}
                          <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                            <img
                              className="w-full h-full object-cover rounded-xl ring-2 ring-gray-100"
                              alt={job.company}
                              src={
                                job.Logo && job.Logo.trim() !== ""
                                  ? job.Logo
                                  : `https://via.placeholder.com/112x112/4F46E5/ffffff?text=${job.company.charAt(0)}`
                              }
                            />
                          </div>

                          {/* Content Section */}
                          <div className="flex flex-col flex-1 pl-4 sm:pl-6 justify-between">
                            <div className="flex-1">
                              <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 line-clamp-2">
                                {job.company}
                              </h2>
                              <p className="text-gray-700 mb-3 font-medium">{job.Role}</p>
                              
                              <div className="space-y-1.5 mb-3">
                                <div className="flex items-center text-sm text-gray-600">
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  {job.Loc}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  Batch: {job.Batch}
                                </div>
                              </div>
                              
                              <div className="font-bold text-green-600 text-base mb-3">
                                {job.Stipend}
                              </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="flex items-center justify-between">
                              <div className="text-2xs text-gray-500">
                                {job.Date_of_publish || "Few days left"}
                              </div>
                              <div className="flex items-center space-x-3">
                                <a
                                  href={job.Link || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Apply
                                </a>
                                <a
                                  href={getWhatsappLink(job)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <img
                                    src="https://img.logo.dev/whatsapp.com?token=pk_djKZ3gIOQqyja8btgxBpBA"
                                    alt="WhatsApp"
                                    width={45}
                                    height={40}
                                    className="rounded-xl"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
              <div className="w-24 h-24 mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Job2 Available</h3>
              <p className="text-gray-500 mb-6 max-w-md">
                Sorry! We're currently experiencing some issues. Please check back later for the latest job opportunities.
              </p>
              <button 
                onClick={fetchData}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Job2;
