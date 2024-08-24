// import './App.css'
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./Context/Notes/NoteState";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
      {/* <Navbar path="/" />
    <Home/>
    <About/>
      */}
    </>
  );
}

export default App;
