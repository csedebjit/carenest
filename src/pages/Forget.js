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
    <div className="flex justify-center items-center min-h-screen bg-[#f0f2f5] font-sans">
      <form className="bg-white px-[40px] py-[30px] rounded-[12px] 
            shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            w-full max-w-[400px] text-center" onSubmit={handleSubmit}>
      <div className="text-[20px]">
      <div className="same-line">
        <img src="./image/logo.png" alt="logo" className="logo-img"/>
      <h1 className="brand">
            CARE<span className="nest">NEST</span>
      </h1>
      </div>
      
        <h2 class="text-[#333] mb-[10px]">Forgot Password</h2>
        <p className="text-[#666] text-[14px] mb-[25px]">
          Enter your registered email or phone number to receive an OTP.
        </p>

        <div className="h-[66px] w-[414px] bg-[#e0b3ff] rounded-[12px] my-[10px] 
            relative flex items-center pl-[15px]">
          {/* <label>Email or Phone</label> */}
          <input class="w-full bg-transparent border-none outline-none text-[16px]
         py-[12px] pr-[50px] pl-0
         focus:border-blue-500 
         focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value.trim())}
            placeholder=" Enter your register email/mobile number"
            required
          />
        </div>

        <button type="submit" className="w-[414px] p-[12px] bg-[#9c27b0] text-white font-bold
         rounded-[10px] text-[18px] cursor-pointer mb-[10px]
         transition duration-300 hover:bg-[#0056b3]">
          Send OTP
        </button>

        {successMsg && <p className="mt-[15px] text-green-600 font-medium">{successMsg}</p>}
        {errorMsg && <p className="text-red-600 font-medium mb-[15px] text-center">{errorMsg}</p>}
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
