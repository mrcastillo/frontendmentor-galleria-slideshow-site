import React, { useEffect, useState } from "react";
import _ from "lodash";

import galleriaData from "../json/data.json";

function SlideShow(props) {
    var clickedGalleryName = "starry-night";

    if(typeof props.location.state === "undefined") {
    } else {
        clickedGalleryName = props.location.state.currentGallery;
    }
    
    const [ gallery, setGallery ] = useState(() => {
        
        var currentGallery = {}
        _.forEach(galleriaData, (galleryData) => {
            const galleryName = galleryData.name.toLowerCase().replaceAll(" ", "-");
            if(galleryName === clickedGalleryName) {
                currentGallery = galleryData;
                return;
            } else {
                return gallery[0];
            }
        });

        return(currentGallery)
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    const openImage = () => {
        const slideOverlay = document.getElementsByClassName("slide-show-overlay");
        slideOverlay[0].style.width = "100%";
    ;}

    const closeImage = () => {
        const slideOverlay = document.getElementsByClassName("slide-show-overlay");
        slideOverlay[0].style.width = "0%";
    };
 
    const nextImage = (e) => {
        
        var arrayPosition = 0;
        _.forEach(galleriaData, (gallery) => {
            //if(gallery.name = )
        });
    }

    const previousImage = (e) => {
        console.log(e.currentTarget);
    }

    return (
        <React.Fragment>
            <div className={"slide-show-container"}>
                <div className={"slide-show-overlay"}>
                    <div className={"slide-show-overlay-box"}>
                        <div onClick={closeImage} className={"slide-show-overlay-close"}>
                            <p>CLOSE</p>
                        </div>
                        <div className={"slide-show-overlay-image"}>
                            <img src={`/frontendmentor-galleria-slideshow-site/${gallery.images.gallery}`} />
                        </div>
                    </div>
                </div>

                <div className={"image-artist-title"}>
                    <div className={"image-artist-title-image"}>
                        <img src={`/frontendmentor-galleria-slideshow-site/${gallery.images.gallery}`} alt={"painting"}/>
                    </div>

                    <div onClick={openImage} className={"image-artist-title-view-button-box"}>
                        <div className={"image-artist-title-view-button"}>
                            <div className={"image-artist-title-view-icon"}>
                                <img src={`/frontendmentor-galleria-slideshow-site/assets/shared/icon-view-image.svg`} alt={"view"} />
                            </div>
                            <div className={"image-artist-title-view-text"}>VIEW IMAGES</div>
                        </div>
                    </div>

                    <div className={"image-artist-title-header"}>
                        <div className={"image-artist-title-text"}>
                            <h1>{gallery.name}</h1>
                            <h3>{gallery.artist.name}</h3>
                        </div>
                    </div>
                </div>

                <div className={"slide-show-paragraph-wrapper"}>
                    <div className={"slide-show-paragraph-avatar"}>
                        <img src={`/frontendmentor-galleria-slideshow-site/${gallery.artist.image}`} alt={"artist"}/>
                    </div>

                    <div className={"slide-show-transparent-text"}>
                        <p>{gallery.year}</p>
                    </div>
                </div>

                <div className={"slide-show-paragraph"}>
                    <p>{gallery.description}</p>
                </div>

                <div className={"slide-show-source"}>
                    <a href={gallery.source}>GO TO SOURCE</a>
                </div>
            </div>

            <div className={"slide-show-playlist"}>
                <div className={"slide-show-playlist-loading-bar"}>
                    <hr />
                </div>

                <div className={"slide-show-artist-title"}>
                    <div className={"slide-show-artist-title-header"}>
                        <p id={"title"}>{gallery.name}</p>
                        <p id={"artist"}>{gallery.artist.name}</p>
                    </div>
                    <div className={"slide-show-artist-title-next-previous"}>
                        <div onClick={previousImage} className={"slide-show-artist-title-next-previous-icon"}>
                            <img src={`/frontendmentor-galleria-slideshow-site/assets/shared/icon-back-button.svg`} alt={"previous"} />
                        </div>
                        <div onClick={nextImage} className={"slide-show-artist-title-next-previous-icon"}>
                            <img src={`/frontendmentor-galleria-slideshow-site/assets/shared/icon-next-button.svg`} alt={"next"} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SlideShow;