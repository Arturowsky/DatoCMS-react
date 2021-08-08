import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContextProvider } from "./Context"

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Recipe from "./Recipe";
import Artur from "./Artur";
// import { useContext } from "react";

const App = () => (
  <ContextProvider>
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={Artur} />
        <Route path="/blog" component={Home} />
        <Route path="/recipes/:slug" component={Recipe} />
        <Route path="/about" component={About} />
      </main>
    </Router>
  </ContextProvider>
);

export default App;
