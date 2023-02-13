import { useState, useEffect , useRef } from "react";
import ProductService from "../Service/productService";
import { Link } from "react-router-dom";



const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const buttonRef = useRef(null);

  const filterByCategory=(c)=>{
    const afterfilter= products.filter((product)=>product.category===c)
    setFilter(afterfilter)
  }




  useEffect(() => {
    
    ProductService.getProducts()
      .then((response) => {
        setProducts(response.data);
        buttonRef.current.click();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-3">
        
        <div className="row">
        <div className="buttons d-flex justify-content-center  pb-5">
          <button className="btn btn-outline-dark mx-1"
           ref={buttonRef}
           
          onClick={()=>{setFilter(products)
          
          }}
          >All</button>
          <button className="btn btn-outline-dark mx-1"
         onClick={()=>filterByCategory("Men clothes")}
          >Men's clothing</button>
          <button className="btn btn-outline-dark mx-1"
         onClick={()=>filterByCategory("Women clothes")}
          >Women's clothing</button>
          <button className="btn btn-outline-dark mx-1"
           onClick={()=>filterByCategory("Jewleries")}
          >Jewleries</button>
          <button className="btn btn-outline-dark mx-1"
           onClick={()=>filterByCategory("Accesories")}
          >Accesories</button>
         </div>
         </div>
      
     <div className="row">

        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4 " key={product.id}>
              <div className="card  h-100 text-center p-4">
            
                <img className="card-img-top" src={product.url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title}</h5>
                  <p className="card-text">{product.price}$</p>
                  <Link to={`/product/${product.id}`} className="btn btn-dark" >
                    Buy Now
                  </Link>
                
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
      }

export default ListProducts ;
