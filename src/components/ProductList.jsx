import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(
      addToCart({
        product: products[id - 1],
      })
    );
  };

  return (
    <>
      <div className="d-flex align-content-start justify-content-center flex-wrap p-7 mt-5 gap-3 ">
        {products.map((product) => {
          return (
            <div
              className="card"
              key={product.id}
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src={product.image}
                className="card-img-top py-2 h-50 w-auto mx-auto d-block"
                alt="..."
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{product.title}</h5>
                <h5 className="fs-3">{"$ " + product.price}</h5>
              </div>
              <button
                className="btn btn-primary align-content-end m-3"
                onClick={() => {
                  handleAddToCart(product.id);
                }}
              >
                addToCart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
