


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





// Men.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import KidsProducts from '../api/KidsProducts';



const Kids = () => {
  return (
    <>


      {/* <div className="p-4"> */}
      <div className='2xl:container mx-auto'>

        <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 ">
          <div>
            <ul className='font-semibold  md:flex justify-around  mt-4 mb-4 text-center bg-teal-500 '>
              <Link to="/KidsBoys">  <li className='bg-teal-500 mb-1'>Boys</li> </Link>
              <Link to="/KidsGirls"><li className='bg-teal-500 mb-1'>Girls</li> </Link>
          
            </ul>
          </div>
        </div>

        <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Map over the MenProducts and display each product */}
          {KidsProducts.map((product) => (
            <div key={product.id} className="product-card p-4 border border-gray-200 rounded-lg">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-contain rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-yellow-500">Rating: {product.rating}</p>
              <p className="text-gray-500">Reviews: {product.reviews}</p>
              <button className='bg-orange-400 p-1 md:ml-64'>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>


      {/* </div> */}
    </>
  );
};


export default Kids;
