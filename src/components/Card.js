import React from "react";

export default function Card(props) {
  const { obj } = props;
  const { title, duration, image, price, category } = obj;
  return (
    <div className="col">
      <div className="card mt-3 h-100 " style={{ width: "380px" }}>
        <img
          src={image}
          className="card-img-top"
          style={{ height: "378px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ height: "80px" }}>
            {category}
          </p>
          <div className="container w-100 d-flex justify-content-around">
            {/* <select className="m-2 h-100 w-25 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select> */}
            <div className="d-inline h-100 fs-5">{price}€</div>
            <button className="btn text-white bg-success">prideti</button>
          </div>
        </div>
      </div>
    </div>
  );
}
