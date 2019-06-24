import AsyncLoad from "@/components/AsyncLoad";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersionIcon from "@material-ui/icons/Person";
import NotesIcon from "@material-ui/icons/Notes"; // 文章list
import CreateIcon from "@material-ui/icons/Create";

const routes = [
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: AsyncLoad(() => import("../views/login/index"))
  },
  {
    path: "/",
    name: "layouts",
    component: AsyncLoad(() => import("../components/layouts/index")),
    redirectTo: "/dashboard",
    redirectName: "dashboard",
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
      },
      {
        path: "/article",
        name: "article",
        label: "文章",
        meta: {
          icon: NotesIcon
        },
        component: AsyncLoad(() => import("../views/article/index"))
      },
      {
        path: "/write",
        name: "write",
        label: "创作",
        meta: {
          icon: CreateIcon
        },
        component: AsyncLoad(() => import("../views/write/index"))
      }
    ]
  }
];
export default routes;
