import React from "react";
import { stopsFilterState } from "../store/reducers/stopsFilterReducer";
import { ticketsFilterState } from "../store/reducers/ticketsFilterReducer";

export type changeHandleType = (
  e: React.ChangeEvent<HTMLInputElement>,
  label: string
) => void;

export type clickFilterType = (id: number | null) => void;

export interface stateType {
  stopsFilterReducer: stopsFilterState;
  ticketsFilterReducer: ticketsFilterState;
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

export interface IVariant {
  entryTime: string;
  departureTime: string;
  duration: string;
  stops: string[];
}

export interface ITicket {
  price: number;
  companyId: number;
  entry: string;
  departure: string;
  variants: IVariant[];
}
