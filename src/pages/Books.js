import axios from 'axios'
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Book from "../component/Book";
import "./books.css";

function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const {data, status} = await axios.get(`http://localhost:8080/api/books/`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
      },   
      });
      if (status === 200) {
        setBooks(data);
        console.log(data);
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
      <div>
      </div>
      <h1>Pilihan Editor</h1>
      <hr />
      <div data-aos="fade-up" className="text-center" data-aos-delay="600">
        <Link to="/addbook" className="btn btn-light text-light mt-5">
          <i className="fa-solid fa-plus"></i>
        </Link>
      </div>
      <div className="container books mt-4">
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
