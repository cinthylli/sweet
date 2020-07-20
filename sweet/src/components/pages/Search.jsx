import React, { Component } from "react";
import Split from "../generales/Split";
// import "../../styles/search.css"

export default class Search extends Component {
  initialDateControl = () => {
    let dateInput = document.getElementById("initial_date");

    console.log(dateInput);
  };

  render() {
    return (
      <section className="header-search">
        <form id="form-search">
          {/* <span className="header-search-icon">
            <img src="../../../public/icons/ingreso30.png" alt="" />
          </span> */}
          <div className="header-input-container initial-date">
            <i className="material-icons">login</i>
            <label htmlFor="initial_date" className="register-icon"></label>
            <input
              type="date"
              name="initial_date"
              id="initial_date"
              min={this.today}
              autoFocus
            />
          </div>
          <div className="header-input-container final-date">
            <i className="material-icons">exit_to_app</i>
            <label htmlFor="final_date"></label>
            <input type="date" name="final_date" id="final_date" />
          </div>
          <div className="header-input-container search">
            <i className="material-icons">search</i>
            <label htmlFor="search"></label>
            <input
              className="input-search"
              type="search"
              name="search"
              id="search"
              inputMode="full-width-latin"
              minLength="3"
              maxLength="60"
            />
          </div>
          <div className="header-input-container country">
            <i className="material-icons">place</i>
            <label htmlFor="country"></label>
            <select name="country" id="country" className="select-country">
              <option value="Colombia">Colombia</option>
              <option value="Peru">Peru</option>
              <option value="Argentina">Argentina</option>
              <option value="Brasil">Brasil</option>
            </select>
          </div>
          <div className="header-input-container price">
            <i className="material-icons">monetization_on</i>
            <label htmlFor="price"></label>
            <select name="price" id="price" className="select-price">
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
          </div>
        </form>
      </section>
    );
  }
}
