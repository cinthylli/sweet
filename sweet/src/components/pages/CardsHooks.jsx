import React from "react";
import Card from "../generales/Card";
import "../../styles/cards.css";
import data from "../../data/data";
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid";

export default function CardsList(props) {
  const query = props.formValues;
  console.log(query);
  let filteredCards = data;
  let initialDateInMiliseconds = Date.parse(query.initialDate);
  let finalDateInMilisenconds = Date.parse(query.finalDate);
  let aDayInMiliseconds = 86400000;
  let yesterdayInMiliseconds = new Date().getTime - aDayInMiliseconds;
  let message = "";
  // Para disminuir la cantidad de elementos la busqueda ira de pais-> precio -> fechas

  if (query.country !== "") {
    filteredCards = filteredCards.filter((hotel) => {
      return hotel.country.toLowerCase().includes(query.country.toLowerCase());
    })
  }

  if (query.price !== "") {
    filteredCards = filteredCards.filter((hotel) => {
      return hotel.price.toString().includes(query.price);
    });
  }

  console.log("price:", filteredCards)
  if (query.initialDate !== "" || query.finalDate !== "") {

    if (initialDateInMiliseconds <= yesterdayInMiliseconds || finalDateInMilisenconds <= yesterdayInMiliseconds) {
      message = message.concat("Por favor selecciona una fecha futura.");
      console.log("Por favor selecciona una fecha futura.");

      console.log(message);
    }
    else if (initialDateInMiliseconds <= finalDateInMilisenconds) {
      filteredCards = filteredCards.filter((hotel) => {
        return (
          hotel.availabilityFrom <= initialDateInMiliseconds &&
          hotel.availabilityTo <= finalDateInMilisenconds
        );
      });
    } else {
      message = message.concat("La fecha inicial es mayor a la fecha final. Por favor ajusta la busqueda");

    }
  }
  console.log("fechas:", filteredCards)

  if (query.search !== "") {
    filteredCards = filteredCards.filter((hotel) => {
      return `${hotel.name} ${hotel.city} ${hotel.country} ${hotel.description}`
        .toLowerCase()
        .includes(query.search.toLowerCase());
    });
  }

  if (query.country === "" && query.price === "" && query.initialDate === "" && query.finalDate === "" && query.search === "") {
    filteredCards = data;
    message = message.concat("Busca en nuestra pagina el lugar perfecto para tus proximas vacaciones.");

  } else {
    if (filteredCards.length === 0) {
      message = message.concat("No hay hoteles disponibles con dicha busqueda");

    }
  }



  return (
    <>
      <h2>{message}</h2>
      <main className="cards-container">
        {filteredCards.map((hotel) => {
          return (
            <>
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
            </>
          );
        })}
      </main>
    </>
  );
}

CardsList.prototypes = {
  price: PropTypes.number,
  country: PropTypes.string,
  initialDate: PropTypes.string,
  finalDate: PropTypes.string,
  search: PropTypes.string,
}

