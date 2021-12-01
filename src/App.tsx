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
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  async function handleAddToDo() {
    const body = {
      tasks: addNewToDo,
      due_date: addNewDueDate,
    };
    const res = await axios.post("http://localhost:4000/todos/", body);
    console.log(res, "added successfully");
    loadData();
  }

  async function deleteToDo(id: number) {
    const deleteUrl = `http://localhost:4000/todos/${id}`;
    const res = await axios.delete(deleteUrl);
    console.log(res, "deleted successfully");
    loadData();
  }

  async function updateToDo(arg: toDoOneItem) {
    const body = {
      completed: !arg.completed,
    };
    const updateUrl = `http://localhost:4000/todos/${arg.id}`;
    const res = await axios.put(updateUrl, body);
    console.log(res, "updated successfully");
  }

  const loadData = async () => {
    const resp = await fetch("http://localhost:4000/todos/");
    const jsonBody = await resp.json();
    const data = jsonBody.data;
    setToDo(data);
    console.log(jsonBody.data);
  };

  useEffect(() => {
    if (isFirstLoad) {
      loadData();
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

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
      />
    </>
  );
}

export default App;
