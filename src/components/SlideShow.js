import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";

import star from "../assets/starry-night/gallery.jpg";
import viewIcon from "../assets/shared/icon-view-image.svg";
import artist from "../assets/starry-night/artist.jpg";
import previous from "../assets/shared/icon-back-button.svg";
import next from "../assets/shared/icon-next-button.svg";

import galleriaData from "../assets/data.json";

function SlideShow(props) {
    
    const clickedGalleryName = props.location.state.currentGallery;

    const [ gallery, setGallery ] = useState(() => {
        
        var currentGallery = {}
        _.forEach(galleriaData, (gallery) => {
            const galleryName = gallery.name.toLowerCase().replaceAll(" ", "-");
            if(galleryName === clickedGalleryName) {
                currentGallery = gallery;
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

    console.log(gallery, "cannot sell my soul")
    return (
        <React.Fragment>
            <div className={"slide-show-container"}>
                <div className={"slide-show-overlay"}>
                    <div className={"slide-show-overlay-box"}>
                        <div onClick={closeImage} className={"slide-show-overlay-close"}>
                            <p>CLOSE</p>
                        </div>
                        <div className={"slide-show-overlay-image"}>
                            <img src={star} />
                        </div>
                    </div>
                </div>

                <div className={"image-artist-title"}>
                    <div className={"image-artist-title-image"}>
                        <img src={gallery.images.gallery} alt={"painting"}/>
                    </div>

                    <div onClick={openImage} className={"image-artist-title-view-button-box"}>
                        <div className={"image-artist-title-view-button"}>
                            <div className={"image-artist-title-view-icon"}>
                                <img src={viewIcon} alt={"view"} />
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
                        <img src={gallery.artist.image} alt={"artist"}/>
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
                        <div className={"slide-show-artist-title-next-previous-icon"}>
                            <img src={previous} alt={"previous"} />
                        </div>
                        <div className={"slide-show-artist-title-next-previous-icon"}>
                            <img src={next} alt={"next"} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SlideShow;