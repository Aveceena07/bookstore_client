import React from 'react'
import { Link } from 'react-router-dom'

function Book(props) {
    const {book, setBooks} = props
  return (
    <div className="card item-card card-block">
    <h4 className="card-title text-right">
      <i className="material-icons text-dark">{book.price}</i>
    </h4>
    <img
      src={`${book.cover}`}
      alt="Photo of sunset"
    />
    <h5 className="item-card-title mt-3 mb-3 text-dark">
      <b>{book.title}</b>
    </h5>
    <p className="card-text text-dark mb-5">
      <b>Author: </b>{book.author}<br />
      <b>Tahun Rilis: </b>1 Maret 2022 <br />
      <Link
        to="/detail"
        className="btn btn-dark text-btn text-light mt-3"
      >
        Detail Book
      </Link>
    </p>
  </div>
  )
}

export default Book