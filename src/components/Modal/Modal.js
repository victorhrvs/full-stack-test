import React, { useState } from "react";
import "./Modal.css";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase.config.js";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const [email, onChangeEmail] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);
  const [user, setUser] = React.useState(null);


  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  //Login
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log(email, pass);
      console.log(error.message);
    }
  };

  //Login
  const handleSubmitSingin = (event) => {
    // Prevent page reload
    event.preventDefault();

    login();
    toggleModal();
  };

  //Create Account
  const createAccount = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pass);

      console.log(user);
      setUser(user);
    } catch (error) {
      alert(error.message);
    }
  };	

  //Create Account
  const handleSubmitCreateAccount = (event) => {
    // Prevent page reload
    event.preventDefault();

    createAccount();
    toggleModal();
  };

  return (
    <>
      

      
      <button onClick={toggleModal} id="btn-modal">
        entrar
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="close-modal-position">
              <button id="closeModalBnt" onClick={toggleModal}>
                close
              </button>
            </div>

            <h2 className="loginTitle">Sign in</h2>
            <h3 className="loginSubtitle">to access your list</h3>
            <form className="login" >
              <label className="loginLabel">Email</label>
              <input
                type="text"
                placeholder="Username"
                className="loginInput"
                autoComplete="username"
                id="inputLogin"
                onChange={(e) => onChangeEmail(e.target.value)}
                value={email}
              />
              <label className="loginLabel">Password</label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                id="inputPassword"
                onChange={(e) => onChangePass(e.target.value)}
                value={pass}

              />
              <div className="loginButtonPosition">
              <button className="loginButton" onClick={handleSubmitCreateAccount}>
                Create Account
                </button>
                <button className="loginButton" onClick={handleSubmitSingin}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
