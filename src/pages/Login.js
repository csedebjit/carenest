import React, { useState } from "react";
import "./Login.css";
// import { Link } from "react-router-dom";
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
  <div className="login-container">
    <div className="logo">
      <div className="same-line">
        <img src="./image/logo.png" alt="logo" className="logo-img"/>
      <h1 className="brand">
            CARE<span className="nest">NEST</span>
      </h1>
      </div>
      <h2 className="welcome-text">Welcome Back</h2>
      
      <p className="sub-text">Login to continue</p>
    </div>
    <form className="login-form" onSubmit={handleLogin}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter Phone No."
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          <FiPhone size={30} color="white"  className="icon" />
        </div>
        
        
        <div className="input-box">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FiKey size={30} color="white" className="icon" />
        </div>
        {error && <p className="error-text">{error}</p>}
        

        
        <button type="submit" className="login-btn">
          Login
        </button>

        
        <button onClick={handleRegister} className="register-btn">
          Register
        </button>
        <p className="forgot">Forgot Password?</p>
        
      </form>
  </div>
);
};
export default Login;
