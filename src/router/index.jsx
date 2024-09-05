import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Accueil from "../pages/Accueil";
import Etudiant from "../pages/Etudiant";
import Enseignant from "../pages/Enseignant";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import GuestLayout from "../Layouts/GuestLayout";
import StudentDashboardLayout from "../Layouts/StudentDashboardLayout";
import StudentDashbord from "../Student/StudentDashbord";

export const LOGIN_ROUTE = '/login';
export const STUDENT_DASHBOARD_ROUTE = '/dashboard';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Accueil /> },
            { path: '/register', element: <Etudiant /> },
            { path: '/users', element: <Enseignant /> },
            { path: '/*', element: <NotFound /> }
        ]
    },
    {
        element: <GuestLayout />,
        children: [
            {
                path: LOGIN_ROUTE,
                element: <Login />
            },
        ]
    },
    {
        element: <StudentDashboardLayout />,
        children: [
            {
                path: STUDENT_DASHBOARD_ROUTE,
                element: <StudentDashbord />
            },
        ]
    }
]);
