import "./App.css";
import Tours from "./Component/Tours";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [tours, setTours] = useState(data);

  function removeCard(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  function refreshHandler (){
	setTours(data);
  }

  if (tours.length === 0) {
    return <div>
		<h2>No Tours Left, Saab toh dekh liya bhosdike</h2>
		<div>
			<button onClick = {refreshHandler}>Refresh</button>
		</div>
	</div>;
  }

  return (
    <div>
      <Tours tours={tours} removeCard={removeCard}></Tours>
    </div>
  );
}

export default App;
