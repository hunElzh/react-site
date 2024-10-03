import {lazy, memo} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ConfigProvider, MappingAlgorithm, theme} from "antd";
import React from 'react';

const Home = lazy(() => import("../pages/home/index"));

const studioDarkAlgorithm: MappingAlgorithm = (seedToken, mapToken) => {
    // 使用 antd 默认的暗色算法生成基础token，这样其他不需要定制的部分则保持原样
    // const baseToken = theme.defaultAlgorithm(seedToken, mapToken);
    const baseToken = theme.defaultAlgorithm(seedToken);
    return {
        ...baseToken,
        // colorBgLayout: '#20252b', // Layout 背景色
        // colorBgContainer: '#282c34', // 组件容器背景色
        // colorBgElevated: '#32363e', // 悬浮容器背景色
    };
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>        // children:
    },
    {
        path: '/crm',
        children: [
            {
                path: '/crm/batchDeliveryAlert',
                element: <BathcDeliveryAlert/>
            },
            {
                path: '/crm/employeeProfiler',
                element: <EmployeeProfiler/>
            }
        ]
    }
])

const MainRouter = memo(() => {

    return(
        <ConfigProvider
            theme={{
                algorithm: studioDarkAlgorithm,
            }}
        >
            <RouterProvider router={router}/>
        </ConfigProvider>
    )
})

export default MainRouter;