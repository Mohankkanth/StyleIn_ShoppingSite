
import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className='2xl:container mx-auto'>
                <p className="font-bold bg-slate-300 text-center p-10 m-3">ABOUT US</p>

                <div className=" w-[90%]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt- ">

                    <div>
                        <p className='font-semibold text-justify '>Our Story</p>
                        <p className='bg-lime-300 p-6 rounded-3xl text-justify font-[Raleway]'>
                            Stylein was born out of a passion for fashion and the desire to make great style accessible to everyone. We recognized that finding the perfect dress shouldn’t be a hassle. With a commitment to delivering quality and affordability, we set out to create a platform where men and women could find stylish dresses without compromising on comfort or price. Every piece in our collection is chosen with care, designed to help you look your best and feel even better.</p>
                    </div>
                    <div>
                        <p className='font-semibold text-justify '>Our Mission</p>
                        <p className='bg-lime-300  rounded-3xl font-[Raleway] p-9 text-justify'>At Stylein, our mission is simple: to offer a curated selection of affordable, fashionable dresses that allow everyone to express their unique style. We aim to make your shopping experience effortless and enjoyable by providing dresses that cater to a variety of tastes, sizes, and occasions. From casual everyday wear to elegant evening gowns, we’ve got you covered!</p>
                    </div>

                    <div>
                        <p className='font-semibold text-justify'>Our Values</p>
                        <p className='bg-lime-300  rounded-3xl font-[Raleway] text-justify p-12'>
                            At Stylein, we hold ourselves to the highest standards of quality, integrity, and inclusivity. We believe fashion should be accessible to everyone, regardless of shape, size, or budget. We prioritize sustainability and aim to offer products that are not only stylish but also mindful of the planet.</p>
                    </div>


                </div>
            </div>

        </>
    )
}
export default AboutUs