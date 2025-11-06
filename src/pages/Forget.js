import React, { useState } from "react";


function ForgotPassword() {
  const [contact, setContact] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  
  const isEmail = (input) => /\S+@\S+\.\S+/.test(input);
  const isPhone = (input) => /^[6-9]\d{10}$/.test(input); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMsg("");
    setErrorMsg("");

    if (!isEmail(contact) && !isPhone(contact)) {
      setErrorMsg("Please enter a valid email address or phone number.");
      return;
    }

    try {
   
      if (isEmail(contact)) {
        console.log("Sending OTP to email:", contact);
       
        setSuccessMsg(`OTP has been sent to your email: ${contact}`);
      } else if (isPhone(contact)) {
        console.log("Sending OTP to phone:", contact);
        
        setSuccessMsg(`OTP has been sent to your phone: ${contact}`);
      }

      
      setContact("");

      
      setTimeout(() => setSuccessMsg(""), 5000);
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className="forgot-container">
      <form className="forgot-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <p className="subtitle">
          Enter your registered email or phone number to receive an OTP.
        </p>

        <div className="form-group">
          <label>Email or Phone</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value.trim())}
            placeholder=" Enter your register email/mobile number"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send OTP
        </button>

        {successMsg && <p className="success-message">{successMsg}</p>}
        {errorMsg && <p className="error-message">{errorMsg}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
