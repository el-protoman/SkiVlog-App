import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default class About extends Component {

  constructor() {
    super();
    this.state = {
      videos: []
    };
  }

  render() {
    return (
      <div className="App-header">
        <Header />
        <div className="container" style={{color:"black"}}>
          Reel Here
        </div>
        <Footer />
      </div>
    )
  }
}
