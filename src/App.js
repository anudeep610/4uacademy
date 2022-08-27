import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import BlogPage from './components/BlogPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog/:index" element={<BlogPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
