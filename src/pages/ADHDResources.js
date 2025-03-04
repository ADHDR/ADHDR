import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "./ADHDResources.css";

const ADHDResources = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const footerRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Navigation handlers
  const onButtonContainerClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonContainerClick2 = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onButtonContainerClick3 = useCallback(() => {
    navigate("/all-assessments");
  }, [navigate]);

  const onButtonContainerClick4 = useCallback(() => {
    navigate("/your-results");
  }, [navigate]);

  const onButtonContainerClick5 = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      signOut(auth)
        .then(() => {
          console.log("User logged out");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error logging out:", error);
        });
    }
  };

  // Animation for fading in content
  const fadeProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(100px)" },
    config: { duration: 800 },
  });

  
  // Typing animation effect
  const fullText = "ADDHDR: integrating gamification and dynamic questionnaires to simplify the diagnosis process";

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
    <div className="ADHD-Resources-page">
      <div className="home">
        {/* Header Section */}
        <div className="header">
          <div className="adhdr-container">
            <div className={`nav-item ${window.location.pathname === "/" ? "nav-item-active" : ""}`} onClick={onButtonContainerClick5}>
              ADHDR
            </div>
          </div>

          <div className="about-container">
            <div className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item-active" : ""}`} onClick={onButtonContainerClick2}>
              About Us
            </div>
          </div>

          <div className="results-container">
            <div className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item" : ""}`} onClick={onButtonContainerClick4}>
              Your Results
            </div>
          </div>

          <div className="resources-container">
            <div className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item-active" : ""}`} onClick={onButtonContainerClick3}>
              ADHD Resources
            </div>
          </div>

          <div className="contact-container">
            <div className={`nav-item ${window.location.pathname === "/contact" ? "nav-item-active" : ""}`} onClick={onButtonContainerClick}>
              Contact Us
            </div>
          </div>

          <div className="contact-container">
            {isLoggedIn ? (
              <div className="nav-item" onClick={handleLogout}>
                Log Out
              </div>
            ) : (
              <div className={`nav-item ${window.location.pathname === "/login" ? "nav-item-active" : ""}`} onClick={onButtonContainerClick5}>
                Login or Sign Up
              </div>
            )}
          </div>
        </div>

        {/* Main Content Section */}
        <animated.div style={fadeProps} className="content-wrapper">
          <div className="about-title mb-4">
            <h1>ADHD Resources</h1>
            <p className="tagline mb-2">
            Navigating ADHD with Clarity
            </p>
          </div>

          <article className="resources-content">
            <section>
              <h2>What is ADHD?</h2>
              <p>
                Attention-Deficit/Hyperactivity Disorder (ADHD) is a common, lifelong neurodevelopmental disorder typically diagnosed in childhood. Symptoms such as inattention and hyperactivity can significantly impact relationships and social life.
              </p>
              <p>
                ADHD is categorized into three types:
              </p>
              <ul>
                <li>Hyperactive/impulsive</li>
                <li>Inattentive</li>
                <li>Combined</li>
              </ul>
              <p>
                Research indicates that genetic factors may contribute to ADHD, and it is more frequently diagnosed in biological males. However, females with ADHD often have the inattentive type, which can lead to underdiagnosis.
              </p>
            </section>

            <section>
              <h2>Symptoms in Children</h2>
              <p>
                Symptoms in children tend to show before the age of 6 and will be present in more than one setting, such as at school and home. Children may display a combination of inattentiveness, hyperactivity, and impulsivity or just one of the three.
              </p>
              
              <h3>Signs of Inattentiveness:</h3>
              <ul>
                <li>Having a short attention span and being easily distracted</li>
                <li>Making careless mistakes – for example, in schoolwork</li>
                <li>Appearing forgetful or losing things</li>
                <li>Being unable to stick to tedious or time-consuming tasks</li>
                <li>Appearing to be unable to listen to or carry out instructions</li>
                <li>Constantly changing activity or task</li>
                <li>Having difficulty organizing tasks</li>
              </ul>

              <h3>Signs of Hyperactivity and Impulsiveness:</h3>
              <ul>
                <li>Being unable to sit still, especially in calm or quiet surroundings</li>
                <li>Constantly fidgeting</li>
                <li>Being unable to concentrate on tasks</li>
                <li>Excessive physical movement</li>
                <li>Excessive talking</li>
                <li>Being unable to wait their turn</li>
                <li>Acting without thinking</li>
                <li>Interrupting conversations</li>
                <li>Little or no sense of danger</li>
              </ul>
            </section>

            <section>
              <h2>Spectrum</h2>
              <p>
                According to Children and Adults with Attention Deficit/Hyperactivity Disorder (CHADD), the severity of ADHD can be classified into 3 types:
              </p>
              <ul>
                <li><strong>Mild:</strong> People do not have many other symptoms above the required number for diagnosis. ADHD symptoms only cause minor difficulties in social, school, or work settings.</li>
                <li><strong>Moderate:</strong> Symptoms or functional problems sit between mild and severe.</li>
                <li><strong>Severe:</strong> People have many additional symptoms beyond those necessary for an ADHD diagnosis. Several symptoms are severe or cause significant problems in social, school, or work settings.</li>
              </ul>
            </section>

            <section>
              <h2>How to Manage Life With ADHD</h2>
              
              <h3>1. Seek Professional Help</h3>
              <ul>
                <li><strong>Get Diagnosed:</strong> Consult with a healthcare provider for a proper diagnosis. They can recommend treatments, including medication and therapy.</li>
                <li><strong>Medication:</strong> Stimulants are commonly prescribed and can be very effective. Nonstimulant medications and sometimes antidepressants may also help.</li>
              </ul>

              <h3>2. Utilize Therapy and Support</h3>
              <ul>
                <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Can help develop skills to improve organization, manage time, and boost self-esteem.</li>
                <li><strong>Support Groups and Coaching:</strong> Join support groups or work with an ADHD coach for strategies and emotional support.</li>
              </ul>

              <h3>3. Implement Healthy Habits</h3>
              <ul>
                <li><strong>Regular Exercise:</strong> Physical activity can help manage hyperactivity and improve overall mood.</li>
                <li><strong>Healthy Diet:</strong> Eat balanced meals at regular intervals to maintain energy levels.</li>
                <li><strong>Adequate Sleep:</strong> Aim for 7-9 hours of sleep each night. Establish a bedtime routine.</li>
              </ul>

              <h3>4. Develop Organizational Strategies</h3>
              <ul>
                <li><strong>Time Management Tools:</strong> Use planners, calendars, and apps to track tasks and appointments.</li>
                <li><strong>Declutter Your Space:</strong> Keep your living and working areas organized.</li>
                <li><strong>Establish Routines:</strong> Create daily routines for structure and consistency.</li>
              </ul>

              <h3>5. Exercise and Yoga Benefits</h3>
              <ul>
                <li>Yoga improves attention and emotional control</li>
                <li>Yoga helps with impulsivity and overall ADHD symptoms</li>
                <li>Short-term aerobic exercises help with:
                  <ul>
                    <li>Attention</li>
                    <li>Hyperactivity</li>
                    <li>Impulsivity</li>
                    <li>Anxiety</li>
                    <li>Executive function</li>
                    <li>Social disorders</li>
                  </ul>
                </li>
              </ul>
            </section>
          </article>
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

export default ADHDResources;