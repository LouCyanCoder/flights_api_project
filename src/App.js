import logo from './logo.svg';
import './App.css';
import Flight from './Components/Flights';
import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';

function App() {

  // add new useState

  const [flights, setFlights] = useState([]);
  const [searchDeparture, setSearchDeparture] = useState("");
  const [searchArrival, setSearchArrival] = useState("");
  const [departureLocations,setDepartureLocations] = useState([]);
  const [arrivalLocations ,setArrivalLocations] = useState([]);
  
  // const url =
  //   "https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&partner=data4youcbp202106";

  // useEffect(() => {
  //   fetchFlightData();
  // }, []);

  // const fetchFlightData = async () => {
  //   const resp = await fetch(url);
  //   const result = await resp.json();
  //   console.log(result);
  //   setFlights(result.data);
  // };

  return (
    <div className="App">
    <SearchBar
      setDepartureLocations={setDepartureLocations}
      setArrivalLocations={setArrivalLocations}
      setSearchDeparture={setSearchDeparture}
      setSearchArrival={setSearchArrival}
      // fetchFlightData={fetchFlightData} 
      />

    {flights.map((item, i) => (
        <div key={i}>
          <h2>{item.flyFrom}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;