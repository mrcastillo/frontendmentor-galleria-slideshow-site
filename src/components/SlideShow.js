import React, { useEffect, useState, useContext } from "react";
import galleriaJSON from "../json/data.json";

import { SlideShowContext } from "./context/SlideShowContext";
import { GalleriaIndexContext } from "./context/GalleriaIndexContext";

function SlideShow(props) {

    var { isSlideShowActive, setActiveSlideShow } = useContext(SlideShowContext);
    var { galleriaIndex, setGalleriaIndex } = useContext(GalleriaIndexContext);

    //Gallery JSON with our data on current gallery.
    var [ gallery, setGallery ] = useState(() => {
        if(typeof props.location.state === "undefined"){
            return galleriaJSON[0];
        }
        setGalleriaIndex(props.location.state.galleryIndex);
        return galleriaJSON[props.location.state.galleryIndex];
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
        setActiveSlideShow(false);
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

    window.addEventListener("scroll", (e) => {
        setActiveSlideShow(false)
    });

    useEffect(() => {
        window.scrollTo({
            top: 0
        });

        var nextButton = document.getElementsByClassName("slide-show-artist-title-next-previous-icon")[1];
        if(galleriaIndex + 1 >= galleriaJSON.length) {
           nextButton.classList.add("disable");
           setActiveSlideShow(false);
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

        setGallery(galleriaJSON[galleriaIndex]);
        
        if(isSlideShowActive) {

        }
    }, [galleriaIndex, isSlideShowActive]);

    return (
        <React.Fragment>
            <div className={"slide-show-container"}>
                <div className={"slide-show-overlay"} onClick={closeImage}>
                    <div className={"slide-show-overlay-box"}>
                        <div onClick={closeImage} className={"slide-show-overlay-close"}>
                            <p>CLOSE</p>
                        </div>
                        <div className={"slide-show-overlay-image"}>
                            <img src={`/frontendmentor-galleria-slideshow-site/${gallery.images.gallery}`} alt={"gallery"}/>
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

                    <div className={"slide-show-paragraph-avatar-tablet"}>
                        <img src={`/frontendmentor-galleria-slideshow-site/${gallery.artist.image}`} alt={"artist"}/>
                    </div>
                </div>

                <div className={"slide-show-paragraph-wrapper"}>
                    <div className={"slide-show-paragraph-avatar"}>
                        <img src={`/frontendmentor-galleria-slideshow-site/${gallery.artist.image}`} alt={"artist"}/>
                    </div>

                    <div className={"slide-show-transparent-text"}>
                        <p>{gallery.year}</p>
                    </div>

                    <div className={"slide-show-paragraph-tablet"}>
                        <p>{gallery.description}</p>
                    </div>

                    <div className={"slide-show-source-tablet"}>
                        <a href={gallery.source}>GO TO SOURCE</a>
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
                        <div id={"previous"} onClick={previousImage} className={"slide-show-artist-title-next-previous-icon"}>
                            <img src={`/frontendmentor-galleria-slideshow-site/assets/shared/icon-back-button.svg`} alt={"previous"} />
                        </div>
                        <div id={"next"} onClick={nextImage} className={`slide-show-artist-title-next-previous-icon`}>
                            <img src={`/frontendmentor-galleria-slideshow-site/assets/shared/icon-next-button.svg`} alt={"next"} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SlideShow;