import { useSelector, useDispatch } from "react-redux";

import { removeToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCartList = () => {
  const { products } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRemoveToCart = (id) => {
    if (products[1]) {
      dispatch(
        removeToCart({
          id,
        })
      );
    } else {
      dispatch(
        removeToCart({
          id,
        })
      );
      navigate("/Home");
    }
  };

  return (
    <>
      <div className="container" style={{ marginTop: "70px" }}>
        {products.map((product) => {
          return (
            <div className="card m-3" key={product.product.id}>
              <div className="row g-0 d-flex justify-content-between align-items-center">
                <div className="col-md-2">
                  <img
                    src={product.product.image}
                    className="rounded-start w-75 h-auto p-3"
                    alt="..."
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      {product.product.title}
                    </h5>
                    <p className="card-text">{product.product.description}</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <h5 className="p-3 fw-bold">${product.product.price}</h5>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleRemoveToCart(product.product.id);
                    }}
                  >
                    remove to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCartList;
