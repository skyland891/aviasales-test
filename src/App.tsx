import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import style from "./App.module.scss";
import logo from "./assets/img/Logo.svg";
import StopsFilter from "./components/stops-filter";
import TicketsFilter from "./components/tickets-filter";
import { stateType } from "./types/types";
import * as fetchTicketsActions from "./store/actions/fetchTicketsActions";
import Ticket from "./components/ticket";

const stopsFilter = [
  {
    label: "Все",
  },
  {
    label: "Без пересадок",
  },
  {
    label: "1 пересадка",
  },
  {
    label: "2 пересадки",
  },
  {
    label: "3 пересадки",
  },
];

let maxId = 100;

const mapStateToProps = (state: stateType) => {
  const { tickets, isLoading, isError } = state.ticketsReducer;
  return {
    tickets,
    isLoading,
    isError,
  };
};

const connector = connect(mapStateToProps, fetchTicketsActions);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(propsFromRedux: PropsFromRedux) {
  const { tickets, fetchTickets } = propsFromRedux;
  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <header className={style.header}>
        <img src={logo} alt="logo" />
      </header>
      <div className={style.wrapper}>
        <StopsFilter stopsFilter={stopsFilter} />
        <div>
          <TicketsFilter />
          <ul>
            {tickets.map((ticket) => (
              <li key={maxId++}>
                <Ticket
                  price={ticket.price}
                  carrier={ticket.carrier}
                  segments={ticket.segments}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default connector(App);
