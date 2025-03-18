import App from "@/App";
import Protected from "@/components/layout/Protected";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import UserDetails from "@/pages/UserDetails";
import UserProfile from "@/pages/UserProfile";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/profile",
                element: <Protected><UserProfile /></Protected>
            },
            {
                path: "/:userId",
                element: <UserDetails/>
            }
        ]
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router