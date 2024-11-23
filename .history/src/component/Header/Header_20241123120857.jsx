import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid-cols-1">
          <div>
            <ul className="flex justify-around p-3 rounded-3xl bg-lime-600 font-mono mt-3">
              <Link to="/Home">
                <li className="hover:cursor-pointer  hover:text-white">Home</li>
              </Link>
              <Link to="/Men">
                <li className="hover:cursor-pointer  hover:text-white">Men
                </li>

              </Link>
              <Link to="/Women">
                <li className="hover:cursor-pointer  hover:text-white">Women</li>
              </Link>
              {/* <Link to="/Kids">
                <li className="hover:cursor-pointer  hover:text-white">Kids</li>
              </Link> */}
              <Link to="/Aboutus">
              <li className="hover:cursor-pointer  hover:text-white">About us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export default Header