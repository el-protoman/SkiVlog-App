import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import Header from "../Header";
import Footer from "../Footer";
import profile from "../IMG_0356.jpg";
import facebook from "../facebook.svg";
import linkedin from "../linkedin.svg";
import instagram from "../instagram.svg";
import { motion } from "framer-motion";

let socialLinkedIn = (
  <h2 style={{ color: "#374153", fontStyle: "italic", padding: "20px" }}>
    <img
      src={linkedin}
      alt="liicon"
      style={{ minHeight: "auto", height: "fit-content" }}
    />
    <a href="https://www.linkedin.com/in/nicholas-d-agostino-me/">
      Nicholas D'Agostino
    </a>
  </h2>
);

let socialInstagram = (
  <h3 style={{ color: "#374153", fontStyle: "italic", padding: "20px" }}>
    <img
      src={instagram}
      alt="igicon"
      style={{ minHeight: "auto", height: "fit-content" }}
    />
    <a href="https://www.instagram.com/nahgostino/">@Nahgostino</a>
  </h3>
);

let socialFacebook = (
  <h3 style={{ color: "#374153", fontStyle: "italic", padding: "20px" }}>
    <img
      src={facebook}
      alt="fbicon"
      style={{ minHeight: "auto", height: "fit-content" }}
    />
    <a href="https://www.facebook.com/nickdagostino95">/nickdagostino95</a>
  </h3>
);

export default function About() {
  const ref = useRef([]);
  const [items, setItems] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    setItems([]);
    ref.current.push(setTimeout(() => setItems(["CONNECT ON SOCIAL"]), 2000));
    ref.current.push(
      setTimeout(
        () => setItems([socialLinkedIn, socialInstagram, socialFacebook]),
        5000
      )
    );
    ref.current.push(
      setTimeout(
        () => setItems([socialLinkedIn, socialInstagram, socialFacebook]),
        8000
      )
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <div className="App-header">
      <Header />

      <motion.div exit={{ opacity: 0 }}>
        <div class="row">
          <div class="column">
            <div className="profile">
              <div
                className="card"
                style={{
                  minHeight: "auto",
                  height: "fit-content",
                  margin: "0px",
                  backgroundColor: "#374153",
                }}
              >
                <img
                  src={profile}
                  alt="profile"
                  style={{ minHeight: "auto", height: "fit-content" }}
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div style={{ padding: "90px" }}>
              {transitions(({ innerHeight, ...rest }, item) => (
                <animated.div style={rest} onClick={reset}>
                  <animated.div
                    style={{
                      overflow: "hidden",
                      height: innerHeight,
                      textAlign: "left",
                    }}
                  >
                    {item}
                  </animated.div>
                </animated.div>
              ))}
              {/* <div class="row">{socialLinkedIn}</div>
          <div class="row">{socialInstagram}</div>
          <div class="row">{socialFacebook}</div> */}
            </div>
          </div>
          <div class="column" style={{ transform: "translate(0px,0px)" }}>
            <iframe
              allowfullscreen
              id="wallsio-iframe"
              src="https://my.walls.io/h6wqn?nobackground=1&amp;show_header=0"
              style={{ border: "0", height: "640px", width: "100%" }}
              loading="lazy"
              title="My social wall"
            ></iframe>
          </div>
        </div>

        <div
          style={{ marginLeft: "0px", marginRight: "0px", textAlign: "center" }}
        >
          <h2>All video captured on GoPro Hero.</h2>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
