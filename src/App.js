import { BrowserRouter, Routes, Route } from 'react-router-dom';


// pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Error404 from './pages/errorPages/Error404';

//  components
// import Navbar from './components/Navbar/Navbar'

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/error404' element={<Error404 />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
