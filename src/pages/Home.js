import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Electrician from "./Electrician";
import Housekeeper from "./Housekeeper";
import Plumber from "./Plumber";
import Navbar from "./Navbar";
import Jobs from "./Job";
import Settings from "./Settings";
import Newuser from "./Newuser";
import Forget from "./Forget";
import BookingForm from "../BookingForm";

function Layout() {
  const location = useLocation();

 
  const hideNavbarPaths = ["/", "/new_user", "/forget"];

  
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Login />} />
        <Route path="/electrician" element={<Electrician />} />
        <Route path="/housekeeper" element={<Housekeeper />} />
        <Route path="/plumber" element={<Plumber />} />
        <Route path="/new_user" element={<Newuser />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/bookingform" element={<BookingForm />} />
      </Routes>
    </>
  );
}

export default function Home() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
