import React from "react";

function HogDetail({ specialty, weight, greased, medal }) {
  return (
    <div className="description">
      <p><strong>Specialty: </strong>{specialty}</p>
      <p><strong>Weight: </strong>{weight}</p>
      <strong>{greased ? "Greased Hog" : "🧼 Non-Greased Hog"}</strong>
      <p><strong>🏅 Medal: </strong>{medal}</p>
    </div>
  )
}

export default HogDetail;