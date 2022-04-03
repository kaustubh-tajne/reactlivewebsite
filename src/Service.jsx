import React from "react";
import img from "./Images/dm2.jpeg";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className=" text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

              {

                  Sdata.map((val,ind) => {
                    return <Card imgName={val.imgsrc} title={val.title} key={ind} />
                  })  
                
                  /* Sdata.forEach((ele) => {
                    return <Card imgName={ele.imgsrc} title={ele.title}/>
                  }) */
                
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

