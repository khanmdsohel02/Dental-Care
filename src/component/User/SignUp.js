import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../CustomHook/usefirebase';
import Footer from "../../Share/Footer/Footer"

const SignUp = () => {
  const {
    signInWithGoogle,
    handleSignUp,
    handleEmail, 
    handlePassword,
    email,
    password,
    confirmPassword,
    handleConfirmPassword
  } = useFirebase();

    return (
      <div className="main-width">
        <div className="Signup-form">
            < h1> Please SignUp</h1>
            <form onSubmit={handleSignUp}>
  <div>
    <input type="text"name='name' placeholder='Full Name'/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div>
              <input
                type="email"
                name='email'
                placeholder='Your Email'
                onBlur={(event) => handleEmail(event.target.value)} />
              <div id="emailHelp" className="form-text">
         </div>
            </div>
            {email?.error && <p className='text-danger'>{email.error}</p> }
            
  <div>
              <input
                type="password"
                name='password'
                placeholder="Password"
                onBlur={(event) => handlePassword(event.target.value)} />
            </div>
            {password?.error && <p className='text-danger'>{password.error}</p> }
  <div>
              <input
                type="password"
                name='confirmPassword'
                placeholder=" 
                Confirm Password"
                onBlur = {(event) =>handleConfirmPassword(event.target.value)}/>
            </div>
             {confirmPassword?.error && <p className='text-danger'>{confirmPassword.error}</p> }

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