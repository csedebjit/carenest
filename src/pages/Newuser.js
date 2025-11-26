import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function New_User() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    gender: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

  
    if (formData.firstName.trim().length < 3) {
      setErrorMsg("First name must be at least 3 characters long.");
      return;
    }
    if (formData.lastName.trim().length < 2) {
      setErrorMsg("Last name must be at least 2 characters long.");
      return;
    }
    if (formData.password.trim().length < 8) {
      setErrorMsg("Password must be at least 8 characters long.");
      return;
    }

   
    localStorage.setItem("user", JSON.stringify(formData));

    alert(`Welcome ${formData.firstName}! Registration successful.`);

    navigate("/");
    setFormData({
      firstName: "",
      lastName: "",
      contact: "",
      gender: "",
      password: "",
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center relative font-sans">
      <div className="text-[20px]">
      <div className="same-line">
        <img src="./image/logo.png" alt="logo" className="logo-img"/>
      <h1 className="brand">
            CARE<span className="nest">NEST</span>
      </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 class="text-center text-[#333] mb-[25px]">User Registration</h2>

        <div className="h-[66px] w-[414px] bg-[#e0b3ff] rounded-[12px] my-[10px] relative flex items-center pl-[15px]">
          {/* <label>First Name</label> */}
          <input  class="w-full bg-transparent border-none outline-none text-[16px] py-[12px] pr-[50px] pl-0 focus:border-blue-500 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="h-[66px] w-[414px] bg-[#e0b3ff] rounded-[12px] my-[10px] relative flex items-center pl-[15px]">
          {/* <label>Last Name</label> */}
          <input class="w-full bg-transparent border-none outline-none text-[16px] py-[12px] pr-[50px] pl-0 focus:border-blue-500 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="h-[66px] w-[414px] bg-[#e0b3ff] rounded-[12px] my-[10px] relative flex items-center pl-[15px]">
          {/* <label>Email or Phone</label> */}
          <input class="w-full bg-transparent border-none outline-none text-[16px] py-[12px] pr-[50px] pl-0 focus:border-blue-500 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your email or mobile number"
            required
          />
        </div>

        <div className="h-[66px] w-[414px] bg-[#e0b3ff] rounded-[12px] my-[10px] relative flex items-center pl-[15px]">
          {/* <label>Password</label> */}
          <input class="w-full bg-transparent border-none outline-none text-[16px] py-[12px] pr-[50px] pl-0 focus:border-blue-500 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter a password"
            required
          />
        </div>

        <div className="h-[66px] w-[414px] bg-[#e0b3ff] rounded-[12px] my-[10px] relative flex items-center pl-[15px]">
          <label>Gender</label>
          <div className="flex justify-between py-[5px]">
            <label class="font-medium text-[#333]">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />{" "}
              Other
            </label>
          </div>
        </div>

        {errorMsg && <p className="error-message">{errorMsg}</p>}

        <button type="submit" className="w-[414px] p-[12px] bg-[#9c27b0] text-white font-bold rounded-[10px] text-[18px] cursor-pointer mb-[10px] transition duration-300 hover:bg-[#0056b3]">
          Register Now
        </button>
      </form>
      </div>
    </div>
  );
}

export default New_User;
