import {lazy, memo} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';

const Home = lazy(() => import("../pages/home/home"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>        // children:
    }
])

const MainRouter = memo(() => {
    return(
        <RouterProvider router={router}/>
    )
})

export default MainRouter;