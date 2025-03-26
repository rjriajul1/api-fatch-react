import { useState } from "react";

export default function Baller({ name }) {
  const btnStyle = {
    color: "white",
  };
  const [ball, setBall] = useState(0);
  const balls = () => {

    if (ball < 6) {
      const updateBall = ball + 1;
      setBall(updateBall);
      
    }

  };
  return (
    <div className="border">
      <h1>Baller Name: {name}</h1>
      {
        ball == 6 && <h2>over end = 6</h2>
      }
      <h2>Ball: {ball}</h2>
      <button onClick={balls} style={btnStyle}>
        Add To Ball
      </button>
    </div>
  );
}
