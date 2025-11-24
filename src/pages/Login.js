import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiPhone, FiKey } from "react-icons/fi";

function Login() {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    navigate("/new_user");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No registered user found. Please register first.");
      return;
    }

    if (storedUser.contact === contact && storedUser.password === password) {
      alert(`Welcome  ${storedUser.firstName} !`);
      navigate("/home"); 
    } else {
      setError("Invalid email/phone or password.");
    }
  };

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <div className="login-container">
//         <h1>Welcome</h1>
//         <h3>Please Login First</h3>

//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Email or Phone"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="error-text">{error}</p>}

//           <button type="submit" className="login-btn">
//             Login
//           </button>
//         </form>

//         <div className="user">
//           <Link to="/new_user">New User ? / </Link>
//           <Link to="/forget">Forget Password ?</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
return (
  <div className="w-full min-h-screen flex flex-col justify-center items-center relative ">
    <div className="text-center mb-5 ">
      <div className="flex flex-row ">
        <img src="./image/logo.png" alt="logo" className="w-[70px] mb-2"/>
      <h1 className="text-[35px] text-[#6a1b9a] tracking-[2px] mb-3">
            CARE<span className="text-[40px]">NEST</span>
      </h1>
      </div>
      <h2 className="text-[28px] font-bold mb-[5px]">Welcome Back</h2>
      
      <p className="text-[#555]">Login to continue</p>
    </div>
    <form className="flex flex-col" onSubmit={handleLogin}>
        <div className="h-[66px] w-[414px] bg-[#e0b3ff] rounded-[12px] my-[10px] relative flex items-center pl-[15px]">
          <input class="w-full py-[12px] pr-[50px] pl-0 bg-transparent border-none outline-none text-[16px]"

            type="text"
            placeholder="Enter Phone No."
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          <FiPhone size={30} color="white"  className="absolute right-0 top-0 h-full w-[45px] bg-[#9b27b0] text-white flex justify-center items-center rounded-r-[12px]" />
        </div>
        
        
        <div className="h-[66px] w-[414px] bg-[#e0b3ff] rounded-[12px] my-[10px] relative flex items-center pl-[15px]">
          <input class="w-full py-[12px] pr-[50px] pl-0 bg-transparent border-none outline-none text-[16px]"

            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FiKey size={30} color="white" className="absolute right-0 top-0 h-full w-[45px] bg-[#9b27b0] text-white flex justify-center items-center rounded-r-[12px]" />
        </div>
        {error && <p className="error-text">{error}</p>}
        

        
        <button type="submit" className="bg-fuchsia-800 hover:bg-fuchsia-700 cursor-pointer px-4 py-3 rounded-md text-white shadow-xl my-2 font-semibold text-lg">
          Login
        </button>

        
        <button onClick={handleRegister} className="w-[425px] p-[12px] border-2 border-[#8e24aa] bg-white font-bold text-black rounded-[10px] text-[18px] cursor-pointer transition duration-300  hover:bg-[#f3e5f5]">
          Register
        </button>
        <Link to="/forget">Forget Password ?</Link>
        
      </form>
  </div>
);
};
export default Login;
