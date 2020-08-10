import React, { Component } from "react";
import Footer from "./Footer";
import Search from "./Search";
import Cards from "../pages/CardsHooks";
import "../../styles/home.css";
import Curves from "../generales/Curves";

export default class Home extends Component {
  state = {
    form: {
      initialDate: "",
      finalDate: "",
      country: "",
      price: "",
      search: "",
    },
  };

  formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    let d = new Date(date).toLocaleString("es-CO", options);
    return d
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Curves />
        <h1 className="tracking-in-expand-fwd home-title">Sweet Travel</h1>
        <p className="home-subtitle">
          {this.state.form.initialDate !== "" &&
            this.state.form.finalDate !== ""
            ? `Prepárate para disfrutar de los mejores hoteles entre el ${this.formatDate(new Date(this.state.form.initialDate))} y el ${this.formatDate(new Date(this.state.form.finalDate))}.`
            : null}
          <br />
          {this.state.form.country !== ""
            ? `Qué esperas para conocer ${this.state.form.country} y disfrutar todo lo que trae para ti.`
            : null}
        </p>
        <Search onChange={this.handleChange} formValues={this.state.form} />
        <Cards formValues={this.state.form} />
        <Footer />
      </div>
    );
  }
}
