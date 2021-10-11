import React, { useEffect, useState, useContext } from "react";
import galleriaJSON from "../json/data.json";
import { enableAutoTTS } from 'enable-auto-tts';

//SlideShow Context to check if the slideshow is currently active.
import { SlideShowContext } from "./context/SlideShowContext";
//Gallery Index to let the app understand which gallery image we are currently on or active.
import { GalleriaIndexContext } from "./context/GalleriaIndexContext";


function SlideShow(props) {
    enableAutoTTS();
    var galleriaTextToSpeech = new SpeechSynthesisUtterance();
    galleriaTextToSpeech.lang = "en";
    galleriaTextToSpeech.voice = window.speechSynthesis.getVoices[0];

    //Set our context here.
    var { isSlideShowActive, setActiveSlideShow } = useContext(SlideShowContext);
    var { galleriaIndex, setGalleriaIndex } = useContext(GalleriaIndexContext);

    //Set the current gallery, uses index to query through JSON in "galleriaJSON".
    var [ gallery, setGallery ] = useState(() => {
        //If undefined state, set default state of 0
        if(typeof props.location.state === "undefined"){
            return galleriaJSON[0];
        }
        setGalleriaIndex(props.location.state.galleryIndex)
        //Also return and set the gallery.
        return galleriaJSON[props.location.state.galleryIndex];
    });
    
    galleriaTextToSpeech.text = gallery.description;
    
    //This determines the width of the <hr/> Element that we use to keep track of galleria progress. Mostly a CSS thing
    var [ playlistProgress, setPlaylistProgress ] = useState(()=> {
        //Multiply the index by galleria length then multiply it by 100 to get an accurate 0-100% of where we are in the galleria.
        var playlistPercent = (galleriaIndex / galleriaJSON.length) * 100;
        return playlistPercent;
    });

    //Open the overlay
    const openImage = () => {
        const slideOverlay = document.getElementsByClassName("slide-show-overlay");
        slideOverlay[0].style.width = "100%";
    };

    //Close the overlay
    const closeImage = () => {
        const slideOverlay = document.getElementsByClassName("slide-show-overlay");
        slideOverlay[0].style.width = "0%";
        //Slideshow Stops once we close the image.
        window.speechSynthesis.cancel()
        setActiveSlideShow(false);
    };

    //Increments galleria by one and sets the next gallery image.
    const nextImage = () => {
        var nextGalleriaIndex = galleriaIndex + 1;
        
        if(nextGalleriaIndex >= galleriaJSON.length) {
            setActiveSlideShow(false);
            return null;
        } 
        galleriaTextToSpeech.text = galleriaJSON[nextGalleriaIndex].description;
        setGallery(galleriaJSON[nextGalleriaIndex]);
        setGalleriaIndex(nextGalleriaIndex);
    };

    //Decreases galleria increment by one and sets previous galleria image.
    const previousImage = (e) => {
        var previousGalleriaIndex = galleriaIndex - 1;
        if(previousGalleriaIndex < 0) {
            return null;
        }
        setGallery(galleriaJSON[previousGalleriaIndex]);
        setGalleriaIndex(previousGalleriaIndex);
    };

    const stopSlideShow = () => {
        setActiveSlideShow(false);
        window.speechSynthesis.pause();
    }

    window.addEventListener("scroll", (e) => {
        setActiveSlideShow(false);
        //window.speechSynthesis.cancel();
    });

    galleriaTextToSpeech.onend = (event) => {
        console.log("ended tts");
        nextImage();
        
    }

    useEffect(() => {
        setGallery(galleriaJSON[galleriaIndex]);
        
        window.scrollTo(0,0);

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

        galleriaTextToSpeech.text = gallery.description;

        if(isSlideShowActive){
            openImage();
            window.speechSynthesis.speak(galleriaTextToSpeech);
        } else {
            //window.speechSynthesis.cancel();
        }
    }, [galleriaIndex, isSlideShowActive]);

    return (
        <React.Fragment>
            <div className={"slide-show-container"}>
                <div className={"slide-show-overlay"} onClick={closeImage} onScroll={stopSlideShow}>
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