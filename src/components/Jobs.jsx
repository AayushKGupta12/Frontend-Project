import { useEffect, useState } from "react";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://edstack.onrender.com/company-news");
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
    const msg = `!! Hey !! ${job.company} have started its offcampus recruitment. Apply Fast\n${job.Link || ""}`;
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
      <div className="bg-gray-100 mx-4 sm:p-2 sm:mx-1 md:mx-35 mt-8 sm:mt-8 rounded-3xl sm:rounded-4xl" >
        <div className="px-1 py-4 sm:px-4 sm:py-6 max-w-7xl mx-auto">
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
                          <div className="text-xs text-gray-400">
                            {job.Date_of_publish}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="px-4 py-3 bg-gray-50 flex space-x-2">
                        <a
                          href={job.Link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-center"
                        >
                          Apply Now
                        </a>
                        <a
                          href={getWhatsappLink(job)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.52 3.478A11.786 11.786 0 0012.017 0C5.28 0 .007 5.272.007 12.001c0 2.118.553 4.192 1.604 6.016L.043 24l6.092-1.59a11.913 11.913 0 005.883 1.498h.006c6.733 0 12.005-5.273 12.005-12.002 0-3.194-1.246-6.198-3.53-8.428zm-8.5 19.4h-.005a10.429 10.429 0 01-5.34-1.537l-.383-.227-3.619.944.964-3.527-.25-.388A10.461 10.461 0 012.036 12c0-5.759 4.687-10.447 10.471-10.447a10.422 10.422 0 017.381 3.058A10.35 10.35 0 0122.463 12c0 5.76-4.688 10.447-10.442 10.447zM17.66 14.965c-.245-.124-1.45-.715-1.674-.797-.224-.082-.387-.124-.55.124-.164.247-.632.796-.775.961-.143.164-.285.184-.53.062-.245-.124-1.032-.381-1.967-1.216-.727-.648-1.217-1.449-1.364-1.693-.143-.247-.015-.381.108-.505.111-.109.248-.283.372-.424.125-.14.166-.247.25-.413.082-.164.041-.309-.02-.433-.062-.124-.55-1.333-.754-1.822-.198-.477-.398-.412-.55-.42a4.36 4.36 0 00-.468-.008c-.161.018-.42.062-.64.309-.22.247-.84.823-.84 2a3.363 3.363 0 00.69 1.978c.084.112 1.178 1.802 2.856 2.45 1.678.644 1.678.429 1.981.404.304-.024.963-.39 1.099-.766.135-.377.135-.717.095-.786-.041-.062-.148-.101-.393-.225z"></path>
                          </svg>
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
                              <div className="text-xs text-gray-500">
                                {job.Date_of_publish}
                              </div>
                              <div className="flex items-center space-x-3">
                                <a
                                  href={job.Link || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Apply
                                </a>
                                <a
                                  href={getWhatsappLink(job)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-2 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="13"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="mr-1"
                                  >
                                    <path d="M20.52 3.478A11.786 11.786 0 0012.017 0C5.28 0 .007 5.272.007 12.001c0 2.118.553 4.192 1.604 6.016L.043 24l6.092-1.59a11.913 11.913 0 005.883 1.498h.006c6.733 0 12.005-5.273 12.005-12.002 0-3.194-1.246-6.198-3.53-8.428zm-8.5 19.4h-.005a10.429 10.429 0 01-5.34-1.537l-.383-.227-3.619.944.964-3.527-.25-.388A10.461 10.461 0 012.036 12c0-5.759 4.687-10.447 10.471-10.447a10.422 10.422 0 017.381 3.058A10.35 10.35 0 0122.463 12c0 5.76-4.688 10.447-10.442 10.447zM17.66 14.965c-.245-.124-1.45-.715-1.674-.797-.224-.082-.387-.124-.55.124-.164.247-.632.796-.775.961-.143.164-.285.184-.53.062-.245-.124-1.032-.381-1.967-1.216-.727-.648-1.217-1.449-1.364-1.693-.143-.247-.015-.381.108-.505.111-.109.248-.283.372-.424.125-.14.166-.247.25-.413.082-.164.041-.309-.02-.433-.062-.124-.55-1.333-.754-1.822-.198-.477-.398-.412-.55-.42a4.36 4.36 0 00-.468-.008c-.161.018-.42.062-.64.309-.22.247-.84.823-.84 2a3.363 3.363 0 00.69 1.978c.084.112 1.178 1.802 2.856 2.45 1.678.644 1.678.429 1.981.404.304-.024.963-.39 1.099-.766.135-.377.135-.717.095-.786-.041-.062-.148-.101-.393-.225z"></path>
                                  </svg>
                                  Share
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
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Jobs Available</h3>
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

export default Jobs;