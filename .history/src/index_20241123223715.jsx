import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./component/Home/Home";
import Men from "./component/Men/Men";
// import MenProducts from "./component/api/MenProducts";
import Women from "./component/Women/Women";
import Kids from "./component/Kids/Kids";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer"; 
import "./style.css";
import Errorpage from "./component/Errorpage/Error";
import Shirt from "./component/Men/Shirt";
import T_Shirt from "./component/Men/T_Shirt";
import Pant from "./component/Men/pant";
import Shorts from "./component/Men/Shorts";
import Boys from "./component/Kids/Boys/Boys";
import Girls from "./component/Kids/Girls/Girls";
import Kurtas from "./component/Women/kurtas";
import Sarees from "./component/Women/Saree";
import Leggin from "./component/Women/Leggin";
import Dupattas from "./component/Women/Dupattas";
import AboutUs from "./component/Aboutus/About";
import Logo from "./component/Logo/Logo";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Logo/>
      <Outlet />  
      <Footer />
    </>
  );
};

// Router Configuration
const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },

      {
        path: "/Men",
        element: <Men />,
      },
      {
        path: "/Women",
        element: <Women/>,
      },
      {
        path: "/Kids",
        element: <Kids />,
      },
      {
        path:"/Shirt",
        element:<Shirt/>,
      },
      {
        path:"/T-Shirt",
        element:<T_Shirt/>,
      },
      {
        path:"/Pant",
        element:<Pant/>,
      },
      {
        path:"/Shorts",
        element:<Shorts/>,
      },
      {
        path:"/KidsBoys",
        element:<Boys/>,
      },
      {
        path:"/KidsGirls",
        element:<Girls/>,
      },

      {
        path:"/Kurtas",
        element:<Kurtas/>,
      },
      {
        path:"/Sarees",
        element:<Sarees/>,
      },
      {
        path:"/Leggins",
        element:<Leggin/>
      },
      {
        path:"/Dupattas",
        element:<Dupattas/>
      },
      {
        path:"/AboutUs",
        element:<AboutUs/>
      }
    ],
    errorElement:<Errorpage/>
  },
]);

// Render the Router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
