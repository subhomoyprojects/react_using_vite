import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import UseTodo from "./UseTodo";
import ReducerTodo from "./ReducerTodo";
import ListAddRemove from "./ListAddRemove";
import ListAddRemoveReducer from "./ListAddRemoveReducer";
import NewTask from "./NewTask";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NewTask />} />
          <Route path="/useTodo" element={<UseTodo />} />
          <Route path="/reducerTodo" element={<ReducerTodo />} />
          <Route path="/listAddRemove" element={<ListAddRemove />} />
          <Route path="/listAddRemoveReducer" element={<ListAddRemoveReducer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
