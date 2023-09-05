import { BrowserRouter, Routes, Route } from 'react-router-dom';


// pages
import Home from './pages/home/home';
import About from './pages/about/About';
import Error404 from './pages/errorPages/Error404';
import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar/Navbar';
import ProfileEdit from './pages/profileEdit/ProfileEdit';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import WarrantyPolicy from './pages/warrantyPolicy/WarrantyPolicy';

//  components
// import Navbar from './components/Navbar/Navbar'

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/error404' element={<Error404 />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile-edit' element={<ProfileEdit />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/warranty-policy' element={<WarrantyPolicy />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
