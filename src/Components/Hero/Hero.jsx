import React from "react";
import img1 from './blog1.png';
import img2 from './blog2.png';
import img3 from './blog3.png';



const Hero = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
           height={750}
            src={img1}
            alt="Menu 1"
            className="d-block w-100"
            
          />
          <div className="container">
            <div className="carousel-caption text-start mb-5">
              <h1 >WELLCOME TO TABLE <sub>42</sub></h1>
              <p>
                Come form the food form the company Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at quasi doloribus iste ratione consequuntur sit voluptas mollitia quos eaque, magnam id officiis voluptates quae laboriosam porro.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  RESERVE TABLE
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
          height={750}
            src={img2}
            className="d-block w-100"
            alt="Meun-2"
          />
          <div className="container">
            <div className="carousel-caption text-start mb-5 text-dark">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
          height={750}
            src={img3}
            className="d-block w-100"
            alt="Menu 3"
          />
          <div className="container ">
            <div className="carousel-caption text-start mb-5 text-dark ">
              <h1>One more for good measure.</h1>
              <p >
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
