// import './App.css'
import Navbar from "./Component/Navbar";
import Alert from "./Component/Alert";
import About from "./Component/About";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./Context/Notes/NoteState";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { useState } from "react";
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        message:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}  />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login  showAlert={showAlert}/>}/>
              <Route exact path="/signup" element={<Signup  showAlert={showAlert}/>}/>
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
