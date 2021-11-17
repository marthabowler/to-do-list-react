type toDo = {
  description: string;
  isComplete: boolean;
  creationDate: string;
  dueDate: string;
};

interface propsHeader {
  toDoList: toDo[];
}

export default function Header(props: propsHeader): JSX.Element {
  return (
    <>
      <header>
        <h1>My to do list</h1>
      </header>
      <label>What needs to be done?</label>
      <br />
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button>Submit</button>
      <p>{props.toDoList[0].description}</p>
    </>
  );
}
