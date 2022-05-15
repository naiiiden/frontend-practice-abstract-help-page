import Logo from "../images/logo-abstract-small.svg";

const Footer = () => {
    return (
        <footer>
            <nav className="footer--nav">
                <ul className="footer--nav--ul">
                    <li><h3 className="footer--nav--ul--heading">Abstract</h3></li>
                    <li><a href="">Start</a></li>
                    <li><a href="">Trial</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Download</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h3 className="footer--nav--ul--heading">Resources</h3></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Release Notes</a></li>
                    <li><a href="">Status</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h3 className="footer--nav--ul--heading">Community</h3></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Dribbble</a></li>
                    <li><a href="">Podcast</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h3 className="footer--nav--ul--heading">Company</h3></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Legal</a></li>
                    <li className="footer--nav--ul--contact-us"><h4 className="footer--nav--ul--subheading">Contact Us</h4></li>
                    <li><a href="">info@abstract.com</a></li>
                </ul>
            </nav>

            <div className="footer--copyright--container">
                <img src={Logo} alt="logo"/>
                <p>© Copyright 2022</p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;