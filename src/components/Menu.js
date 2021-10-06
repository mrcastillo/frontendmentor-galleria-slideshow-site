import { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { SlideShowContext } from "./context/SlideShowContext";

function Menu() {

    const { isSlideShowActive, setActiveSlideShow } = useContext(SlideShowContext);

    
    const activateSlideShow = ( ) => {
        console.log(isSlideShowActive, "menu");
        
        if(isSlideShowActive) {
            setActiveSlideShow(false);
        } else {
            setActiveSlideShow(true);
        }
    };

    return (
        <div className={"menu-container"}>
            <div className={"menu-flex-container"}>
                <Link to={"/"} className={"menu-header"}>
                    <h1>galleria.</h1>
                </Link>
                <div onClick={activateSlideShow} className={"menu-start-slide-wrapper"}>
                    <p>START SLIDE SHOW</p>
                </div>
            </div>
        </div>
    );
}

export default Menu;