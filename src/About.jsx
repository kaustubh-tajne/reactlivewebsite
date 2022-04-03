import React from "react";
import { NavLink } from "react-router-dom";
import web from "./Images/play.jpg";
import Common from "./Common";
import img from './Images/banner.jpg';

const About = () => {
  return (
    <>
      <Common name={"About"}
        imgsrc={img}
        visit="/contact"
        btname="Contact Now"/>
    </>
  );
};

export default About;
