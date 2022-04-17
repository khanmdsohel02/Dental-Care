import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import AboutMe from "./component/AboutMe/AboutMe";
import Services from "./component/Services/Services";
import Fees from "./component/Fees/Fees";
import Appointment from "./component/Appointment/Appointment";
import Blog from "./component/Blog/Blog";
import LogIn from "./component/User/LogIn";
import SignUp from "./component/User/SignUp";
import NotFound from "./component/Notfound/NotFound";


function App() {
  return (
    <>
       <Navbar/> 
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/fees" element={<Fees/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<NotFound/>} />
      
        
      </Routes>

    </>
  );
}

export default App;
