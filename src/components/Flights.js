import React from "react";
import { DateTime } from "luxon";
import "./Flights.css";

function Flights({ flight }) {
  return (
    <div className="container">
      <div className="container_cards">
        <div className="container_cards--title">Departing from:</div>
        <div className="container_cards--from">{flight.cityFrom}</div>
      </div>
      <div className="container_cards">
        <div className="container_cards--title">To:</div>
        <div className="container_cards--to">{flight.cityTo}</div>
      </div>
      <div className="container_cards">
        <div className="container_cards--title">Flight Duration:</div>
        <div className="container_cards--duration">{flight.fly_duration}</div>
      </div>
      <div className="container_cards">
        <div className="container_cards--title">Departure Time:</div>
        <div className="container_cards--date">
          {DateTime.fromMillis(flight.dTime * 1000).toFormat("hh:mm")}
        </div>
      </div>
      <div className="container_cards">
        <div>Price:</div>
        <div>{flight.price}€</div>{" "}
      </div>
      <div>
        <button className="btn">Buy the Ticket</button>
      </div>
    </div>
  );
}

export default Flights;
