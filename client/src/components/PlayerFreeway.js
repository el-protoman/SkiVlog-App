import React, { useState, useEffect } from "react";
//import Header from "../Header";
import Footer from "./Footer";
import NavbarYear from "./NavbarYear";
import NavbarTrails from "./NavbarTrails";
import { motion } from "framer-motion";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import dayjs from "dayjs";

export default function PlayerFreeway() {
  const [selectedYear, setSelectedYear] = useState(`${dayjs().year()}`);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [selectedYear]);

  const passData = (data) => {
    setSelectedYear(data);
    setIsLoading(true);
  };

  if (selectedYear === "2022") {
    return isLoading ? (
      <>
        {/* <Header /> */}
        <NavbarTrails />
        <NavbarYear passData={passData} selectedYear={selectedYear} />
        <div
          style={{
            position: "fixed",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ClimbingBoxLoader
            color={"#374153"}
            isLoading={isLoading}
            size={100}
          />
        </div>
      </>
    ) : (
      <div className="App-header">
        {/* <Header /> */}
        <NavbarTrails />
        <NavbarYear passData={passData} selectedYear={selectedYear} />
        <motion.div exit={{ opacity: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <iframe
              width="800"
              height="800"
              src="https://www.youtube.com/embed/3F6X35JfUJI"
              title="YouTube video player"
              frameBorder="2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>{" "}
          </div>
        </motion.div>
        <Footer />
      </div>
    );
  } else {
    return isLoading ? (
      <>
        {/* <Header /> */}
        <NavbarTrails />
        <NavbarYear passData={passData} selectedYear={selectedYear} />
        <div
          style={{
            position: "fixed",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ClimbingBoxLoader
            color={"#374153"}
            isLoading={isLoading}
            size={100}
          />
        </div>
      </>
    ) : (
      <div className="App-header">
        {/* <Header /> */}
        <NavbarTrails />
        <NavbarYear passData={passData} selectedYear={selectedYear} />
        <motion.div exit={{ opacity: 0 }}></motion.div>
        <Footer />
      </div>
    );
  }
}
