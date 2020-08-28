import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SearchPage from "./SearchPage";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
