import React, { createContext, useContext, useState, useEffect } from "react";
import { GalleriaIndexContext } from "./GalleriaIndexContext";

export const SlideShowContext = createContext();

const SlideShowProvider = (props) => {

    const [isSlideShowActive, setActiveSlideShow] = useState(false);

    var { galleriaIndex, setGalleriaIndex } = useContext(GalleriaIndexContext);

    useEffect(() => {
        console.log(isSlideShowActive, "isSlideShowActive")
    }, [isSlideShowActive]);

    return( 
        <SlideShowContext.Provider value={{isSlideShowActive, setActiveSlideShow}}>
            { props.children }
        </SlideShowContext.Provider>
    )
}

export default SlideShowProvider;