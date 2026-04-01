// src/pages/About.jsx
import React from 'react';
import Footer from './Footer';
import { FaRocket, FaTrophy, FaHandshake, FaHeart } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24 lg:py-28">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            About{" "}
            <span className="text-slate-900">
              Palate Networks Private Limited
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Since 2017, we've been transforming businesses through innovative  software solutions.  
             We're a team of passionate developers, designers, and strategists  
             committed to delivering excellence.
          </p>
        </div>

        {/* Rebranding Announcement */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div className="relative bg-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 -translate-y-12"></div>
              <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-white rounded-full translate-y-10"></div>
              <div className="absolute bottom-0 right-1/3 w-16 h-16 bg-white rounded-full translate-y-8"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <span className="text-2xl"></span>
                <span className="font-semibold text-lg">Exciting News!</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Rebranding Announcement
              </h2>
              
              <div className="space-y-5 text-left md:text-center">
                <p className="text-lg sm:text-xl md:text-1xl leading-relaxed opacity-95">
                  What began as FSOL has now evolved into <strong>Palate Networks Private Limited</strong>. This transformation represents our commitment to growth, innovation, and delivering greater value to our clients.
                </p>
                <p className="text-lg sm:text-xl md:text-1xl leading-relaxed opacity-95">
                  Based in Hyderabad, we are a team of passionate developers, designers, and strategists committed to delivering excellence. Founded in 2017 in the heart of Hyderabad's tech corridor, FSOL began with a simple yet powerful mission: to bridge the gap between innovative technology and real business needs.
                </p>
                <p className="text-lg sm:text-xl md:text-1xl leading-relaxed opacity-95">
                  What started as a small team has grown into a comprehensive software solutions company with over 100 experts. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence.
                </p>
                <p className="text-lg sm:text-xl md:text-1xl leading-relaxed opacity-95">
                  We’ve worked with diverse clients across industries, each project strengthening our resolve to deliver exceptional solutions. Today we stand proud with 80+ successful projects in our portfolio.
                </p>
                <p className="text-lg sm:text-xl md:text-1xl leading-relaxed opacity-95">
                  Our story is far from over — we continue to push boundaries, embrace new technologies, and help our clients achieve their digital transformation goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-20 md:mb-28 lg:mb-32">
          <StatCard number="7+" label="Years of Excellence" sublabel="Since 2017" />
          <StatCard number="20+" label="Projects Delivered" sublabel="Successful Projects" />
          <StatCard number="60+" label="Team Members" sublabel="Expert Professionals" />
          <StatCard number="98%" label="Client Satisfaction" sublabel="Happy Clients" />
        </div> */}

        {/* Our Story + Our Values */}
        <div className="space-y-20 md:space-y-28 lg:space-y-32">
          {/* Our Story */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-slate-900">
              Our Story
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg md:text-xl lg:text-2xl">
              We are excited to announce that FSOL, founded in 2017, has been rebranded as Palate Networks Pvt Ltd starting 2026. This change marks a new phase in our journey as we expand our capabilities and strengthen our vision for the future, while our commitment to quality and innovation remains unchanged. We sincerely thank you for being a part of our journey and look forward to continuing our relationship under our new identity.
            </p>
          </div>

          {/* Our Values */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-slate-900">
              Our Values
            </h2>
            <p className="text-slate-600 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
              The principles that guide everything we do and shape our approach to technology and business.
            </p>

            {/* Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
              <ValueCard
                icon={<FaRocket />}
                title="Innovation"
                description="We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
              />
              <ValueCard
                icon={<FaTrophy />}
                title="Quality"
                description="We maintain the highest standards of quality in every project, ensuring robust, scalable, and maintainable solutions."
              />
              <ValueCard
                icon={<FaHandshake />}
                title="Collaboration"
                description="We work closely with our clients, fostering transparent communication and partnership throughout the development process."
              />
              <ValueCard
                icon={<FaHeart />}
                title="Client Success"
                description="Your success is our success. We're committed to delivering solutions that drive real business value and growth."
              />
            </div>
          </div>

          {/* Company Timeline */}
          <div className="text-center mt-20 md:mt-28 lg:mt-32">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-slate-900">
              Our Journey
            </h2>
            <p className="text-slate-600 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
              Key milestones that have shaped our growth and success.
            </p>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-slate-400 to-slate-500 h-full rounded-full"></div>

              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-16">
                <TimelineItem
                  year="2017"
                  title="Founded as FSOL"
                  description="Started with a vision to revolutionize software solutions in Hyderabad."
                  position="left"
                  icon={<FaRocket className="text-3xl" />}
                />
                <TimelineItem
                  year="2018"
                  title="Team Expansion"
                  description="Grew from 5 to 50+ expert professionals across multiple domains."
                  position="right"
                  icon={<FaTrophy className="text-3xl" />}
                />
                <TimelineItem
                  year="2023"
                  title="80+ Projects Delivered"
                  description="Successfully completed projects across FinTech, Healthcare, and E-commerce sectors."
                  position="left"
                  icon={<FaHandshake className="text-3xl" />}
                />
                <TimelineItem
                  year="2026"
                  title="Rebranded to Palate Networks Pvt Ltd"
                  description="A new chapter begins with expanded capabilities and strengthened vision."
                  position="right"
                  icon={<FaHeart className="text-3xl" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function StatCard({ number, label, sublabel }) {
  return (
    <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8 lg:p-10 text-center transition-all duration-300 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-300/60">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-3 md:mb-4">
        {number}
      </div>
      <div className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-900 mb-1">{label}</div>
      <div className="text-sm md:text-base text-slate-500">{sublabel}</div>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="group relative bg-slate-100 border border-slate-200 rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-slate-400 hover:shadow-2xl hover:shadow-slate-300/70 flex flex-col min-h-[260px] md:min-h-[300px]">
      {/* Icon */}
      <div className="mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 items-center justify-center rounded-xl bg-slate-100 text-3xl md:text-4xl text-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5 text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed text-base sm:text-lg md:text-base lg:text-lg flex-grow">
        {description}
      </p>

      {/* Subtle hover indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
    </div>
  );
}

function TimelineItem({ year, title, description, position, icon }) {
  return (
    <div className={`flex items-center ${position === 'left' ? 'flex-row-reverse' : 'flex-row'} w-full`}>
      <div className={`w-1/2 ${position === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-sm font-semibold text-slate-700 mb-2">{year}</div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{title}</h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="relative flex-shrink-0 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white shadow-lg">
        {icon}
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}