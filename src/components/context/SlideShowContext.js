import React, { createContext, useState, useEffect } from "react";

export const SlideShowContext = createContext();

const SlideShowProvider = (props) => {

    const [isSlideShowActive, setActiveSlideShow] = useState(false);

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