import React, { Component } from 'react'
import Footer from './Footer'
import Search from './Search'

export default class Home extends Component {
    render() {
        return (
          <div>
            <h1 className="tracking-in-expand-fwd ">Home</h1>
            <Footer />
            <Search />
          </div>
        );
    }
}
