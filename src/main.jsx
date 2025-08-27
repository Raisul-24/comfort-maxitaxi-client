import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import AirportTransfer from './Pages/AirportTransfer.jsx';
import BabyCapsule from './Pages/BabyCapsule.jsx';
import WeddingTransport from './Pages/WeddingTransport.jsx';
import WheelchairAccessible from './Pages/WheelchairAccessible.jsx';
import ChooseUs from './Pages/ChooseUs.jsx';
import Contact from './Pages/Contact.jsx';
import Blog from './Pages/Blog.jsx';
import TaxiFareCalculator from './Pages/TaxiFareCalculator.jsx';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/airport-transfer",
        element: <AirportTransfer />,
      },
      {
        path: "/baby-capsule",
        element: <BabyCapsule />,
      },
      {
        path: "/wedding-transport",
        element: <WeddingTransport />,
      },
      {
        path: "/wheelchair-accessible",
        element: <WheelchairAccessible />,
      },
      {
        path: "/why-choose-us",
        element: <ChooseUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/taxiFareCalculator",
        element: <TaxiFareCalculator />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
