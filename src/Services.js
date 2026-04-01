// src/Services.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaTools,
  FaBug,
  FaCloud,
  FaChartLine,
} from "react-icons/fa";
import Footer from "./Footer";

export default function Services() {
  const navigate = useNavigate();
  const services = [
    {
      icon: <FaCode className="text-6xl text-slate-700" />,
      title: "Web Application Development",
      desc: "Transform your business with powerful, scalable web applications built using cutting-edge technologies and best practices.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
      ],
      technologies: ["React", "Next.js", "Node.js", "Tailwind", "TypeScript"],
    },
    {
      icon: <FaMobileAlt className="text-6xl text-slate-700" />,
      title: "Mobile Application Development",
      desc: "Create engaging mobile experiences that connect with your audience across iOS and Android platforms.",
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-platform Solutions",
        "Flutter & React Native",
      ],
      technologies: ["Swift", "Kotlin", "Flutter", "React Native"],
    },
    {
      icon: <FaTools className="text-6xl text-slate-700" />,
      title: "Custom Software Development",
      desc: "Tailored software solutions designed specifically for your business processes and unique requirements.",
      features: [
        "Enterprise Software Solutions",
        "Business Process Automation",
        "Legacy System Modernization",
        "Third-party Integrations",
      ],
      technologies: ["Java", ".NET", "Python", "C#", "Docker"],
    },
    {
      icon: <FaBug className="text-6xl text-slate-700" />,
      title: "Testing Services",
      desc: "Comprehensive testing solutions to ensure your software meets the highest standards of quality and reliability.",
      features: ["Automated Testing", "Performance Testing", "Manual Testing", "Security Testing"],
      technologies: ["Selenium", "Cypress", "Jest", "Postman", "TestRail"],
    },
    {
      icon: <FaCloud className="text-6xl text-slate-700" />,
      title: "Cloud Services",
      desc: "Scale your business with cloud migration, deployment, and management services on leading platforms.",
      features: [
        "Cloud Migration Strategy",
        "AWS/Azure/GCP Setup",
        "DevOps Implementation",
        "Cloud Security",
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    },
    {
      icon: <FaChartLine className="text-6xl text-slate-700" />,
      title: "Digital Marketing",
      desc: "Strategic digital marketing services to boost your online presence and drive sustainable business growth.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Marketing", "PPC Campaigns"],
      technologies: ["Google Ads", "SEO Tools", "Analytics", "Social Media", "CRM"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-24 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            Our Expert Services
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to accelerate your business growth and drive innovation in the modern digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 p-8 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-slate-100 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="w-full mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h4>
                  <ul className="text-left space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <span className="text-slate-500 mt-1">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="w-full mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Now Button */}
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital goals. Contact us today for a free consultation.
            </p>
            <button 
              onClick={() => navigate("/contact")}
              className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}