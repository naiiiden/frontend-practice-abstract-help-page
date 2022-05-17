import { useEffect, useState } from "react";
import Help_button from "../images/icon-help.svg";

const Help = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1023);

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 1023)
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
            {!isDesktop ? (
                <button aria-label="Help" className="help--button" style={{background: "purple"}}>
                <img src={Help_button} alt="" className="help--icon"/>
            </button>
            ) : (
                <button aria-label="Help" className="help--button" style={{background: "purple"}}>
                    <img src={Help_button} alt="" className="help--icon"/>
                    <span>Help</span>
                </button>
            )}
        </div>
    )
}

export default Help;