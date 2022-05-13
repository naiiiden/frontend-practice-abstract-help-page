const Search = () => {
    return (
        <form role="search" className="search--form">
            <label for="search" className="search--form--label">How can we help?</label>
            <input type="search" placeholder="Search" id="search" className="search--form--input"/>
        </form>
    )
}

export default Search;