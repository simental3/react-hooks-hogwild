import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs, onDelete }) {
  const hogCardItems = hogs.map((hog) => (
    <HogCard key={hog.name + hog.weight} hog={hog} onDelete={onDelete} />
  ))

  return (
    <div className="ui three stackable cards">
      {hogCardItems}
    </div>
  )
}

export default HogList;