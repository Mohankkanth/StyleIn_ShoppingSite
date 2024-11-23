
// Men.jsx
import React from 'react';
import MenProducts from '../api/MenProducts';
import { Link } from 'react-router-dom';



const Men = () => {
  return (
    <>


      {/* <div className="p-4"> */}
      <div className='2xl:container mx-auto'>
        {/* <div className=' flex justify-center'>
          <img src="https://ik.imagekit.io/Sample/E-Commerce/Logo/Finallogo1-removebg-preview.png?updatedAt=1732353255625" alt="" className="h-52 w-74 " />
        </div> */}
        {/* <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 "> */}

          <div className='' >
            <ul className='font-semibold md:bg-teal-500 md:flex justify-around mt-4 mb-4 text-center  '>
              <Link to="/Shirt">  <li className='bg-teal-500 mb-1'>Shirt</li> </Link>
              <Link to="/Pant"><li className='bg-teal-500 mb-1' >Pant</li> </Link>
              <Link to="/T-Shirt"><li className='bg-teal-500 mb-1'>T-Shirt</li></Link>
              <Link to="/Shorts"> <li className='bg-teal-500 mb-1'>shorts</li></Link>
            </ul>
          </div>
        {/* </div> */}

        {/* <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {MenProducts.map((product) => (
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
      </div> */}


      </div>
    </>
  );
};


export default Men;
