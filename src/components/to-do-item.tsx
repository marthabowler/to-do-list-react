import { Fragment } from "react";
import { toDoOneItem } from "./toDoOneItem";

interface ItemProps {
  oneItem: toDoOneItem;
  deleteToDo: (id: number) => void;
  updateToDo: (arg: toDoOneItem) => void;
}

export default function ToDoItem(props: ItemProps): JSX.Element {
  return (
    <>
      <Fragment>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#todo${props.oneItem.id}`}
        >
          Edit
        </button>

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
                <input type="text" className="form-control" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
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
    </>
  );
}
