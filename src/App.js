import "./App.css";
import Tours from "./Component/Tours";
import data from "./data";
import React, { useState } from "react";
import Nav from "./Component/Nav";

function App() {
  const [tours, setTours] = useState(data);

  function removeCard(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  function gotoCard(id){
    const goTour = tours.filter((tour)=> tour.id === id);
    setTours(goTour);
  }

  function refreshHandler (){
	setTours(data);
  }

  if (tours.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col bg-blue-200 min-h-screen">
        <h2 className="text-2xl text-slate-900">No Tours Left, watch again</h2>
        <div>
          <button
            onClick={refreshHandler}
            className="p-2 m-3 text-lg text-white bg-slate-600 hover:bg-slate-400 rounded-lg w-[130px]"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div >
      <Nav />
      <Tours tours={tours} removeCard={removeCard} gotoCard={gotoCard}></Tours>
    </div>
  );
}

export default App;
