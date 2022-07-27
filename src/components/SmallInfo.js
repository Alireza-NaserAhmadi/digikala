/** @format */
import React from "react"
import image1 from "../images/smallinfo1.png"
import image2 from "../images/smallinfo2.png"
import image3 from "../images/smallinfo3.png"
import image4 from "../images/smallinfo4.png"
import image5 from "../images/smallinfo5.png"
import image6 from "../images/smallinfo6.png"
import image7 from "../images/smallinfo7.png"

const SmallInfo = () => {
  return (
    <>
      <div className="container" style={{ direction: "rtl" }}>
        <div
          className="row"
          style={{
            justifyContent: "space-evenly",
            height: "160px",
            alignItems: "center",
          }}
        >
          <div
            style={{ alignItems: "Center", flexDirection: "column" }}
            className="col-lg-1 d-flex"
          >
            <a className="a-tag" href="#">
              <img className="smallinfo" src={image1} alt="" />
              <p className="smallinfo-p">دیجی کالا جت</p>
            </a>
          </div>
          <div
            style={{ alignItems: "Center", flexDirection: "column" }}
            className="col-lg-1 d-flex"
          >
            <a href="#" className="a-tag">
              <img className="smallinfo" src={image2} alt="" />
              <p className="smallinfo-p">دیجی استایل</p>
            </a>
          </div>
          <div
            style={{ alignItems: "Center", flexDirection: "column" }}
            className="col-lg-1 d-flex"
          >
            <a href="#" className="a-tag">
              <img className="smallinfo" src={image3} alt="" />
              <p className="smallinfo-p">دیجی پی</p>
            </a>
          </div>
          <div
            style={{ alignItems: "Center", flexDirection: "column" }}
            className="col-lg-1 d-flex"
          >
            <a href="#" className="a-tag">
              <img className="smallinfo" src={image4} alt="" />
              <p className="smallinfo-p">دیجی کالا مهر</p>
            </a>
          </div>
          <div
            style={{ alignItems: "Center", flexDirection: "column" }}
            className="col-lg-1 d-flex"
          >
            <a href="#" className="a-tag">
              <img className="smallinfo" src={image5} alt="" />
              <p className="smallinfo-p">ماموریت ها</p>
            </a>
          </div>
          <div
            style={{ alignItems: "Center", flexDirection: "column" }}
            className="col-lg-1 d-flex"
          >
            <a className="a-tag" href="#">
              <img className="smallinfo" src={image6} alt="" />
              <p className="smallinfo-p">دیجی پلاس</p>
            </a>
          </div>
          <div
            style={{ alignItems: "Center", flexDirection: "column" }}
            className="col-lg-1 d-flex"
          >
            <a href="#" className="a-tag">
              <img className="smallinfo" src={image7} alt="" />
              <p className="smallinfo-p">دیجی کلاب</p>
            </a>
          </div>
          <div
            style={{ alignItems: "Center", flexDirection: "column" }}
            className="col-lg-1 d-flex"
          >
            <a
              href="#"
              className="a-tag"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  backgroundColor: "#a1a3a8",
                  color: "#e0e0e2",
                  width: "65%",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "60px",
                }}
              >
                ...
              </span>
              <p className="smallinfo-p">بیشتر</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallInfo
