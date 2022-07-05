import React from "react";
import style from "./tickets-filter-item.module.scss";
import { ITicketsFilterItem } from "../../types/types";

function TicketsFilterItem({
  label,
  id,
  clickFilter,
  isTargeted,
}: ITicketsFilterItem) {
  return (
    <div
      className={
        isTargeted ? style["filter-item-target"] : style["filter-item"]
      }
      onClick={() => {
        clickFilter(id);
      }}
    >
      <span className={isTargeted ? style["label-target"] : style.label}>
        {label}
      </span>
    </div>
  );
}

export default TicketsFilterItem;
