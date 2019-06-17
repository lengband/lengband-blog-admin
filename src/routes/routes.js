import AsyncLoad from "@/components/AsyncLoad";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersionIcon from "@material-ui/icons/Person";

const routes = [
  {
    path: "/",
    name: "layouts",
    component: AsyncLoad(() => import("../components/layouts/index")),
    routes: [
      {
        path: "/dashboard",
        name: "dashboard",
        label: "控制面板",
        meta: {
          icon: DashboardIcon
        },
        component: AsyncLoad(() => import("../views/dashboard/index"))
      },
      {
        path: "/users",
        name: "users",
        label: "用户中心",
        meta: {
          icon: PersionIcon
        },
        component: AsyncLoad(() => import("../views/users/index"))
      }
    ]
  }
];
export default routes;
