import { useState } from "react";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // Error
  const [error, setError] = useState({});

  //  validation
  // const validation = () => {
  //   let error = {};

  //   if (!state.email) {
  //     error.email = "Email is Required";
  //   } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(state.email)) {
  //     error.email = "Valid Email is Required";
  //   }

  //   if (!state.password) {
  //     error.password = "Password is Required";
  //   }

  //   return error;
  // };
  const validation = () => {
    let errors = {};

    if (!state.email) {
      errors.email = "Email is Required";
    } else if (!isValidEmail(state.email)) {
      errors.email = "Valid Email is Required";
    }

    if (!state.password) {
      errors.password = "Password is Required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Use a regular expression pattern for email validation.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const postUserData = (e) => {
    let { name, value } = e.target;
    // name = e.target.name;
    // value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is Required" });
        setState({ ...state, email: "" });
      } else {
        setError({ ...error, email: "" });
        setState({ ...state, email: value });
      }
    }

    if (name === "password") {
      if (value.trim().length === 0) {
        setError({ ...error, password: "Password name is Required" });
        setState({ ...state, password: "" });
      } else {
        setError({ ...error, password: "" });
        setState({ ...state, password: value });
      }
    }
  };

  const SubmitInfo = (e) => {
    e.preventDefault();
    setError(validation());
  };

  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Login</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Login</li>
            </ol>
          </div>
        </div>
      </section>
      <div className="container mt-2">
        <div className="card" style={{ width: "600px" }}>
          <div className="card-header">User Login</div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input type="email" onChange={postUserData} value={state.email} className="form-control" name="email" />
                <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input onChange={postUserData} value={state.password} className="form-control" name="password" />

                <span style={{ color: "red", marginLeft: "24px" }}> {error.password} </span>

                <br />
              </div>

              <button type="submit" onClick={SubmitInfo} className="btn btn-success">
                Login
              </button>
            </form>
          </div>
          <div className="card-footer text-muted">Don`t have an Account ?</div>
        </div>
      </div>
    </main>
  );
}
