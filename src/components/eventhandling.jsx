import { useState } from "react";
export default function HandleEvent() {
  const [count, setCount] = useState(0);
  const [count1, setCount2] = useState(0);
  const [name, setName] = useState("");

  function handleSubmit() {
    console.log("i am okay");
    setCount(count + 1);
  }

  function handleSubmit2() {
    console.log("i love you");
    setCount2(count1 - 1);
  }

  function handleChange(e) {
    console.log("thank you");
    setName(e.target.value);
  }
  return (
    <div>
      {count}
      <button onClick={handleSubmit}>increment</button>
      <br/>
      {count1}
      <button onClick={handleSubmit2}>decrement</button>
      <br/>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}
