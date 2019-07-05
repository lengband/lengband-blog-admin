import { action, observable, toJS } from "mobx";
import menuStore from "./menu";

function findRoute(array, obj) {
  return array.find(item => item.name === obj.name);
}

class TabStore {
  @observable currentRoute = null; // 当前访问的信息

  @observable urlHistory = []; // 访问过的路由信息

  @observable routerHistory = null;

  @action
  setCurrent(route) {
    this.currentRoute = route;
    menuStore.setActiveMenu(route.path);
    if (this.routerHistory) this.routerHistory.push(route.path);
  }

  @action
  addRoute(route) {
    this.currentRoute = route;
    if (this.urlHistory.length === 0) {
      this.setCurrent(route);
      this.urlHistory.push(this.currentRoute);
    } else {
      const find = Boolean(findRoute(toJS(this.urlHistory), route));
      if (!find) {
        this.urlHistory.push(this.currentRoute);
      }
    }
  }

  // 关闭单一路由
  @action
  close(route) {
    if (toJS(this.urlHistory).length <= 1) return;
    const index = toJS(this.urlHistory).findIndex(
      item => item.name === toJS(route).name
    );
    this.urlHistory.splice(index, 1);
    if (this.currentRoute.name === route.name) {
      const nextIndex = Math.min(index, this.urlHistory.length - 1);
      const currentRoute = toJS(this.urlHistory[nextIndex]);
      this.setCurrent(currentRoute);
    }
  }

  // 关闭除了当前url的其他所有路由
  @action
  closeOther() {
    if (this.urlHistory.length > 1) {
      this.urlHistory = [this.currentRoute];
    }
  }
}

export default new TabStore();
