import React, { useState, useEffect } from "react";
import "./App.css";
import { DateTime } from 'luxon';

function App() {
  const [flights, setFlights] = useState([]);
  // const [departureTime, setDepartureTime] = useState(0);
  // const [arrivalTime, setArrivalTime] = useState(0);


  const url =
    "https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&partner=data4youcbp202106";

  useEffect(() => {
    fetchFlightData();
  }, []);

  const fetchFlightData = async () => {
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result);
    setFlights(result.data);
  };
  return <div className="App">
    {flights.map((item, i) => (
      <div key={i}>
        <h2>
          {item.flyFrom}
        </h2>
        <h3>
          Departure time:
        </h3>
        <p>{DateTime.fromMillis(item.dTime * 1000).toFormat('hh:mm')}</p>

        <h2>
          {item.flyTo}
        </h2>
        <h3>
          Arrival time:
        </h3>
        <p>{DateTime.fromMillis(item.aTime * 1000).toFormat('hh:mm')}</p>
      </div>
    ))}
  
  </div>;
}

export default App;
