import React, { useState } from "react";
import HogDetails from "./HogDetails";

// function HogTile({ hog, onTileClick }) {
function HogTile({ name, image, specialty, weight, greased, ["highest medal achieved"]: medal }) {
  const [showDetails, setShowDetails] = useState(false)

  function clickForDetails() {
    setShowDetails((showDetails) => !showDetails)
  }

  const hogDetailItems = (
    <HogDetails specialty={specialty} weight={weight} greased={greased} medal={medal} />
  )

  return (
    <div className="ui card eight wide column pigTile">
      <div className="image">
        <img src={image} alt={"Picture of " + name + "the pig"} />
      </div>
      <div className="content">
        <h3 className="header">{name}</h3>
      </div>
      {showDetails ? hogDetailItems : null}
      <button className="ui button" onClick={clickForDetails}>{showDetails ? "Less" : "More"} Info</button>
    </div>
  )
}

export default HogTile;