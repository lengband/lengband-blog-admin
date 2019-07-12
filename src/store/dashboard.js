import { action, observable } from "mobx";

class Dashboard {
  @observable
  articles = [];

  @action
  getArticles() {
    Promise.resolve(articles => {
      this.articles = articles;
    });
  }
}

export default new Dashboard();
