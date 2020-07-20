import React, { Component } from "react";
import Footer from "./Footer";
import Search from "./Search";
import Cards from "../pages/Cards";
import "../../styles/home.css";
import Curves from "../generales/Curves";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Curves />
        <h1 className="tracking-in-expand-fwd ">Home</h1>
        <p>Preparate para disfrutar de los mejores hoteles entre el y el</p>
        <Search />
        <Cards />
        <Footer />
      </div>
    );
  }
}
