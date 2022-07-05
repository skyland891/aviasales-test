import React from "react";
import { changeHandleType } from "../../types/types";
import style from "./stops-filter-item.module.scss";

interface StopsFilterItemProps {
  checked: boolean;
  label: string;
  changeHandle: changeHandleType;
}

function StopsFilterItem({
  label,
  changeHandle,
  checked,
}: StopsFilterItemProps) {
  return (
    <div className={style["item-wrapper"]}>
      <label className={style.label}>
        <input
          className={style.checkbox}
          type="checkbox"
          onChange={(e) => {
            changeHandle(e, label);
          }}
          checked={checked}
        />
        <span className={style["custom-checkbox"]}></span>
        {label}
      </label>
    </div>
  );
}

export default StopsFilterItem;
