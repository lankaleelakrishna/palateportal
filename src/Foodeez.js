import React from "react";
import Footer from "./Footer";

export default function Foodeez() {
  return (
    <>
      {/* Foodeez Page with 3D animations and lengthy content */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden pt-32">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Hero Section with Logo Only */}
          <div className="text-center space-y-8 mb-12">
            <div className="flex justify-center mb-6 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/foodeez.png.png" 
                alt="Foodeez Logo" 
                className="h-32 md:h-40 object-contain drop-shadow-xl"
              />
            </div>
            <div>
              <p className="text-2xl md:text-3xl text-slate-800 font-semibold max-w-3xl mx-auto leading-relaxed">
                Your Digital Gateway to Culinary Excellence
              </p>
              <div className="h-1.5 w-20 bg-gradient-to-r from-gold-400 to-yellow-400 mx-auto rounded-full mt-6" />
            </div>
          </div>

          {/* Main Content - Lengthy Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Foodeez is a revolutionary, technology-driven food delivery platform developed by Palate Networks Pvt Ltd, designed to transform how people discover, order, and receive their favorite meals. Built with cutting-edge technology and a deep understanding of the food industry, Foodeez simplifies the entire dining experience from restaurant browsing to doorstep delivery.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Our platform combines intuitive user interfaces with intelligent backend systems, offering customers a seamless journey whether they're craving a quick lunch, planning a dinner, or ordering catering for special occasions. With an intuitive interface, real-time tracking, and efficient delivery management, Foodeez ensures a smooth and reliable experience for both customers and restaurant partners.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed">
                  We understand that in today's fast-paced world, customers demand more than just food delivery—they want convenience, transparency, and trust. Foodeez delivers exactly that, with a focus on quality assurance, timely delivery, and excellent customer service. Our ecosystem connects restaurants, delivery partners, and customers in a single, powerful platform that grows with your needs.
                </p>
              </div>


            </div>

            {/* Right - Features with 3D Effect */}
            <div className="space-y-4">
              {[
                {
                  title: "Seamless Food Ordering Experience",
                  desc: "Browse thousands of restaurants, customize your orders with precision, and track your meal from kitchen to doorstep. Our intuitive search and filtering system helps you find exactly what you're craving in seconds.",
                },
                {
                  title: "Real-Time Order Tracking",
                  desc: "Live GPS tracking shows you exactly where your delivery partner is, estimated arrival time, and order status updates. Never wonder about your food again—transparency is built into every step.",
                },
                {
                  title: "Efficient Delivery Management",
                  desc: "Optimized routing algorithms ensure your food arrives hot and fresh. Our network of delivery partners is trained to provide professional, courteous service every single time.",
                },
                {
                  title: "Restaurant & Vendor Integration",
                  desc: "Restaurants manage their menu, orders, and analytics from a powerful dashboard. Vendors gain insights into customer preferences and can optimize their offerings for better sales.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-50 backdrop-blur border border-slate-200 rounded-xl p-5 hover:border-blue-400/50 hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2 animate-in"
                  style={{ animationDelay: `${idx * 100}ms`, animationDuration: "600ms" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-xl transition-all duration-300" />
                  <div className="relative">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                      {idx + 1}. {feature.title}
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extended Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Technology Excellence</h3>
              <p className="text-slate-700 leading-relaxed">
                Built on scalable cloud infrastructure, Foodeez leverages AI and machine learning for personalized recommendations, predictive analytics, and intelligent delivery optimization. Our mobile-first approach ensures smooth performance across all devices.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Customer Security</h3>
              <p className="text-slate-700 leading-relaxed">
                Your security and privacy are paramount. Foodeez uses industry-standard encryption, secure payment gateways, and strict data protection protocols. Every transaction is protected with the latest security standards.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Sustainable Growth</h3>
              <p className="text-slate-700 leading-relaxed">
                We're committed to sustainable business practices, supporting local restaurants, and reducing our carbon footprint through optimized delivery routes and eco-friendly packaging initiatives.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur border border-blue-200 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent" />
            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                Experience Foodeez Today
              </h3>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Join thousands of satisfied customers and discover a new way to order food. Visit Foodeez now and get started with exclusive welcome offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="https://www.foodeez.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-slate-900 hover:from-black hover:bg-yellow-200 text-white font-bold rounded-xl transition-all duration-300 transform "
                >
                  Visit www.foodeez.in →
                </a>
                {/* <button className="px-8 py-4 border-2 border-blue-400 text-blue-600 hover:border-cyan-400 hover:text-cyan-600 font-bold rounded-xl transition-all duration-300">
                  Learn More
                </button> */}
              </div>
              <p className="text-sm text-slate-600 pt-4">
                Available on iOS, Android, and Web • Delivering Excellence Since 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
