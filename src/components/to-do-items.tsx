import ToDoItem from "./to-do-item";
import { toDoOneItem } from "./toDoOneItem";

interface toDoItemsProps {
  toDoAllItems: toDoOneItem[];
  deleteToDo: (id: number) => void;
}

export default function ToDoItems(props: toDoItemsProps): JSX.Element {
  return (
    <div>
      {props.toDoAllItems.map((item) => (
        <ToDoItem oneItem={item} key={item.id} deleteToDo={props.deleteToDo} />
      ))}
    </div>
  );
}
