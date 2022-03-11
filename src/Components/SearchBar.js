function SearchBar({setSearchDeparture, setSearchArrival, fetchFlightData, setDepartureLocations, setArrivalLocations, departureLocations, arrivalLocations}) {  
    const fetchLocations = async (term, setData) => {
    const url = `https://api.skypicker.com/locations?term=${term}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result);
    setData(result.locations);
  };

    return(
        <div className="searchbar_container">
            <label>Departure: </label>
            <div>     
                <input 
                    type="search" 
                    id="searchBar1" 
                    onChange={(e) => {
                    fetchLocations(e.target.value, setDepartureLocations)
                    setSearchDeparture(e.target.value)}} />
                        <ul>
                            {departureLocations.map(l => (
                                <li>{l.code}</li>
                            ))}
                        </ul>
            </div>
            {' '}
            <label>Arrival: </label>
            <div>
                <input 
                    type="search" 
                    id="searchBar2" 
                    onChange={(e) => {
                    fetchLocations(e.target.value, setArrivalLocations)
                    setSearchArrival(e.target.value)}} />
                    <ul>
                        {arrivalLocations.map(l => (
                                <li>{l.code}</li>
                            ))}
                    </ul>
                </div>
                {' '}
            <button onClick={fetchFlightData}>Search</button>
        </div>
    )
}

export default SearchBar;

