import headerImage from "../images/restauranfood.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <header>
                <div>
                    <h1 className="header-title" >Little Lemon</h1>
                    <h2 className="header-subtitle">Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link className="btnlink" to="/reservations"><button>Reserve a Table</button></Link>
                </div>
                <div className="header-image">
                    <img src={headerImage} alt="Little Lemon Logo" />
                </div>
            </header>
        </div>
    );
}

export default Header;