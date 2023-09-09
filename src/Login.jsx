import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
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
    if (!state.name) {
      errors.name = "Name is Required";
    }
    if (!state.phone) {
      errors.phone = "Phone is Required";
    }
    if (!state.city) {
      errors.city = "City is Required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Use a regular expression pattern for email validation.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const postUserData = (e) => {
    let { name, value } = e.target;

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is Required" });
        setState({ ...state, email: "" });
      } else {
        setError({ ...error, email: "" });
        setState({ ...state, email: value });
      }
    }
    if (name === "phone") {
      if (value.trim().length === 0) {
        setError({ ...error, phone: "Phone number is Required" });
        setState({ ...state, phone: "" });
      } else {
        setError({ ...error, phone: "" });
        setState({ ...state, phone: value });
      }
    }
    if (name === "name") {
      if (value.trim().length === 0) {
        setError({ ...error, name: "Name is Required" });
        setState({ ...state, name: "" });
      } else {
        setError({ ...error, name: "" });
        setState({ ...state, name: value });
      }
    }
    if (name === "city") {
      if (value.trim().length === 0) {
        setError({ ...error, city: "City is Required" });
        setState({ ...state, city: "" });
      } else {
        setError({ ...error, city: "" });
        setState({ ...state, city: value });
      }
    }
  };

  // const SubmitInfo = (e) => {
  //   e.preventDefault();
  //   setError(validation());
  // };
  const SubmitInfo = (e) => {
    e.preventDefault();
    setError(validation());
    const apiUrl = "https://tureappservar.onrender.com/user/";

    const payload = {
      name: state.name,
      email: state.email,
      phone: state.phone,
      city: state.city,
    };
    axios.post(apiUrl, payload);
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
                  Phone
                </label>
                <input onChange={postUserData} value={state.phone} className="form-control" name="phone" />
                <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span>
                <br />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input onChange={postUserData} value={state.name} className="form-control" name="name" />
                <span style={{ color: "red", marginLeft: "24px" }}> {error.name} </span>
                <br />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  City
                </label>
                <input onChange={postUserData} value={state.city} className="form-control" name="city" />
                <span style={{ color: "red", marginLeft: "24px" }}> {error.city} </span>
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
