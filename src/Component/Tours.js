import Card from "./Card";

export default function Tours({ tours, removeCard , gotoCard}) {
  return (
    <div className="flex justify-center flex-col bg-blue-200 min-h-screen">
      <div className="flex flex-wrap grid-col justify-center">
        {tours.map((tour) => {
          return (
            <Card {...tour} removeCard={removeCard} gotoCard={gotoCard}></Card>
          );
        })}
      </div>
    </div>
  );
}
