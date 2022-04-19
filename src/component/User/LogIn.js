import React from 'react';
import "./form.css"
import useFirebase from "../../CustomHook/usefirebase"
import {Link} from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';

const LogIn = () => {

  const { signInWithGoogle, handleLogIn } = useFirebase();
    return (
      <div className="main-width">
        <div className="login-form">
            <h1>Please LogIn</h1>
            <form form onSubmit = {handleLogIn}>
  <div className="mb-2">
    <input type="email" name='email' placeholder='Your Email' required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-2">
    <input type="password" name='password' placeholder="Password" required/>
  </div>

  <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <h5>New? <Link to="/signup"> SignUp</Link>
          </h5>
          <small>OR</small>
      <div className = 'google-btn' >
            <button onClick={signInWithGoogle}>Continue With Google</button>
      </div>
        </div>
        <Footer/>
        </div>
    );
};

export default LogIn;