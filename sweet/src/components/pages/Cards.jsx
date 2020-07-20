import React, { Component } from 'react'
import Card from '../generales/Card'
import "../../styles/cards.css"


export default class Cards extends Component {
    render() {
        return (
          <section className="cards-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        );
    }
}
