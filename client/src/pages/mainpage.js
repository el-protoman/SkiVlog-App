import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import map from "../public-images/Breckenridge-PisteMap-2017.jpg";
import { motion } from "framer-motion";

export default class mainpage extends Component {
  render() {
    return (
      <div className="App-header">
        <Header />
        <motion.div exit={{ opacity: 0 }}>
          <h4
            style={{
              color: "black",
              padding: "10px",
              margin: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            This is the Breckenridge trail map, click a route to see more!
          </h4>
          <div
            className="container"
            style={{ minHeight: "auto", height: "fit-content" }}
          >
            <div className="center" key="map">
              <Link to={`/map`}>
                <div
                  className="card"
                  style={{ minHeight: "auto", height: "fit-content" }}
                >
                  <img
                    src={map}
                    alt="ski map"
                    style={{ minHeight: "auto", height: "fit-content" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    );
  }
}
