import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import UseTodo from "./UseTodo";
import ReducerTodo from "./ReducerTodo";
import ListAddRemove from "./ListAddRemove";
import ListAddRemoveReducer from "./ListAddRemoveReducer";
import Login from "./Login";
import FormValidation from "./FormValidation";
import ReactValidation from "./ReactValidation";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/useTodo" element={<UseTodo />} />
          <Route path="/reducerTodo" element={<ReducerTodo />} />
          <Route path="/listAddRemove" element={<ListAddRemove />} />
          <Route path="/listAddRemoveReducer" element={<ListAddRemoveReducer />} />
          <Route path="/formValidation" element={<FormValidation />} />
          <Route path="/reactValidation" element={<ReactValidation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
