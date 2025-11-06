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
        
        <div className="heading">
          <h2>
            Book reliable professionals for your{" "}
            <span className="head">Home</span>
          </h2>
        </div>
        <div className="services">
          <button onClick={() => houseKeeper()} className="first">
            <img src="/image/house.png" alt="House Keeper" />
            <h3>House Keeper</h3>
          </button>
          <button onClick={() => electrician()} className="first">
            <img src="/image/electrician.png" alt="Electrician" />
            <h3>Electrician</h3>
          </button>
          <button onClick={() => plumber()} className="first">
            <img src="/image/plumber.png" alt="plumber" />
            <h3>Plumber</h3>
          </button>
          <button onClick={() => cook()} className="first">
            <img src="/image/cook.png" alt="cook" />
            <h3>cook</h3>
          </button>
        </div>
        <div className="contact">
          <div className="logo">
            <h4>
              CARE<span className="nest">NEST</span>
            </h4>
            <p>Your Window To Accelarate R&D </p>
          </div>
          <div className="email">
            <h3>Contact Support</h3>
            <a href="google.com">support@abc.com</a>
          </div>
          <div className="sales">
            <h3>Contact sales</h3>
            <a href="google.com">sales@abc.com</a>
          </div>
          <div className="social">
            <button onClick={() => alert("You clicked on Facebook")}>
              <img
                src="/image/facebook.jpg"
                alt="facebook"
                className="resized"
              />
            </button>
            <button onClick={() => alert("You clicked on LinkedIn")}>
              <img
                src="/image/linkedin.png"
                alt="linkedin"
                className="resized"
              />
            </button>
          </div>
        </div>
        <div className="company">
          <div className="about">
            <h3>About Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              elusmod tempor.
            </p>
          </div>
          <div className="quick">
            <h3>Quick Links</h3>
            <a href="google.com">Home</a>
            <a href="google.com">Jobs</a>
            <a href="google.com">Settings</a>
          </div>
          <div className="social-links">
            <h3>Social Links</h3>
            <a href="facebook.com">Facebook</a>
            <a href="instagram.com">Instagram</a>
            <a href="linkedin.com">linkedIn</a>
            <a href="x.com">Twitter</a>
          </div>
          <div className="support-links">
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
