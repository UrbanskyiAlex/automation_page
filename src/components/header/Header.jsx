import "./header.css";
import logo from "../../assets/logo-header.svg";
function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <img src={logo} alt="LOGO" width={124} />
        </div>
        <div className="header_title">Automation</div>
      </div>
    </header>
  );
}

export default Header;
