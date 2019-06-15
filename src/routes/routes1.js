import App from "@/App";
import AsyncLoad from "@/components/AsyncLoad";
import Layout from "@/components/layouts/index";
import dashboard from "@/views/dashboard/index";
import users from "@/views/users/index";

const routes = [
  {
    path: "/",
    component: Layout,
    indexRoute: { component: dashboard },
    childRoutes: [
      {
        path: "dashboard",
        component: dashboard
      },
      {
        path: "users",
        component: users
        // childRoutes: [
        //   { path: '/messages/:id', component: Message },
        //   { path: 'messages/:id',
        //     onEnter: function (nextState, replaceState) {
        //       replaceState(null, '/messages/' + nextState.params.id)
        //     }
        //   }
        // ]
      }
    ]
  }
];

export default routes;
