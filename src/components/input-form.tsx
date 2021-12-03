interface InsertToDoItemProps {
  setNewDueDate: (input: string) => void;
  setNewTask: (input: string) => void;
  newTask: string;
  newDueDate: string;
  addNewTodoFromInput: (input: void) => void;
}
export default function InsertToDoItem(
  props: InsertToDoItemProps
): JSX.Element {
  return (
    <>
      <div className="insert">
        <h1>Insert new task</h1>
        <input
          placeholder="Task"
          value={props.newTask}
          onChange={(e) => {
            props.setNewTask(e.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={props.newDueDate}
          onChange={(e) => {
            props.setNewDueDate(e.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            props.addNewTodoFromInput();
          }}
        >
          Add task
        </button>
      </div>
      <br />
    </>
  );
}
