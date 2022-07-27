/** @format */
import React from "react"
import backgroundImage from "../images/postal.svg"
import fresh from "../images/fresh.png"
import market1 from "../images/market1.jpg"
import market2 from "../images/market2.jpg"
import market3 from "../images/market3.jpg"
import market4 from "../images/market4.jpg"
import market5 from "../images/market5.jpg"
import market6 from "../images/market6.jpg"

const SurprizeMarket = () => {
  return (
    <>
      <div className="container" style={{ direction: "rtl" }}>
        <a className="a-tag" href="#">
          <div
            className="row market"
            style={{
              backgroundColor: "#e6f4f7",
              alignItems: "center",
              margin: "0px",
              borderRadius: "11px",
            }}
          >
            <div className="col-lg-1">
              <img src={fresh} alt="" />
            </div>
            <div className="col-lg-3">
              <img
                style={{ width: "100%" }}
                src={
                  "https://www.digikala.com/statics/img/svg/typography/fresh.svg"
                }
                alt=""
              />
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-3">
                  <img
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "40px",
                    }}
                    src={market1}
                    alt=""
                  />
                  <div style={{ width: "100%", position: "relative" }}>
                    <span className="market-span">40%</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <img
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "40px",
                    }}
                    src={market2}
                    alt=""
                  />
                  <div style={{ width: "100%", position: "relative" }}>
                    <span className="market-span">15%</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <img
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "40px",
                    }}
                    src={market3}
                    alt=""
                  />
                  <div style={{ width: "100%", position: "relative" }}>
                    <span className="market-span">35%</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <img
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "40px",
                    }}
                    src={market4}
                    alt=""
                  />
                  <div style={{ width: "100%", position: "relative" }}>
                    <span className="market-span">50%</span>
                  </div>
                </div>
                {/* <div className="col-lg-2">
                  <img
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "40px",
                    }}
                    src={market5}
                    alt=""
                  />
                  <div style={{ width: "100%", position: "relative" }}>
                    <span className="market-span">20%</span>
                  </div>
                </div>
                <div className="col-lg-2">
                  <img
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "40px",
                    }}
                    src={market6}
                    alt=""
                  />
                  <div style={{ width: "100%", position: "relative" }}>
                    <span className="market-span">25%</span>
                  </div>
                </div>
              */}
              </div>
            </div>

            <div className="col-lg-2">
              <p className="market-discount">تا 50% تخفیف</p>
            </div>
            <div
              className="col-lg-2 d-flex"
              style={{ justifyContent: "center" }}
            >
              <span className="market-span2">
                <p style={{ margin: "0px" }}>بیش از 80 کالا</p>
                <i
                  class="bi bi-arrow-left-short"
                  style={{ fontSize: "30px" }}
                ></i>
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default SurprizeMarket
