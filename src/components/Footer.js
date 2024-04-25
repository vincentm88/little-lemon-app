import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <div className="container footer">
        <footer>
            <div className="footer-nav">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact</h3>
                <p>Little Lemon</p>
                <p>123 Main Street</p>
                <p>Phone: 123-456-7890</p>
            </div>
            <div className="footer-social">
                <h3>Social Media</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
        </footer>
        </div>
    );
}
export default Footer;