import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Galleria from "./components/Galleria";
import SlideShow from "./components/SlideShow";

const NoMatch = () => {
  return(
    <div classname={"no-match"}>
      <h1>No Page Found</h1>
      <p>Go Back Home</p>
    </div>
  )
}
function App() {
  return (
    <div className="app-container">
      <div className={"app-spacer"}>Tet</div>

      

      <Router>
        <Route path={"/"} component={Menu} />

        <Switch>
          <Route exact path={"/"} component={Galleria} />
          <Route path={"/slideshow"} component={SlideShow} />
          <Route component={NoMatch} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
