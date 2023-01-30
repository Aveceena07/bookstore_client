import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail.js";
import Login from "./pages/Login";
import { Routes, Route, Router } from "react-router-dom";
import Register from "./pages/Register.js";
import AddForm from "./pages/AddForm.js";
import PrivateRoute from "./component/PrivateRoute.js";
import FormUpdate from "./component/FormUpdate.js";
function App() {
  return (
    <div>
      {/* <Router> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/books" element={<Books />}>
          books{" "}
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route
          path="/book/:id"
          element={
            <PrivateRoute>
              <Detail />
            </PrivateRoute>
          }
        >
          Detail
        </Route>
        <Route
          path="/update/:id"
          element={
            <PrivateRoute>
              <FormUpdate />
            </PrivateRoute>
          }
        >
          Update
        </Route>
        <Route path="/register" element={<Register />}>
          Register
        </Route>
        <Route
          path="/addbook"
          element={
            <PrivateRoute>
              <AddForm />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/cart" element={<Cart />}>
          Cart
        </Route>
        <Route
          path="*"
          element={<h1 className="text-center mt-3"> Page Not Found </h1>}
        >
          Cart
        </Route>
      </Routes>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
