import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Menu from "./components/Menu";
import Galleria from "./components/Galleria";
import SlideShow from "./components/SlideShow";

import SlideShowProvider from "./components/context/SlideShowContext"; 
import GalleriaIndexProvider from "./components/context/GalleriaIndexContext";

const NoMatch = () => {
  return(
    <div className={"no-match"}>
      <h1>No Page Found</h1>
      <br/>                                                                                                                                                                                                                                                                                                     
      <Link to={"/"}>Go Back Home</Link>
      <Redirect to={"/"} />
    </div>
  )
}
function App() {
  return (
    <GalleriaIndexProvider>
      <SlideShowProvider>
          <div className="app-container">
            
            <div className={"app-spacer"}>T</div>

            <Router>
              <Route path={"/"} component={Menu} />

              <Switch>
                <Route exact path={"/"} component={Galleria} />
                <Route path={"/slideshow"} component={SlideShow} />
                <Route component={NoMatch} />
              </Switch>
              
            </Router>
          </div>
      </SlideShowProvider>
    </GalleriaIndexProvider>
  );
}

export default App;