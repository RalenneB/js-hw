import "./Header.scss";
import logo from "../img/logo.png";

function Header() {
  return (
    <header className="header_container">
      <div className="logo_container">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="header_list_container">
        <ul className="header_list">
          <li className="header_list-item">
            <a href="#">Services</a>
          </li>
          <li className="header_list-item">
            <a href="#">About</a>
          </li>
          <li className="header_list-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
