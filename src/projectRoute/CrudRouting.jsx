import { createBrowserRouter } from "react-router-dom";
import Layout from "./../component/Layout";
import LandingPage from "./../pages/LandingPage";
import HomePage from "./../pages/HomePage";
import LoginPage from "./../pages/LoginPage";
import SignupPage from "./../pages/SignupPage";
import ContactPage from "./../pages/ContactPage";
import About from "./../component/About";
import AllStudent from "./../component/AllStudent";
import Careers from "./../component/Careers";
import CreateStudent from "./../component/CreateStudents";
import DefaultLanding from "../component/DefaultLanding";
import UpdateStudent from "../component/UpdateStudent";
export let route = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <LandingPage />,
            children: [{

                path: "/",
                element: <DefaultLanding />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/signup",
                element: <SignupPage />
            },
            {
                path: "/contact",
                element: <ContactPage />,
            }
            ]
        },
        {
            path: "/home",
            element: <HomePage />,
            children: [{
                path: "/home/about",
                element: <About />,
            },
            {
                path: "/home/allStudent",
                element: <AllStudent />,
            },
            {
                path: "/home/careers",
                element: <Careers />,
            },
            {
                path: "/home/createStudent",
                element: <CreateStudent />,
            },
            {
                path: "/home/updateStudent",
                element: < UpdateStudent />,
            }
            ]
        },


    ]

}])