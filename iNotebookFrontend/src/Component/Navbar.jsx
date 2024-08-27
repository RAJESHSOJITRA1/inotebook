import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("./login");
  }
  const location = useLocation();         
  useEffect(() => {
    console.log(location);  //print the current pathname
  }, [location]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className={`navbar-brand ${location.pathname === "/" ? "active" : ""}`} to="/">iNotobook</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item active ">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link disabled" to="#">Disabled</Link>
            </li>
          </ul>
            </div>
          {!localStorage.getItem("token")  ?
          <form className="d-flex-end">
            <Link className="btn btn-primary mx-1" to="/login" role="button"> Login </Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button"> Sign up </Link>
          </form>
            :<button className="btnbtn-primary" onClick={handleLogout}>Logout </button>}
      </nav>

      <br />
    </>
  )
}
export default Navbar;