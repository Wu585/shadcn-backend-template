import {Navigate, RouteObject} from "react-router-dom";
import {lazy} from "react";
import DashboardPage from "@/views/dashboard.tsx";

const AdminPanelLayout = lazy(() => import("@/components/admin-panel/admin-panel-layout"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AdminPanelLayout/>,
    children: [
      {
        path: "",
        element: <Navigate to={"/dashboard"} replace/>
      },
      {
        path: "dashboard",
        element: <DashboardPage/>
      }
    ]
  }
];
