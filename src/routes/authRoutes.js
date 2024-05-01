import MinimalLayout from "../layouts/MinimalLayout";
import Login from "../pages/login";

export const authRoutes = {
    path : 'auth',
    element : <MinimalLayout />,
    children : [
        {
            path : 'login',
            element : <Login />
        }
    ]
}