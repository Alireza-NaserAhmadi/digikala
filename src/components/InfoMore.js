/** @format */

import React from "react"
import image1 from "../images/infomore1.gif"
import image2 from "../images/infomore2.jpg"
import image3 from "../images/infomore3.jpg"
import image4 from "../images/infomore4.jpg"

const InfoMore = () => {
  return (
    <>
      <div className="container" style={{ direction: "rtl" }}>
        <div className="row">
          <div className="col-lg-3">
            <a href="#">
              <img className="infomore-image" src={image1} alt="" />
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#">
              <img className="infomore-image" src={image2} alt="" />
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#">
              <img className="infomore-image" src={image3} alt="" />
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#">
              <img className="infomore-image" src={image4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoMore
