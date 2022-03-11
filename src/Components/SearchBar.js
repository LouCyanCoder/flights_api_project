function SearchBar({setSearchDeparture, setSearchArrival, fetchFlightData, setDepartureLocations, setArrivalLocations}) {  
    const fetchLocations = async (term, setData) => {
    const url = `https://api.skypicker.com/locations?term=${term}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result);
    setData(result.locations);
  };

    return(
        <div>
            <label>Departure: </label>
            <input 
            type="search" 
            id="searchBar1" 
            onChange={(e) => {
            fetchLocations(e.target.value, setDepartureLocations)
            setSearchDeparture(e.target.value)}} />
            {' '}
            
            <label>Arrival: </label>
            <input 
            type="search" 
            id="searchBar2" 
            onChange={(e) => {
            fetchLocations(e.target.value, setArrivalLocations)
            setSearchArrival(e.target.value)}} />
            {' '}

            <button onClick={fetchFlightData}>Search</button>
        </div>
    )
}

export default SearchBar;

