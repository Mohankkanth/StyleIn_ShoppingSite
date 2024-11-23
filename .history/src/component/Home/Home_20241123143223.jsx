

import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>

            <div className="2xl:container mx-auto  ">
                <div className=' flex justify-center'>
                    <img src="https://ik.imagekit.io/Sample/E-Commerce/Logo/LOGO1.png?updatedAt=1732352490870" alt="" className="" />
                </div>
                <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
                    <div className="shadow-md p-3 mt-10 bg-green-200">
                        <p className="font-serif font-semibold upper text-center mt-9">Unveil Your Style with Our Exquisite Dresses</p>
                        <p className="font-mono upper text-xs text-center">Where Elegance Meets Everyday Comfort!!</p>

                        <p className=" font-serif text-center text-base p-2 mt-10 leading-relaxed ">At  <span className="text-red-500 font-extrabold text-xl"> StyleIn</span>, we believe that every customer deserves to feel beautiful and confident. Explore our stunning collection of dresses designed for every occasion—whether it’s a casual day out, a sophisticated evening, or your special day. From flowing silhouettes to tailored fits, our carefully curated selection offers styles that cater to all tastes and body types. Step into a world of fashion that empowers you to express your unique personality.</p>
                        <div className="flex justify-center items-center mt-4">

                            <a href="#shop-collections">
                                <button className="text-center bg-red-400 p-2 shake-horizontal rounded-lg  hover:text-zinc-200 font-semibold hover:bg-cyan-600">
                                    Shop Now
                                </button>
                            </a>
                        </div>

                    </div>
                    <div className="md:ml-28">
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/HeroImage.avif?updatedAt=1730565654069" alt="Hero_Img" className="md:h-96 flip-in-hor-bottom" />
                    </div>
                </div>
            </div>



            {/* Shop Our Collections starting*/}

            <div className="2xl:container mx-auto mt-10 " id="shop-collections">
                <div className="w-[90%] mx-auto">

                    <p className="font-bold font-sans text-xl p-3">Shop Our Collections</p>
                </div>

                <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 bg-orange-200 p-5 ">

                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/MenImage.avif?updatedAt=1730568487611" alt="MenImg" className="h-96  mt-5  shadow-2xl " />
                        <p className="font-semibold ">Men's Wear</p>
                        <div className="mt-4">
                            <Link to="/Men">
                                <button className="text-center bg-red-400 p-2 shake-horizontal rounded-lg hover:text-zinc-200 font-semibold hover:bg-emerald-700 ">
                                    Shop Now
                                </button>
                            </Link>

                        </div>
                    </div>



                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/WomenImg.avif?updatedAt=1730569590977" alt="MenImg" className="h-96 mt-5 shadow-2xl" />
                        <p className="font-semibold">Women's Wear</p>
                        <div className="mt-4">
                            <Link to="/Women">
                                <button className="text-center bg-red-400 p-2 shake-horizontal rounded-lg hover:text-zinc-200 font-semibold hover:bg-emerald-700">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>


                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/KidsImg.avif?updatedAt=1730569783286" alt="Kids wear" className="h-96 mt-5" />
                        <p className="font-semibold">Kids's Wear</p>
                        <div className="mt-4">
                            <Link to="/Kids">
                                <button className="text-center bg-red-400 p-2 shake-horizontal rounded-lg hover:text-zinc-200 font-semibold hover:bg-emerald-700">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shop Our Collections ending*/}



            {/*Best Sellers Collections Starting*/}

            <div className="2xl:container mx-auto mt-10">
                <div className="w-[90%] mx-auto">

                    <p className="font-bold font-sans text-xl mb-3">Best Sellers</p>
                </div>

                <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-10 gap-3 ">
                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/wedding_4.jpg?updatedAt=1730697514158" alt="" className="hover:rounded-full h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}

                    </div>

                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/wedding_img.jpg?updatedAt=1730697491055" alt="" className="hover:rounded-full  h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}

                    </div>

                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/wedding_5.jpg?updatedAt=1730697514316" alt="" className="hover:rounded-full  h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}
                    </div>

                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/wedding_img2.jpg?updatedAt=1730697514379" alt="" className="hover:rounded-full  h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}


                    </div>


                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/wedding_img3.jpg?updatedAt=1730697514363" alt="" className="hover:rounded-full  h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}
                    </div>

                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/img_7.jpg?updatedAt=1730698617588" alt="" className="hover:rounded-full  h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}

                    </div>

                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/img_6.jpg?updatedAt=1730698617791" alt="" className="hover:rounded-full  h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}
                    </div>

                    <div>

                        <img src="https://ik.imagekit.io/Sample/E-Commerce/images_8.jpg?updatedAt=1730698617592" alt="" className="hover:rounded-full  h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}


                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/images_10.jpg?updatedAt=1730698617460" alt="" className="hover:rounded-full  h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}

                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/Sample/E-Commerce/images_11.jpg?updatedAt=1730698617816" alt="" className="hover:rounded-full  h-[200px]" />
                        {/* <button className="  bg-red-400 p-2 shake-horizontal rounded-lg mt-1 hover:bg-red-700">Buy Now</button> */}

                    </div>

                </div>
            </div>


            {/*Best Sellers Collections ending*/}








        </>
    )
}

export default Home