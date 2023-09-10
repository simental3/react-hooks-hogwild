import React, { useState } from "react";
import { medals } from "../porkers_data";

function NewHogForm({ onHogFormSubmit }) {
  const [newName, setNewName] = useState("");
  const [newSpecialty, setNewSpecialty] = useState("");
  const [newWeight, setNewWeight] = useState("0.0");
  const [newGreased, setNewGreased] = useState(false);
  const [newMedal, setNewMedal] = useState("platinum");
  const [newImage, setNewImage] = useState("");

  console.log("Initial newGreased value:", newGreased);

  const medalOptionElements = medals.map((medal) => (
    <option key={medal}>{medal}</option>
  ))

  const handleSubmit = (e) => {
    e.preventDefault();
    onHogFormSubmit({
      name: newName,
      specialty: newSpecialty,
      weight: newWeight,
      greased: newGreased,
      medal: newMedal,
      image: newImage,
    });
  }

  return (
    <form className="new-hog-form" onSubmit={handleSubmit}>
      <label>Name
        <input type="text" name="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
      </label>
      <hr />
      <label>Specialty
        <input type="text" name="specialty" value={newSpecialty} onChange={(e) => setNewSpecialty(e.target.value)} />
      </label>
      <hr />
      <label>Weight
        <input type="number" name="weight" step="0.1" value={newWeight} onChange={(e) => setNewWeight(e.target.value)} />
      </label>
      <hr />
      <label>Greased
        <input type="checkbox" name="greased" value={newGreased} onChange={(e) => setNewGreased(e.target.checked)} />
      </label>
      <hr />
      <label>Medal
        <select name="medal" value={newMedal} onChange={(e) => setNewMedal(e.target.value)}>
          {medalOptionElements}
        </select>
      </label>
      <label>Image
        <input type="text" name="image" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
      </label>
      <input type="submit" value="Add hog" />
    </form>
  )
}

export default NewHogForm;