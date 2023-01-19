import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const location = useLocation();
  const navigate = useNavigate();

  const [userRegister, setUserRegister] = useState({
    username: "",
    password:"",
    role:""
  });

  const handleOnChange = (e) => {
    setUserRegister((currUser) => {
      return { ...currUser, [e.target.id]: e.target.value };
    });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/register`, {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegister),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);

        if (location.state) {
          navigate(`${location.state.from.pathname}`);
        } else {
          navigate("/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="popo">
        <div className="center">
          <h1>Register</h1>
          <form method="post">
            <div className="txt_field">
              <input type="text"
              id="username"
              className="form-control"
              onChange={handleOnChange}
              value={userRegister.username}
              placeholder="Enter email address"
              />
            </div>
            <div className="txt_field">
              <label className="form-label">Password</label>
              <input type="password"
              id="password"
              className="form-control"
              onChange={handleOnChange}
              value={userRegister.password}
              placeholder="Enter password"
              />
            </div>
            <div className="txt_field">
              <label className="form-label">Role</label>
              <input type="text"
              id="role"
              className="form-control"
              onChange={handleOnChange}
              value={userRegister.role}
              placeholder="Enter your role"
              />
            </div>
            <button
             type="button"
             className="btn btn-success btn-color mb-2 w-100"
             onClick={register}
            
            >
              Register
              </button>
            <div className="signup_link">
              Have an Account? <Link to="/login">Signin</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
