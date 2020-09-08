import React from "react";
import Card from "../generales/Card";
import "../../styles/cards.css";
import data from "../../data/data";
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid";

export default function CardsList(props) {
  const query = props.formValues;
  let filteredCards = data;
  let recommendedCards;
  let initialDateInMiliseconds = Date.parse(query.initialDate);
  let finalDateInMilisenconds = Date.parse(query.finalDate);

  let message = "";
  // Para disminuir la cantidad de elementos la busqueda ira de pais-> precio -> fechas

  if (query.country !== "Paises" || query.country !== "") {
    filteredCards = filteredCards.filter((hotel) => {
      return hotel.country.toLowerCase().includes(query.country.toLowerCase());
    })
    if (filteredCards.length > 0) {
      if (filteredCards.length > 3) {
        recommendedCards = filteredCards.slice(0, 3);
      } else {
        recommendedCards = filteredCards.slice(0, filteredCards.length);
      }
    }
  }

  if (query.price !== "" || query.price !== 0) {
    filteredCards = filteredCards.filter((hotel) => {
      return hotel.price.toString().includes(query.price);
    });
    if (filteredCards.length > 0) {
      if (filteredCards.length > 3) {
        recommendedCards.push(...filteredCards.slice(0, 3));
      } else {
        recommendedCards.push(...filteredCards.slice(0, filteredCards.length));
      }
    }
  }

  if (query.initialDate !== "" || query.finalDate !== "") {
    if (query.initialDate === query.finalDate) {
      message = message.concat("Por favor selecciona una fecha futura.");
    }
    else if (query.initialDate <= query.finalDate) {
      initialDateInMiliseconds = Date.parse(query.initialDate);
      finalDateInMilisenconds = Date.parse(query.finalDate);

      filteredCards = filteredCards.filter((hotel) => {
        return (
          hotel.availabilityFrom <= initialDateInMiliseconds &&
          hotel.availabilityTo >= finalDateInMilisenconds
        );

      });
      if (filteredCards.length > 0) {
        if (filteredCards.length > 3) {
          recommendedCards.push(...filteredCards.slice(0, 3));
        } else {
          recommendedCards.push(...filteredCards.slice(0, filteredCards.length));
        }
      }
    } else {
      if (query.finalDate === "") {
        message = message.concat("La  fecha final no ha sido incluida. Por favor seleccionala para continuar con la búsqueda.");
      } else {
        message = message.concat("La fecha inicial es mayor a la fecha final. Por favor ajusta la búsqueda.");

      }
    }
  }

  if (query.search !== "") {
    filteredCards = filteredCards.filter((hotel) => {
      return `${hotel.name} ${hotel.city} ${hotel.country} ${hotel.description}`
        .toLowerCase()
        .includes(query.search.toLowerCase());
    });
    if (filteredCards.length > 0) {
      if (filteredCards.length > 3) {
        recommendedCards.push(...filteredCards.slice(0, 3));
      } else {
        recommendedCards.push(...filteredCards.slice(0, filteredCards.length));
      }
    }
  }

  if (query.country === "Paises" && query.price === "" && query.initialDate === "" && query.finalDate === "" && query.search === "") {
    filteredCards = data;
    message = message.concat("Busca en nuestra página el lugar perfecto para tus próximas vacaciones.");
  } else {
    if (filteredCards.length === 0) {
      message = message.concat("No hay hoteles disponibles con dicha búsqueda. Pero de acuerdo a tus elecciones, te recomendamos algunos lugares que te podrían encantar ");
      filteredCards = recommendedCards;
    }
  }
  return (
    <>
      <h2 className="message">{message}</h2>
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
                initialDate={hotel.availabilityFrom}
                finalDate={hotel.availabilityTo}
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

