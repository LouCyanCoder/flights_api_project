import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

function Flights({ id, flyFrom, flyTo, dTime, aTime, partner }) {
  return (
      <div key={id}>
      <h2>{flyFrom}</h2>
    </div>
  );
    
}
export default Flights;