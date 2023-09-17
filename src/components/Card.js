import React from "react";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <div
      key={item.id}
      className="card"
      style={{ width: "18rem", margin: "0.5rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.body.substring(0, 30)}</p>
      </div>
      <div className="card-footer" style={{display:"flex", justifyContent:"flex-end"}}>
        <Link
          to={`/postDetail/${item.id}`}
          className=" btn btn-outline-primary"
        >
          Devamını Gör
        </Link>
      </div>
    </div>
  );
}
