import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../CustomHook/usefirebase';
import Footer from "../../Share/Footer/Footer"

const SignUp = () => {
 const { signInWithGoogle } = useFirebase();

    return (
      <div className="main-width">
        <div className="Signup-form">
            < h1> Please SignUp</h1>
            <form>
  <div className="mb-2">
    <input type="text" placeholder='Full Name' required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-2">
    <input type="email"  placeholder='Your Email' required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-2">
    <input type="password" placeholder="Password" required/>
  </div>
  <div className="mb-2">
    <input type="password" placeholder=" Confirm Password" required/>
  </div>
  <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
            <h5>Already have an Account? <Link to="/login"> LogIn</Link>
          </h5>
            <small>OR</small>
        <div div className = 'google-btn' >
            <button  onClick={signInWithGoogle}>Continue With Google</button>
      </div>
        </div> 
        <Footer/>
       </div>
    );
};

export default SignUp;