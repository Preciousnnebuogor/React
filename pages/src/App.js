import LayoutEffect from "../../components/useLayoutEffect";
import ReducerHook from "../../components/useReduceHook";
import RefHook from "../../components/useRef";

function App() {
  return (
    <div>
      <ReducerHook />
      <RefHook />
      <LayoutEffect />
    </div>
  );
}

export default App;
