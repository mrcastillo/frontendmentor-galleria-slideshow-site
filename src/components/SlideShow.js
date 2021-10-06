import React, { useEffect, useState, useContext } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import galleriaJSON from "../json/data.json";

import { SlideShowContext } from "./context/SlideShowContext";

function SlideShow(props) {

    const { isSlideShowActive, setActiveSlideShow } = useContext(SlideShowContext);

    console.log(isSlideShowActive, "slideshow active")
    //Index of our Gallery 0-14. This is used to set which image info we will render
    var [ galleriaIndex, setGalleriaIndex ] = useState(() => {
        if(typeof props.location.state === "undefined") {
            } else {
                return props.location.state.galleryIndex;
            }
    });
    
    //Gallery JSON with our data on current gallery.
    var [ gallery, setGallery ] = useState(() => {
        return galleriaJSON[galleriaIndex];
    });

    var [ playlistProgress, setPlaylistProgress ] = useState(()=> {
        var playlistPercent = (galleriaIndex / galleriaJSON.length) * 100;
        return playlistPercent;
    });

    const openImage = () => {
        const slideOverlay = document.getElementsByClassName("slide-show-overlay");
        slideOverlay[0].style.width = "100%";
    ;}

    const closeImage = () => {
        const slideOverlay = document.getElementsByClassName("slide-show-overlay");
        slideOverlay[0].style.width = "0%";
    };

    const nextImage = () => {
        var nextGalleriaIndex = galleriaIndex + 1;

        if(nextGalleriaIndex >= galleriaJSON.length) {
            //window.scrollTo(0, 0);
            setActiveSlideShow(false);
            return null;
        } 

        setGallery(galleriaJSON[nextGalleriaIndex]);
        setGalleriaIndex(nextGalleriaIndex);
    };

    const previousImage = (e) => {
        var previousGalleriaIndex = galleriaIndex - 1;
        if(previousGalleriaIndex < 0) {
            //window.scrollTo(0, 0);
            return null;
        }
        setGallery(galleriaJSON[previousGalleriaIndex]);
        setGalleriaIndex(previousGalleriaIndex);
    };

    const startSlideShow = () => {
        setTimeout(() => {
            if(isSlideShowActive){
                nextImage();
            }
        },  1000*5);
    };

    
    window.addEventListener("scroll", (e) => {
        setActiveSlideShow(false)
    });
    

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        var nextButton = document.getElementsByClassName("slide-show-artist-title-next-previous-icon")[1];
        if(galleriaIndex + 1 >= galleriaJSON.length) {
           nextButton.classList.add("disable");
        } else {
            nextButton.classList.remove("disable");
        }

        var previousButton = document.getElementsByClassName("slide-show-artist-title-next-previous-icon")[0];
        if(galleriaIndex - 1 < 0) { 
            previousButton.classList.add("disable");
        } else {
            previousButton.classList.remove("disable");
        }

        var playlistPercent = ((galleriaIndex + 1) / galleriaJSON.length) * 100;
        setPlaylistProgress(playlistPercent);

        startSlideShow();
    }, [galleriaIndex, isSlideShowActive]);

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
                    <hr id={"hr-100"}/>
                    <hr id={"hr-custom"} style={{width: `${playlistProgress}%` }}/>
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
                        <div onClick={nextImage} className={`slide-show-artist-title-next-previous-icon `}>
                            <img src={`/frontendmentor-galleria-slideshow-site/assets/shared/icon-next-button.svg`} alt={"next"} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SlideShow;