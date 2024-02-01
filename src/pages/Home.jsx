import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ProductList from "../components/productList";

const Home = () => {
  const [products, setProducts] = useState([]);

  const user = useSelector((state) => state.user);
  const { totalProducts } = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <p className="navbar-brand fw-bold">{user.name}</p>
            <Link to={"/"} className="rounded-3 bg-secondary py-1 px-2">
              Log out
            </Link>
          </div>
          <Link
            to={"/Cart"}
            className="position-relative rounded-3 bg-secondary py-1 px-2"
          >
            Cart
            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
              {totalProducts}
            </span>
          </Link>
        </div>
      </nav>
      <ProductList products={products} />
    </>
  );
};

export default Home;
