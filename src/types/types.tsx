import React from "react";
import { stopsFilterState } from "../store/reducers/stopsFilterReducer";
import { ticketsFilterState } from "../store/reducers/ticketsFilterReducer";
import { ticketsState } from "../store/reducers/ticketsReducer";

export type changeHandleType = (
  e: React.ChangeEvent<HTMLInputElement>,
  label: string
) => void;

export type clickFilterType = (id: number | null) => void;

export interface stateType {
  stopsFilterReducer: stopsFilterState;
  ticketsFilterReducer: ticketsFilterState;
  ticketsReducer: ticketsState;
}

export interface IStopsFilterItem {
  label: string;
}

export interface ITicketsFilterItem {
  label: string;
  id: number | null;
  clickFilter: clickFilterType;
  isTargeted: boolean;
}

export interface ISegmentItem {
  // Код города (iata)
  origin: string;
  // Код города (iata)
  destination: string;
  // Дата и время вылета туда
  date: string;
  // Массив кодов (iata) городов с пересадками
  stops: string[];
  // Общее время перелёта в минутах
  duration: number;
}

export interface ITicket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: ISegmentItem[];
}
