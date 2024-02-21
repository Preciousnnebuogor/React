import { useLayoutEffect, useRef, useEffect } from "react";
export default function LayoutEffect() {
  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "hello";
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef}
       value="Felix" />
    </div>
  );
}
 