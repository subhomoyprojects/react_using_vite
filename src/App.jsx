import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import UseTodo from "./UseTodo";
import ReducerTodo from "./ReducerTodo";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UseTodo />} />
          <Route path="/reducerTodo" element={<ReducerTodo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
