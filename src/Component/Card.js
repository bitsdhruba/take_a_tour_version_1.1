import { useState } from "react";

export default function Card({ id, name, info, image, price, removeCard, gotoCard }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }


  return (
    <div className=" w-[400px] min-h-fit flex flex-col m-5 p-2 rounded-lg shadow-xl bg-slate-300">
      <img
        src={image}
        alt="Kuch hona chahiye tha."
        className="aspect-square object-cover shadow-md rounded-lg"
      ></img>
      <div>
        <h2 className="text-xl text-red-800 m-2">₹{price}</h2>
      </div>
      <div>
        <h2 className="text-2xl text-green-600 m-2">{name}</h2>
      </div>
      <div className="text-grey-800 m-2">
        {description}
        <span onClick={readmoreHandler} className="text-yellow-600">
          {readmore ? `showless` : `readmore`}
        </span>
      </div>
      <div className="flex justify-evenly">
        <div>
          <button
            onClick={() => removeCard(id)}
            className="p-2 m-3 text-lg text-white bg-red-400 hover:bg-red-700 rounded-lg"
          >
            Not Interested
          </button>
        </div>
        <div>
          <button
            onClick={() => gotoCard(id)}
            className="w-[130px] p-2 m-3 text-lg text-white bg-green-400 hover:bg-green-700 rounded-lg"
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
}
