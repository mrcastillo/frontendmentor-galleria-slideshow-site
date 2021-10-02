import React, { useEffect } from "react";
import star from "../assets/starry-night/gallery.jpg";
import viewIcon from "../assets/shared/icon-view-image.svg";
import artist from "../assets/starry-night/artist.jpg";
import previous from "../assets/shared/icon-back-button.svg";
import next from "../assets/shared/icon-next-button.svg";

function SlideShow() {


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
                            <h1>Starry Night</h1>
                            <h3>Vincent Van Gogh</h3>
                        </div>
                    </div>
                </div>

                <div className={"slide-show-paragraph-wrapper"}>
                    <div className={"slide-show-paragraph-avatar"}>
                        <img src={artist} alt={"artist"}/>
                    </div>

                    <div className={"slide-show-transparent-text"}>
                        <p>1889</p>
                    </div>
                </div>

                <div className={"slide-show-paragraph"}>
                    <p>
                        Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. 
                        The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, 
                        including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat 
                        ... above which, in the morning, I watch the sun rise in all its glory.
                    </p>
                </div>

                <div className={"slide-show-source"}>
                    <p>GO TO SOURCE</p>
                </div>
            </div>

            <div className={"slide-show-playlist"}>
                <div className={"slide-show-playlist-loading-bar"}>
                    <hr />
                </div>

                <div className={"slide-show-artist-title"}>
                    <div className={"slide-show-artist-title-header"}>
                        <p id={"title"}>Starry Night</p>
                        <p id={"artist"}>Vincent Van Gogh</p>
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