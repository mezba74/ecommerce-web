import { createBrowserRouter } from "react-router";
import RootLayout from './RootLayout'
import Home from "../Components/Home";
import ProductDetails from "../Components/ProductDetails";
import Products from "../Components/Products";
import Carts from "../Components/Carts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: async ({ params }) => {
                    const data = await fetch('/data.json')
                    const res = await data.json()
                    const singleproduct = res.find((product) => product.id === parseInt(params.id))
                    return singleproduct
                }

            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('/data.json')
            },
            {
                path:'/carts',
                element:<Carts></Carts>
            }
        ]
    }
])