import { useRef } from "react";
export default function RefHook() {
  const inputRef = useRef();
  const onClick = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" placeholder="cute..." ref={inputRef} />
      <button onClick={onClick}></button>
    </div>
  );
}
