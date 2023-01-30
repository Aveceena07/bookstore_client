import { instance as axios } from "../util/Api";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Book(props) {
  const { book, setBooks } = props;

  const removePost = async () => {
    await Swal.fire({
      title: "Do you want to delete the Post?",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Yes, delete it!",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`book/${book.id}`, {});
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Successfully deleted your post!",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (result.isDenied) {
        Swal.fire({
          icon: "error",
          title: "Canceled",
          text: "",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };
  return (
    <div className="card item-card card-block">
      <div>
        {" "}
        <img src={`${book.cover}`} alt="Photo of sunset" />
      </div>
      <div style={{ height: "230px" }}>
        <h5 className="item-card-title mt-3 mb-3 text-dark">
          <b>{book.title}</b>
        </h5>
        <p className="card-text text-dark mb-5">
          <b>Author: </b>
          {book.author}
          <br />
          <b>Price: </b>$ {book.price} <br />
          <Link
            to={`/book/${book.id}`}
            className="btn btn-info   text-btn text-light mt-3 "
          >
            Detail Book
          </Link>
          <br />
          {localStorage.getItem("role") === "admin" ? (
            <Link
              to={`/update/${book.id}`}
              className="btn btn-info   text-btn text-light mt-3 mx-2"
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </Link>
          ) : (
            <div></div>
          )}
          {localStorage.getItem("role") === "admin" ? (
            <div
              onClick={removePost}
              className="btn btn-danger   text-btn text-light mt-3 top-end"
            >
              <i className="fa-solid fa-trash"></i>
            </div>
          ) : (
            <div></div>
          )}
        </p>
      </div>
    </div>
  );
}

export default Book;
