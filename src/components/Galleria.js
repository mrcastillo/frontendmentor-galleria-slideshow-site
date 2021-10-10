import React from "react";
import { Link } from "react-router-dom";
import galleriaJSON from "../json/data.json";
import _ from "lodash";
//Each number is the height of the gallery image box in flex column order
const boxSizesArray = ["250", "400", "285", "250", "340", "280", "500", "250", "420", "260", "430", "260", "330", "525", "340"];

//Function That Returns Image Boxes for our Mobile View.
const ReturnGalleriaImageBox = () => {
    
    //HTML Array for storing our HTML elements
    const galleriaImageBoxElements = [];

    //LOOP that adds all image boxes to HTML array.
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
    //Return our HTML
    return galleriaImageBoxElements;
};

//FUNCTION That Will Return Our Image Boxes for Tablet
const ReturnGalleriaImageBoxTablet = () => {
    //HTML Arrays for storing our HTML based on ROW
    var imageRowOne = [];
    var imageRowTwo = [];

    //LOOP first 10 images of our gallery. We order them in first and then second row in this loop. Next loop is rendered second and first.
    for(var i = 0; i < 10; i++) { 
        const gallery = galleriaJSON[i].name.toLowerCase().replaceAll(" ", "-");
        switch(i % 2) {
            case 0:
                imageRowOne.push(
                    <Link key={i} to={{pathname: "/slideshow", state:{galleryIndex: i, isGalleryActive: false}}} className={`galleria-image-box box${boxSizesArray[i]} ${gallery}`}>
                        <div className={"galleria-image-text"}>
                            <h1>{galleriaJSON[i].name}</h1>
                            <h3>{galleriaJSON[i].artist.name}</h3>
                        </div>
                    </Link>
                )
                break;
            case 1:
                imageRowTwo.push(
                    <Link key={i} to={{pathname: "/slideshow", state:{galleryIndex: i, isGalleryActive: false}}} className={`galleria-image-box box${boxSizesArray[i]} ${gallery}`}>
                        <div className={"galleria-image-text"}>
                            <h1>{galleriaJSON[i].name}</h1>
                            <h3>{galleriaJSON[i].artist.name}</h3>
                        </div>
                    </Link>
                )
                break;
        }
    };
    //SECOND LOOP to render our HTML from Second to First, instead of First To Second.
    for(var i = 10; i < galleriaJSON.length; i++) { 
        const gallery = galleriaJSON[i].name.toLowerCase().replaceAll(" ", "-");

        switch(i % 2) {
            case 0:
                imageRowTwo.push(
                    <Link key={i} to={{pathname: "/slideshow", state:{galleryIndex: i, isGalleryActive: false}}} className={`galleria-image-box box${boxSizesArray[i]} ${gallery}`}>
                        <div className={"galleria-image-text"}>
                            <h1>{galleriaJSON[i].name}</h1>
                            <h3>{galleriaJSON[i].artist.name}</h3>
                        </div>
                    </Link>
                )
                break;
            case 1:
                imageRowOne.push(
                    <Link key={i} to={{pathname: "/slideshow", state:{galleryIndex: i, isGalleryActive: false}}} className={`galleria-image-box box${boxSizesArray[i]} ${gallery}`}>
                        <div className={"galleria-image-text"}>
                            <h1>{galleriaJSON[i].name}</h1>
                            <h3>{galleriaJSON[i].artist.name}</h3>
                        </div>
                    </Link>
                )
                break;
        }
    };

    return (
        <React.Fragment>
            <div className={"galleria-image-box-tablet-row"}>
                {imageRowOne}
            </div>
            <div className={"galleria-image-box-tablet-row"}>
                {imageRowTwo}
            </div>
        </React.Fragment>
    )
};

//FUNCTION That Will Return Our Image Boxes for Desktop
const ReturnGalleriaImageBoxDesktop = () => {
    
    const RowOne = [0, 4, 8, 11];
    const RowTwo = [1, 5, 9, 12];
    const RowThree = [2, 6, 13];
    const RowFour = [3, 7, 10, 14];
    var RowOneHTML = [];
    var RowTwoHTML = [];
    var RowThreeHTML = [];
    var RowFourHTML = [];

    _.forEach(RowOne, (index) => {
        const gallery = galleriaJSON[index].name.toLowerCase().replaceAll(" ", "-");
        RowOneHTML.push(
            <Link key={index} to={{pathname: "/slideshow", state:{galleryIndex: index, isGalleryActive: false}}} className={`galleria-image-box box${boxSizesArray[index]} ${gallery}`}>
                <div className={"galleria-image-text"}>
                    <h1>{galleriaJSON[index].name}</h1>
                    <h3>{galleriaJSON[index].artist.name}</h3>
                </div>
            </Link>
        )
    });
    _.forEach(RowTwo, (index) => {
        const gallery = galleriaJSON[index].name.toLowerCase().replaceAll(" ", "-");
        RowTwoHTML.push(
            <Link key={index} to={{pathname: "/slideshow", state:{galleryIndex: index, isGalleryActive: false}}} className={`galleria-image-box box${boxSizesArray[index]} ${gallery}`}>
                <div className={"galleria-image-text"}>
                    <h1>{galleriaJSON[index].name}</h1>
                    <h3>{galleriaJSON[index].artist.name}</h3>
                </div>
            </Link>
        )
    });
    _.forEach(RowThree, (index) => {
        const gallery = galleriaJSON[index].name.toLowerCase().replaceAll(" ", "-");
        RowThreeHTML.push(
            <Link key={index} to={{pathname: "/slideshow", state:{galleryIndex: index, isGalleryActive: false}}} className={`galleria-image-box box${boxSizesArray[index]} ${gallery}`}>
                <div className={"galleria-image-text"}>
                    <h1>{galleriaJSON[index].name}</h1>
                    <h3>{galleriaJSON[index].artist.name}</h3>
                </div>
            </Link>
        )
    });
    _.forEach(RowFour, (index) => {
        const gallery = galleriaJSON[index].name.toLowerCase().replaceAll(" ", "-");
        RowFourHTML.push(
            <Link key={index} to={{pathname: "/slideshow", state:{galleryIndex: index, isGalleryActive: false}}} className={`galleria-image-box box${boxSizesArray[index]} ${gallery}`}>
                <div className={"galleria-image-text"}>
                    <h1>{galleriaJSON[index].name}</h1>
                    <h3>{galleriaJSON[index].artist.name}</h3>
                </div>
            </Link>
        )
    });

    return (
        <React.Fragment>
            <div className={"galleria-image-box-desktop-row"}>
                {RowOneHTML}
            </div>

            <div className={"galleria-image-box-desktop-row"}>
                {RowTwoHTML}
            </div>

            <div className={"galleria-image-box-desktop-row"}>
                {RowThreeHTML}
            </div>

            <div className={"galleria-image-box-desktop-row"}>
                {RowFourHTML}
            </div>
        </React.Fragment>
    )
};

//Return Our HTML
function Galleria() {
    return (
    <div className={"galleria-container"}>
        <div className={"galleria-image-box-mobile"}>
              {ReturnGalleriaImageBox()}  
        </div>
        

        <div className={"galleria-image-box-tablet"}>
            {ReturnGalleriaImageBoxTablet()}
        </div>

        <div className={"galleria-image-box-desktop"}>
            {ReturnGalleriaImageBoxDesktop()}
        </div>
    </div>
    );
  }
  
  export default Galleria;