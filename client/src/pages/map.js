import React,{Component} from "react";
import Map from "./mapbox";

export default class skiMap extends Component {
  render() {
    return (
      <div>
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
          Explore the mountain in first person view!
        </h4>
        <div>
          <Map />
        </div>
      </div>
    );
  }
}
