import { Suspense } from "react";
import "./App.css";
import Baller from "./components/ballers";
import BatsMan from "./components/batsman";
import Counter from "./components/counter";
import Users from "./components/users";
import Posts from "./components/posts";

// ! data fetching 
const fatchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json());

const posts =async ()=>{
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
return res.json();
}

function App() {
  const friendPosts = posts();
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

      <Suspense fallback={<p>wait for new post.....</p>}>
      <Posts posts={friendPosts}></Posts>
      </Suspense>

      <Suspense fallback={<p>wait come user.....</p>}>
      <Users fetchUsers={fatchUsers}></Users>
      </Suspense>

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
