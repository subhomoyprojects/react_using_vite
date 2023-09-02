import { useState } from "react";

export default function ListAddRemove() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const deleteItem = () => {
    if (items.length > 0) {
      console.log(items.length, "hhh");
      const updatedItems = items.slice(0, items.length - 1);
      setItems(updatedItems);
    }
  };

  return (
    <div>
      <ul>{Array.isArray(items) && items.map((item, index) => <li key={index}>{item}</li>)}</ul>
      <button onClick={addItem}>Add Item</button>
      {items.length > 0 && <button onClick={deleteItem}>Delete Item</button>}
    </div>
  );
}
