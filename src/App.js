import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Community from './components/Community';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Community/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
