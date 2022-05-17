import Help_button from "../images/icon-help.svg";

const Help = () => {
    return (
        <button aria-label="Help" className="help--button" style={{background: "purple"}}>
            <img src={Help_button} alt="" className="help--icon"/>
            <span>Help</span>
        </button>
    )
}

export default Help;