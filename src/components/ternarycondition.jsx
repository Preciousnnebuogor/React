import HomeProps from "./homepropsvite";
import { MapArrary } from "./mapArrary";

export default function TernaryCondition(){
    const display = false;
    return display ? <HomeProps/>: <MapArrary/>
}

//this is using ternary operator to render conditional statement//