import { useState } from "react";
export default function Home() {
  const [name, setName] = useState();
  const [arrange, setArrange] = useState("john");

  const handleclick = () => {
    setName("pride");
    console.log("hello wold");
  };

  const handleClickMe = (name) => {
    setArrange("love");
    //alert("love " + name);
  };

  return (
    <div>
      <h2>homepage</h2>
      <p>{name}</p>
      <button onClick={handleclick}>click me</button>
      <br />
      <p>{arrange}</p>
      <button
        onClick={() => {
          handleClickMe("precious");
        }}
      >
        click me again
      </button>
    </div>
  );
}
