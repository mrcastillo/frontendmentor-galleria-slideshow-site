import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className={"menu-container"}>
            <div className={"menu-flex-container"}>
            <Link to={"/"} className={"menu-header"}>
                <h1>galleria.</h1>
            </Link>
            <div className={"menu-start-slide-wrapper"}>
                <p>START SLIDE SHOW</p>
            </div>
            </div>
        </div>
    );
}

export default Menu;