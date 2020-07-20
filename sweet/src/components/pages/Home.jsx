import React, { Component } from "react";
import Footer from "./Footer";
import Search from "./Search";
import Cards from "../pages/Cards";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="tracking-in-expand-fwd ">Home</h1>
        <Search />
        <Cards />
        <Footer />
      </div>
    );
  }
}
