
import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className='2xl:container mx-auto'>
                <p className="font-bold bg-slate-300 text-center p-10 m-3">ABOUT US</p>

                <div className=" w-[90%]  mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 ">
                    <div>
                        <p className='font-semibold text-justify '>Our Mission</p>
                        <p className='bg-lime-300 p-4'>At Stylein, our mission is simple: to offer a curated selection of affordable, fashionable dresses that allow everyone to express their unique style. We aim to make your shopping experience effortless and enjoyable by providing dresses that cater to a variety of tastes, sizes, and occasions. From casual everyday wear to elegant evening gowns, we’ve got you covered!</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AboutUs