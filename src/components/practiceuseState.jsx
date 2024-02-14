import { useState} from "react"
export default function HomePage() {
  
    const [name, setName] = useState("")
    const [age, setAge] = useState("")


    const handClick = ()=> {
        setName("Isioma")
        console.log("i am fine")
    }

    const handClickme = (name)=> {
        setAge("34")
        alert("a bautiful name called " + name)
    }
    return <div>
        <p>{name}</p>
      <button onClick={handClick}>submit</button> 
      <p>{age}</p>  
      <button onClick={ ()=> {
        handClickme("precious")}}>click</button>
    </div>
}