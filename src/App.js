import { React } from "react";
import galleriaData from "./assets/data.json";
import _ from "lodash";

//A Function that returns our image boxes based on our images in the galleria
const returnGalleriaImageBox = (galleria) => {
  const boxSizesArray = ["250", "400", "285", "250", "340", "280", "500", "250", "420", "260", "430", "260", "330", "525", "340"];

  const galleriaImageBoxElements = [];
  var counter = 0;

  _.forEach(galleria, (image) => {
    var imageNameConversion = image.name.toLowerCase();
    imageNameConversion =  imageNameConversion.replaceAll(" ", "-");

    galleriaImageBoxElements.push(
      <div className={`galleria-image-box box${boxSizesArray[counter]} ${imageNameConversion}`}>
        <div className={"galleria-image-text"}>
          <h1>{image.name}</h1>
          <h3>{image.artist.name}</h3>
        </div>
      </div>
    );
    console.log(counter);
    counter++;
  });
  
  return galleriaImageBoxElements;
};

function App() {
  console.log(galleriaData)
  return (
    <div className="app-container">
      <div className={"app-spacer"}>menu-header</div>


      <div className={"menu-container"}>
        <div className={"menu-flex-container"}>
          <div className={"menu-header"}>
            <h1>galleria.</h1>
          </div>
          <div className={"menu-start-slide-wrapper"}>
            <p>START SLIDE SHOW</p>
          </div>
        </div>
      </div>

      <div className={"galleria-container"}>
        {returnGalleriaImageBox(galleriaData)}
      </div>
    </div>
  );
}

export default App;
