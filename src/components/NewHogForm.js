import React, { useState } from "react";

function NewHogForm({ onHogFormSubmit }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState(parseFloat("0.0"));
  const [medal, setMedal] = useState("diamond");
  const [image, setImage] = useState("");


  const medalArray = ["diamond", "platinum", "gold", "silver", "bronze", "wood"];
  const medalOptionElements = medalArray.map((medal) => (
    <option key={medal}>{medal}</option>)
  )


  const handleSubmit = (e) => {
    e.preventDefault();
    // create new hog object to pass into callback function
    const newHog = {
      name,
      specialty,
      greased,
      weight,
      medal,
      image,
    }
    onHogFormSubmit(newHog);
    // reset input fields after submitting form
    setName("");
    setSpecialty("");
    setGreased(true);
    setWeight(parseFloat("0.0"));
    setMedal("gold");
    setImage("");
  }


  return (
    <form className="new-hog-form" onSubmit={handleSubmit}>
      <label>Name
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Specialty
        <input type="text" name="specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />        
      </label>
      <label>Greased
        <input type="checkbox" name="greased" checked={greased} onChange={(e) => setGreased(e.target.checked)} />
      </label>
      <label>Weight
        <input type="number" name="weight" min="0.0" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <label>Medal
        <select name="medal" value={medal} onChange={(e) => setMedal(e.target.value)}>
          {medalOptionElements}
        </select>
      </label>
      <label>Image
        <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <input type="submit" value="Add hog" />
    </form>
  )
}

export default NewHogForm;