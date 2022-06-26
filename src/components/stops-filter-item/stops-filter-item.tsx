import React from "react";
import { IStopsFilterItem } from "../../types/types";
import style from "./stops-filter-item.module.scss";

function StopsFilterItem({ label }: IStopsFilterItem) {
  return (
    <div className={style["item-wrapper"]}>
      <label className={style.label}>
        <input className={style.checkbox} type="checkbox" />
        <span className={style["custom-checkbox"]}></span>
        {label}
      </label>
    </div>
  );
}

export default StopsFilterItem;
