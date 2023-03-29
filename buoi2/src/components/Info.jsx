import React from "react";
import "./Info.css";

function Info({name, phone}) {
  return (
    <div className="info-container">
      <div>{name}</div>
      <div>{phone}</div>
    </div>
  );
}
export default Info;
