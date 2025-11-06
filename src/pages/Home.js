import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Electrician from "./Electrician";
import Housekeeper from "./Housekeeper";
import Plumber from "./Plumber";
import Navbar from './Navbar';
import Jobs from "./Job";
import Settings from "./Settings";
import Newuser from "./Newuser";
import Forget from "./Forget";

function Home() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<App />} />
                <Route path='/jobs' element={<Jobs/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path="/" element={<Login />} />
                <Route path="/electrician" element={<Electrician />} />
                <Route path="/housekeeper" element={<Housekeeper />} />
                <Route path="/plumber" element={<Plumber />} />
                <Route path="/new_user" element={<Newuser />}/>
                <Route path="/forget" element={<Forget />} />
            </Routes>
        </BrowserRouter>
       
    );
}

export default Home;
