import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Component/Home/home";
import Cart from "./Component/Cart/cart";
import Orders from "./Component/Orders/orders";
import LoginRigister from "./Component/Rigister/loginRigister";
import Wishlist from "./Component/wishList/wishList";
import Menu from "./Component/Menu/menu";

const Router = () => {
    return useRoutes([
        {
            path: 'Home',
            element: <Home />,
        },
        {
            path: 'cart',
            element: <Cart />,
        },
        {
            path: 'orders',
            element: <Orders />,
        },
        {
            path: 'Menu',
            element: <Menu />,
        },
        {
            path: 'userLogin',
            element: <LoginRigister />,
        },
        {
            path: 'Wishlist',
            element: <Wishlist />,
        }
    ]);
}
export default Router;