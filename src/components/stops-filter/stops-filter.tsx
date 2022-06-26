import React from "react";
import StopsFilterItem from "../stops-filter-item";
import { IStopsFilterItem } from "../../types/types";
import style from "./stops-filter.module.scss";

interface StopsFilterProps {
  stopsFilter: IStopsFilterItem[];
}

function StopsFilter({ stopsFilter }: StopsFilterProps) {
  return (
    <div className={style["filter-wrapper"]}>
      <h2 className={style["filter-title"]}>Количество пересадок</h2>
      <ul>
        {stopsFilter.map((filter) => (
          <li key={filter.label}>
            <StopsFilterItem label={filter.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StopsFilter;
