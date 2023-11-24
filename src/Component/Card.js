import { useState } from "react";

export default function Card({ id, name, info, image, price, removeCard }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div>
      <img src={image} alt="Kuch hona chahiye tha."></img>
      <div>
        <h2>{price}</h2>
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        {description}
        <span onClick={readmoreHandler}>
          {readmore ? `showless` : `readmore`}
        </span>
      </div>
      <div>
        <button onClick={() => removeCard(id)}>Not Interested</button>
      </div>
    </div>
  );
}
