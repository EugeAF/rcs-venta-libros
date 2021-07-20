import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/scss/bootstrap.scss";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import Fetch from "./Components/Fetch/Fetch";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/fetch">
            <Fetch />
          </Route>
          <Route path="/productos">
            <Products />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
