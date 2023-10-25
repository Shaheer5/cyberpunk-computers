import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Preloader from './components/elements/Preloader';

// pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Error404 from './pages/errorPages/Error404';
import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar/Navbar';
import ProfileEdit from './pages/profileEdit/ProfileEdit';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import WarrantyPolicy from './pages/warrantyPolicy/WarrantyPolicy';
import FAQs from './pages/faqs/FAQs';

//  components
// import Navbar from './components/Navbar/Navbar'

// styles
import './App.css';

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    // new WOW.WOW({
    //     live: false
    //   }).init()
  }, []);


  return (
    <React.Fragment>
      {!loading ? (
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/error404' element={<Error404 />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/profile-edit' element={<ProfileEdit />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/warranty-policy' element={<WarrantyPolicy />} />
              <Route path='/faqs' element={<FAQs />} />
            </Routes>
            <ToastContainer />
          </Router>
        </div>) : (
        <Preloader />
      )
      }
    </React.Fragment>

  );
}

export default App;
