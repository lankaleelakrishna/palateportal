// src/Main.js
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaTools,
  FaBug,
  FaCloud,
  FaChartLine,
  FaReact,
  FaServer,
  FaPaintBrush,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import Footer from "./Footer";

export default function Main() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FaCode className="text-5xl text-slate-700" />,
      title: "Web Application Development",
      desc: "Transform your business with powerful, scalable web applications built using cutting-edge technologies and best practices.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
      ],
      technologies: ["React", "Next.js", "Node.js", "Tailwind", "TypeScript"],
      detailedContent: {
        overview: "We build high-performance web applications that scale with your business needs.",
        benefits: [
          "Improved user engagement with responsive, intuitive interfaces",
          "Faster load times and better SEO performance",
          "Seamless integration with existing systems and APIs",
          "Mobile-first approach for optimal cross-device experience",
        ],
        process: [
          "Requirements gathering and strategy",
          "Wireframing and UI/UX design",
          "Agile development with sprint cycles",
          "Testing and quality assurance",
          "Deployment and ongoing support",
        ],
        caseStudy: "We've delivered 25+ web applications for startups to enterprises, achieving 40% avg performance improvement.",
      },
    },
    {
      icon: <FaMobileAlt className="text-5xl text-slate-700" />,
      title: "Mobile Application Development",
      desc: "Create engaging mobile experiences that connect with your audience across iOS and Android platforms.",
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-platform Solutions",
        "Flutter & React Native",
      ],
      technologies: ["Swift", "Kotlin", "Flutter", "React Native"],
      detailedContent: {
        overview: "We develop native and cross-platform mobile apps with exceptional user experiences.",
        benefits: [
          "Fast app performance and smooth animations",
          "Offline functionality for better user experience",
          "App Store & Play Store optimization",
          "Real-time notifications and push messaging",
        ],
        process: [
          "Market research and competitive analysis",
          "Mobile-first UI/UX design",
          "Native or cross-platform development",
          "Beta testing with real users",
          "App store submission and marketing",
        ],
        caseStudy: "Created 15+ mobile apps with combined 500K+ downloads and 4.5+ star ratings.",
      },
    },
    {
      icon: <FaTools className="text-5xl text-slate-700" />,
      title: "Custom Software Development",
      desc: "Tailored software solutions designed specifically for your business processes and unique requirements.",
      features: [
        "Enterprise Software Solutions",
        "Business Process Automation",
        "Legacy System Modernization",
        "Third-party Integrations",
      ],
      technologies: ["Java", ".NET", "Python", "C#", "Docker"],
      detailedContent: {
        overview: "We build custom software that solves your unique business challenges.",
        benefits: [
          "Tailored to your exact business processes",
          "Reduced operational costs through automation",
          "Improved data security and compliance",
          "Scalable architecture for future growth",
        ],
        process: [
          "Business requirements analysis",
          "Solution architecture design",
          "Custom development with best practices",
          "Integration testing & UAT",
          "Deployment & maintenance support",
        ],
        caseStudy: "Automated workflows for 12+ enterprises, resulting in 30-50% efficiency gains.",
      },
    },
    {
      icon: <FaBug className="text-5xl text-slate-700" />,
      title: "Testing Services",
      desc: "Comprehensive testing solutions to ensure your software meets the highest standards of quality and reliability.",
      features: ["Automated Testing", "Performance Testing", "Manual Testing", "Security Testing"],
      technologies: ["Selenium", "Cypress", "Jest", "Postman", "TestRail"],
      detailedContent: {
        overview: "We ensure your software is bug-free, secure, and performs under real-world conditions.",
        benefits: [
          "Reduced production bugs and critical issues",
          "Faster release cycles with automated testing",
          "Enhanced security with penetration testing",
          "Improved performance and user experience",
        ],
        process: [
          "Test plan and strategy development",
          "Automated & manual test creation",
          "Regression testing across versions",
          "Performance and load testing",
          "Security vulnerability assessment",
        ],
        caseStudy: "Tested 40+ applications, identified & fixed 5000+ issues, achieving 99%+ uptime.",
      },
    },
    {
      icon: <FaCloud className="text-5xl text-slate-700" />,
      title: "Cloud Services",
      desc: "Scale your business with cloud migration, deployment, and management services on leading platforms.",
      features: [
        "Cloud Migration Strategy",
        "AWS/Azure/GCP Setup",
        "DevOps Implementation",
        "Cloud Security",
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      detailedContent: {
        overview: "We help you leverage cloud technology for scalability, cost-efficiency, and reliability.",
        benefits: [
          "Reduced infrastructure costs by 40-60%",
          "99.9%+ uptime with multi-region deployment",
          "Auto-scaling for traffic spikes",
          "Automated backup and disaster recovery",
        ],
        process: [
          "Current infrastructure assessment",
          "Cloud strategy and architecture design",
          "Data migration planning",
          "Infrastructure-as-Code setup",
          "Monitoring and optimization",
        ],
        caseStudy: "Migrated 20+ companies to cloud, reducing costs by $500K annually on average.",
      },
    },
    {
      icon: <FaChartLine className="text-5xl text-slate-700" />,
      title: "Digital Marketing",
      desc: "Strategic digital marketing services to boost your online presence and drive sustainable business growth.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Marketing", "PPC Campaigns"],
      technologies: ["Google Ads", "SEO Tools", "Analytics", "Social Media", "CRM"],
      detailedContent: {
        overview: "We drive qualified traffic and conversions through data-driven marketing strategies.",
        benefits: [
          "Increase organic search visibility by 150-300%",
          "Boost social media engagement and followers",
          "Generate high-quality leads consistently",
          "Measurable ROI with detailed analytics",
        ],
        process: [
          "Market and competitor analysis",
          "SEO and content strategy development",
          "Campaign creation and optimization",
          "A/B testing and performance tracking",
          "Monthly reporting and adjustments",
        ],
        caseStudy: "Grew client websites with 5M+ organic sessions, 40K+ leads, 250% ROI in 12 months.",
      },
    },
  ];

  const techStack = [
    {
      icon: <FaReact className="text-6xl text-slate-700" />,
      title: "React & Next.js",
      desc: "Building fast, SEO-friendly, and highly interactive web applications with modern React ecosystem.",
    },
    {
      icon: <FaServer className="text-6xl text-slate-700" />,
      title: "Backend Development",
      desc: "Robust APIs and scalable server-side solutions using Node.js, Python, databases, and microservices.",
    },
    {
      icon: <FaPaintBrush className="text-6xl text-slate-700" />,
      title: "UI/UX Design",
      desc: "User-centered interfaces with modern design systems, wireframing, prototyping, and smooth experiences.",
    },
    {
      icon: <FaSearch className="text-6xl text-slate-700" />,
      title: "SEO & Marketing",
      desc: "Data-driven strategies including on-page SEO, content marketing, link building, and performance tracking.",
    },
  ];

  // Card animation observer
  const cardRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // SSR/testing environment fallback: just show cards without animation
      cardRefs.current.forEach((card) => {
        if (card) card.classList.add("animate-in");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden flex items-start bg-black/60">
        {/* Background Image with Zoom Out → Back to Original Animation */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[12000ms] ease-in-out"
          style={{
            backgroundImage: "url('/mainpagebg.jpg')",
            animation: "bgZoomOut 12s ease-in-out infinite",
            transform: "scale(1.12)", // starting slightly zoomed in for smooth effect
          }}
        />

        {/* Extra energy layer - soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(at_center_bottom,#ffffff15_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-36 w-full pt-16">
          {/* Wider + bigger left content - unchanged */}
          <div className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
            {/* Heading */}
            <h1 className="text-6xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tighter text-black mb-6">
              Building the Future{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-200 to-pink-200 bg-clip-text text-transparent">
                with Digital Excellence
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-2x2 text-black/900 mx-auto lg:mx-0 leading-relaxed mb-10">
              At <span className="font-bold text-black">Palate Networks</span>,
              We transform visionary ideas into scalable, high-performance digital solutions. At Palate Networks Pvt Ltd, we combine technology, strategy, and creativity to deliver measurable business impact and long-term growth.
              {/* <span className="italic">inspire and perform</span>. */}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/contact")}
                className="group flex items-center justify-center border-2 border-black/80 gap-3 bg-gradient-to-r from-slate-100/40 via-purple-100/40 to-pink-100/40 text-black hover:bg-gradient-to-r hover:from-slate-200/80 hover:via-purple-200/80 hover:to-pink-200/80 font-semibold px-5 py-3 rounded-2xl text-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Project Now
                <span className="group-hover:rotate-45 transition-transform text-2xl">
                  
                </span>
              </button>

              <button onClick={() => navigate("/services")} className="px-5 py-3 border-2 border-black/80 bg-gradient-to-r from-slate-100/40 via-purple-100/40 to-pink-100/40 text-black font-medium rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-200/80 hover:via-purple-200/80 hover:to-pink-200/80 backdrop-blur-md hover:scale-105">
                Discover Our Services
              </button>
            </div>

            {/* Trust stats */}
            {/* <div className="mt-14 flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-3 text-black/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange-300">★</span> 4.9 Client Happiness
              </div>
              <div>50+ Successful Launches</div>
              <div className="flex items-center gap-2">
                <span className="text-teal-300">⚡</span> Fast &amp; Scalable
              </div>
            </div> */}
          </div>
        </div>

        {/* Continuous Zoom Out → Back to Original Animation */}
        <style jsx>{`
          @keyframes bgZoomOut {
            0% {
              transform: scale(1.12);
            }
            50% {
              transform: scale(1); /* Zoom out */
            }
            100% {
              transform: scale(1.12);
            }
          }
        `}</style>
      </section>

      {/* Services section */}
      <section className="relative bg-white py-16 md:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Our Expert Services
          </h2>
          <p className="text-center text-slate-500 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business
            growth
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="h-96 opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-300"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative w-full h-full transition-transform duration-500 group [perspective:1000px] hover:[transform:rotateY(180deg)]" style={{transformStyle: 'preserve-3d'}}>
                  
                  {/* Front of card */}
                  <div
                    className="absolute w-full h-full bg-white border border-slate-200 rounded-2xl shadow-lg shadow-slate-300/40 group-hover:shadow-2xl group-hover:shadow-slate-400/30 p-6 flex flex-col items-center justify-center text-center"
                    style={{backfaceVisibility: 'hidden'}}
                  >
                    <div className="mb-5 text-slate-800 group-hover:scale-105 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute w-full h-full bg-slate-50 border border-slate-200 rounded-2xl shadow-lg shadow-slate-300/40 p-6 flex flex-col justify-between overflow-y-auto"
                    style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h4>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600">
                            <span className="text-slate-400 mt-1">•</span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2 mt-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies.map((tech, i) => (
                          <span key={i} className="text-xs text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-1 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3 w-full">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="w-full px-4 py-3 bg-slate-900 hover:bg-slate-700 text-white font-semibold rounded-lg transition duration-300"
                      >
                        View More →
                      </button>
                      <button
                        onClick={() => navigate("/contact")}
                        className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition duration-300"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foodeez demo section (animated content, no errors) */}
      <section id="foodeez" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <img 
              src="/foodeez.png.png" 
              alt="Foodeez Logo" 
              className="h-32 md:h-36 object-contain"

            />
            <div>
              <h2 className="foodeez-title text-5xl md:text-6xl font-bold text-slate-900 mb-6">Foodeez - Flavorful Digital Presence</h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mx-auto max-w-2xl">
                Foodeez is a technology-driven food delivery platform. Visit the dedicated Foodeez page to learn more about our revolutionary platform.
              </p>
            </div>
            <a
              href="/foodeez"
              className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-yellow-200  text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Foodeez →
            </a>
          </div>
        </div>
      </section>

      {/* Technology Stack + Stats + CTA */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pb-24 border-t border-slate-100 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Technology Stack
          </h2>
          <p className="text-center text-slate-500 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Powerful tools and frameworks we use to build modern, scalable
            solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-20">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-slate-100 border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-slate-400 hover:shadow-2xl hover:shadow-slate-300/60 flex flex-col items-center text-center"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">
                  {tech.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Stats */}
      { /*
      <div className="w-full bg-blue-400 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "7+", label: "Years Experience" },
              { number: "20+", label: "Projects Delivered" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-2xl p-6 md:p-10 text-center transition-all duration-300 hover:border-indigo-300 hover:shadow-xl"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text mb-3 md:mb-4">
                  {stat.number}
                </div>
                <p className="text-slate-700 font-medium text-lg md:text-xl">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}

      {/* CTA CARD */}
        <div className="relative max-w-4xl mx-auto px-6 mt-16 md:mt-20 mb-10">
          <div className="bg-slate-100 border border-slate-200 rounded-3xl p-10 md:p-14 text-center shadow-2xl shadow-slate-200/40">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Ready to Build
            </h2>

            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Next Project?
            </h3>

            <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg">
              Join 80+ satisfied clients who trust us for software development
              and digital solutions. Let’s turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate("/contact")}
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-cyan-100 transition shadow-lg shadow-slate-400/30">
                Contact Us →
              </button>

              {/* <button className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 transition hover:bg-slate-50">
                View Portfolio
              </button> */}
            </div>
          </div>
        </div>

        <Footer />

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Modal Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 md:p-8 border-b border-slate-200 bg-white">
                <div className="flex items-center gap-4">
                  <div className="text-5xl text-slate-700">{selectedService.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{selectedService.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-2xl text-slate-600 hover:text-slate-900" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Overview</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{selectedService.detailedContent.overview}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.detailedContent.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-slate-300 transition">
                        <div className="text-slate-700 font-bold text-lg mt-0.5 flex-shrink-0">✓</div>
                        <p className="text-slate-600 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Our Process</h3>
                  <div className="space-y-3">
                    {selectedService.detailedContent.process.map((step, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-slate-600 text-lg pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Success Story</h3>
                  <p className="text-slate-600 text-lg">{selectedService.detailedContent.caseStudy}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-900 text-white font-semibold rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => navigate("/contact")}
                    className="flex-1 px-6 py-4 bg-slate-900 hover:bg-slate-700 text-white font-bold rounded-xl transition shadow-lg">
                    Get Started
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-6 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
}