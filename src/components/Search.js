import { ReactComponent as Arrow } from "../images/icon-arrow.svg";

const Search = () => {
    return (
        <form className="search--form">
            <label htmlFor="search" className="search--form--label">How can we help?</label>
            <div className="input--arrow--container">
                <input type="search" placeholder="Search" id="search" className="search--form--input"/>
                <Arrow className="arrow"/>
            </div>
        </form>
    )
}

export default Search;