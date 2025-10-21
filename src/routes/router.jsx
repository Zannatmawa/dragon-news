import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                loader: () => fetch("/news.json"),
                element: <CategoryNews />
            },
        ]
    },
    {
        path: "/auth",
        element: <h2>auth</h2>
    },
    {
        path: "/news",
        element: <h2>news</h2>
    },
    {
        path: "/*",
        element: <h2>error</h2>
    },

])
export default router