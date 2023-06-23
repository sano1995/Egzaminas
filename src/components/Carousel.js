import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner " id="carousel">
          <div className=" carousel-caption  " style={{ zIndex: "9" }}>
            <form className=" d-flex justify-content-center">
              {" "}
              {/* justify-content-center, copy this <form> from navbar for search box */}
              {/* <input
                className="form-control me-2 w-75 bg-dark text-white"
                type="search"
                placeholder="Type in..."
                aria-label="Search"
              />
              <button className="btn text-white bg-success" type="submit">
                Search
              </button> */}
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://blog.beautybridge.com/wp-content/uploads/2014/04/beauty_collage.jpg"
              className="d-block w-100  "
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.plasticsurgery.org/images/Blog/top-quality-med-spa.jpg?width=700&format=jpg"
              className="d-block w-100 "
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="http://www.myenglishlanguage.com/wp-content/uploads/2018/06/massage-1024x683.jpeg"
              className="d-block w-100 "
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
