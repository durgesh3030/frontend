import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let Navigate = useNavigate();

  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { username, firstName, lastName, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    Navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form action="" onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Username" className="form-lable">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your username"
                name="username"
                required
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="FName" className="form-lable">
                FirstName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="firstName"
                required
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LName" className="form-lable">
                LastName
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                required
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-lable">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                required
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-lable">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your password"
                name="password"
                required
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary mt-3 mx-2">
              Update
            </button>
            <Link className="btn btn-outline-danger mt-3 mx-2" to={"/"}>
              Cancle
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
