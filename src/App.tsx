import { useEffect, useState } from "react";
import Header from "./components/header";
import ToDoItems from "./components/to-do-items";
import "./App.css";
import InsertToDoItem from "./components/input-form";
import { toDoOneItem } from "./components/toDoOneItem";
import axios from "axios";

function App(): JSX.Element {
  const [toDoState, setToDo] = useState<toDoOneItem[]>([]);
  const [addNewToDo, setNewToDo] = useState("");
  const [addNewDueDate, setNewDueDate] = useState("");
  const [editToDo, setEditToDo] = useState("");
  const [editDueDate, setEditDueDate] = useState("");

  const APIURL = `https://morning-coast-93999.herokuapp.com/todos/`;

  async function updateToDoStatus(arg: toDoOneItem) {
    const body = {
      completed: !arg.completed,
    };
    const res = await axios.put(`${APIURL}${arg.id}/complete`, body);
    console.log(res, "status changed successfully");
    loadData();
  }

  async function handleAddToDo() {
    const body = {
      tasks: addNewToDo,
      due_date: addNewDueDate,
    };
    const res = await axios.post(`${APIURL}`, body);
    console.log(res, "added successfully");
    loadData();
    setNewToDo("");
    setNewDueDate("");
  }

  async function deleteToDo(id: number) {
    const deleteUrl = `${APIURL}${id}/`;
    const res = await axios.delete(deleteUrl);
    console.log(res, "deleted successfully");
    loadData();
  }

  async function updateToDo(id: number) {
    const body = {
      tasks: editToDo,
      due_date: editDueDate,
    };

    const response = await axios.put(`${APIURL}${id}`, body);
    console.log(response);
    loadData();
    setEditDueDate("");
    setEditToDo("");
  }

  const loadData = async () => {
    const resp = await fetch(`${APIURL}`);
    const jsonBody = await resp.json();
    const data = jsonBody.data;
    setToDo(data);
    console.log(jsonBody.data);
  };

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
      <ToDoItems
        toDoAllItems={toDoState}
        deleteToDo={deleteToDo}
        updateToDo={updateToDo}
        editTask={editToDo}
        setEditDueDate={setEditDueDate}
        setEditTask={setEditToDo}
        editDueDate={editDueDate}
        updateToDoStatus={updateToDoStatus}
      />
    </>
  );
}

export default App;
