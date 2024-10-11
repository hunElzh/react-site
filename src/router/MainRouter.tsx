import {lazy, memo} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';

const Home = lazy(() => import("../pages/home/home"));
const SignIn = lazy(() => import("../pages/login/sign-in/signIn"));
const SignUp = lazy(() => import("../pages/login/sign-up/signUp"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>        // children:
    },
    {
        path: '/signIn',
        element: <SignIn/>
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