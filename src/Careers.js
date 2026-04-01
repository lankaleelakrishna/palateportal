import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Footer from "./Footer";

export default function Careers() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);
  const culture = [
    { title: "Innovation First", desc: "We embrace new technologies and encourage creative problem-solving." },
    { title: "Team Collaboration", desc: "We believe in transparent communication and cross-functional teamwork." },
    { title: "Excellence", desc: "We strive for superior outcomes in everything we do and celebrate achievements." },
    { title: "Work-Life Balance", desc: "We support flexible schedules and a healthy, sustainable work-life environment." },
  ];

  const benefits = [
    { title: "Competitive Salary", desc: "Industry-leading compensation packages with performance bonuses." },
    { title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family." },
    { title: "Flexible Hours", desc: "Work-life balance with flexible hours and remote options." },
    { title: "Learning & Development", desc: "Continuous learning opportunities and professional growth programs." },
    { title: "Great Work Environment", desc: "Modern office with restful facilities and team activities." },
    { title: "Global Exposure", desc: "Work with international clients and cutting-edge technologies." },
  ];

  const jobs = [
    {
      role: "Senior Full Stack Developer",
      team: "Engineering",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "5+ years",
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
      description: "Experienced full-stack developer to lead web app development projects.",
      responsibilities: [
        "Design and develop scalable web applications using React and Node.js",
        "Lead technical architecture and code reviews for the engineering team",
        "Collaborate with product teams to translate requirements into technical solutions",
        "Mentor junior developers and contribute to team growth",
        "Optimize application performance and ensure best practices",
        "Deploy and manage applications on AWS infrastructure"
      ],
      requirements: [
        "5+ years of professional experience in full-stack development",
        "Strong proficiency in React, Node.js, and TypeScript",
        "Experience with AWS cloud platforms",
        "Database design and optimization (MongoDB, PostgreSQL)",
        "Understanding of microservices and scalable architecture",
        "Excellent communication and teamwork skills"
      ],
      salary: "₹15,00,000 - ₹25,00,000 per annum",
    },
    {
      role: "Mobile App Developer",
      team: "Engineering",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "3+ years",
      skills: ["React Native", "Flutter", "iOS", "Android", "Redux"],
      description: "Build cross-platform mobile applications for global clients.",
      responsibilities: [
        "Develop and maintain mobile applications using React Native or Flutter",
        "Implement native modules and optimize application performance",
        "Collaborate with designers to create intuitive user interfaces",
        "Conduct unit testing and debug applications thoroughly",
        "Participate in code reviews and contribute to team best practices",
        "Deploy applications to App Store and Play Store"
      ],
      requirements: [
        "3+ years of experience in mobile app development",
        "Proficiency in React Native or Flutter",
        "Understanding of iOS and Android ecosystems",
        "Experience with state management (Redux, Provider, etc)",
        "Knowledge of REST APIs and networking",
        "Problem-solving skills and attention to detail"
      ],
      salary: "₹10,00,000 - ₹18,00,000 per annum",
    },
    {
      role: "UI/UX Designer",
      team: "Design",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Figma", "Adobe XD", "Wireframing", "User Research", "Design Systems"],
      description: "Create user-centric interfaces for web and mobile products.",
      responsibilities: [
        "Design intuitive user interfaces for web and mobile applications",
        "Conduct user research and gather requirements for design projects",
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Develop and maintain design systems and component libraries",
        "Collaborate with developers to ensure design implementation",
        "Conduct usability testing and iterate on designs based on feedback"
      ],
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in design tools (Figma, Adobe XD, Sketch)",
        "Strong understanding of user-centered design principles",
        "Experience with responsive design and various devices",
        "Knowledge of design systems and pattern libraries",
        "Excellent communication and presentation skills"
      ],
      salary: "₹9,00,000 - ₹16,00,000 per annum",
    },
    {
      role: "DevOps Engineer",
      team: "Engineering",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "4+ years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      description: "Manage cloud infrastructure and deployment pipelines for scalable apps.",
      responsibilities: [
        "Design and manage cloud infrastructure on AWS platforms",
        "Implement and maintain CI/CD pipelines for application deployment",
        "Containerize applications using Docker and manage Kubernetes clusters",
        "Monitor system performance and implement alerting systems",
        "Ensure security best practices and compliance",
        "Work with development teams to streamline deployment processes"
      ],
      requirements: [
        "4+ years of experience in DevOps and infrastructure management",
        "Strong knowledge of AWS services and cloud architecture",
        "Proficiency with Docker, Kubernetes, and containerization",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Understanding of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
        "Scripting skills (Python, Bash, PowerShell)"
      ],
      salary: "₹12,00,000 - ₹20,00,000 per annum",
    },
    {
      role: "Digital Marketing Specialist",
      team: "Marketing",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "2+ years",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Strategy"],
      description: "Drive online marketing campaigns and help clients achieve branding goals.",
      responsibilities: [
        "Develop and execute digital marketing strategies across channels",
        "Manage Google Ads, Facebook Ads, and other PPC campaigns",
        "Optimize website SEO and drive organic traffic growth",
        "Create and manage social media content calendar",
        "Analyze marketing metrics and generate performance reports",
        "Collaborate with clients to understand their goals and deliver results"
      ],
      requirements: [
        "2+ years of experience in digital marketing",
        "Proficiency in Google Analytics, Google Ads, and Facebook Ads Manager",
        "Strong SEO knowledge and on-page optimization skills",
        "Content writing and copywriting abilities",
        "Experience with marketing automation tools",
        "Analytical mindset and data-driven approach"
      ],
      salary: "₹6,00,000 - ₹12,00,000 per annum",
    },
    {
      role: "Quality Assurance Engineer",
      team: "Engineering",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "2+ years",
      skills: ["Selenium", "Cypress", "API Testing", "Test Automation", "Agile"],
      description: "Ensure quality of software products through thorough testing strategies.",
      responsibilities: [
        "Develop and execute comprehensive test plans and test cases",
        "Perform manual and automated testing of web and mobile applications",
        "Test REST APIs and ensure data integrity",
        "Identify, document, and track bugs and issues",
        "Collaborate with developers to resolve quality issues",
        "Contribute to continuous improvement of testing processes"
      ],
      requirements: [
        "2+ years of QA testing experience",
        "Proficiency in test automation tools (Selenium, Cypress, Appium)",
        "Strong understanding of manual testing methodologies",
        "Experience with API testing tools (Postman, REST Assured)",
        "Knowledge of Agile/Scrum methodologies",
        "Attention to detail and strong analytical skills"
      ],
      salary: "₹7,00,000 - ₹13,00,000 per annum",
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-slate-900">Join Our Team</h1>
          <p className="mt-4 text-slate-600 text-xl">
            Be part of a team transforming businesses through innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {culture.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benefits & Perks</h2>
          <p className="text-slate-600 mb-8">We invest in our team's growth, health, and happiness.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg transition">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-5">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <article key={idx} className="border border-slate-200 rounded-2xl p-6 bg-slate-50 shadow-sm hover:shadow-lg transition">
                <div className="md:flex md:justify-between md:items-center gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{job.role}</h3>
                    <p className="text-slate-600 text-sm mt-2">{job.description}</p>
                    <div className="mt-2 text-slate-500 text-xs flex flex-wrap gap-2">
                      <span>{job.team}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    <button 
                      onClick={() => navigate("/contact")}
                      className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition">Apply Now</button>
                    <button 
                      onClick={() => setSelectedJob(job)}
                      className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:border-slate-500 hover:bg-slate-50 transition">More Info</button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, sidx) => (
                    <span key={sidx} className="text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Job Detail Modal */}
    {selectedJob && (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedJob(null)}
      >
        <div 
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 p-6 md:p-8 border-b border-slate-200 bg-white rounded-t-3xl">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{selectedJob.role}</h2>
              <p className="text-slate-600 mt-2">{selectedJob.team} • {selectedJob.location}</p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8 space-y-6">
            
            {/* Key Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-xs text-slate-600 font-semibold uppercase">Experience</p>
                <p className="text-lg font-bold text-slate-900 mt-1">{selectedJob.experience}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-xs text-slate-600 font-semibold uppercase">Type</p>
                <p className="text-lg font-bold text-slate-900 mt-1">{selectedJob.type}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-xs text-slate-600 font-semibold uppercase">Location</p>
                <p className="text-lg font-bold text-slate-900 mt-1">{selectedJob.location}</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                {selectedJob.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-cyan-500 font-bold mt-1 flex-shrink-0">✓</span>
                    <span className="text-slate-600">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Required Skills & Experience</h3>
              <ul className="space-y-3">
                {selectedJob.requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-cyan-500 font-bold mt-1 flex-shrink-0">✓</span>
                    <span className="text-slate-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-cyan-100 text-cyan-900 font-semibold rounded-full text-sm border border-cyan-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    <Footer />
  </>
  );
}
