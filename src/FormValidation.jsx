import { useState } from "react";

export default function FormValidation() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validation = (name, value) => {
    switch (name) {
      case "email":
        if (value.length === 0) {
          setError({ ...error, email: "Email Field is Required." });
        } else if (!validateEmail(value)) {
          setError({ ...error, email: "Email Field must be a valid address." });
        } else {
          setError({ ...error, email: "" });
        }
        break;
      case "password":
        if (value.length === 0) {
          setError({ ...error, password: "Password Field is Required." });
        } else if (value.length <= 4) {
          setError({ ...error, password: "Password Field must be at least 5 characters." });
        } else {
          setError({ ...error, password: "" });
        }
        break;
      default:
        break;
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    validation(name, value);
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <div className="container">
        <h1>FormValidation</h1>
        <div className="card mt-5" style={{ width: "600px" }}>
          <div className="card-header">User Login</div>
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              <div>
                <label htmlFor="exampleInputEmail" className="form-label">
                  Email address
                </label>
                <input type="email" value={user.email} onChange={onChangeHandler} className="form-control" name="email" id="exampleInputEmail" autoComplete="off" />
                <span style={{ color: "red" }}> {error.email} </span>
              </div>
              <div className="mt-3">
                <label htmlFor="exampleInputPassword" className="form-label">
                  Password
                </label>
                <input type="password" value={user.password} onChange={onChangeHandler} name="password" className="form-control" id="exampleInputPassword" autoComplete="new-password" />

                <span style={{ color: "red" }}> {error.password} </span>
              </div>

              <button type="submit" className="btn btn-success mt-4">
                Login
              </button>
            </form>
          </div>
          <div className="card-footer text-muted">Do not have an Account?</div>
        </div>
      </div>
    </main>
  );
}
