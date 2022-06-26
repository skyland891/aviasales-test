import React from "react";
import style from "./tickets-filter-item.module.scss";
import { ITicketsFilterItem } from "../../types/types";

function TicketsFilterItem({ label }: ITicketsFilterItem) {
  return (
    <div className={style["filter-item"]}>
      <span className={style.label}>{label}</span>
    </div>
  );
}

export default TicketsFilterItem;
