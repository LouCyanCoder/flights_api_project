import React, { useState, useEffect } from "react";
import "./App.css";
import Flights from "./Components/Flights";

function App() {
  const [flights, setFlights] = useState([]);
  // const [departureTime, setDepartureTime] = useState(0);
  // const [arrivalTime, setArrivalTime] = useState(0);

  const partner = "data4youcbp202106";
  const url = (departure, destination, partner) => {
    return `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${destination}&partner=${partner}`;
  };

  const fetchFlightData = async (departure = "PRG", destination = "VLC") => {
    const resp = await fetch(url(departure, destination, partner));
    const result = await resp.json();
    console.log(result.data);
    result && setFlights(result.data);
  };

  useEffect(() => {
    fetchFlightData();
  }, []);

  return (
    <div className="App">
      {flights.length ? (
        flights.map((flight, i) => (
          <div key={flight.id}>
            <Flights flight={flight} />
          </div>
        ))
      ) : (
        <marquee direction="down" vspace="100px">
          Loading...
        </marquee>
      )}
    </div>
  );
}

export default App;
