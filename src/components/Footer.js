import Logo from "../images/logo-abstract-small.svg";

const Footer = () => {
    return (
        <footer>
            <nav className="footer--nav">
                <div className="footer--nav--container">
                    <ul className="footer--nav--ul">
                        <li><h3 className="footer--nav--ul--heading">Abstract</h3></li>
                        <li><a href="https://app.abstract.com/start-branches-trial">Start Trial</a></li>
                        <li><a href="https://www.abstract.com/pricing">Pricing</a></li>
                        <li><a href="https://app.abstract.com/download">Download</a></li>
                    </ul>
                    <ul className="footer--nav--ul footer--nav--ul--resources">
                        <li><h3 className="footer--nav--ul--heading">Resources</h3></li>
                        <li><a href="https://www.abstract.com/blog">Blog</a></li>
                        <li><a href="https://www.abstract.com/help">Help Center</a></li>
                        <li><a href="https://www.abstract.com/release-notes">Release Notes</a></li>
                        <li><a href="https://status.abstract.com/">Status</a></li>
                    </ul>
                </div>
                <div className="footer--nav--container">
                    <ul className="footer--nav--ul">
                        <li><h3 className="footer--nav--ul--heading">Community</h3></li>
                        <li><a href="https://twitter.com/goabstract">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/company/17950473/">LinkedIn</a></li>
                        <li><a href="https://facebook.com/Abstract/">Facebook</a></li>
                        <li><a href="https://dribbble.com/abstract">Dribbble</a></li>
                        <li><a href="https://www.abstract.com/podcast">Podcast</a></li>
                    </ul>
                    <ul className="footer--nav--ul">
                        <li><h3 className="footer--nav--ul--heading">Company</h3></li>
                        <li><a href="https://www.abstract.com/about">About Us</a></li>
                        <li><a href="https://abstract.breezy.hr/">Careers</a></li>
                        <li><a href="https://www.abstract.com/legal">Legal</a></li>
                        <li className="footer--nav--ul--contact-us"><h4 className="footer--nav--ul--subheading">Contact Us</h4></li>
                        <li><a href="info@abstract.com">info@abstract.com</a></li>
                    </ul>
                </div>
            </nav>

            <div className="footer--copyright--container">
                <img src={Logo} alt="Abstract logo" className="footer--copyright--logo"/>
                <p>© Copyright 2022</p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;