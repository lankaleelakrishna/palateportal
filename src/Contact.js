// src/Contact.js
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import Footer from "./Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-slate-700" />,
      title: "Address",
      details: ["Palate Networks Pvt Ltd", "Hyderabad", "India"],
    },
    {
      icon: <FaPhone className="text-2xl text-slate-700" />,
      title: "Phone",
      details: ["+91 8142799339", ],
    },
    {
      icon: <FaEnvelope className="text-2xl text-slate-700" />,
      title: "Email",
      details: ["info@palatenetworks.com"],
    },
    {
      icon: <FaClock className="text-2xl text-slate-700" />,
      title: "Business Hours",
      details: ["Open 24/7"],
    },
  ];

  return (
    <>
      <div id="contact" className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-24 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                  placeholder="+91 "
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors resize-vertical"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-violet-100 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const isHours = info.title.toLowerCase().includes("business");
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-slate-100 rounded-xl">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold mb-2 ${isHours ? "text-black" : "text-slate-900"}`}>
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={`leading-relaxed ${isHours ? "text-black font-medium" : "text-slate-600"}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Why Choose Palate Networks?
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Expert team with 7+ years of experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Agile development methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Competitive pricing with quality guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}