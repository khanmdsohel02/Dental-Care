import React from 'react';

const SignUp = () => {


    return (
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
  <div className="">
  </div>
  <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
            <h5>Already have an Account? <a href="/login"> LogIn</a>
        </h5>
        <div div className = 'google-btn' >
            <button>SignUp With Google</button>
      </div>
      </div>
    );
};

export default SignUp;