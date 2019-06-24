import { action, observable } from "mobx";

class AppStore {
  @observable count = 0;

  @action addCount() {
    this.count += 1;
  }

  @action reduceCount() {
    this.count -= 1;
  }
}

export default new AppStore();
