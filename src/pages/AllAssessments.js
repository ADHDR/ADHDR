import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useSpring, animated } from "@react-spring/web";
import "./AllAssessments.css";

const AllAssessments = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const navigateTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const newTab = (url) => {
    window.open(url);
  };

  const fadeProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { duration: 800 },
  });

  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const footerRef = useRef(null);
  const fullText = "ADHDR: integrating gamification and dynamic questionnaires to simplify the diagnosis process";

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

  useEffect(() => {
    if (!isTyping) return;

    let index = 0;
    setTypedText("");
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  return (
    <div className="contact-us-page">
      <div className="home">
        <div className="header">
          <div className="adhdr-container" onClick={() => navigateTo("/")}>ADHDR</div>
          <div className="about-container" onClick={() => navigateTo("/about-us")}>About Us</div>
          <div className="results-container" onClick={() => navigateTo("/your-results")}>Your Results</div>
          <div className="resources-container" onClick={() => navigateTo("/adhd-resources")}>ADHD Resources</div>
          <div className="contact-container" onClick={() => navigateTo("/contact")}>Contact Us</div>
          <div className="contact-container">
            {isLoggedIn ? (
              <div className="nav-item" onClick={() => signOut(auth)}>Log Out</div>
            ) : (
              <div className="nav-item" onClick={() => navigateTo("/login")}>Login or Sign Up</div>
            )}
          </div>
        </div>

        <animated.div style={fadeProps} className="content-wrapper">
          <div className="about-title">
            <h1>Take our Assessments!</h1>
            <p className="tagline">Click on our original, interactive, and dynamic assessments!</p>
          </div>

          <div className="content-sections">
            {[{
              title: "Berry Blitz",
              image: "/image-1@2x.png",
              link: "http://berryblitz.neurohealthalliance.org",
              description: "Test your reflexes and ability to process information quickly."
            }, {
              title: "Magic Castle",
              image: "/magic-castle@2x.png",
              link: "#",
              description: "Game Coming Soon!"
            }, {
              title: "Kitchen Quest",
              image: "/screenshot-20240825-213042-1@2x.png",
              link: "https://adhdr.itch.io/kitchen-quest",
              description: "Gather ingredients and prepare the perfect dish in this interactive game."
            }, {
              title: "Astro Drift",
              image: "/Astrodrift.png",
              link: "https://aqphammc.itch.io/astrodrift",
              description: "click on the correct color aliens. the color to click will change throughout the game as displayed by text. click on 3 aliens correctly for a question to pop up. then, the game round ends after the question. The game goes on until all questions are answered. if you hit a rock you die and restart the round"
            }].map((game, index) => (
              <div key={index} className="section-wrapper">
                <div className="section-card">
                  <div className="image-container">
                    <img
                      className="berry-blitz-button"
                      alt={game.title}
                      src={game.image}
                      onClick={() => newTab(game.link)}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="overlay">
                      <p className="overlay-text" onClick={() => newTab(game.link)}>{game.description}</p>
                    </div>
                  </div>
                </div>
                <h2 className="game-title">{game.title}</h2>
              </div>
            ))}
          </div>
        </animated.div>

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

export default AllAssessments;