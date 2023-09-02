import { useReducer } from "react";

const render = (state, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      return [...state, `List Item ${state.length + 1}`];
    }
    case "REMOVE_LIST": {
      if (state.length > 0) {
        return state.slice(0, state.length - 1);
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

export default function ListAddRemoveReducer() {
  const [state, dispatch] = useReducer(render, []);
  const addItem = () => {
    dispatch({ type: "ADD_LIST" });
  };
  const deleteItem = () => {
    dispatch({ type: "REMOVE_LIST" });
  };
  return (
    <>
      <div className="container">
        <h1>ListAddRemoveReducer</h1>
        <ul>{Array.isArray(state) && state.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <div className="btn-holder max-width-300">
          <button type="button" onClick={addItem}>
            Add Item
          </button>
          {state.length > 0 ? (
            <button type="button" className="reset" onClick={deleteItem}>
              Delete Item
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
