import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default class PlayerNoSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.match.params.id,
      videoData: {},
    };
  }

  //   async componentDidMount() {
  //     try {
  //       const res = await fetch(`http://localhost:4000/video/${this.state.videoId}/data`);
  //       const data = await res.json();
  //       this.setState({ videoData: data });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  render() {
    return (
      <div className="App-header">
        <Header />
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <iframe
          width="800"
          height="800"
          src="https://www.youtube.com/embed/Qdzs7nQFyXs"
          title="YouTube video player"
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
        <iframe
          width="600"
          height="600"
          src="https://www.youtube.com/embed/SuDNVN0n7eQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
        </div>
        
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {this.state.videoData.name}
        </h1>
        <Footer />
      </div>
    );
  }
}