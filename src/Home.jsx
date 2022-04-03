import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./Images/play.jpg";

const Home = () => {
  return (
    <>
      <Common
        name={"Home"}
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
