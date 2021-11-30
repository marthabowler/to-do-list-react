import { useEffect, useState } from "react";
import Header from "./components/header";
import ToDoItems from "./components/to-do-items";
import "./App.css";
const axios = require("axios").default;

function App(): JSX.Element {
  const [toDoState, setToDo] = useState([]);

  const loadData = async () => {
    const resp = await fetch("http://localhost:4000/items/");
    const jsonBody = await resp.json();
    setToDo(jsonBody);
  };

  async function deleteToDo(id: number) {
    const deleteUrl = `http://localhost:4000/items/${id}`;
    await axios.delete(deleteUrl);
  }

  useEffect(() => {
    loadData();
  });

  return (
    <>
      <Header />
      <br />
      <ToDoItems toDoAllItems={toDoState} deleteToDo={deleteToDo} />
    </>
  );
}

export default App;
