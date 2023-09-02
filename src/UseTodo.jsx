export default function UseTodo() {
  return (
    <div className="container common-gap">
      <h1 style={{ textAlign: "center" }}>Todo</h1>
      <div className="todo-message-card">
        <input name="title" type="text" placeholder="Title" />
        <textarea name="content" placeholder="Message"></textarea>
        <div className="btn-holder">
          <button type="button">Add</button>
          <button type="button" className="reset">
            Reset
          </button>
        </div>
      </div>

      <ul className="todo-items-holder">
        <li className="todo-item">
          <h5>Title 1</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, tenetur.</p>
          <button type="button" className="reset">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
