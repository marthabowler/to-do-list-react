import { toDoOneItem } from "./toDoOneItem";

interface ItemProps {
  oneItem: toDoOneItem;
  deleteToDo: (id: number) => void;
  updateToDo: (arg: toDoOneItem) => void;
}

export default function ToDoItem(props: ItemProps): JSX.Element {
  return (
    <tr>
      <td>{props.oneItem.tasks}</td>
      <td>{props.oneItem.due_date}</td>
      <td>
        <input
          className="form-check-input"
          type="checkbox"
          checked={props.oneItem.completed}
          id="flexCheckDefault"
        />
      </td>
      <td>
        <button
          onClick={() => {
            props.deleteToDo(props.oneItem.id);
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </td>
    </tr>
  );
}
