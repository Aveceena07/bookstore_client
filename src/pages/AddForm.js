import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { instance as axios } from "../util/Api";

function AddForm(props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [stocks, setStocks] = useState("");
  const [price, setPrice] = useState("");

  const postBooks = async (downloadURL) => {
    try {
      const formData = {
        title: title,
        description: description,
        author: author,
        cover: cover,
        stocks: stocks,
        price: price,
      };

      await axios.post(`book/`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
    navigate("/books");
  };

  const save = (e) => {
    e.preventDefault();
    postBooks();
    Swal.fire({
      icon: "success",
      title: "success add book",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container">
      <div className="judul mt-5">
        <form className="row g-3" onSubmit={save}>
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
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              defaultValue={cover}
              onChange={(e) => setCover(e.target.value)}
              placeholder="Url"
            />
          </div>
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
            <button type="submit" className="btn btn-info text-light my-4">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
