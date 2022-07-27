/** @format */

import React from "react"
import image1 from "../images/infomoreee1.jpg"
import image2 from "../images/infomoreee2.jpg"

const InfoMore3 = () => {
  return (
    <>
      <div className="container" style={{ direction: "rtl" }}>
        <div className="row">
          <div className="col-lg-6">
            <a href="#">
              <img className="infomoree-image" src={image1} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a href="#">
              <img className="infomoree-image" src={image2} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoMore3
