import React from "react";
import Card from "../generales/Card";
import "../../styles/cards.css";
import data from "../../data/data";
import { v4 as uuid } from "uuid";

export default function CardsList(props) {
  const query = props.formValues;
  console.log(query);
  let filteredCards = data;
  // Para disminuir la cantidad de elementos la busqueda ira de pais-> precio -> fechas

  if (query.country === "") {
    filteredCards = filteredCards.filter((hotel) => {
      return hotel.country.toLowerCase().includes(query.country.toLowerCase());
    });
  }

  // if (query.price === "") {
  //   filteredCards = filteredCards.filter((hotel) => {
  //     return hotel.price.includes(query.price);
  //   });
  // }

  if (query.initialDate <= query.finalDate) {
    filteredCards = filteredCards.filter((hotel) => {
      return (
        hotel.availabilityFrom <= query.initialDate &&
        hotel.availabilityTo <= query.finalDate
      );
    });
  } else {
    console.error("La fecha inicial es mayor a la fecha final");
  }

  filteredCards = filteredCards.filter((hotel) => {
    return `${hotel.name} ${hotel.city} ${hotel.country} ${hotel.description}`
      .toLowerCase()
      .includes(query.search.toLowerCase());
  });
  console.log("filteredCards");
  console.log(filteredCards);

  return (
    <>
      <main className="cards-container">
        {filteredCards.map((hotel) => {
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
              icon2="monetization_on"
              qty_icon2={hotel.price}
              key={uuid()}
            />
          );
        })}
      </main>
    </>
  );
}
