import React from "react";
import { ITicket, ISegmentItem } from "../../types/types";
import {
  addDurationInMinToDate,
  dateFormat,
  durationFormat,
} from "../../utils/timeFormat";
import style from "./ticket.module.scss";

interface SegmentItemProps {
  item: ISegmentItem;
}

function SegmentItem({ item }: SegmentItemProps) {
  const { date, destination, duration, stops, origin } = item;
  const hasStopsLabel = stops.length === 0 ? "Без пересадок" : null;
  const oneStopLabel = stops.length === 1 ? "1 пересадка" : null;
  const moreThenOneStopsLabel =
    stops.length > 1 ? `${stops.length} пересадки` : null;

  return (
    <div className={style["variant-wrapper"]}>
      <div>
        <span className={style.title}>
          {origin} - {destination}
        </span>
        <span className={style.subtitle}>
          {dateFormat(date)} - {addDurationInMinToDate(date, duration)}
        </span>
      </div>
      <div>
        <span className={style.title}>В пути</span>
        <span className={style.subtitle}>{durationFormat(duration)}</span>
      </div>
      <div>
        <span className={style.title}>
          {hasStopsLabel}
          {oneStopLabel}
          {moreThenOneStopsLabel}
        </span>
        <span className={style.subtitle}>{`${stops}`}</span>
      </div>
    </div>
  );
}

function Ticket({ price, segments, carrier }: ITicket) {
  return (
    <div className={style["ticket-wrapper"]}>
      <header className={style["ticket-header"]}>
        <span className={style.price}>{`${price} Р`}</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt={`${carrier}`} />
      </header>
      <ul>
        {segments.map((segmentItem) => (
          <li className={style.variant} key={segmentItem.stops.length}>
            <SegmentItem item={segmentItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ticket;
