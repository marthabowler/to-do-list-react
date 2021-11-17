import { useEffect, useState } from "react";
import Header from "./components/header";
import ToDoItems from "./components/to-do-items";
import "./App.css";

function App(): JSX.Element {
  const [toDoState, setToDo] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch("http://localhost:4000/items/");
      const jsonBody = await resp.json();
      setToDo(jsonBody);
    };
    loadData();
  }, []);
  console.log(toDoState);

  return (
    <>
      <Header />
      <br />
      <ToDoItems toDoAllItems={toDoState} />
    </>
  );
}

export default App;
