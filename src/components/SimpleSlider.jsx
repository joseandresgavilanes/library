import React, { Component } from "react";
import Slider from "react-slick";
import "../Styles/slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="slider_item">
            <img className="slider_img" src="./bookshelf.png" alt="" />
            <p className="slider_text_l">
              "Impossible takes just a little bit longer"{" "}
              <span>Ernesto Kruger</span>
            </p>
          </div>
          <div className="slider_item">
            <img className="slider_img" src="./bookshelf2.png" alt="" />
            <p className="slider_text_r">
              "Impossible takes just a little bit longer"{" "}
              <span>Ernesto Kruger</span>
            </p>
          </div>
          <div className="slider_item">
            <img className="slider_img" src="./bookshelf3.png" alt="" />
            <p className="slider_text_l">
              "Impossible takes just a little bit longer"{" "}
              <span>Ernesto Kruger</span>
            </p>
          </div>
          <div className="slider_item">
            <img className="slider_img" src="./bookshelf4.png" alt="" />
            <p className="slider_text_r">
              "Impossible takes just a little bit longer"{" "}
              <span>Ernesto Kruger</span>
            </p>
          </div>
          <div className="slider_item">
            <img className="slider_img" src="./bookshelf5.png" alt="" />
            <p className="slider_text_l">
              "Impossible takes just a little bit longer"{" "}
              <span>Ernesto Kruger</span>
            </p>
          </div>
          <div className="slider_item">
            <img className="slider_img" src="./bookshelf6.png" alt="" />
            <p className="slider_text_r">
              "Impossible takes just a little bit longer"{" "}
              <span>Ernesto Kruger</span>
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
