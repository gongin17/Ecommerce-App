import React from 'react';
import ListProducts from './products';
import cover from '../media/cover.jpg'
import { Link } from 'react-router-dom';

const Home =()=>{


return(

     <div className="">

       <div className="card bg-dark border-0">   
        <img src={cover} className="card-img" alt="Background"  height="550px"  />
         <div  className="card-img-overlay d-flex justify-content-center align-items-center z-3 ">
           <div  className="  "  >
           <Link className="btn btn-light" to={`/products`}> Shop Now </Link>
           </div>

         </div>

       </div>
       <ListProducts/>


     </div>


)


}

export default Home