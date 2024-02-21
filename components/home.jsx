import { useState } from "react";
import HomePage from "./practiceuseState";
export default function Home() {
  const [name, setName] = useState("");
  const [arrange, setArrange] = useState("peter");

  const handleClick = () => {
    setName("john");
  };

  const handleClickAgain = (name) => {
    setArrange("come");
    //alert("sky" + name)
  };
  return (
    <div>
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>click me</button>
      <br />
      <p>{arrange}</p>
      <button
        onClick={() => {
          handleClickAgain("precious");
        }}
      >
        click me again
      </button>
    </div>
  );
}
