import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router> {/* everything related to react query dom has to be here */}
      <Navbar />{/* navbar component has to be placed between the Router and the Routes compulsorily! */}
        <Routes>
          
          {/* <Route path="/createcomment" element={<CreateComment />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
