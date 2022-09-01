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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog1" element={<BlogOne/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/course/java" element={<Java/>}/>
        <Route path="/efkocefo/efvee/re" element={<View/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
