import {useLayoutEffect} from "react"
export default function LayoutEffect(){
 useLayoutEffect(()=>{
    console.log("i love you")
 },[])
    return <div>

    </div>
}