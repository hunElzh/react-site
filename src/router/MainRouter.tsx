import {lazy, memo} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';

const Home = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/login/login"));
const SignUp = lazy(() => import("../pages/login/sign-up/signUp"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>        // children:
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signUp',
        element: <SignUp/>
    }
])

const MainRouter = memo(() => {
    return(
        <RouterProvider router={router}/>
    )
})

export default MainRouter;