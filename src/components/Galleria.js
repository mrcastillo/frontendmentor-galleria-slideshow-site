import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import galleriaJSON from "../json/data.json";

import { GalleriaIndexContext } from "./context/GalleriaIndexContext";

//A Function that returns our image boxes based on our images in the galleria
const ReturnGalleriaImageBox = () => {
    //Each number is the height of the gallery image box in flex column order
    const boxSizesArray = ["250", "400", "285", "250", "340", "280", "500", "250", "420", "260", "430", "260", "330", "525", "340"];
  
    //Store our HTML in an array
    const galleriaImageBoxElements = [];
    
    var { galleriaIndex, setGalleriaIndex } = useContext(GalleriaIndexContext);

    for(var i = 0; i < galleriaJSON.length; i++) {
        const gallery = galleriaJSON[i].name.toLowerCase().replaceAll(" ", "-");

        galleriaImageBoxElements.push(
            <Link key={i} to={{pathname: "/slideshow", state:{galleryIndex: i, isGalleryActive: false}}} className={`galleria-image-box box${boxSizesArray[i]} ${gallery}`}>
                <div className={"galleria-image-text"}>
                    <h1>{galleriaJSON[i].name}</h1>
                    <h3>{galleriaJSON[i].artist.name}</h3>
                </div>
            </Link>

        );
    }
    return galleriaImageBoxElements;
};

function Galleria() {
    return (
    <div className={"galleria-container"}>

        {ReturnGalleriaImageBox()}
 
    </div>
    );
  }
  
  export default Galleria;