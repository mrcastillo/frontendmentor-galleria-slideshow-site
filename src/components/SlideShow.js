import React, { useEffect } from "react";
import star from "../assets/starry-night/gallery.jpg";
import viewIcon from "../assets/shared/icon-view-image.svg";
import artist from "../assets/starry-night/artist.jpg";
import previous from "../assets/shared/icon-back-button.svg";
import next from "../assets/shared/icon-next-button.svg";

import galleriaData from "../assets/data.json";

function SlideShow() {

    const currentGallery = galleriaData[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    return (
        <React.Fragment>
            <div className={"slide-show-container"}>
                <div className={"image-artist-title"}>
                    <div className={"image-artist-title-image"}>
                        <img src={star} alt={"painting"}/>
                    </div>

                    <div className={"image-artist-title-view-button-box"}>
                        <div className={"image-artist-title-view-button"}>
                            <div className={"image-artist-title-view-icon"}>
                                <img src={viewIcon} alt={"view"} />
                            </div>
                            <div className={"image-artist-title-view-text"}>VIEW IMAGES</div>
                        </div>
                    </div>

                    <div className={"image-artist-title-header"}>
                        <div className={"image-artist-title-text"}>
                            <h1>{currentGallery.name}</h1>
                            <h3>{currentGallery.artist.name}</h3>
                        </div>
                    </div>
                </div>

                <div className={"slide-show-paragraph-wrapper"}>
                    <div className={"slide-show-paragraph-avatar"}>
                        <img src={artist} alt={"artist"}/>
                    </div>

                    <div className={"slide-show-transparent-text"}>
                        <p>{currentGallery.year}</p>
                    </div>
                </div>

                <div className={"slide-show-paragraph"}>
                    <p>{currentGallery.description}</p>
                </div>

                <div className={"slide-show-source"}>
                    <a href={currentGallery.source}>GO TO SOURCE</a>
                </div>
            </div>

            <div className={"slide-show-playlist"}>
                <div className={"slide-show-playlist-loading-bar"}>
                    <hr />
                </div>

                <div className={"slide-show-artist-title"}>
                    <div className={"slide-show-artist-title-header"}>
                        <p id={"title"}>{currentGallery.name}</p>
                        <p id={"artist"}>{currentGallery.artist.name}</p>
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