import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { clickFilterType, stateType } from "../../types/types";
import TicketsFilterItem from "../tickets-filter-item";
import style from "./tickets-filter.module.scss";
import * as ticketsFilterActions from "../../store/actions/ticketsFilterActions";

const filters = [
  {
    label: "Самый дешевый",
    id: 1,
  },
  {
    label: "Самый быстрый",
    id: 2,
  },
  {
    label: "Оптимальный",
    id: 3,
  },
];

const mapStateToProps = (state: stateType) => {
  return {
    targetId: state.ticketsFilterReducer.targetId,
  };
};

const connector = connect(mapStateToProps, ticketsFilterActions);

type PropsFromRedux = ConnectedProps<typeof connector>;

type TicketsFilterProps = PropsFromRedux;

function TicketsFilter(props: TicketsFilterProps) {
  const { targetFilter, targetId } = props;

  const clickFilter: clickFilterType = (id) => {
    targetFilter(id);
  };

  return (
    <div>
      <ul className={style["list-wrapper"]}>
        {filters.map((filter) => (
          <li className={style["list-item"]} key={filter.id}>
            <TicketsFilterItem
              isTargeted={filter.id === targetId}
              clickFilter={clickFilter}
              id={filter.id}
              label={filter.label}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connector(TicketsFilter);
