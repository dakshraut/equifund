import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      {/* Header Section (Hero Banner) */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 md:py-20 px-4 relative overflow-hidden flex-grow">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-75 animate-gradient-x"></div>

        {/* Logo and Site Name in Top-Left Corner */}
        <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
          <img
            src="https://via.placeholder.com/50x50?text=EF" // Replace with your logo URL
            alt="EquiFund Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold">EquiFund</span>
        </div>

        {/* Login and Sign Up Buttons in Top-Right Corner */}
        <div className="absolute top-4 right-4 flex gap-4 z-20">
          <button
            onClick={() => setShowLoginModal(true)}
            className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => setShowSignupModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-in-top">
            Empowering Startups, Unlocking Investment Opportunities
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 animate-slide-in-bottom">
            A secure and transparent crowdfunding platform that connects startups with investors, enabling fractional investing and AI-driven insights.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-slide-in-bottom">
            <button className="bg-white text-blue-900 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Explore Startups
            </button>
            <button className="bg-green-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300 transform hover:scale-105">
              Start Investing
            </button>
            <button className="bg-purple-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-purple-600 transition duration-300 transform hover:scale-105">
              Create a Campaign
            </button>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-slide-in-top">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-800 transition duration-300"
              >
                Login
              </button>
            </form>
            <button
              onClick={() => setShowLoginModal(false)}
              className="mt-4 text-sm text-blue-900 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-slide-in-top">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-800 transition duration-300"
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={() => setShowSignupModal(false)}
              className="mt-4 text-sm text-blue-900 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Why Choose EquiFund? (Key Features Section) */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1920x600?text=Parallax+Background')",
            transform: "translateZ(-1px) scale(2)", // Creates the parallax effect
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-50 z-10"></div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white animate-slide-in-top">
            Why Choose EquiFund?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "🤖",
                title: "AI-Based Investor Matching",
                description: "Smart recommendations for investors and startups.",
              },
              {
                icon: "💰",
                title: "Fractional Investing",
                description: "Invest as little as ₹500 in high-potential startups.",
              },
              {
                icon: "🔒",
                title: "Secure & Transparent",
                description: "Verified startups, KYC compliance, and real-time tracking.",
              },
              {
                icon: "📊",
                title: "Real-Time Insights",
                description: "Monitor portfolio growth and startup performance.",
              },
              {
                icon: "🎮",
                title: "Gamification & Social Proof",
                description: "Earn badges, referral rewards, and track top investors.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 animate-slide-in-left"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Startups (Startup Showcase) */}
      <section className="bg-gray-300 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 animate-slide-in-top">
            Featured Startups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Tech Innovators",
                industry: "Tech",
                goal: "₹50L",
                raised: "60%",
                image: "https://via.placeholder.com/400x200?text=Tech+Innovators",
              },
              {
                name: "Health Pioneers",
                industry: "Health",
                goal: "₹30L",
                raised: "45%",
                image: "https://via.placeholder.com/400x200?text=Health+Pioneers",
              },
              {
                name: "E-commerce Giants",
                industry: "E-commerce",
                goal: "₹20L",
                raised: "80%",
                image: "https://via.placeholder.com/400x200?text=E-commerce+Giants",
              },
            ].map((startup, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 animate-slide-in-right"
              >
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{startup.name}</h3>
                <p className="text-gray-600">
                  {startup.industry} | {startup.goal} | {startup.raised} Raised
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12 animate-slide-in-bottom">
            <button className="bg-blue-900 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-blue-800 transition duration-300 transform hover:scale-105">
              View All Startups
            </button>
          </div>
        </div>
      </section>

      {/* How It Works (Step-by-Step Guide) */}
      <section className="container mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 animate-slide-in-top">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="animate-slide-in-left">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <span className="text-3xl">👤</span> For Investors
              </h3>
              <ol className="list-decimal list-inside space-y-3 md:space-y-4 text-base md:text-lg">
                <li>Sign up & complete KYC</li>
                <li>Browse verified startup campaigns</li>
                <li>Invest and track your portfolio</li>
              </ol>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <span className="text-3xl">🚀</span> For Startups
              </h3>
              <ol className="list-decimal list-inside space-y-3 md:space-y-4 text-base md:text-lg">
                <li>Create a campaign & submit business details</li>
                <li>Get approved & start receiving funds</li>
                <li>Distribute equity & keep investors updated</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials */}
      <section className="bg-blue-900 text-white py-12 md:py-16 mt-12">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-slide-in-top">
            Success Stories & Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 animate-slide-in-left">
              <p className="text-gray-800 text-base md:text-lg mb-4">
                "EquiFund helped us raise ₹1 Cr in just 30 days! The platform is incredibly user-friendly, and the support team is amazing."
              </p>
              <p className="text-gray-600 font-semibold">– Startup Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 animate-slide-in-right">
              <p className="text-gray-800 text-base md:text-lg mb-4">
                "I started investing with ₹500 and built a diverse portfolio! EquiFund made it so easy to get started."
              </p>
              <p className="text-gray-600 font-semibold">– Investor</p>
            </div>
          </div>
          <button className="bg-white text-blue-900 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 mt-8 animate-slide-in-bottom">
            Read More Success Stories
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-6 animate-slide-in-top">
            Get in Touch
          </h3>
          <p className="mb-4 animate-slide-in-bottom">📍 Location: JD College of Engineering, Nagpur</p>
          <p className="mb-4 animate-slide-in-bottom">📧 Email: support@equifund.com</p>
          <p className="mb-6 animate-slide-in-bottom">📲 Contact: +91 XXXXXXXXXX</p>
          <div className="flex justify-center gap-4 md:gap-6 animate-slide-in-bottom">
            <a href="#" className="hover:text-blue-400 transition duration-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
