/** @format */
import React, { isValidElement } from "react"
import { Formik, Field, Form, useFormik } from "formik"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Input } from "antd"
import * as Yup from "yup"
import image1 from "../images/Footerdigi.svg"
import image2 from "../images/footer1.svg"
import image3 from "../images/footer2.svg"
import image4 from "../images/footer3.svg"
import image5 from "../images/footer4.svg"
import image6 from "../images/footer5.svg"
import image7 from "../images/footerslice.png"
import image8 from "../images/footerapp1.svg"
import image9 from "../images/footerapp2.svg"
import image10 from "../images/footerapp3.svg"
import image11 from "../images/footerapp4.svg"
import image12 from "../images/footerapp5.svg"
import image13 from "../images/footerend1.svg"
import image14 from "../images/footerend2.svg"
import image15 from "../images/footerend3.svg"
import image16 from "../images/footerend4.svg"
import image17 from "../images/footerend5.svg"
import image18 from "../images/footerend6.svg"
import image19 from "../images/footerend7.svg"
import image20 from "../images/footerend8.svg"
import image21 from "../images/footerend9.svg"
import image22 from "../images/footerend10.svg"
import image23 from "../images/footerend11.svg"
import image24 from "../images/footerend12.svg"
import image25 from "../images/footerend13.svg"
import image26 from "../images/footerend14.svg"

