import { useState } from "react";
export default function HandleEvent() {
  const [count, setCount] = useState(0);
  const [count1, setCount2] = useState(0);

  function handleSubmit() {
    console.log("i am okay");
    setCount(count + 1);
  }

  function handleSubmit2() {
    console.log("i love you");
    setCount2(count1 - 1);
  }
  return (
    <div>
      {count}
      <button onClick={handleSubmit}>increment</button>
      {count1}
      <button onClick={handleSubmit2}>decrement</button>
    </div>
  );
}
