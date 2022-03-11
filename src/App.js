import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [flights, getFlights] = useState([]);
  const url =
    "https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&partner=data4youcbp202106";

  useEffect(() => {
    fetchFlightData();
  }, []);

  const fetchFlightData = async () => {
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result);
    getFlights(result);
  };
  return <div className="App"></div>;
}

export default App;
