import React from "react";

export function Footer() {
  return (
    <footer className="bg-emerald-50 border-t border-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://edstack.onrender.com/about" className="text-slate-900 hover:text-emerald-900 font-medium transition-colors duration-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://edstack.onrender.com/contact" className="text-slate-900 hover:text-emerald-900 font-medium transition-colors duration-200 text-sm">
                  Contact Us
                </a>
              </li>
              
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-900 hover:text-emerald-900 font-medium transition-colors duration-200 text-sm">
                  Jobs Portal
                </a>
              </li>
            </ul>
            <ul className="space-y-3">
              <li>
                <a href="https://edstack.onrender.com/service" className="text-slate-900 hover:text-emerald-900 font-medium transition-colors duration-200 text-sm">
                  Services 
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Connect</h3>
            <p className="text-sm text-slate-900">Stay updated with our latest news and updates</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-800">
              ©{new Date().getFullYear()} <span className="text-emerald-900 font-medium">EdStack</span>. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;