/** @format */

import React from "react"
import { Input } from "antd"

const Header = () => {
  return (
    <>
      <div className="container-fluid" style={{ direction: "rtl" }}>
        <div
          className="row"
          style={{ height: "70px", display: "flex", alignItems: "center" }}
        >
          <div className="col-lg-1">
            <img
              src={`https://www.digikala.com/statics/img/svg/logo.svg`}
              alt=""
            />
          </div>

          <div className="col-lg-5 offset-lg-3 d-flex justify-content-center">
            <span class="search-span">
              <i class="bi bi-search search-icon"></i>
              <Input
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "#f0f0f1",
                  width: "80%",
                  color: "#fff",
                }}
                placeholder="جستجو"
              />
            </span>
          </div>

          <div className="col-lg-2 d-flex justify-content-end">
            <button
              style={{
                display: "flex",
                height: "40px",
                width: "80% ",
                borderRadius: "5px",
                borderColor: "#f0f0f1",
                backgroundColor: "white",
                fontSize: "15px",
                fontWeight: "600",
                alignItems: "center",
              }}
            >
              <i class="bi bi-box-arrow-in-left login-icon"></i>
              <p
                style={{
                  margin: "0px",
                  width: "40%",
                  textAlign: "end",
                  paddingLeft: "15px",
                  fontWeight: "700",
                  borderLeft: "1px solid",
                }}
              >
                ورود
              </p>
              <p style={{ fontWeight: "700", width: "40%", margin: "0px" }}>
                ثبت نام{" "}
              </p>
            </button>
          </div>
          <div className="col-lg-1">
            <i class="bi bi-cart shop-icon"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <ul
              style={{
                listStyle: "none",
                padding: "0px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <li
                style={{ paddingLeft: "8px", borderLeft: "1px solid #a1a3a8" }}
                className="main-menu-hover"
              >
                <a
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#000",
                  }}
                  className="a-tag a-hover a-show"
                  href="#"
                >
                  <i
                    style={{
                      marginLeft: "4px",
                    }}
                    class="bi bi-list"
                  ></i>
                  دسته بندی کالاها
                  <ul
                    style={{
                      backgroundColor: "#fff",
                      zIndex: "100",
                      visibility: "hidden",
                      height: "100%",

                      opacity: "0",
                      width: "18%",
                      color: "#a1a3a8",
                      fontSize: "15px",
                      fontWeight: "700",
                      position: "absolute",
                      listStyle: "none",
                      padding: "0px",
                      marginTop: "8px",
                    }}
                  >
                    <a href="#" className="a-tag">
                      <li className="main-menu-case-li">
                        <i
                          style={{ marginLeft: "5px" }}
                          class="bi bi-laptop"
                        ></i>
                        کالای دیجیتال
                      </li>
                    </a>
                    <a href="#" className="a-tag">
                      <li className="main-menu-case-li">
                        <i
                          style={{ marginLeft: "5px" }}
                          class="bi bi-tools"
                        ></i>
                        خودرو ابزار و تجهیزات صنعتی
                      </li>
                    </a>
                    <a href="#" className="a-tag">
                      <li className="main-menu-case-li">
                        <i style={{ marginLeft: "5px" }} class="bi bi-gift"></i>
                        مد و پوشاک
                      </li>
                    </a>
                    <a href="#" className="a-tag">
                      <li className="main-menu-case-li">
                        <i
                          style={{ marginLeft: "5px" }}
                          class="bi bi-basket2"
                        ></i>
                        کالاهای سوپرمارکتی
                      </li>
                    </a>
                    <a href="#" className="a-tag">
                      <li className="main-menu-case-li">
                        <i style={{ marginLeft: "5px" }} class="bi bi-fan"></i>
                        اسباب بازی کودک و نوزاد
                      </li>
                    </a>
                    <a href="#" className="a-tag">
                      <li className="main-menu-case-li">
                        <i
                          style={{ marginLeft: "5px" }}
                          class="bi bi-house-heart"
                        ></i>
                        محصولات بومی و محلی
                      </li>
                    </a>
                    <a href="#" className="a-tag">
                      <li className="main-menu-case-li">
                        <i
                          style={{ marginLeft: "5px" }}
                          class="bi bi-heart"
                        ></i>
                        زیبایی و سلامت
                      </li>
                    </a>
                    <a href="#" className="a-tag">
                      <li className="main-menu-case-li">
                        <i
                          style={{ marginLeft: "5px" }}
                          class="bi bi-music-player"
                        ></i>
                        خانه و آشپزخانه
                      </li>
                    </a>
                    <a href="#" className="a-tag">
                      <li className="main-menu-case-li">
                        <i style={{ marginLeft: "5px" }} class="bi bi-book"></i>
                        کتاب لوازم تحریر و هنر
                      </li>
                    </a>
                  </ul>
                  <ul
                    style={{
                      backgroundColor: "#fff",
                      zIndex: "100",
                      visibility: "hidden",
                      opacity: "0",

                      // left: "0px",
                      width: "90%",
                      marginTop: "13px",
                      right: "18%",
                      position: "absolute",
                      listStyle: "none",
                      padding: "0px",
                      height: "68px",
                    }}
                  >
                    <li style={{ display: "flex" }}>
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        همه محصولات کالای دیجیتال
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                  </ul>
                  <ul
                    style={{
                      backgroundColor: "#fff",
                      zIndex: "100",
                      visibility: "hidden",
                      opacity: "0",
                      height: "100%",
                      // left: "0px",
                      marginTop: "80px",
                      right: "18%",
                      width: "17%",
                      position: "absolute",
                      listStyle: "none",
                      padding: "0px",
                    }}
                  >
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        لوازم جانبی گوشی
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        کیف و کاور گوشی
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        پاور بانک (شارژ همراه)
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        پایه نگهدارنده گوشی
                      </span>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "8px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        گوشی موبایل
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        سامسونگ
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        اپل
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        الجی
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        شیائومی
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        آنر
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        نوکیا
                      </span>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "8px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        واقعیت مجازی
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        مچ بند و ساعت هوشمند
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                  </ul>
                  <ul
                    style={{
                      backgroundColor: "#fff",
                      zIndex: "100",
                      visibility: "hidden",
                      opacity: "0",
                      height: "100%",
                      // left: "0px",
                      marginTop: "80px",
                      right: "35%",
                      width: "70%",
                      position: "absolute",
                      listStyle: "none",
                      padding: "0px",
                    }}
                  >
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        هندزفری هدفون هدست
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        اسپیکر بلوتوث و باسیم
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        هارد فلش و SSD
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        دوربین
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>

                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        دوربین عکاسی دیجیتال
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        دوربین ورزشی و فیلم برداری
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        دوربین چاپ سریع
                      </span>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        لوازم جانبی دوربین
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        لنز
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        کیف
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        کارت حافطه
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        کاغذ چاپ عکس
                      </span>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        دوربین دو چشمی و شکاری
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                  </ul>
                  <ul
                    style={{
                      backgroundColor: "#fff",
                      zIndex: "100",
                      visibility: "hidden",
                      opacity: "0",
                      height: "100%",
                      // left: "0px",
                      marginTop: "80px",
                      right: "53%",
                      width: "17%",
                      position: "absolute",
                      listStyle: "none",
                      padding: "0px",
                    }}
                  >
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        تلسکوپ
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        پلی استیشن ایکس باکس
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        کامپیوتر و تجهیزات جانبی
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>

                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        تجهیزات مخصوص بازی
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        مانیتور
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        کیس های اسمبل شده
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        قطعات داخلی کامپیوتر
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        ماوس
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        کیبورد
                      </span>
                    </li>

                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        لپ تاپ
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        لوازم جانبی لپ تاپ
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>

                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        کیف کوله و کاور
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        کابل صدا AUX و HDMI
                      </span>
                    </li>
                  </ul>
                  <ul
                    style={{
                      backgroundColor: "#fff",
                      zIndex: "100",
                      visibility: "hidden",
                      opacity: "0",
                      height: "100%",
                      // left: "0px",
                      marginTop: "80px",
                      right: "70%",
                      position: "absolute",
                      listStyle: "none",
                      padding: "0px",
                    }}
                  >
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        تبلت
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        شارژر تیلت و موبایل
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        کیف کاور لوازم جانبی تبلت
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        باتری
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        دوربین تحت شبکه
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        مودم و تجهیزات شبکه
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        ماشین های اداری
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>

                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        تلفن بی سیم و سانترال
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        فکس
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        پرینتر
                      </span>
                    </li>
                    <li className="sub-menu-span" style={{ marginTop: "7px" }}>
                      <span
                        style={{
                          color: "#a1a3a8",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        لوازم جانبی اداری
                      </span>
                    </li>

                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        کتابخوان فیدیبوک
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                    <li
                      className="sub-menu-hover"
                      style={{
                        display: "flex",
                        paddingRight: "5px",
                        borderRight: "2px solid red",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "3px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        کارت هدیه خرید از دیجی کالا
                      </span>
                      <i class="bi bi-chevron-left"></i>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="main-menu-li main-menu-hover">
                <a
                  style={{ color: "#a1a3a8" }}
                  className="a-tag a-hover"
                  href="#"
                >
                  <i
                    style={{
                      marginLeft: "4px",
                    }}
                    class="bi bi-basket2-fill"
                  ></i>
                  سوپرمارکت
                </a>
              </li>
              <li className="main-menu-li main-menu-hover">
                <a
                  style={{ color: "#a1a3a8" }}
                  className="a-tag a-hover"
                  href="#"
                >
                  <i
                    style={{
                      marginLeft: "4px",
                    }}
                    class="bi bi-projector"
                  ></i>
                  پرفروش ترین
                </a>
              </li>
              <li className="main-menu-li main-menu-hover">
                <a
                  style={{ color: "#a1a3a8" }}
                  className="a-tag a-hover"
                  href="#"
                >
                  <i
                    style={{
                      marginLeft: "4px",
                    }}
                    class="bi bi-percent"
                  ></i>
                  تخفیف ها و پیشنهادها
                </a>
              </li>
              <li
                className="main-menu-hover"
                style={{
                  paddingLeft: "10px",
                  borderLeft: "1px solid #a1a3a8",
                  marginRight: "5px",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <a
                  style={{ color: "#a1a3a8" }}
                  className="a-tag a-hover"
                  href="#"
                >
                  <i
                    style={{
                      marginLeft: "4px",
                    }}
                    class="bi bi-qr-code"
                  ></i>
                  شگفت انگیزها
                </a>
              </li>
              <li className="main-menu-li main-menu-hover">
                <a
                  style={{ color: "#a1a3a8" }}
                  className="a-tag a-hover"
                  href="#"
                >
                  سوالی دارید؟
                </a>
              </li>
              <li className="main-menu-li main-menu-hover">
                <a
                  style={{ color: "#a1a3a8" }}
                  className="a-tag a-hover"
                  href="#"
                >
                  فروشنده شوید!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
