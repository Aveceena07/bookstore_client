import { instance as axios } from "../util/Api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../component/Book";
import "./books.css";

function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const { data, status } = await axios.get(`books/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (status === 200) {
        setBooks(data);
        // console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      <div></div>
      <h1 className="mt-3">Pilihan Editor</h1>
      <div data-aos="fade-up" className="text-center" data-aos-delay="600">
        {localStorage.getItem("role") === "admin" ? (
          <Link to="/addbook" className="btn btn-info text-light mt-3">
            <i className="fa-solid fa-plus"></i> Add Book
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="container books mt-4 bg-info">
        <div className="row">
          {books.map((book, index) => (
            <div key={index} className="col-md-3 col-sm-6 item">
              <Book key={book.id} book={book} setBooks={setBooks} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
