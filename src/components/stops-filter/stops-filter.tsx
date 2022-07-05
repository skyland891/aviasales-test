import React from "react";
import { connect, ConnectedProps } from "react-redux";
import StopsFilterItem from "../stops-filter-item";
import {
  changeHandleType,
  IStopsFilterItem,
  stateType,
} from "../../types/types";
import style from "./stops-filter.module.scss";
import * as stopsFilterActions from "../../store/actions/stopsFilterActions";

const mapStateToProps = (state: stateType) => {
  return {
    stopsCount: state.stopsFilterReducer.stopsCount,
  };
};

const connector = connect(mapStateToProps, stopsFilterActions);

type PropsFromRedux = ConnectedProps<typeof connector>;

type StopsFilterProps = PropsFromRedux & {
  stopsFilter: IStopsFilterItem[];
};

function StopsFilter(props: StopsFilterProps) {
  const { stopsFilter, stopsCount, addStopFilter, deleteStopFilter } = props;
  const mapLetterToNumber: any = {
    В: [0, 1, 2, 3],
    Б: 0,
    "1": 1,
    "2": 2,
    "3": 3,
  };

  const changeHandle: changeHandleType = (e, label) => {
    const firstLetter = label[0];
    const stopNumber = mapLetterToNumber[firstLetter];
    if (e.target.checked) {
      addStopFilter(stopNumber);
    } else {
      deleteStopFilter(stopNumber);
    }
  };
  return (
    <div className={style["filter-wrapper"]}>
      <h2 className={style["filter-title"]}>Количество пересадок</h2>
      <ul>
        {stopsFilter.map((filter) => (
          <li key={filter.label}>
            <StopsFilterItem
              checked={
                stopsCount.includes(mapLetterToNumber[filter.label[0]]) ||
                stopsCount.length === 4
              }
              label={filter.label}
              changeHandle={changeHandle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connector(StopsFilter);
