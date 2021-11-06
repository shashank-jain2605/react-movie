import React from "react";
import "../App/App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Movie from "../Movie/Movie";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movie/:movieId">
          <Movie />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
