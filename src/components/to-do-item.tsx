import { Fragment } from "react";
import { toDoOneItem } from "./toDoOneItem";

interface ItemProps {
  oneItem: toDoOneItem;
  deleteToDo: (id: number) => void;
  updateToDo: (id: number) => void;
  setEditDueDate: (input: string) => void;
  setEditTask: (input: string) => void;
  editTask: string;
  editDueDate: string;
  updateToDoStatus: (arg: toDoOneItem) => void;
}

export default function ToDoItem(props: ItemProps): JSX.Element {
  return (
    <>
      <Fragment>
        {/* Button trigger modal */}
        {/* Modal */}
        <div
          className="modal fade"
          id={`todo${props.oneItem.id}`}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit To-Do
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Change Task"
                  className="form-control"
                  value={props.editTask}
                  onChange={(e) => props.setEditTask(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Change Due Date"
                  className="form-control"
                  value={props.editDueDate}
                  onChange={(e) => props.setEditDueDate(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    props.updateToDo(props.oneItem.id);
                  }}
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      <tr>
        <td>
          {" "}
          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target={`#todo${props.oneItem.id}`}
          >
            Edit
          </button>
        </td>
        <td>
          <strong>Task</strong> <br />
          {props.oneItem.tasks}
        </td>
        <td>
          <strong>Due Date</strong>
          <br />
          {props.oneItem.due_date.slice(0, 10)}
        </td>
        {props.oneItem.completed ? <td>done</td> : <td>pending</td>}
        <td>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            checked={props.oneItem.completed}
            id="flexCheckDefault"
            onChange={() => {
              props.updateToDoStatus(props.oneItem);
            }}
          />
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.deleteToDo(props.oneItem.id);
            }}
          >
            {" "}
            Delete{" "}
          </button>
        </td>
      </tr>
    </>
  );
}
