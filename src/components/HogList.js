import React from "react";
import HogTile from "./HogTile";

function HogList({ hogs }) {
  // const hogTile = hogs.map((hog) => (
  //   <HogTile key={hog.name + hog.weight} hog={hog} />
  // ))
  const hogTileItems = hogs.map((hog) => (
    <HogTile key={hog.name + hog.weight} {...hog} />
  ))

  return (
    <div className="ui three stackable cards">
      {hogTileItems}
    </div>
  )
}

export default HogList;