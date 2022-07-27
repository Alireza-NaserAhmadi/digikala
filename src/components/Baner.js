/** @format */
import React from "react"
import Slider from "react-slick"
import baner1 from "../images/baner1.jpg"
import baner2 from "../images/baner2.jpg"
import baner3 from "../images/baner3.jpg"
import baner4 from "../images/baner5.jpg"

import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

const slideImages = [
  {
    url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/09befe43354738b178cc3bf8a9cc7d4fee960077_1656909820.jpg?x-oss-process=image/quality,q_95",
    caption: "aliiiiiiiii",
    image: baner1,
  },
  {
    url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/09befe43354738b178cc3bf8a9cc7d4fee960077_1656909820.jpg?x-oss-process=image/quality,q_95",
    caption: "Slide 2",
    image: baner2,
  },
  {
    url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/09befe43354738b178cc3bf8a9cc7d4fee960077_1656909820.jpg?x-oss-process=image/quality,q_95",
    caption: "Slide 3",
    image: baner3,
  },
  ,
  {
    url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/09befe43354738b178cc3bf8a9cc7d4fee960077_1656909820.jpg?x-oss-process=image/quality,q_95",
    caption: "Slide 3",
    image: baner4,
  },
]

const Baner = () => {
  return (
    <>
      <div className="container-fluid p-0" style={{ direction: "rtl" }}>
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div>
                  <img className="tasvir" src={slideImage.image} alt="" />
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </>
  )
}

export default Baner
