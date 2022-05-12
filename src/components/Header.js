import { useState } from "react";
import Open_menu from "../images/icon-menu.svg";
import Close_menu from "../images/icon-close-menu.svg";
import Search_icon from "../images/icon-search.svg";
import Logo from "../images/logo-abstract.svg";

const Header = () => {
    const [toggleNavigation, setToggleNavigation] = useState(true);
    const openNavigation = () => {
        setToggleNavigation(!toggleNavigation);
    }

    return (
        <header>
            <div className="header--logo--title--container">
                <img src={Logo} alt="abstract's logo" className="header--logo"/>
                <h1 className="header--title">| Help Center</h1>
            </div>
            <button onClick={openNavigation} aria-label="toggle navigation" className="mobile--menu--navigation">
                <img src={toggleNavigation ? Open_menu : Close_menu} alt=""/>
            </button>
            <button aria-label="search" className="mobile--menu--search">
                <img src={Search_icon} alt=""/>
            </button>
            <nav className="nav--buttons">
                <button class="header--nav--button--request">Submit a Request</button>
                <button class="header--nav--button-sign-in">Sign in</button>
            </nav>
        </header>
    )
}

export default Header;