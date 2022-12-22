import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login";

import './app.css'

export default function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <div>Hello World <br /> <a href='/login'>Login</a></div>
        },
        {
          path: "/login",
          element: <Login />
        }
      ])
    return (
        <RouterProvider router={router} />
    );
}