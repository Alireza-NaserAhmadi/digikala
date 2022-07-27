/** @format */
import React from "react"
import image1 from "../images/group1.png"
import image2 from "../images/group2.png"
import image3 from "../images/group3.png"
import image4 from "../images/group4.png"
import image5 from "../images/group5.png"
import image6 from "../images/group6.png"
import image7 from "../images/group7.png"
import image8 from "../images/group8.png"
import image9 from "../images/group9.png"
import image10 from "../images/group10.png"

const Grouping = () => {
  return (
    <>
      <div className="container" style={{ direction: "rtl" }}>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-lg-3 d-flex justify-content-center">
            <h5>دسته بندی دیجی کالا</h5>
          </div>
        </div>
        <div
          className="row d-flex mt-3"
          style={{ justifyContent: "space-evenly" }}
        >
          <div
            className="col-lg-4 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a className="group-a" href="#">
              <img className="group-image" src={image1} alt="" />
              <p className="group-p">کالای دیجیتال</p>
            </a>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a href="#" className="group-a">
              <img className="group-image" src={image2} alt="" />
              <p className="group-p">خودرو ابزار و تجهیزات صنعتی</p>
            </a>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a href="#" className="group-a">
              <img className="group-image" src={image3} alt="" />
              <p className="group-p">مد و پوشاک</p>
            </a>
          </div>
          {/* <div
            className="col-lg-2 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a href="#" className="group-a">
              <img className="group-image" src={image4} alt="" />
              <p className="group-p">اسباب بازی کودک و نوزاد</p>
            </a>
          </div>
          <div
            className="col-lg-2 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a href="#" className="group-a">
              <img className="group-image" src={image5} alt="" />
              <p className="group-p">کالاهای سوپرمارکتی</p>
            </a>
          </div>
         */}
        </div>
        <div
          className="row d-flex mt-3"
          style={{ justifyContent: "space-evenly" }}
        >
          <div
            className="col-lg-4 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a className="group-a" href="#">
              <img className="group-image" src={image6} alt="" />
              <p className="group-p">زیبایی و سلامت</p>
            </a>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a href="#" className="group-a">
              <img className="group-image" src={image7} alt="" />
              <p className="group-p">خانه و آشپزخانه</p>
            </a>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a href="#" className="group-a">
              <img className="group-image" src={image8} alt="" />
              <p className="group-p">کتاب لوازم تحریر و هنر</p>
            </a>
          </div>
          {/* <div
            className="col-lg-2 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a href="#" className="group-a">
              <img className="group-image" src={image9} alt="" />
              <p className="group-p">ورزش و سفر</p>
            </a>
          </div>
          <div
            className="col-lg-2 d-flex align-items-center"
            style={{ flexDirection: "column" }}
          >
            <a href="#" className="group-a">
              <img className="group-image" src={image10} alt="" />
              <p className="group-p">محصولات بومی و محلی</p>
            </a>
          </div>
         */}
        </div>
      </div>
    </>
  )
}

export default Grouping
