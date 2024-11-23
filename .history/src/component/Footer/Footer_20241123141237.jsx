import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="bg-white  shadow  dark:bg-[#333333] mt-28">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div>
          <img src="https://ik.imagekit.io/Sample/E-Commerce/Logo/StyleIn_Logo-removebg-preview.png?updatedAt=1732345349547" alt="" className="h-64 w-64" />

          </div>

          <div className="text-white">
            <p className="font-bold font-[Raleway]  underline sm:mt-2">Address</p>
            <p>
              <p className="font-[Raleway]">Stylein Fashion Store </p>
              123 Fashion Street,<br />
              T. Nagar, Chennai,<br /> Tamil Nadu 600017,
              India</p>
          </div>
          <div className="text-white mt-3">
            <p className="font-bold font-[Raleway] underline">Contact</p>
            <p></p>
            <p className="hover:cursor-pointer">Mobile:&nbsp;9523148795</p>
            <p className="hover:cursor-pointer">Email:&nbsp;support@stylein.com</p>
          </div>

          <div className="text-white sm:mt-2">
            <p className="font-bold font-[Raleway] underline">Customer Service Hours</p>
            <p>
              Monday to Friday: 9:00 AM - 6:00 PM <br />
              Saturday: 10:00 AM - 4:00 PM <br />
              Sunday: Closed</p>
          </div>

         
          
        </div>
        <div className="flex justify-center pb-3">
        <span className="text-base  text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            {/* <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™ </a> */}
            . All Rights Reserved.
          </span>
          </div>
      </footer>

    </>
  )
}


export default Footer