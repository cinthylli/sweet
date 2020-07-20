import React, { Component } from "react";
import Card from "../generales/Card";
import "../../styles/cards.css";
import data from "../../data/data";
import { v4 as uuid } from "uuid";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    console.log(this.data);
    return (
      <>
        <main className="cards-container">
          {data.map((hotel) => {
            return (
              <Card
                className="item"
                title={hotel.name}
                image={hotel.photo}
                subtitle={hotel.city}
                subtitle2={hotel.country}
                description={hotel.description}
                icon1="king_bed"
                qty_icon1={hotel.rooms}
                icon2="attach_money"
                qty_icon2={hotel.price}
                key={uuid()}
              />
            );
          })}
        </main>
      </>
    );
  }
}
