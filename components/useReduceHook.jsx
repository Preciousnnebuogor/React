import { useReducer } from "react";
export default function ReducerHook() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: (state.count + 1), showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => {
        dispatch({type: "INCREMENT"});
      }}>Click here</button>
      {state.showText && <p>this is a text</p>}
    </div>
  );
}
