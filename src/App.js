import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
