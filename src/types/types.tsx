export interface IStopsFilterItem {
  label: string;
}

export interface ITicketsFilterItem {
  label: string;
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
