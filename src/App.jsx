import "./App.css";
import Baller from "./components/ballers";
import BatsMan from "./components/batsman";
import Counter from "./components/counter";

function App() {
  const btnStyle = {
    color: "white",
  };

  function btnHandler() {
    alert("Iam clicked already");
  }

  const btnHandler3 = () => {
    alert("Iam clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Baller name={"Sakib"}></Baller>
      <BatsMan></BatsMan>

      <Counter></Counter>

      <button onClick={btnHandler} style={btnStyle}>
        Click Me
      </button>

      <button
        onClick={function handler() {
          alert("Iam clike 2");
        }}
        style={btnStyle}
      >
        Click 2
      </button>

      <button onClick={btnHandler3} style={btnStyle}>
        clicked 3
      </button>

      <button style={btnStyle} onClick={() => alert("clicked 4")}>
        clicked 4
      </button>

      <button style={btnStyle} onClick={() => handleAdd5(10)}>
        Clicked add 5
      </button>
    </>
  );
}

export default App;
