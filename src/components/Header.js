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
                <img src={Logo} alt="abstract's logo" className="header--logo"/>
                <span>|</span>
                <h1 className="header--title"> Help Center</h1>
            </div>
            <div className="mobile--buttons--container">
                <button onClick={openSearch} aria-label="search" className="mobile--menu--search">
                    <img src={Search_icon} alt=""/>
                </button>
                <button onClick={openNavigation} aria-label="toggle navigation" className="mobile--menu--navigation">
                    <img src={toggleNavigation ? Open_menu : Close_menu} alt=""/>
                </button>
            </div>
            <nav className={`nav--buttons ${toggleNavigation ? "" : "show"}`}>
                <button className="header--nav--button--request">Submit a Request</button>
                <button className="header--nav--button--sign-in">Sign in</button>
            </nav>
            <form role="search" className={`header--search--form ${toggleSearch ? "" : "show"}`}>
                <input type="search" className="header--search--form--input" placeholder="Search"/>
                <button onClick={openSearch} type="button" className="header--search--form--close" aria-label="close search">
                    <img src={Search_icon_form} alt=""/>
                </button>
            </form>
        </header>
    )
}

export default Header;