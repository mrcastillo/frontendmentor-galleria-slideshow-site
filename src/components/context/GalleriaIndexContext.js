import React, { createContext, useState, useEffect } from "react";

export const GalleriaIndexContext = createContext();

const GalleriaIndexProvider = (props) => {

    const [galleriaIndex, setGalleriaIndex] = useState(0);

    useEffect(() => {
        console.log("GALLERIA INDEX CHANGED!", galleriaIndex)
    }, [galleriaIndex]);

    return( 
        <GalleriaIndexContext.Provider value={{galleriaIndex, setGalleriaIndex}}>
            { props.children }
        </GalleriaIndexContext.Provider>
    )
}

export default GalleriaIndexProvider;