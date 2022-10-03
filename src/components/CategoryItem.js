const CategoryItem = ({ src, h2Text, pText, href, aText }) => {
    return (
        <div className="category--item--container">
            <img src={src} alt="" className="category--item--img"/>
            <div className="category--item--subcontainer">
                <h2 className="category--item--heading" id="category--heading">{h2Text}</h2>
                <p className="category--item--description">{pText}</p>
                <a href={href} className="category--item--link" aria-labelledby="category--heading">{aText}</a>
            </div>
        </div>
    )
}

export default CategoryItem;