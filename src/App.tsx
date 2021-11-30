import { useEffect, useState } from "react";
import Header from "./components/header";
import ToDoItems from "./components/to-do-items";
import "./App.css";
import InsertToDoItem from "./components/input-form";
const axios = require("axios").default;

function App(): JSX.Element {
  const [toDoState, setToDo] = useState([]);
  const [addNewToDo, setNewToDo] = useState("");
  const [addNewDueDate, setNewDueDate] = useState("");

  async function handleAddToDo() {
    const body = {
      description: addNewToDo,
      isComplete: false,
      dueDate: addNewDueDate,
    };
    const res = await axios.post("http://localhost:4000/items/", body);
    console.log(res, "added successfully");
  }

  const loadData = async () => {
    const resp = await fetch("http://localhost:4000/items/");
    const jsonBody = await resp.json();
    setToDo(jsonBody);
  };

  async function deleteToDo(id: number) {
    const deleteUrl = `http://localhost:4000/items/${id}`;
    const res = await axios.delete(deleteUrl);
    console.log(res, "deleted successfully");
  }

  useEffect(() => {
    loadData();
  });

  return (
    <>
      <Header />
      <br />
      <InsertToDoItem
        newDueDate={addNewDueDate}
        newTask={addNewToDo}
        setNewDueDate={setNewDueDate}
        setNewTask={setNewToDo}
        addNewTodoFromInput={handleAddToDo}
      />
      <ToDoItems toDoAllItems={toDoState} deleteToDo={deleteToDo} />
    </>
  );
}

export default App;
