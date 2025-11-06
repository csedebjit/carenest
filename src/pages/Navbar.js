import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Navbar (){
  //    const navigate = useNavigate();
  //    const login = () => {
  //   navigate("/");
  // };

return(
    <div className="navbar">
          <div style={{display:'flex' , flexDirection:"row" , alignItems:'center'  , justifyContent:'space-between'  , width:"90%" , marginLeft:'auto'  , marginRight:'auto'}}>
          <h1 className="logo">
            CARE<span className="nest">NEST</span>
          </h1>
          <div className="menu">
            <Link to="/home">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/settings">Settings</Link>
          </div>
          <div className="sidebar">
            <img src="/image/twitter.jpg" alt="twitter" className="resize" />

            {/* <button onClick={() => login()} className="login" type="button">
              LogIn
            </button> */}
          </div>
          </div>
        </div>

);
}
export default Navbar ;