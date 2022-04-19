import { useEffect, useState } from "react"
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebasecConfig";
import { useNavigate } from "react-router-dom";


const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
      const navigate = useNavigate();
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
              navigate("/")
            })
    }
    const handleLogIn = (event) => {
        event.preventDefault();
          const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
  });
 }

    
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{})}

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])
    
    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const user = userCredential.user;
    //   console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;

    //   console.log(errorMessage);
  });
        
    };

return {
    user,
    signInWithGoogle,
    handleSignOut,
    handleSignUp,
    handleLogIn
}

}
 
export default useFirebase;