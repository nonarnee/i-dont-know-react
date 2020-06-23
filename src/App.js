import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContextApi from "./containers/ContextApi";
import Home from "./containers/Home";
import Spliting from "./containers/Spliting";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/contextapi">
            <ContextApi />
          </Route>
          <Route path="/spliting">
              <Spliting />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
