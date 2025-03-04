import { useCallback, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";


const Contact = () => {
 const navigate = useNavigate();
 const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Consolidated navigation handlers into a single function
 const handleNavigation = useCallback((path) => {
   navigate(path);
 }, [navigate]);


 const handleLogout = useCallback(() => {
   // Add your logout logic here
   setIsLoggedIn(false);
 }, []);


 // Typing animation
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
 }, [isTyping, fullText]);


 // Form state
 const [formData, setState] = useState({
   firstName: "",
   lastName: "",
   email: "",
   message: ""
 });


 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setState(prev => ({
     ...prev,
     [name]: value
   }));
 };


 const handleSubmit = (e) => {
   e.preventDefault();
  
   // Get the form data
   const name = formData.firstName + ' ' + formData.lastName;
   const message = formData.message;
  
   // Construct mailto link with encoded parameters
   const recipient = "adhdaiassist@asdrp.org";
   const subject = encodeURIComponent("Message from " + name);
   const body = encodeURIComponent(message);
   const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
  
   // Open default mail client
   window.location.href = mailtoLink;
  
   console.log("Form submitted:", formData);
 };


 return (
   <div className="contact-us-page fade-in">
     {/* Header Navigation */}
     <header className="header">
       <nav className="navigation">
         <div
           className={`nav-item ${location.pathname === "/" ? "nav-item-active" : ""}`}
           onClick={() => handleNavigation("/")}
         >
           ADHDR
         </div>
        
         <div
           className={`nav-item ${location.pathname === "/about-us" ? "nav-item-active" : ""}`}
           onClick={() => handleNavigation("/about-us")}
         >
           About Us
         </div>
        
         <div
           className="nav-item"
           onClick={() => handleNavigation("/your-results")}
         >
           Your Results
         </div>
        
         <div
           className="nav-item"
           onClick={() => handleNavigation("/adhd-resources")}
         >
           ADHD Resources
         </div>
        
         <div
           className={`nav-item ${location.pathname === "/contact" ? "nav-item-active" : ""}`}
           onClick={() => handleNavigation("/contact")}
         >
           Contact Us
         </div>
        
         {isLoggedIn ? (
           <div className="nav-item" onClick={handleLogout}>
             Log Out
           </div>
         ) : (
           <div
             className={`nav-item ${location.pathname === "/login" ? "nav-item-active" : ""}`}
             onClick={() => handleNavigation("/login")}
           >
             Login or Sign Up
           </div>
         )}
       </nav>
     </header>


     {/* Main Content */}
     <main className="contact-content">
       <div className="headline">
         <h1 className="title">We'd Love to Hear Your Feedback!</h1>
         <p className="email">Email: adhdaiassist@asdrp.org</p>
       </div>


       <form className="contact-form" onSubmit={handleSubmit}>
         <div className="form-group">
           <label htmlFor="firstName">First name</label>
           <input
             type="text"
             id="firstName"
             name="firstName"
             value={formData.firstName}
             onChange={handleInputChange}
             placeholder="Enter your first name"
             required
           />
         </div>


         <div className="form-group">
           <label htmlFor="lastName">Last name</label>
           <input
             type="text"
             id="lastName"
             name="lastName"
             value={formData.lastName}
             onChange={handleInputChange}
             placeholder="Enter your last name"
             required
           />
         </div>


         <div className="form-group">
           <label htmlFor="email">Email address</label>
           <input
             type="email"
             id="email"
             name="email"
             value={formData.email}
             onChange={handleInputChange}
             placeholder="Enter your email"
             required
           />
         </div>


         <div className="form-group">
           <label htmlFor="message">Your message</label>
           <textarea
             id="message"
             name="message"
             value={formData.message}
             onChange={handleInputChange}
             placeholder="Enter your question or message"
             required
           />
         </div>


         <button type="submit" className="submit-button">
           Submit
         </button>
       </form>
     </main>


     {/* Footer */}
     <footer ref={footerRef} className="footer">
       <div className="footer-content">
         <div className="typing-animation">
           {typedText}
         </div>
       </div>
     </footer>
   </div>
 );
};


export default Contact;