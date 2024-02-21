import { useState,useEffect } from "react";
export default function Effect() {
  const [query, setQuery] = useState("pizza");
  useEffect(()=>{
    function presh(){
        console.log("i am good")
    }
    presh()
  }, [])
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}


 