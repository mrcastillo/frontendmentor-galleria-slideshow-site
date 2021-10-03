import { Link } from "react-router-dom";
import galleriaData from "../json/data.json";
import _ from "lodash";

//A Function that returns our image boxes based on our images in the galleria
const returnGalleriaImageBox = (galleria) => {
    //Each number is the height of the gallery image box in flex column order
    const boxSizesArray = ["250", "400", "285", "250", "340", "280", "500", "250", "420", "260", "430", "260", "330", "525", "340"];
  
    //Store our HTML in an array
    const galleriaImageBoxElements = [];

    //Counter that we will use with boxSizesArray to increment
    var counter = 0;
  
    //Looop that generates proper HTML for our image boxes
    _.forEach(galleria, (image) => {
        //Convert image name to lowercase for our CSS class
        var imageNameConversion = image.name.toLowerCase();

        //Replace whitespace with - for our CSS background class.
        imageNameConversion =  imageNameConversion.replaceAll(" ", "-");

        //Push our HTML element to array now that we generated CSS classes for them
        galleriaImageBoxElements.push(
        <Link to={{pathname: "/slideshow", state:{currentGallery: imageNameConversion}}} className={`galleria-image-box box${boxSizesArray[counter]} ${imageNameConversion}`}>
            <div className={"galleria-image-text"}>
                <h1>{image.name}</h1>
                <h3>{image.artist.name}</h3>
            </div>
        </Link>
        );

        //Increment boxSizesArray to display new box with proper height
        counter++;
    });
    
    return galleriaImageBoxElements;
};

function Galleria() {
    return (
    <div className={"galleria-container"}>
        {returnGalleriaImageBox(galleriaData)}
    </div>
    );
  }
  
  export default Galleria;