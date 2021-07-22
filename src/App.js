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
import PostsDetalles from "./Components/PostsDetalles/PostsDetalles";
import Posts from "./Components/Posts/Posts";
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
          <Route path="/posts/:id">
            <PostsDetalles />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
