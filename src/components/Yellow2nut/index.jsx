import React from "react";
import "./style.css";
import logo from "../../static/images/shape-7.png";

const Yello2Nut = props => {
  return (
    <div class="yello2nut ">
      <img src={logo} class="lazy" />
      <h1>{props.text}</h1>
    </div>
  );
};

export default Yello2Nut;
