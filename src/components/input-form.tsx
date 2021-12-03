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
      <div>
        <h5 className="text-left">Insert new task</h5>
        <form>
          <input
            className="form-control"
            placeholder="Task"
            value={props.newTask}
            onChange={(e) => {
              props.setNewTask(e.target.value);
            }}
          />
        </form>
        <form className="d-flex">
          <input
            className="inputsm form-control"
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
            Add
          </button>
        </form>
      </div>
      <br />
    </>
  );
}
