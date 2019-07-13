import { action, observable } from "mobx";
import { matchRoutes } from "react-router-config";
import routes from "@/routes/routes";
import { flattenRoutes } from "@/lib/utils";

class MenuStore {
  @observable active = routes[0].name;

  @observable menuList = [];

  @action
  setMenuList() {
    let menuList = flattenRoutes(routes, "routes");
    menuList = menuList.filter(item => item.path !== "/");
    this.menuList = menuList;
  }

  @action
  setActiveMenu(locationPath) {
    const matchList = matchRoutes(routes, locationPath);
    const matched = matchList.find(
      item => item.match.isExact && item.match.path === locationPath
    );
    if (matched) {
      const { name, redirectName } = matched.route;
      const active = redirectName || name;
      this.setActive(active);
    }
  }

  @action
  setActive(active) {
    this.active = active;
  }
}

export default new MenuStore();
