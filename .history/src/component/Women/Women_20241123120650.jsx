


// const Men=(props)=>{
//     console.log(props)

//     return(
//         <>
//         <img src={props.img} alt="" className="h-56" />
//         <p>{props.name}</p>
//         <p>{props.price}</p>
//         <p>{props.rating}</p>
//         <p>{props.name}</p>

//         </>
//     )
// }

// export default Men

// import React from "react";

// // Product Card component to display each product's details
// const Men = (props) => {
//   return (
//     <div className="product-card">
//       <img src={props.img} alt={props.name} className="w-32 h-32"/>
//       <h3>{props.name}</h3>
//       <p>${props.price}</p>
//       <p>Rating: {props.rating}</p>
//       <p>Reviews: {props.reviews}</p>
//     </div>
//   );
// };

// export default Men;

// WoMen.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Women = () => {
  return (
    <>    <div className='2xl:container mx-auto'>

      <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <div>
          <ul className='font-semibold md:bg-teal-500 md:flex justify-around  mt-4 mb-4 text-center  '>
            <Link to="/Kurtas">  <li className='bg-teal-500 mb-1'>Kurtas</li> </Link>
            <Link to="/Sarees"><li className='bg-teal-500 mb-1' >Sarees</li> </Link>
            <Link to="/Leggins"><li className='bg-teal-500 mb-1'>Leggins</li></Link>
            <Link to="/Dupattas"> <li className='bg-teal-500 mb-1'>Dupattas</li></Link>
          </ul>
        </div>
      </div>

      {/* <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {WomenProducts.map((product) => (
          <div key={product.id} className="product-card p-4 border border-gray-200 rounded-lg">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-56 object-contain rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 ">₹{product.price}&nbsp;
            <span className="text-gray-500 line-through ">₹{product.oldprice}</span> 
            <span className="text-red-600">&nbsp;({product.offer})</span>
            </p>
            <p className="text-yellow-500">Rating: {product.rating}</p>
            <p className="text-gray-500">Reviews: {product.reviews}</p>
          </div>
        ))}
      </div> */}
    </div>
    </>

  );
};

export default Women;
