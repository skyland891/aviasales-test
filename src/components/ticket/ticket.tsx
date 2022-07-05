import React from "react";
import s7 from "../../assets/img/S7.png";
import { ITicket, IVariant } from "../../types/types";
import style from "./ticket.module.scss";

interface VariantProps {
  entry: string;
  departure: string;
  variant: IVariant;
}

function Variant({ entry, departure, variant }: VariantProps) {
  const { entryTime, departureTime, stops, duration } = variant;
  return (
    <div className={style["variant-wrapper"]}>
      <div>
        <span className={style.title}>
          {entry} - {departure}
        </span>
        <span className={style.subtitle}>
          {entryTime} - {departureTime}
        </span>
      </div>
      <div>
        <span className={style.title}>В пути</span>
        <span className={style.subtitle}>{duration}</span>
      </div>
      <div>
        <span className={style.title}>{stops.length} пересадки</span>
        <span className={style.subtitle}>{`${stops}`}</span>
      </div>
    </div>
  );
}

function Ticket({ price, companyId, entry, departure, variants }: ITicket) {
  return (
    <div className={style["ticket-wrapper"]}>
      <header className={style["ticket-header"]}>
        <span className={style.price}>{`${price} Р`}</span>
        <img src={s7} alt={`${companyId}`} />
      </header>
      <ul>
        {variants.map((variant) => (
          <li className={style.variant} key={variant.stops.length}>
            <Variant entry={entry} departure={departure} variant={variant} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ticket;
