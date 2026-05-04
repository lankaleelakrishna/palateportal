// src/Footer.js
import React from 'react';
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaGithub, 
  FaEnvelope 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand / Logo Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/pnpn.png"
                alt="Palate Networks Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-black text-transparent bg-clip-text">
                Palate Networks
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed mb-6 text-slate-600">
              Building the Future with Digital Excellence<br />
              since 2017.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors duration-200">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors duration-200">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors duration-200">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-slate-900 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/foodeez" className="hover:text-slate-900 transition-colors duration-200">
                  Foodeez
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-slate-900 transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-slate-900 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect / Social */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Connect</h3>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-2xl text-slate-600 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-110"
                aria-label="Twitter / X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="text-2xl text-slate-600 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="#" 
                className="text-2xl text-slate-600 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="py-8 border-t border-slate-200 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Palate Networks Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}