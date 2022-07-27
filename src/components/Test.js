/** @format */
import React from "react"
// import "~slick-carousel/slick/slick.css"
// import "~slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import image1 from "../images/slick1.jpg"
import image2 from "../images/slick2.jpg"
import image3 from "../images/slick3.jpg"
import image4 from "../images/slick4.jpg"
import image5 from "../images/slick5.jpg"
import image6 from "../images/slick6.jpg"
import image7 from "../images/slick7.jpg"
import image8 from "../images/slick8.jpg"
import image9 from "../images/slick9.jpg"
import image10 from "../images/slick10.jpg"

const Test = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    rtl: true,
  }
  return (
    <>
      <div className="container">
        <div>
          <h2>Uneven sets (finite)</h2>
          <Slider {...settings}>
            <div className="col-lg-1">
              <img
                style={{ width: "70%", height: "125px" }}
                src={image1}
                alt=""
              />
              <span>
                <span>14%</span>
                910,000
              </span>
            </div>
            <div className="col-lg-3">
              <img
                style={{ width: "200px", height: "200px" }}
                src={image2}
                alt=""
              />
            </div>
            <div className="col-lg-3">
              <img
                style={{ width: "200px", height: "200px" }}
                src={image3}
                alt=""
              />
            </div>
            <div className="col-lg-3">
              <img
                style={{ width: "200px", height: "200px" }}
                src={image4}
                alt=""
              />
            </div>
            <div className="col-lg-3">
              <img
                style={{ width: "200px", height: "200px" }}
                src={image5}
                alt=""
              />
            </div>
            <div className="col-lg-3">
              <img
                style={{ width: "200px", height: "200px" }}
                src={image6}
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Test
