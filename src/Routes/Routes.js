import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutMe from "../Pages/AboutMe/AboutMe";
import AutoCar from "../Pages/AllProjects/AutoCar/AutoCar";
import ItInstitute from "../Pages/AllProjects/ItInstitute/ItInstitute";
import PhotoBazar from "../Pages/AllProjects/PhotoBazar/PhotoBazar";
import Blog from "../Pages/Blogs/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Shared/Error/Error";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/autocar',
                element: <AutoCar></AutoCar>
            },
            {
                path: '/photobazar',
                element: <PhotoBazar></PhotoBazar>
            },
            {
                path: '/itinstitute',
                element: <ItInstitute></ItInstitute>
            },
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;