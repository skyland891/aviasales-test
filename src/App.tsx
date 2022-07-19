import React, { useEffect, useMemo } from "react";
import { connect, ConnectedProps } from "react-redux";
import style from "./App.module.scss";
import logo from "./assets/img/Logo.svg";
import StopsFilter from "./components/stops-filter";
import TicketsFilter from "./components/tickets-filter";
import { stateType } from "./types/types";
import * as fetchTicketsActions from "./store/actions/fetchTicketsActions";
import Ticket from "./components/ticket";
import Loader from "./components/loader";

const mapStateToProps = (state: stateType) => {
  const {
    tickets,
    stop,
    isLoading,
    isError,
    showedTickets,
    searchId,
    showedTicketsLength,
  } = state.ticketsReducer;
  const { stopsCount } = state.stopsFilterReducer;
  const { targetId } = state.ticketsFilterReducer;
  return {
    tickets,
    showedTickets,
    stop,
    isLoading,
    isError,
    stopsCount,
    targetId,
    searchId,
    showedTicketsLength,
  };
};

const connector = connect(mapStateToProps, fetchTicketsActions);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(propsFromRedux: PropsFromRedux) {
  let maxId = useMemo(() => 100, []);

  const stopsFilter = useMemo(
    () => [
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
    ],
    []
  );

  const {
    tickets,
    stop,
    fetchTickets,
    stopsCount,
    showedTickets,
    filterTickets,
    sortTickets,
    fetchSearchId,
    targetId,
    searchId,
    showedTicketsLength,
    addLength,
    isLoading,
  } = propsFromRedux;

  useEffect(() => {
    fetchSearchId();
  }, []);
  useEffect(() => {
    if (!stop && searchId) {
      fetchTickets(searchId).then(() => {
        if (showedTicketsLength === 0) {
          addLength();
        }
      });
    }
    if (stopsCount.length !== 0 && targetId) {
      filterTickets(stopsCount);
      sortTickets(targetId);
    }
  }, [tickets.length, searchId]);
  useEffect(() => {
    filterTickets(stopsCount);
    if (targetId) {
      sortTickets(targetId);
    }
  }, [stopsCount]);
  useEffect(() => {
    if (targetId) {
      sortTickets(targetId);
    }
  }, [targetId]);

  const hasFilters = stopsCount.length !== 0;
  const endOfTickets = stop && showedTicketsLength >= showedTickets.length;
  const showedTicketsLoading =
    isLoading && hasFilters && showedTicketsLength >= showedTickets.length;

  const NoData =
    (!hasFilters || !isLoading) && showedTickets.length === 0 ? (
      <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
    ) : null;
  const Loading = showedTicketsLoading ? <Loader /> : null;
  const ShowedButton =
    !endOfTickets && hasFilters && showedTickets.length !== 0 ? (
      <button
        className={style["showed-button"]}
        onClick={() => {
          addLength();
        }}
      >
        Показать еще 5 билетов
      </button>
    ) : null;

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
            {showedTickets.map((ticket, index) =>
              index < showedTicketsLength ? (
                <li key={maxId++}>
                  <Ticket
                    price={ticket.price}
                    carrier={ticket.carrier}
                    segments={ticket.segments}
                  />
                </li>
              ) : null
            )}
            {Loading}
            {NoData}
            {ShowedButton}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default connector(App);
