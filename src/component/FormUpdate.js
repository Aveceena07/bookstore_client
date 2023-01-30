import { instance as axios } from "../util/Api";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function FormUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [stocks, setStocks] = useState("");
  const [price, setPrice] = useState("");

  const updateBook = async (downloadURL) => {
    try {
      const data = {
        title: title,
        description: description,
        author: author,
        stocks: stocks,
        price: price,
      };
      console.log(data);
      axios.put(`book/${id}`, data);

      Swal.fire("Yes, You are Successful in editing the Book");
    } catch (err) {
      console.log(err);
    }
    navigate("/books");
  };

  const getById = async () => {
    const { data } = await axios.get(`book/id/${id}`);

    setTitle(data.title);
    setDescription(data.description);
    setAuthor(data.author);
    setStocks(data.stocks);
    setPrice(data.price);
  };

  useEffect(() => {
    getById();
  }, [id]);

  return (
    <div className="container">
      <div className="judul mt-5">
        <form className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Judul Buku"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              defaultValue={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi"
            />
          </div>
          {/* <div className="col-12">
            <input
              type="text"
              className="form-control"
              defaultValue={cover}
              onChange={(e) => setCover(e.target.value)}
              placeholder="Url"
            />
          </div> */}
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              defaultValue={stocks}
              onChange={(e) => setStocks(e.target.value)}
              placeholder="Stocks"
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              defaultValue={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </div>

          <div className="col-12">
            <button
              onClick={updateBook}
              className="btn btn-success text-light my-4"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormUpdate;
