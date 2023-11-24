import Card from "./Card";

export default function Tours({ tours, removeCard }) {
  return (
    <div>
      <div>
        <h1>Let's Go for a Trip</h1>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour} removeCard={removeCard}></Card>;
        })}
      </div>
    </div>
  );
}
