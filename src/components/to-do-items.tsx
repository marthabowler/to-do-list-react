import ToDoItem from "./to-do-item";

interface toDoItemsProps {
  toDoAllItems: toDoOneItem[];
}

type toDoOneItem = {
  description: string;
  isComplete: boolean;
  creationDate: string;
  dueDate: string;
};

export default function ToDoItems(props: toDoItemsProps): JSX.Element {
  return (
    <div>
      {props.toDoAllItems.map((item, index) => (
        <ToDoItem toDoOneItem={item} key={index} />
      ))}
    </div>
  );
}
