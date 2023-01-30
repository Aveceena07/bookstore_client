import { instance as axios } from "../util/Api";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./home.css";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

function Detail() {
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  const dispatch = useDispatch();

  const fetchBooks = async () => {
    try {
      const { data, status } = await axios.get(`book/id/${id}`, {
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

  const addToCart = async () => {
    Swal.fire("Good job!", "Book successfully added to cart", "success");
    dispatch({ type: "ADD_TO_CART", payload: books });
  };
  return (
    <div>
      <div id="hero" className=" section hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">{books.title}</h1>
              <small
                className="text-dark"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <b>Author: {books.author}</b> <br />
                <b> Description: </b>
                {books.description}
                <br />
                <b>Stocks: {books.stocks}</b> <br />
                <b>Price: ${books.price}</b>
              </small>
              <div data-aos="fade-up" data-aos-delay="600">
                <Link to="/books" className="btn btn-info text-light mt-3">
                  Back
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <button
                  onClick={addToCart}
                  className="btn btn-info text-light mt-3"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="card">
              <img src={books.cover} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
