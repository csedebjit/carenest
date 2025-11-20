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
    <div className="form-container">
      <div className="logo">
      <div className="same-line">
        <img src="./image/logo.png" alt="logo" className="logo-img"/>
      <h1 className="brand">
            CARE<span className="nest">NEST</span>
      </h1>
      </div>
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>User Registration</h2>

        <div className="form-group">
          {/* <label>First Name</label> */}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="form-group">
          {/* <label>Last Name</label> */}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="form-group">
          {/* <label>Email or Phone</label> */}
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your email or mobile number"
            required
          />
        </div>

        <div className="form-group">
          {/* <label>Password</label> */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter a password"
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            <label>
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

        <button type="submit" className="submit-btn">
          Register Now
        </button>
      </form>
      </div>
    </div>
  );
}

export default New_User;
