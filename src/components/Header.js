import { useState } from "react";
import Open_menu from "../images/icon-menu.svg";
import Close_menu from "../images/icon-close-menu.svg";
import Search_icon from "../images/icon-search.svg";
import Search_icon_form from "../images/icon-close-menu-form.svg";
import Logo from "../images/logo-abstract.svg";

const Header = () => {
    const [toggleNavigation, setToggleNavigation] = useState(true);
    const openNavigation = () => setToggleNavigation(!toggleNavigation);

    const [toggleSearch, setToggleSearch] = useState(true);
    const openSearch = () => setToggleSearch(!toggleSearch);

    return (
        <header>
            <div className="header--logo--title--container">
                <a href="https://www.abstract.com/" title="Go to abstract.com"><img src={Logo} alt="abstract's logo" className="header--logo"/></a>
                <span>|</span>
                <h1 className="header--title"><a href="https://help.abstract.com/hc/en-us">Help Center</a></h1>
            </div>
            <div className="mobile--buttons--container">
                <button onClick={openSearch} aria-label={toggleSearch ? "Open search" : "Close search"} aria-haspopup="true" aria-expanded={!toggleSearch ? "true" : "false"} className="mobile--menu--search">
                    <img src={Search_icon} alt=""/>
                </button>
                <button onClick={openNavigation} aria-label={toggleNavigation ? "Open menu" : "Close menu"} aria-expanded={!toggleNavigation ? "true" : "false"} className="mobile--menu--navigation" aria-haspopup="true">
                    <img src={toggleNavigation ? Open_menu : Close_menu} alt=""/>
                </button>
            </div>
            <nav aria-label="Header" className={`nav--buttons ${toggleNavigation ? "" : "show"}`}>
                <a className="header--nav--button--request" href="https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support">Submit a Request</a>
                <a className="header--nav--button--sign-in" href="https://help.abstract.com/hc/en-us/signin?return_to=https%3A%2F%2Fhelp.abstract.com%2Fhc%2Fen-us&locale=en-us">Sign in</a>
            </nav>
            <form className={`header--search--form ${toggleSearch ? "" : "show"}`}>
                <input type="search" className="header--search--form--input" placeholder="Search" aria-label="Search"/>
                <button onClick={openSearch} type="button" className="header--search--form--close" aria-label="close search">
                    <img src={Search_icon_form} alt=""/>
                </button>
            </form>
        </header>
    )
}

export default Header;