const Footer = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("لطفا ایمیل را درست وارد کنید")
      .required("پر کردن فیلد الزامی است")
      .typeError("پر کردن فیلد الزامی است"),
  })

  return (
    <>
      <div
        style={{ direction: "rtl", borderTop: "1px dotted #a1a3a8" }}
        className="container-fluid mt-5"
      >
        <div className="row mx-2 pt-4">
          <div className="col-lg-4 offset-6">
            <div className="row">
              <img
                style={{ width: "140px", height: "75px" }}
                src={image1}
                alt=""
              />
            </div>
            <div className="row">
              <div className="col-lg-5">
                <p style={{ fontSize: "13px", borderLeft: "1px solid" }}>
                  تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
                </p>
              </div>
              <div
                style={{ justifyContent: "center" }}
                className="col-lg-7 d-flex"
              >
                <p style={{ fontSize: "13px" }}>
                  ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 mt-2">
            <a
              style={{
                width: "70%",
                height: "48px",
                border: "1px solid",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                color: "#a1a3a8",
                margin: "0px",
                padding: "0px",
                borderRadius: "10px",
              }}
              className="a-tag d-flex"
              href="#"
            >
              <p
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                بازگشت به بالا
              </p>
              <i styl={{ fontWeight: "700" }} class="bi bi-chevron-up"></i>
            </a>
          </div>
        </div>
        <div
          style={{ justifyContent: "space-evenly" }}
          className="row mt-5 d-flex"
        >
          <div className="col-lg-2">
            <a
              className="a-tag"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="#"
            >
              <img
                style={{ width: "70px", height: "70px" }}
                src={image2}
                alt=""
              />
              <p
                style={{
                  color: "#000",
                  fontSize: "12px",
                  fontWeight: "600",
                  margin: "0px",
                }}
              >
                امکان تحویل اکسپرس
              </p>
            </a>
          </div>
          <div className="col-lg-2">
            <a
              className="a-tag"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="#"
            >
              <img
                style={{ width: "70px", height: "70px" }}
                src={image3}
                alt=""
              />
              <p
                style={{
                  color: "#000",
                  fontSize: "12px",
                  fontWeight: "600",
                  margin: "0px",
                }}
              >
                امکان پرداخت محل
              </p>
            </a>
          </div>
          <div className="col-lg-2">
            <a
              className="a-tag"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="#"
            >
              <img
                style={{ width: "70px", height: "70px" }}
                src={image4}
                alt=""
              />
              <p
                style={{
                  color: "#000",
                  fontSize: "12px",
                  fontWeight: "600",
                  margin: "0px",
                }}
              >
                7 روز هفته،24 ساعت
              </p>
            </a>
          </div>
          <div className="col-lg-2">
            <a
              className="a-tag"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="#"
            >
              <img
                style={{ width: "70px", height: "70px" }}
                src={image5}
                alt=""
              />
              <p
                style={{
                  color: "#000",
                  fontSize: "12px",
                  fontWeight: "600",
                  margin: "0px",
                }}
              >
                هفت روز ضمانت بازگشت کالا
              </p>
            </a>
          </div>
          <div className="col-lg-2">
            <a
              className="a-tag"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="#"
            >
              <img
                style={{ width: "70px", height: "70px" }}
                src={image6}
                alt=""
              />
              <p
                style={{
                  color: "#000",
                  fontSize: "12px",
                  fontWeight: "600",
                  margin: "0px",
                }}
              >
                ضمانت اصل بودن کالا
              </p>
            </a>
          </div>
        </div>
        <div className="row mx-2">
          <div className="col-lg-3">
            <div className="row mt-5">
              <p style={{ fontWeight: "700", fontSize: "17px", margin: "0px" }}>
                با دیجی‌کالا
              </p>
            </div>
            <div className="row">
              <ul style={{ listStyle: "none" }}>
                <a className="a-tag" href="#">
                  <li className="footer-li">اتاق خبر دیجی کالا</li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">فروش در دیجی کالا</li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">فرصت های شغلی</li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">تماس با دیجی کالا</li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">درباره دیجی کالا</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row mt-5">
              <p style={{ fontWeight: "700", fontSize: "17px", margin: "0px" }}>
                خدمات مشتریان
              </p>
            </div>
            <div className="row">
              <ul style={{ listStyle: "none" }}>
                <a className="a-tag" href="#">
                  <li className="footer-li">پاسخ به پرسش های متداول</li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">رویه بازگرداندن کالا</li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">شرایط استفاده </li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">حریم خصوصی</li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">گزارش باگ</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row mt-5">
              <p style={{ fontWeight: "700", fontSize: "17px", margin: "0px" }}>
                راهنمای خرید از دیجی کالا
              </p>
            </div>
            <div className="row">
              <ul style={{ listStyle: "none" }}>
                <a className="a-tag" href="#">
                  <li className="footer-li">نحوه ثبت سفارش</li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">رویه ارسال سفارش</li>
                </a>
                <a className="a-tag" href="#">
                  <li className="footer-li">شیوه های رداخت</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row mt-5">
              <p style={{ fontWeight: "700", fontSize: "17px", margin: "0px" }}>
                همراه ما باشید!
              </p>
            </div>
            <div className="row mt-3">
              <div className="col-lg-2">
                <a href="#">
                  <i className="bi bi-instagram footer-icon"></i>
                </a>
              </div>
              <div className="col-lg-2">
                <a href="#">
                  <i class="bi bi-twitter footer-icon"></i>
                </a>
              </div>
              <div className="col-lg-2">
                <a href="#">
                  <i class="bi bi-linkedin footer-icon"></i>
                </a>
              </div>
              <div className="col-lg-2">
                <a href="#">
                  <i class="bi bi-telegram footer-icon"></i>
                </a>
              </div>
            </div>
            <div className="row mt-4">
              <p style={{ fontWeight: "700", fontSize: "15px", margin: "0px" }}>
                با ثبت ایمیل از جدیدترین تخفیف ها با خبر شوید
              </p>
            </div>
            <div className="row mt-3">
              <Formik
                validationSchema={SignupSchema}
                initialValues={{ email: "" }}
                onSubmit={(values) => {
                  toast.success("ایمیل با موفقیت دریافت شد")
                }}
              >
                {({ handleSubmit, setFieldValue, values, errors, touched }) => (
                  //   <Form
                  //     style={{ display: "flex", justifyContent: "space-between" }}
                  //     onSubmit={props.handleSubmit}
                  //   >

                  <>
                    <div className="col-lg-8">
                      <Field
                        name="email"
                        component={Input}
                        placeholder="ایمیل شما"
                        onChange={(e) => setFieldValue("email", e.target.value)}
                        style={{
                          paddingRight: "8px",
                          color: "#000",
                          width: "100%",
                          borderRadius: "5px",
                          backgroundColor: "#c0c2c5",
                          border: "none",
                          height: "40px",
                        }}
                      />
                      {/* <input
                        placeholder="ایمیل شما"
                        style={{
                          paddingRight: "8px",
                          color: "#000",
                          width: "100%",
                          borderRadius: "5px",
                          backgroundColor: "#c0c2c5",
                          border: "none",
                          height: "40px",
                        }}
                        type="email"
                      /> */}
                      {errors.email && touched.email ? (
                        <div className="text-danger">{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="col-lg-3">
                      <button
                        onClick={() => {
                          handleSubmit()
                        }}
                        style={{
                          color: "#fff",
                          width: "100%",
                          borderRadius: "5px",
                          backgroundColor: "#c0c2c5",
                          border: "none",
                          height: "40px",
                        }}
                      >
                        ثبت
                      </button>
                    </div>
                    <ToastContainer
                      position="top-right"
                      autoClose={3000}
                      closeOnClick
                      rtl={true}
                      pauseOnHover
                    />
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#3c4b6d",

            borderRadius: "6px",
            height: "70px",
          }}
          className="row mx-2 my-5"
        >
          <div className="col-lg-1 d-flex justify-content-center">
            <img
              style={{ width: "50px", height: "50px" }}
              src={image7}
              alt=""
            />
          </div>
          <div className="col-lg-3 offset-lg-1">
            <p
              style={{
                margin: "0px",
                fontSize: "28px",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              دانلود اپلیکیشن دیجی کالا
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row justify-content-end">
              <div className="col-lg-2">
                <a href="#">
                  <img
                    style={{ width: "100%", height: "40px" }}
                    src={image8}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-2">
                <a href="#">
                  <img
                    style={{ width: "100%", height: "40px" }}
                    src={image9}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-2">
                <a href="#">
                  <img
                    style={{ width: "100%", height: "40px" }}
                    src={image10}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-2">
                <a href="#">
                  <img
                    style={{ width: "100%", height: "40px" }}
                    src={image11}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-1">
                <a
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                  }}
                  href="#"
                >
                  <img
                    style={{
                      borderRadius: "5px",
                      height: "32px",
                      backgroundColor: "#fff",
                    }}
                    src={image12}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px dotted #c0c2c5",
            borderBottom: "1px dotted #c0c2c5",
          }}
          className="row mx-2 my-4"
        >
          <div className="col-lg-12 mt-4">
            <p style={{ fontWeight: "700", fontSize: "15px" }}>
              فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
            </p>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <p>
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
                متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
                مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
                که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
                توانسته از این طریق مشتریان ثابت خود را داشته باشد.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <a
              style={{ color: "#19bfd3", display: "flex" }}
              className="a-tag"
              href="#"
            >
              <p style={{ margin: "0px" }}>مشاهده بیشتر</p>
              <i className="bi bi-chevron-left mx-2"></i>
            </a>
          </div>
        </div>
        <div className="row mx-2 my-4 justify-content-center">
          <div className="col-lg-8">
            <p
              style={{ fontWeight: "600", fontSize: "12px", color: "#81858b" }}
            >
              {" "}
              برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
              کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
              (فروشگاه آنلاین دیجی‌کالا) است.
            </p>
          </div>
        </div>
        <div className="row">
          <table style={{ backgroundColor: "#e0e0e2" }}>
            <tr>
              <th className="footer-th">
                <img style={{ width: "50%" }} src={image13} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image14} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image15} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image16} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image17} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image18} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image19} alt="" />
              </th>
            </tr>

            <tr>
              <th className="footer-th">
                <img style={{ width: "40%" }} src={image20} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image21} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image22} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image23} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image24} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image25} alt="" />
              </th>
              <th className="footer-th">
                <img className="footerend-image" src={image26} alt="" />
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Footer
