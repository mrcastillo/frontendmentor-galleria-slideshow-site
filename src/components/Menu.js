import { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { SlideShowContext } from "./context/SlideShowContext";
import { GalleriaIndexContext } from "./context/GalleriaIndexContext";

function Menu() {

    const { isSlideShowActive, setActiveSlideShow } = useContext(SlideShowContext);
    var { galleriaIndex, setGalleriaIndex } = useContext(GalleriaIndexContext);

    const activateSlideShow = ( ) => {
        setActiveSlideShow(true);
    };

    return (
        <div className={"menu-container"}>
            <div className={"menu-flex-container"}>
                <Link to={"/"} className={"menu-header"}>
                    <h1>galleria.</h1>
                </Link>
                <Link onClick={activateSlideShow} to={{
                    pathname: "/slideshow",
                    state: { galleryIndex: galleriaIndex }
                }} className={"menu-start-slide-wrapper"}>
                    <p>START SLIDE SHOW</p>
                </Link>
            </div>
        </div>
    );
}

export default Menu;