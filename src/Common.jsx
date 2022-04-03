import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row  d-flex flex-row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>
                    Welcome to {props.name} page
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented people to developer website
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-primary">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="cl-lg-6 order-1 orderlg-2 header-img">
                  <img src={props.imgsrc} alt="img" className=" img-fluid animated" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
