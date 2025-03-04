import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "./Results.css";

const Results = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const footerRef = useRef(null);
  
  // Sample data for the dashboard
  const [stats, setStats] = useState({
    gamesPlayed: 3,
    averageReactionTime: 234,
    fruitsCollected: 15,
    answersToQuestions: 8,
    gamesDuration: [120, 180, 150] // in seconds
  });
  
  const fullText = "ADDHDR: integrating gamification and dynamic questionnaires to simplify the diagnosis process";

  // Consolidated navigation handlers
  const navigationHandlers = {
    contact: useCallback(() => navigate("/contact"), [navigate]),
    allAssessments: useCallback(() => navigate("/all-assessments"), [navigate]),
    aboutUs: useCallback(() => navigate("/about-us"), [navigate]),
    adhdResources: useCallback(() => navigate("/adhd-resources"), [navigate]),
    yourResults: useCallback(() => navigate("/your-results"), [navigate]),
    home: useCallback(() => navigate("/"), [navigate])
  };

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    // Add your logout logic here
  }, []);

  const openInNewTab = useCallback((url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // Animation for fading in content
  const fadeProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { duration: 800 },
  });

  // Typing animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTyping(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return;

    let index = 0;
    setTypedText("");
    
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isTyping, fullText]);

  // Navigation item component
  const NavItem = ({ onClick, path, label }) => (
    <div
      className={`nav-item ${window.location.pathname === path ? "nav-item-active" : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );

  // Content section component
  const SectionCard = ({ title, children }) => (
    <div className="section-card">
      <h2 className="section-title">{title}</h2>
      <p className="section-text">{children}</p>
    </div>
  );

  return (
    <div className="contact-us-page">
      <div className="home">
        {/* Header Section */}
        <div className="header">
          <div className="adhdr-container">
            <NavItem onClick={navigationHandlers.home} path="/" label="ADHDR" />
          </div>
          <div className="about-container">
            <NavItem onClick={navigationHandlers.aboutUs} path="/about-us" label="About Us" />
          </div>
          <div className="results-container">
            <NavItem onClick={navigationHandlers.yourResults} path="/your-results" label="Your Results" />
          </div>
          <div className="resources-container">
            <NavItem onClick={navigationHandlers.adhdResources} path="/adhd-resources" label="ADHD Resources" />
          </div>
          <div className="contact-container">
            <NavItem onClick={navigationHandlers.contact} path="/contact" label="Contact Us" />
          </div>
          <div className="contact-container">
            {isLoggedIn ? (
              <NavItem onClick={handleLogout} label="Log Out" />
            ) : (
              <NavItem onClick={navigationHandlers.home} path="/login" label="Login or Sign Up" />
            )}
          </div>
        </div>

        {/* Main Content Section - Results Dashboard */}
        <animated.div style={fadeProps} className="main-content">
          <div className="bg-gray-100 p-6 font-sans">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-700">Results and Breakdown</h2>
              <p className="text-sm text-gray-500">Score: 80/100</p>
              <p className="text-xs text-gray-500">Keep clicking the graphs to see all of them, including how your results compare to others.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Games Played */}
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-gray-200 rounded w-16 h-16 flex items-center justify-center mr-4">
                    <span className="text-4xl font-bold">{stats.gamesPlayed}</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Games Played</p>
                  </div>
                </div>
              </div>

              {/* Average Reaction Time */}
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center mb-3">
                  <div className="mr-4">
                    <span className="text-4xl font-bold">{stats.averageReactionTime} ms</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Average Reaction Time</p>
                  </div>
                </div>
              </div>

              {/* Fruits Collected */}
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-start mb-3">
                  <div className="mr-4 w-20 h-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="#e0e0e0" />
                      <path 
                        d="M50 10 A40 40 0 0 1 83.6 30" 
                        stroke="#3b82f6" 
                        strokeWidth="20" 
                        fill="none" 
                      />
                      <path 
                        d="M83.6 30 A40 40 0 0 1 50 90" 
                        stroke="#ef4444" 
                        strokeWidth="20" 
                        fill="none" 
                      />
                      <circle cx="50" cy="15" r="3" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Fruits Collected</p>
                    <p className="text-xs text-gray-400 mt-2">
                      Corresponds to the apples/bananas collected in the game. The pie chart shows how many you've collected.
                    </p>
                  </div>
                </div>
              </div>

              {/* Length of Games Played */}
              <div className="bg-white p-4 rounded shadow">
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-2">Length of Games Played</p>
                  <div className="h-10 w-full">
                    <div className="relative h-6 w-full">
                      <div className="absolute left-0 top-0 h-6 w-4 bg-gray-200"></div>
                      <div className="absolute left-4 top-0 h-6 w-12 bg-blue-300"></div>
                      <div className="absolute left-16 top-0 h-6 w-36 bg-blue-600"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Answers to Questions */}
              <div className="bg-white p-4 rounded shadow">
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-2">Answers to Questions</p>
                  <div className="h-10 w-full">
                    <div className="relative h-6 w-full">
                      <div className="absolute left-0 top-0 h-6 w-6 bg-gray-200"></div>
                      <div className="absolute left-6 top-0 h-6 w-10 bg-blue-300"></div>
                      <div className="absolute left-16 top-0 h-6 w-32 bg-blue-600"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    You answered mostly many of the questions correctly. This is something that you've not had issues with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </animated.div>

        {/* Footer Section */}
        <div className="footer" ref={footerRef}>
          <div className="typing-container">
            <span className="typing-text">{typedText}</span>
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;