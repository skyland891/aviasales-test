import React from "react";
import style from "./loader.module.scss";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div className={style["lds-spinner"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
