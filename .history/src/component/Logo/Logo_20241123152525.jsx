const Logo = () => {
    return (
        <>
            {/* <div className="p-4"> */}
            <div className='2xl:container mx-auto'>
                <div className=' flex justify-center'>
                    <img src="https://ik.imagekit.io/Sample/E-Commerce/Logo/Finallogo1-removebg-preview.png?updatedAt=1732353255625" alt="" className="h-52 w-74 " />
                </div>
                <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 ">

                    <div >
                        <ul className='font-semibold md:bg-teal-500 md:flex justify-around mt-4 mb-4 text-center  '>
                            <Link to="/Shirt">  <li className='bg-teal-500 mb-1'>Shirt</li> </Link>
                            <Link to="/Pant"><li className='bg-teal-500 mb-1' >Pant</li> </Link>
                            <Link to="/T-Shirt"><li className='bg-teal-500 mb-1'>T-Shirt</li></Link>
                            <Link to="/Shorts"> <li className='bg-teal-500 mb-1'>shorts</li></Link>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}