import React from "react";
import Header from "./components/common/Header";
import { Route, Switch } from "react-router-dom";
import Main from "./components/common/Main";
import MovieCard from "./components/movies/MovieCard";
import AboutPage from "./components/common/About";
import PageNotFound from "./components/common/PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={AboutPage} />
        <Route path="/Movie/:movieId" component={MovieCard} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
