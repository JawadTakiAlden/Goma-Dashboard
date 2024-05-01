import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";

export const dashboardRoutes = {
    path : '',
    element : <MainLayout />,
    children : [
        {
            path : 'dashboard',
            element : <Home />
        }
    ]
}