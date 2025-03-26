import { useState } from "react";

export default function BatsMan() {
  const batsManStyle = {
    color: "white",
  };

  const [runs, setRuns] = useState(0);
  const [sixes, setSixes]=useState(0);
  const[fours, setFours]=useState(0)

  const single = () => {
    const single = runs + 1;
    setRuns(single);
  };
  const four = () => {
    const four = runs + 4;
    const fourUpdate = fours + 1;
    setFours(fourUpdate)
    setRuns(four);
  };
  const six = () => {
    const six = runs + 6;
    const sixesUpdate = sixes + 1;
    setRuns(six);
    setSixes(sixesUpdate)
  };
  return (
    <div className="border">

      <h3>Player: Bangle Batsman</h3>

      <h2>six couter :  {sixes}</h2>
      <h2>four counter : {fours}</h2>

      {
      runs >= 50 && "congradtions your score 50"
      }
      

      <h1>Scroe: {runs} </h1>
      <button style={batsManStyle} onClick={single}>
        single
      </button>
      <button style={batsManStyle} onClick={four}>
        Four
      </button>
      <button style={batsManStyle} onClick={six}>
        Six
      </button>
    </div>
  );
}
