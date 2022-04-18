import React from 'react';
import "./form.css"
import useFirebase from "../../CustomHook/usefirebase"

const LogIn = () => {

  const { signInWithGoogle } = useFirebase();
    return (
        <div className="login-form">
            <h1>Please LogIn</h1>
            <form>
  <div className="mb-2">
    <input type="email" placeholder='Your Email' required/>
  </div>
  <div className="mb-2">
    <input type="password" placeholder="Password" required/>
  </div>
  <div className="">
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <h5>New? <a href="/signup"> SignUp</a>
        </h5>
      <div className = 'google-btn' >
            <button onClick={signInWithGoogle}>SignUp With Google</button>
      </div>
      </div>
    );
};

export default LogIn;