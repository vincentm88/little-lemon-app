function Footer() {
    return (
        <div className="container footer">
        <footer>
            <div className="footer-nav">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
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