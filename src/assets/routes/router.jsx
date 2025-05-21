import { createBrowserRouter } from "react-router";
import root from "../../layout/root";
import Error from "../../layout/Error";
import Home from "../../components/Home";
import Bills from "../../layout/Bills";
import User_login from "../../layout/User_login";
import User_register from "../../layout/User_register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:"Bills",
                Component: Bills
            },
            {
                path:"User_login",
                Component: User_login
            },
            {
                path:"User_register",
                Component: User_register
            },
        ]
    },
    {
        path: "/*",
        Component: Error
    }

]);

export default router