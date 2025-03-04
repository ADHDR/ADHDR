import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(""); // Message to show confirmation

  const onButtonContainerClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonContainerClick1 = useCallback(() => {
    navigate("/all-assessments");
  }, [navigate]);

  const onButtonContainerClick2 = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onButtonContainerClick3 = useCallback(() => {
    navigate("/adhd-resources");
  }, [navigate]);

  const onButtonContainerClick4 = useCallback(() => {
    navigate("/your-results");
  }, [navigate]);

  const onButtonContainerClick5 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const newTab = (url) => {
    window.open(url);
  };

  // Animation for fading in content
  const fadeProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { duration: 800 },
  });

    // Typing Animation States and Logic
    const [isTyping, setIsTyping] = useState(false);
    const [typedText, setTypedText] = useState("");
    const footerRef = useRef(null);
  
    const fullText =
      "ADDHDR: integrating gamification and dynamic questionnaires to simplify the diagnosis process";
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsTyping(true);
          }
        },
        { threshold: 0.5 } // Detects when 50% of the element is visible
      );
      if (footerRef.current) {
        observer.observe(footerRef.current);
      }
      return () => observer.disconnect();
    }, []);
  
    useEffect(() => {
      if (!isTyping) return;
  
      let index = 0;
      setTypedText(""); // Reset text when animation starts
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust speed of typing here (100ms per characters)
  
      return () => clearInterval(typingInterval);
    }, [isTyping]);

  return (
    <div className="contact-us-page">
      <div className="home">
      {/* Header Section */}
      <div className="header">
          {/* Container for ADHDR */}
          <div className="adhdr-container">
            <div
              className={`nav-item ${window.location.pathname === "/" ? "nav-item-active" : ""}`}
              onClick={onButtonContainerClick5}
            >
              ADHDR
            </div>
          </div>

          {/* Container for About */}
          <div className="about-container">
            <div
              className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item-active" : ""}`}
              onClick={onButtonContainerClick2}
            >
              About Us
            </div>
          </div>

          {/* Container for Your Results */}
          <div className="results-container">
            <div
              className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item" : ""}`}
              onClick={onButtonContainerClick4}
            >
              Your Results
            </div>
          </div>

          {/* Container for ADHD Resources */}
          <div className="resources-container">
            <div
              className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item" : ""}`}
              onClick={onButtonContainerClick3}
            >
              ADHD Resources
            </div>
          </div>

          {/* Container for Contact */}
          <div className="contact-container">
            <div
              className={`nav-item ${window.location.pathname === "/contact" ? "nav-item-active" : ""}`}
              onClick={onButtonContainerClick}
            >
              Contact Us
            </div>
          </div>

          {/* Conditionally render Login/Sign-Up or Log Out button */}
          <div className="contact-container">
            {isLoggedIn ? (
              <div className="nav-item" onClick={handleLogout}>
                Log Out
              </div>
            ) : (
              <div
                className={`nav-item ${
                  window.location.pathname === "/login" ? "nav-item-active" : ""
                }`}
                onClick={onButtonContainerClick5}
              >
                Login or Sign Up
              </div>
            )}
          </div>
        </div>

        {/* Main Content Section */}
        <animated.div style={fadeProps} className="content-wrapper">
          <div className="about-title">
            <h1>ADHD_AI Assist</h1>
            <p className="tagline">
              Exploring innovative solutions for managing ADHD with technology!
            </p>
          </div>

          <div class="content-sections">
            <div class="section-card">
              <h2 class="section-title">What is ADHD?</h2>
              <p class="section-text">
                Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental
                disorder that affects focus, behavior, and decision-making.
              </p>
            </div>

            <div class="section-card">
              <h2 class="section-title">Our Mission</h2>
              <p class="section-text">
                Traditional diagnostic methods often struggle to fully understand the complex and changing nature of ADHD symptoms, especially in younger and neurodiverse individuals. We aim to enhance ADHD diagnosis through gamification and adaptive assessment.
              </p>
            </div>

            <div class="section-card">
              <h2 class="section-title">How It Works</h2>
              <p class="section-text">
                Play a 5-10 minute game and get your results.<br></br> It's that easy!
              </p>
            </div>
          </div>


          <div className="call-to-action">
            <div
              className="cta-button hover-effect"
              onClick={() => newTab("https://www.jneurolab.org/")}
            >
              Learn More About Our Lab
            </div>
            <div className="cta-button hover-effect" onClick={onButtonContainerClick}>
              Contact Us
            </div>
          </div>
        </animated.div>

        {/* Footer Section */}
        <div className="navigation-footer1" ref={footerRef}>
          <div className="adhdr3">
            <p className="adhdr4">
              {typedText}
              {typedText.length < fullText.length && <span className="ellipsis">...</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;