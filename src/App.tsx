import React from "react";
import style from "./App.module.scss";
import logo from "./assets/img/Logo.svg";
import StopsFilter from "./components/stops-filter";
import TicketsFilter from "./components/tickets-filter";
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

const tickets = [
  {
    price: 13400,
    companyId: 1,
    entry: "MOW",
    departure: "HKT",
    variants: [
      {
        entryTime: "10:45",
        departureTime: "08:00",
        duration: "21ч15м",
        stops: ["HKG", "JNB"],
      },
      {
        entryTime: "11:20",
        departureTime: "00:50",
        duration: "13ч30м",
        stops: ["HKG"],
      },
    ],
  },
  {
    price: 13400,
    companyId: 1,
    entry: "MOW",
    departure: "HKT",
    variants: [
      {
        entryTime: "10:45",
        departureTime: "08:00",
        duration: "21ч15м",
        stops: ["HKG", "JNB"],
      },
      {
        entryTime: "11:20",
        departureTime: "00:50",
        duration: "13ч30м",
        stops: ["HKG"],
      },
    ],
  },
  {
    price: 13400,
    companyId: 1,
    entry: "MOW",
    departure: "HKT",
    variants: [
      {
        entryTime: "10:45",
        departureTime: "08:00",
        duration: "21ч15м",
        stops: ["HKG", "JNB"],
      },
      {
        entryTime: "11:20",
        departureTime: "00:50",
        duration: "13ч30м",
        stops: ["HKG"],
      },
    ],
  },
];
let maxId = 100;

function App() {
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
                  entry={ticket.entry}
                  departure={ticket.departure}
                  companyId={ticket.companyId}
                  variants={ticket.variants}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
