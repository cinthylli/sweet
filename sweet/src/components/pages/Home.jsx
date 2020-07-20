import React, { Component } from "react";
import Footer from "./Footer";
import Search from "./Search";
import Cards from "../pages/Cards";
import "../../styles/home.css";
import Curves from "../generales/Curves";

export default class Home extends Component {
  state = {
    form: {
      initialDate: new Date(),
      initialDateHumanReadable: "",
      finalDate: "",
      finalDateHumanReadable: "",
      country: "",
      price: "",
      search: "",
    },
  };

  options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  componentDidUpdate(prevState, prevProps) {
    let fecha = new Date();
    let initialDateHumanReadable = fecha.toLocaleDateString(
      "es-ES",
      this.options
    );

    console.log(initialDateHumanReadable);

    console.log(initialDateHumanReadable);
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
            ? `Prepárate para disfrutar de los mejores hoteles entre el ${this.state.form.initialDate} y el ${this.state.form.finalDate}.`
            : null}
          <br />
          {this.state.form.country !== ""
            ? `Qué esperas para conocer ${this.state.form.country} y disfrutar todo lo que trae para ti.`
            : null}
        </p>
        <Search onChange={this.handleChange} formValues={this.state.form} />
        <Cards />
        <Footer />
      </div>
    );
  }
}
