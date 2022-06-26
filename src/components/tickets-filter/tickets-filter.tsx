import React from "react";
import TicketsFilterItem from "../tickets-filter-item";
import style from "./tickets-filter.module.scss";

const filters = [
  {
    label: "Самый дешевый",
  },
  {
    label: "Самый быстрый",
  },
  {
    label: "Оптимальный",
  },
];

function TicketsFilter() {
  return (
    <div>
      <ul className={style["list-wrapper"]}>
        {filters.map((filter) => (
          <li className={style["list-item"]} key={filter.label}>
            <TicketsFilterItem label={filter.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketsFilter;
