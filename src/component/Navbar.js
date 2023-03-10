import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const qty = useSelector((state) => state.cart.qty);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="navbar-brand" href="#">
                <img
                  src="../img/pp.png"
                  alt="Logo"
                  width="5"
                  height="5"
                  className="d-inline-block align-text-top"
                  style={{ width: "45px", height: "45px" }}
                />
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">
                <b>Book</b>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <b>Login</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={logout}>
                <b>Logout</b>
              </Link>
            </li>
          </ul>
          <form className="d-flex ">
            {localStorage.getItem("role") === "user" ? (
              <button type="button" className="btn  position-relative mr-5">
                <Link className="nav-link" to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {qty}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}
