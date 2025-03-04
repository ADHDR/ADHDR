import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged,signOut } from "firebase/auth"; // Import Firebase auth listener
import { auth } from "./firebase"; // Import your Firebase auth configuration
import { useSpring, animated } from "@react-spring/web";
import "./HomePage.css";


const HomePage = () => {
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
   navigate("/login");
 }, [navigate]);


 const handleLogout = () => {
     if (window.confirm("Are you sure you want to log out?")) {
       signOut(auth)
         .then(() => {
           console.log("User logged out");
           window.location.reload(); // Refresh the page
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


 // Typing Animation States and Logic
 const [isTyping, setIsTyping] = useState(false);
 const [typedText, setTypedText] = useState("");
 const footerRef = useRef(null);


 const fullText =
   "AADHDR: integrating gamification and dynamic questionnaires to simplify the diagnosis process";


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
   }, 100); // Adjust speed of typing here (100ms per character)


   return () => clearInterval(typingInterval);
 }, [isTyping]);


 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
       setIsLoggedIn(true);
       setMessage("You are now logged in."); // Set confirmation message
     } else {
       setIsLoggedIn(false);
       setMessage(""); // Clear message on logout
     }
   });
   return () => unsubscribe(); // Cleanup listener on unmount
 }, []);


 return (
   <div className="home-page">
     <div className="home">
       <animated.div style={fadeProps}>
         <div className="list">
           <div className="copy">
             <img className="icon" alt="" src="/00.svg" />
             <div className="hipaa-compliant">DSM 5</div>
             <div className="the-diagnostic-and">{`The Diagnostic and Statistical Manual of Mental Disorders 5th edition is a diagnosis tool used by mental health professionals. It includes a standard for diagnosing mental illnesses including ADHD. `}</div>
           </div>
           <div className="copy">
             <img className="icon" alt="" src="/001.svg" />
             <div className="hipaa-compliant">HIPAA Compliant</div>
             <div className="the-diagnostic-and">
               Your data will be secure. HIPAA protects your confidentiality and
               grants you the right to access your own health records. This
               includes through encryption.
             </div>
           </div>
         </div>
         <div className="list1">
           <div className="copy2">
             <img className="icon" alt="" src="/002.svg" />
             <div className="hipaa-compliant">ASRS v1.1</div>
             <div className="the-diagnostic-and">
               The Adult ADHD Self-Report Scale branches off of the DSM 4, and
               screens for the most prevalent symptoms of ADHD.
             </div>
           </div>
         </div>
         <div className="what-our-assessment">What our Assessment Includes</div>
         <div className="copy3">
           <div className="about-our-assessment">About our Assessment</div>
           <div className="this-assessment-will">{`This assessment will be integrated into a game. This game will be simple, fun, and engaging. When you reach certain milestones in the game the assessment will prompt you with a questionnaire. At the end of the assessment, your results will appear on the screen. You may save it and mail it to your healthcare professional. `}</div>
         </div>
         <div className="char-9">
           <img className="group-icon41" alt="" src="/group41.svg" />
         </div>
         <div className="copy4">
           <div className="about-our-assessment">{`Taking the Assessment `}</div>
           <div className="this-assessment-will">
             Our ADHD assessment is simple, confidential, and completely risk-free. It takes approximately 30 minutes to complete and is designed to provide a clear understanding of whether ADHD might be affecting your daily life. This is an important first step in gaining clarity and exploring potential next steps, all in a supportive and judgment-free environment.
           </div>
         </div>
         <div className="char-08">
           <img className="vector-icon72" alt="" src="/vector72.svg" />
         </div>
         <div className="header4">
           <b className="online-adhd-assessment">ONLINE ADHD ASSESSMENT</b>
           <div className="our-free-hipaa">{`Our free, HIPAA compliant, comprehensive assessment contains questionnaires used by mental health professionals to make your diagnosis as accurate as possible. The results of your assessment may also be mailed to your healthcare professional. `}</div>
           <div className="button13" onClick={onButtonContainerClick1}>
             <div className="view-assessments">View Assessments</div>
           </div>
         </div>
       </animated.div>
       {/* Header Section */}
       <div className="header">
         {/* Container for ADHDR */}
         <div className="adhdr-container">
           <div
             className={`nav-item ${window.location.pathname === "/" ? "nav-item-active" : ""}`}
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
             className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item-active" : ""}`}
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


export default HomePage;