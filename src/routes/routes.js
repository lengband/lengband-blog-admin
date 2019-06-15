import AsyncLoad from "@/components/AsyncLoad";

const routes = [
  {
    path: "/",
    name: "dashboard",
    label: "控制面板",
    meta: {
      exact: true
    },
    component: AsyncLoad(() => import("../views/dashboard/index"))
  },
  {
    path: "/users",
    name: "users",
    label: "用户中心",
    component: AsyncLoad(() => import("../views/users/index"))
  }
];
export default routes;
