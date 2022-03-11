import React from "react";
import { DateTime } from "luxon";

function Flights({ flight }) {
  return (
    <div>
      <div>
        <div>Departing from:</div>
        <div>{flight.cityFrom}</div>
      </div>
      <div>
        <div>To:</div>
        <div>{flight.cityTo}</div>
      </div>
      <div>
        <div>Flight Duration:</div>
        <div>{flight.fly_duration}</div>
      </div>
      <div>
        <div>Departure Time:</div>
        <div>{DateTime.fromMillis(flight.dTime * 1000).toFormat("hh:mm")}</div>
      </div>
      <div>
        <div>Price:</div>
        <div>{flight.price}€</div>{" "}
      </div>
      <div>
        <button>Buy the Ticket</button>
      </div>
    </div>
  );
}

export default Flights;
