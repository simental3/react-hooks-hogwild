import React, { useState } from "react";
import HogDetail from "./HogDetail";

function HogCard({ hog, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isHidden, setIsHidden] = useState(false);


  function clickForDetails() {
    setShowDetails((previousShowDetails) => !previousShowDetails)
  }

  function handleHidePig() {
    setIsHidden(true);
  }
  if (isHidden) return null;


  const hogDetailItems = <HogDetail specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]} />

  return (
    <div className="ui card eight wide column pigTile">
      <button onClick={() => onDelete(hog.name + hog.weight)}>Delete Hog</button>
      <div className="image">
        <img src={hog.image} alt={"A picture of " + hog.name + " the pig"} />
      </div>
      <div className="content">
        <h3 className="header">{hog.name}</h3>
      </div>
      {showDetails ? hogDetailItems : null}
      <button className="ui button" onClick={clickForDetails}>{showDetails ? "Less" : "More"} Info</button>
      <button className="ui button" onClick={handleHidePig}>Hide Pig 🐽</button>
    </div>
  )
}

export default HogCard;