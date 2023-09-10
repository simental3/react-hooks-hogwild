import React, { useState } from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import NewHogForm from "./NewHogForm";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [showGreasedHogs, setShowGreasedHogs] = useState(false);
  const [sortBy, setSortBy] = useState("name");


  const hogsToDisplay = hogList
  .filter((hog) => showGreasedHogs ? hog.greased : true)
  .sort((hog1, hog2) => {
    if (sortBy === "name") {
      return hog1.name.localeCompare(hog2.name);
    } else {
      return hog1.weight - hog2.weight;
    }
  })

  console.log("hogList: ", hogList)

  const handleNewHogFormSubmit = (newHog) => {
    console.log(newHog);
    setHogList([...hogList, newHog]);
  }

  // const filterGreasedHogs = hogs.filter((hog) => hog.greased === true)
  // console.log(filteredHogs)

	return (
		<div className="App">
			<NavBar />
      <NewHogForm onHogFormSubmit={handleNewHogFormSubmit} />
      <Filter
        showGreased={showGreasedHogs}
        onCheckGreased={setShowGreasedHogs}
        sortBy={sortBy}
        onChangeSortBy={setSortBy}
      />
      <br />
      <HogList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
