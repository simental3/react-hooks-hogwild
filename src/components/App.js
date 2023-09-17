import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import HogList from "./HogList";
import NewHogForm from "./NewHogForm";

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

  const handleNewHogFormSubmit = (newHog) => {
    setHogList([...hogList, newHog]);
    console.log(newHog);
  }

  const handleDeleteHog = (id) => {
    setHogList(hogList.filter(({ name, weight }) => name + weight !== id));
  }

  
	return (
		<div className="App">
			<Header />
      <NewHogForm onHogFormSubmit={handleNewHogFormSubmit} />
      <Filter showGreased={showGreasedHogs} onCheckGreased={setShowGreasedHogs} sortBy={sortBy} onChangeSortBy={setSortBy} />
      <HogList hogs={hogsToDisplay} onDelete={handleDeleteHog} />
		</div>
	);
}

export default App;
