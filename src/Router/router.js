import Orders from "../modules/order-mgmt/Orders";
import App from "../App";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import Navbar from "../modules/components/Navbar";
import Footer from "../modules/components/Footer";
import Menu from "../modules/components/Menu";
import Wildcard from "../modules/components/Wildcard";


const routes = [
    {
        path: "/",
        element: App
    },

    {
        path: "/Orders",
        element: Orders
    },

    {
        path: "/Wildcard",
        element: Wildcard
    },
]

export const routerConfig = createBrowserRouter(routes);