import React from "react";
import piggy from "../assets/porco.png";

  // Display Hog Tiles (Name & Image)
  // Click on Tile Displays Details (Specialty, Weight, Greased, & Highest Medal Achieved)
  // Filter By (Greased Hogs or All)
  // Sort By (Name or Weight)
  // Bonus: Hide Hogs (Don't Delete)
  // Bonus: Add New Hogs Form
  // Bonus: Implement Semantics Cards

const NavBar = () => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default NavBar;
