import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, deleteCart } from "../redux/actions/cartactions";
import axios from 'axios';
import getStripe from "../Service/getStripe";

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  console.log(cartItems);
  console.log(cartItems.length);

  const fData=[];
  cartItems.forEach(x => {
    fData.push({price:x.price ,productName:x.title,quantity:x.qty,productid:x.id})
  });
  console.log(fData,"new")

const handleCheckout= async(e)=>{
  e.preventDefault();
  

  const stripe = await getStripe();
  
  return  axios.post("http:/api/api/payment/create-checkout-session",fData)
  .then((response) => {
    console.log(response);
   
    console.log(response.data);

    const d =  response.data;
    stripe.redirectToCheckout({sessionId:d.id});




  })
  .catch((error) => {
    //console.log(error);
  });
}

  const dispatch = useDispatch();

  const addQuantity = (product) => {
    dispatch(addCart(product));
  };

  const deleteQuantity = (product) => {
    dispatch(deleteCart(product));
  };

  return (
    <div className="container ">
      {cartItems.map((product) => {
        return (
          <div
            className="row d-flex justify-content-center bg-light border  m-3"
            key={product.id}
          >
            <div className="col-md-4  ">
              <img src={product.url} height="200px" width="180px" />
            </div>
            <div className="col-md-4  ">
              <h5 className="lead fw-bolder mt-4 ">{product.title}</h5>
              <p className="display-7 fw-bold mb-3 ">
                {product.qty}X{product.price}$={product.qty * product.price}$
              </p>
              <button
                className="btn btn-outline-dark m-2"
                onClick={() => {
                  addQuantity(product);
                }}
              >
                <i className="fa fa-plus"></i>
              </button>
              <button
                className="btn btn-outline-dark m-3"
                onClick={() => {
                  deleteQuantity(product);
                }}
              >
                <i className="fa fa-minus"></i>
              </button>
            </div>
          </div>
        );
      })}

     { cartItems.length===0 ? <div className="d-flex justify-content-center mt-4">
          <h3>  Empty Cart</h3></div>  : <div className="d-flex justify-content-center mt-2">
        <button 
        className="btn btn-outline-dark px-5 "
         onClick={(e) => {handleCheckout(e)}}>Checkout</button>
      </div>}
    </div>
  );
};

export default Cart;
