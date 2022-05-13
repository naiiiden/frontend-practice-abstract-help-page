import { ReactComponent as Arrow } from "../images/icon-arrow.svg";

const Search = () => {
    return (
        <form role="search" className="search--form">
            <label htmlFor="search" className="search--form--label">How can we help?</label>
            <input type="search" placeholder="Search" id="search" className="search--form--input"/>
            <Arrow className="arrow"/>
        </form>
    )
}

export default Search;