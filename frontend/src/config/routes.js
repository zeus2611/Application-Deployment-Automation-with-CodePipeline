import { lazy } from "react";

export const routes = {
  register_page: {
    path: "/",
    component: lazy(() => import("../pages/RegisterPage/RegisterPage")),
    exact: true,
  },
  register_page_1: {
    path: "/signup",
    component: lazy(() => import("../pages/RegisterPage/RegisterPage")),
    exact: true,
  },
  login_page: {
    path: "/signin",
    component: lazy(() => import("../pages/LoginPage/LoginPage")),
    exact: true,
  },
  users: {
    path: "/dashboard",
    component: lazy(() => import("../pages/Users/Users")),
    exact: true,
  },
  add_student: {
    path: "/add-student",
    component: lazy(() => import("../pages/AddStudent/AddStudent")),
    exact: true,
  },
};

export const renderRoutes = Object.entries(routes);
