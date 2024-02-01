import React from "react";
import { useSelector } from "react-redux";
import ProductCartList from "../components/ProductCartList";

import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <p className="navbar-brand fw-bold">{user.name}</p>
            <Link to={"/Home"} className="rounded-3 bg-secondary py-1 px-2">
              Home
            </Link>
          </div>
        </div>
      </nav>
      <ProductCartList />
    </>
  );
};

export default Cart;
