import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MagicCastle from "./pages/MagicCastle";
import LoginSignup from "./pages/LoginSignup";
import KitchenQuest from "./pages/KitchenQuest";
import ADHDResources from "./pages/ADHDResources";
import AllAssessments from "./pages/AllAssessments";
import ViewProfile from "./pages/ViewProfile";
import Contact from "./pages/Contact";
import BerryBlitz from "./pages/BerryBlitz";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/SignUp";
import Login from './pages/LogIn'
import Results from './pages/Results'

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/magic-castle":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/your-results":
          title = "";
          metaDescription = "";
          break;
      case "/kitchen-quest":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/all-assessments":
        title = "";
        metaDescription = "";
        break;
      case "/view-profile":
        title = "";
        metaDescription = "";
        break;
      case "/adhd-resources":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/berry-blitz":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/loginsignup" element={<LoginSignup />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/magic-castle" element={<MagicCastle />} />
      <Route path="/kitchen-quest" element={<KitchenQuest />} />
      <Route path="/all-assessments" element={<AllAssessments />} />
      <Route path="/view-profile" element={<ViewProfile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/adhd-resources" element={<ADHDResources />} />
      <Route path="/your-results" element={<Results />} />
      <Route path="/berry-blitz" element={<BerryBlitz />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
//Anhquan Github commit test
//Aoaoqw
