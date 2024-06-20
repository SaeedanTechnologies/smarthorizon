import { useRoutes } from "react-router";
import Landing from "./Layouts/Landing";
import AdminLogin from "./views/Auth/Login/AdminLogin";
import About from "../src/Pages/About_Us";
import Partners from "../src/Pages/Partners";
import Services from "./Pages/Services";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/Contact_Us";
import PrivacyPolicy from './Pages/PrivacyPolicy'
export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },

    {
      path: "/admin-login",
      element: <AdminLogin />,
    },
    {
      path: "/about_us",
      element: <About />,
    },
    // {
    //     path: '/partners',
    //     element: <Partners />
    // },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/experience",
      element: <Experience />,
    },
    {
      path: "/contact_us",
      element: <Contact />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />
    }
  ]);
  return element;
}
