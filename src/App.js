import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import AboutMe from "./component/AboutMe/AboutMe";
import Services from "./component/Services/Services";
import Fees from "./component/Fees/Fees";
import Appointment from "./component/Appointment/Appointment";
import Blogs from "./component/Blogs/Blogs";
import LogIn from "./component/User/LogIn";
import SignUp from "./component/User/SignUp";
import NotFound from "./component/Notfound/NotFound";
import Navigation from "./component/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Question from "./component/Questions/Question";



function App() {
  return (
    <>
      < Navigation />
      < Toaster/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/fees" element={<Fees/>} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        } />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/question" element={
          <RequireAuth>
            <Question/>
          </RequireAuth>
        } />
        
        <Route path="*" element={<NotFound/>} />
      
        
      </Routes>

    </>
  );
}

export default App;
