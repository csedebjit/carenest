import React from "react";
import "./App.css";
import "./Login";
import "./Electrician";
import "./Housekeeper";
import "./Plumber";
import { useNavigate } from "react-router-dom";

function  App() {
  const navigate = useNavigate();
  const houseKeeper = () => {
    navigate("/housekeeper");
  };
  const electrician = () => {
    navigate("/electrician");
  };
  const plumber = () => {
    navigate("/plumber");
  };
  const cook = () => {
    alert("You clicked on Cook");
  };

  return (
    <>
      <div className="main">
        
        <div className="text-center text-black">
          <h2>
            Book reliable professionals for your{" "}
            <span className="text-violet-600">Home</span>
          </h2>
        </div>
        <div className="p-10 flex flex-row items-center justify-center gap-5 bg-white">
          <button onClick={() => houseKeeper()} className="bg-white border-2 border-black rounded-[10px] w-[200px] p-[14px] text-center">
            <img class="w-full h-[150px] object-contain" src="/image/house.png" alt="House Keeper" />
            <h3 class="mt-[10px] font-bold text-black">House Keeper</h3>
          </button>
          <button onClick={() => electrician()} className="bg-white border-2 border-black rounded-[10px] w-[200px] p-[14px] text-center">
            <img class="w-full h-[150px] object-contain" src="/image/electrician.png" alt="Electrician" />
            <h3 class="mt-[10px] font-bold text-black">Electrician</h3>
          </button>
          <button onClick={() => plumber()} className="bg-white border-2 border-black rounded-[10px] w-[200px] p-[14px] text-center">
            <img class="w-full h-[150px] object-contain" src="/image/plumber.png" alt="plumber" />
            <h3 class="mt-[10px] font-bold text-black">Plumber</h3>
          </button>
          <button onClick={() => cook()} className="bg-white border-2 border-black rounded-[10px] w-[200px] p-[14px] text-center">
            <img class="w-full h-[150px] object-contain" src="/image/cook.png" alt="cook" />
            <h3 class="mt-[10px] font-bold text-black">cook</h3>
          </button>
        </div>
        <div className="bg-white flex justify-center text-center mb-5">
          <button class="text-[20px] font-bold border border-black rounded-[7px] text-white bg-[rgb(44,32,215)] px-5 py-2 cursor-pointer" onClick={() => navigate("/bookingform")}>Book Now</button>
        </div>
        <div className="flex justify-around bg-[#c8c2c2] w-full h-[140px] p-5 border-b-2 border-black">
          <div className="text-[20px]">
            <h4>
              CARE<span className="text-[24px] text-[blueviolet]">NEST</span>
            </h4>
            <p className="text-[17px]">Your Window To Accelarate R&D </p>
          </div>
          <div className="email">
            <h3>Contact Support</h3>
            <a href="google.com">support@abc.com</a>
          </div>
          <div className="sales">
            <h3>Contact sales</h3>
            <a href="google.com">sales@abc.com</a>
          </div>
          <div className="mt-[34px]">
            <button onClick={() => alert("You clicked on Facebook")}>
              <img class="ml-[10px] rounded-[10px]"
                src="/image/facebook.jpg"
                alt="facebook"
                className="w-[40px] h-[40px] rounded-[17px]"
              />
            </button>
            <button onClick={() => alert("You clicked on LinkedIn")}>
              <img class="ml-[10px] rounded-[10px]"
                src="/image/linkedin.png"
                alt="linkedin"
                className="w-[40px] h-[40px] rounded-[17px]"
              />
            </button>
          </div>
        </div>
        <div className="w-full h-[170px] flex justify-around bg-cyan-400">
          <div className="flex flex-col">
            <h3>About Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              elusmod tempor.
            </p>
          </div>
          <div className="flex flex-col">
            <h3>Quick Links</h3>
            <a href="google.com">Home</a>
            <a href="google.com">Jobs</a>
            <a href="google.com">Settings</a>
          </div>
          <div className="mt-0 flex flex-col">
            <h3>Social Links</h3>
            <a href="facebook.com">Facebook</a>
            <a href="instagram.com">Instagram</a>
            <a href="linkedin.com">linkedIn</a>
            <a href="x.com">Twitter</a>
          </div>
          <div className="flex flex-col">
            <h3>Support Links</h3>
            <a href="google.com">Privacy Policy</a>
            <a href="google.com">Legal Information</a>
            <a href="google.com">Cookie Policy</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
