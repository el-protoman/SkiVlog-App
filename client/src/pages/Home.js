import React from "react";
import profile from "../public-images/SkiProfile.JPG";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  // constructor() {
  //   super();
  //   this.state = {
  //     videos: []
  //   };
  // }

  // async componentDidMount() {
  //   try {
  //     const response = await fetch('http://localhost:4000/videos');
  //     const data = await response.json();
  //     this.setState({ videos: [...data] });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="App-header">
      <Header />
      <motion.div exit={{ opacity: 0 }}>
        <div className="container">
          {/* <div className="row">
            {this.state.videos.map(video =>
              <div className="col-md-4" key={video.id}>
                <Link to={`/player/${video.id}`}>
                  <div className="card border-0" color="black">
                    <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
                    <div className="card-body">
                      <p>{video.name}</p>
                      <p>{video.duration}</p>
                    </div>
                  </div>
                </Link>
              </div>
              )}
          </div> */}
        </div>
        <div
          className="container"
          style={{ minHeight: "auto", height: "fit-content" }}
        >
          <div className="center" key="profile">
            <Link to={`/mainpage`}>
              <div
                className="card"
                style={{ minHeight: "auto", height: "fit-content" }}
              >
                <img
                  src={profile}
                  alt="skiprofile"
                  style={{ minHeight: "auto", height: "fit-content" }}
                />
              </div>
            </Link>
          </div>
          <h3>At the top of Peak 6 - 12,500+ feet above sea level!</h3>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
