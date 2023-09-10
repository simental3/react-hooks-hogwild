import React from "react";

function HogDetails({ specialty, weight, greased, medal }) {
  return (
    <div className="description">
      <p>Specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>{greased ? "Greased" : "Not Greased"} </p>
      <p>Medal: {medal}</p>
    </div>
  )
}

export default HogDetails;