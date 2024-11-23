import { Link } from "react-router-dom"
import React from 'react';
import ShirtProducts from "../api/Men/ShirtProduct";


const Shirt = () => {
    return (
        <>
            <div className='2xl:container mx-auto'>

                <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-3">
                    <div >
                        <ul className='font-semibold md:bg-teal-500 md:flex justify-around mt-4 mb-4 text-center  '>
                            <Link to="/Shirt">  <li className='bg-teal-500 mb-1'>Shirt</li> </Link>
                            <Link to="/Pant"><li className='bg-teal-500 mb-1' >Pant</li> </Link>
                            <Link to="/T-Shirt"><li className='bg-teal-500 mb-1'>T-Shirt</li></Link>
                            <Link to="/Shorts"> <li className='bg-teal-500 mb-1'>shorts</li></Link>
                        </ul>
                    </div>
                </div>
                <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 rounded-full">
                    {ShirtProducts.map((product) => (
                        <div key={product.id} className="product-card p-4 border border-gray-200 shadow-2xl m-1 rounded-lg hover:cursor-pointer">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-56  object-contain rounded-lg"
                            />
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-gray-600">₹{product.price}
                            <span className="text-gray-500 line-through ">₹{product.oldprice}</span>
                            <span className="text-red-600">&nbsp;({product.offer})</span>
                            </p>
                            <p className="text-yellow-500">Rating: {product.rating}</p>
                            <p className="text-gray-500">Reviews: {product.reviews}</p>
                            <button className='bg-orange-400 p-2 pl-2 pr-2 lg:ml-40 rounded-xl '>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Shirt