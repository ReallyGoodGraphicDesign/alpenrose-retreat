import "./Header.css";
import logo from "./assets/logo.png";

function Header() {

return (
<header className="header">
        <div className="header-inner">
                <div className="header-tdl">
                        <h1 className="title">Alpenrose 1906</h1>
                        <h2 className="date-location">May 30 - June 2</h2>
                        <h2 className="date-location">Kremmling, Colorado</h2>
                </div>
                <div className="header-logo">
                        <button className="logo-button"
                        onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })}>
                                <img src={logo} alt="Logo" />
                        </button>
                </div>
                <div className="header-nav">
                        <a href="#introduction">Introduction</a>
                        <a href="#shadow-creek-ranch">Shadow Creek Ranch</a>
                        <a href="#your-journey">Your Journey</a>
                        <a href="#investment">Investment</a>
                        <a href="#accommodations">Accommodations</a>
                        <a href="#logistics">Logistics</a>
                </div>
        </div>
    
</header>);};
export default Header;