import logo from './logo.svg';
import './App.css';
import { Upload } from './components/upload';
import { Login } from "./pages/login"
import { Navbar } from './components/navbar';
import ImageSlider from './components/Slider/ImageSlider';
import { SliderData } from './components/Slider/SliderData';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router> {/* everything related to react query dom has to be here */}
      <Navbar />{/* navbar component has to be placed between the Router and the Routes compulsorily! */}
        <Routes>
        <Route path="/" element={<ImageSlider slides={SliderData} />} />
        
        <Route path="/login" element={<Login />} />
        
          {/* <Route path="/createcomment" element={<CreateComment />} /> */}
          <Route path="/upload" element={<Upload/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
