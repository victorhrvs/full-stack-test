import logo from "../../assets/Logo.png";
import "./Header.css";
import Modal from '../Modal/Modal.js'
import { useState } from "react";
import { onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../../firebase.config.js";



function Header() {
  const [user, setUser] = useState({});
  // change user state
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo da Coopers" />
        <div className="userStatus">
        {user && <div>{user.email}</div>}
        {user && <button onClick={logout} id="btn-modal">logout</button>}
        <Modal />
        </div>
    </header>
  );
}

export default Header;
