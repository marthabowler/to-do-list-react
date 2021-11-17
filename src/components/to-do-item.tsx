interface ItemProps {
  toDoOneItem: {
    description: string;
    isComplete: boolean;
    creationDate: string;
    dueDate: string;
  };
}

export default function ToDoItem(props: ItemProps): JSX.Element {
  return (
    <>
      <div className="item">
        <p>{props.toDoOneItem.description}</p>
        <p>{props.toDoOneItem.dueDate}</p>
        <p
          className={props.toDoOneItem.isComplete ? "complete" : "notcomplete"}
        >
          {props.toDoOneItem.isComplete ? "Complete" : "To be completed"}
        </p>
        <button onClick={() => console.log("hello")}> Delete </button>
      </div>
      <br />
    </>
  );
}
