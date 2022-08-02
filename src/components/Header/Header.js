import logo from "../../assets/Logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo da Coopers" />
        <nav>
        <button className="loggin">entrar</button>
        </nav>
    </header>
  );
}

export default Header;
