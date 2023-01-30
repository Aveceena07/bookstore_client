import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  let ListCart = [];
  let TotalCart = 0;

  Object.keys(cart).forEach(function (item) {
    TotalCart += cart[item].quantity * cart[item].price;
    ListCart.push(cart[item]);
  });

  const DecreaseQuantity = async (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const IncreaseQuantity = async (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const deleteToCart = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "The Book has been successfully removed from cart.",
          "success"
        );
        dispatch({ type: "DELETE_CART", payload: id });
      }
    });
  };

  const checkout = async () => {
    try {
      const data = cart.map((item) => ({
        bookId: item.id,
        totalBooks: item.quantity,
      }));

      console.log(data);
      await axios.post(
        `http://localhost:8080/api/books/${localStorage.getItem(
          "id"
        )}/transactions`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Successfullty checkout.",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({ type: "RESET_CART" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>Product</th>
              <th style={{ width: "36%" }}>Description</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "15%" }}>Quantity</th>
              <th style={{ width: "22%" }} className="text-center">
                Subtotal
              </th>
            </tr>
          </thead>
          {cart.map((item, key) => (
            <tbody>
              <tr>
                <td data-th="Product">
                  <div className="col-sm-2 hidden-xs">
                    <img
                      src={item.cover}
                      alt="..."
                      className="img-responsive"
                      style={{ width: "400%" }}
                    />
                  </div>
                </td>
                <td data-th="Description">
                  <div className="col-sm-10" style={{ width: "300px" }}>
                    <h4 className="nomargin text-dark">
                      <b>{item.title}</b>
                    </h4>
                    <p>
                      <b>Description: </b>
                      {item.description} <br /> <b>Author: </b>
                      {item.author}
                      <br />
                      <b>Stocks: </b>
                      {item.stocks}
                    </p>
                  </div>
                </td>
                <td data-th="Price">{item.price}</td>
                <td data-th="Quantity">
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => IncreaseQuantity(key)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <p className="px-3 mt-1">{item.quantity}</p>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => DecreaseQuantity(key)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </td>
                <td data-th="Subtotal" className="text-center">
                  {item.price * item.quantity}
                </td>
                <td className="actions" data-th="">
                  <button
                    onClick={() => deleteToCart(key)}
                    className="btn btn-danger btn-sm mx-2"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr className="visible-xs">
              <td className="text-center">
                <strong>Total {TotalCart}</strong>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/books" className="btn btn-info">
                  <i className="fa fa-angle-left"></i> Continue Shopping
                </Link>
              </td>
              <td colSpan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong>Total $ {TotalCart}</strong>
              </td>
              <td>
                <a
                  href="#"
                  className="btn btn-info btn-block"
                  onClick={checkout}
                >
                  Checkout <i className="fa fa-angle-right"></i>
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Cart;
