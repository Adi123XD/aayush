import './app.scss'
import Home from './components/Home';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Pagenotfound from './components/pagenotfound/Pagenotfound';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  return(
  <div>
    <Router>
    <Routes>
      <Route exact path ="/" element={<><Home/></>}/>
      <Route exact path ="/notfound" element={<Pagenotfound/>}/>
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
    </Router>
  </div>
  )

};

export default App;
