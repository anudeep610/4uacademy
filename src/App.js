import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import BlogOne from "./components/Blog1";
import Registration from './components/Registration';
import Java from './components/Java';
import Footer from "./components/Footer";
import View from "./components/view";
import CoursePage from "./components/coursePage";
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import BlogTwo from './components/Blog2';

function App() {
  return (
    <div className="App">
      <div id="top"></div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog1" element={<BlogOne/>}/>
        <Route path={"/blog2"} element={<BlogTwo/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/course/java" element={<Java/>}/>
        <Route path="/efkocefo/efvee/re" element={<View/>}/>
        <Route path="/coursePage/java" element={<CoursePage/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termsofuse" element={<TermsOfUse/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
