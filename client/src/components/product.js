import { useEffect, useState } from "react";
import ProductService from "../Service/productService";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions/cartactions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
 
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    ProductService.getProductById(params.uId)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mt-2">
          <img src={product.url}  alt="Card image cap"  height="340px" width="280px"  />
         
        </div>
        <div className="col-sm-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder ">
            Rating  { product.rating }
            <i className="fa fa-star mx-1"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">{product.price}$</h3>
          <p className="lead">{product.description}</p>

          <button
            className="btn btn-outline-dark"
            onClick={() => {
              addProduct(product);
              navigate(`/cart`);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
