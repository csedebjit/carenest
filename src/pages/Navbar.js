import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar (){
   const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user"); 
    alert("You have been logged out!");
    navigate("/"); 
  };

return(
    <div className="h-[40px] w-full flex justify-between items-center bg-cyan-400 px-5 py-2">
          <div style={{display:'flex' , flexDirection:"row" , alignItems:'center'  , justifyContent:'space-between'  , width:"90%" , marginLeft:'auto'  , marginRight:'auto'}}>
          <h1 className="text-[20px]">
            CARE<span className="text-[24px] text-violet-600">NEST</span>
          </h1>
          <div className="flex justify-between items-center gap-[10px] text-white">
            <Link class="text-[20px] text- rounded-[7px] px-1 py-[2px] text-center text-black no-underline font-sans hover:bg-[blueviolet] hover:text-white cursor-pointer " to="/home">Home</Link>
            <Link class="text-[20px] text- rounded-[7px] px-1 py-[2px] text-center text-black no-underline font-sans hover:bg-[blueviolet] hover:text-white cursor-pointer " to="/jobs">Jobs</Link>
            <Link class="text-[20px] text- rounded-[7px] px-1 py-[2px] text-center text-black no-underline font-sans hover:bg-[blueviolet] hover:text-white cursor-pointer " to="/settings">Settings</Link>
          </div>
          <div className="flex items-center gap-[10px] mr-[7px]">
            <img src="/image/twitter.jpg" alt="twitter" className="w-[20px] h-[20px] rounded-[17px]" />

            <button onClick={handleLogout} className="bg-[#2a3ad0] text-white px-4 py-2 text-[0.95rem] rounded-[6px] cursor-pointer transition-colors duration-200 hover:bg-[#fb0202]">
            Logout
          </button>
          </div>
          </div>
        </div>

);
}
export default Navbar ;