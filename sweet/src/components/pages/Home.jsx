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
        <h1 className="tracking-in-expand-fwd home-title">Sweet Travel</h1>
        <p className="home-subtitle">Prepárate para disfrutar de los mejores hoteles entre el y el en </p>
        <Search />
        <Cards />
        <Footer />
      </div>
    );
  }
}
