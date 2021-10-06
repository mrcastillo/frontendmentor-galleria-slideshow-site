import React, { createContext, useState, useEffect } from "react";


export const SlideShowContext = createContext(false);

const SlideShowProvider = (props) => {

    const [isSlideShowActive, setActiveSlideShow] = useState(false);

    useEffect(() => {
              
    }, []);

    return( 
        <SlideShowContext.Provider value={{isSlideShowActive, setActiveSlideShow}}>
            { props.children }
        </SlideShowContext.Provider>
    )
}

export default SlideShowProvider;