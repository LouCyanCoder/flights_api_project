import logo from './logo.svg';
import './App.css';
import Flights from './Components/Flights';
import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';

function App() {

  // add new useState

  const [flights, setFlights] = useState([]);
  const [searchDeparture, setSearchDeparture] = useState("");
  const [searchArrival, setSearchArrival] = useState("");
  const [departureLocations,setDepartureLocations] = useState([]);
  const [arrivalLocations ,setArrivalLocations] = useState([]);
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
        <SearchBar
      setDepartureLocations={setDepartureLocations}
      setArrivalLocations={setArrivalLocations}
      setSearchDeparture={setSearchDeparture}
      setSearchArrival={setSearchArrival}
      departureLocations={departureLocations}
      arrivalLocations={arrivalLocations}
      // fetchFlightData={fetchFlightData} 
      />


      {flights.length
        ? flights.map((flight, i) => (
            <div key={flight.id}>
              <Flights flight={flight} />
            </div>
          ))
        : "No records here"}
    </div>
  );
}

export default App;