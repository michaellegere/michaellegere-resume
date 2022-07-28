import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {

    return (
        <Router>
            <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
          </>
        </Router>
  );
}

export default App;
