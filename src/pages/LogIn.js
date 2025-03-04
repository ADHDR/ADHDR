import { useCallback, useEffect, useState, useRef } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
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
      
      const onButtonContainerClick6 = useCallback(() => {
        navigate("/");
      }, [navigate]);

    const onLogin = (e) => {
        e.preventDefault();
        setErrorMsg(''); // Clear error messages before attempting login.

        if (!email || !password) {
            setErrorMsg('Please fill in all fields!');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/'); // Redirect to home page on success.
            })
            .catch((error) => {
                console.error(error.code, error.message);
                setErrorMsg('Error! Invalid credentials. Please try again.');
            });
    };

    return (
        <main className="login-page">
        {/* Header Section */}
        <div className="header">
          {/* Container for ADHDR */}
          <div className="adhdr-container">
            <div
              className={`nav-item ${window.location.pathname === "/" ? "nav-item-active" : ""}`}
              onClick={onButtonContainerClick6}
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
              className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item-active" : ""}`}
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

            {/* Login Section */}
            <section className="login-container">
                <div className="login-box">
                    <h1 className="login-title">Login</h1>
                    {errorMsg && <p className="error-msg">{errorMsg}</p>}

                    <form onSubmit={onLogin} className="login-form">
                        <div className="input-group">
                            <label htmlFor="email-address" className="input-label">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                className="input-field"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password" className="input-label">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                                className="input-field"
                            />
                        </div>

                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>

                    <p className="signup-text">
                        No account yet?{' '}
                        <NavLink to="/signup" className="signup-link">
                            Sign up
                        </NavLink>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Login;