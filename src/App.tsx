import { stringify } from "querystring";
import { useEffect, useState } from "react";
import Header from "./components/header";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  interface toDo {
    description: string;
    isComplete: boolean;
    creationDate: string;
    dueDate: string;
  }
  const [toDoState, setToDo] = useState<toDo[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch("http://localhost:4000/items");
      const jsonBody = await resp.json();
      setToDo(jsonBody);
    };
    loadData();
  }, []);
  return (
    <>
      <Header toDoList={toDoState} />
    </>
  );
}

export default App;
