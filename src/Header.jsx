import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Use State Todo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reducerTodo">
                  Reducer Todo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listAddRemove">
                  List Add Remove
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listAddRemoveReducer">
                  List Add Remove Reducer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
