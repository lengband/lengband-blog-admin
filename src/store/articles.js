import { action, observable, computed } from "mobx";

class Dashboard {
  @observable
  articles = [];

  @action
  getArticles() {
    this.articles = [
      {
        id: "1",
        title: "webpack之一探究竟",
        tag: "webpack",
        content: "webpack是什么，为什么现在这么火...",
        href: "https://www.jianshu.com/p/e547fb9747e0",
        description: "根据极客时间上的webpack课程，自己整理总结的经验",
        avatar: "/static/images/avatar.jpg",
        done: false
      },
      {
        id: "1.5",
        title: "webpack之一探究竟",
        tag: "webpack",
        content: "webpack是什么，为什么现在这么火...",
        href: "https://www.jianshu.com/p/e547fb9747e0",
        description: "根据极客时间上的webpack课程，自己整理总结的经验",
        avatar: "/static/images/avatar.jpg",
        done: true
      },
      {
        id: "2",
        title: "vue转到react需要注意的点",
        tag: "react",
        content:
          "目前很多的vue开发者对react很感兴趣，想通过对比的方式了解和学习react...",
        href: "https://www.jianshu.com/p/e547fb9747e0",
        description: "react经验之谈",
        avatar: "/static/images/avatar.jpg",
        done: false
      },
      {
        id: "3",
        title: "vue转到react需要注意的点",
        tag: "react",
        content:
          "目前很多的vue开发者对react很感兴趣，想通过对比的方式了解和学习react...",
        href: "https://www.jianshu.com/p/e547fb9747e0",
        description: "react经验之谈",
        avatar: "/static/images/avatar.jpg",
        done: false
      },
      {
        id: "4",
        title: "vue转到react需要注意的点",
        tag: "react",
        content:
          "目前很多的vue开发者对react很感兴趣，想通过对比的方式了解和学习react...",
        href: "https://www.jianshu.com/p/e547fb9747e0",
        description: "react经验之谈",
        avatar: "/static/images/avatar.jpg",
        done: false
      },
      {
        id: "5",
        title: "vue转到react需要注意的点",
        tag: "react",
        content:
          "目前很多的vue开发者对react很感兴趣，想通过对比的方式了解和学习react...",
        href: "https://www.jianshu.com/p/e547fb9747e0",
        description: "react经验之谈",
        avatar: "/static/images/avatar.jpg",
        done: false
      },
      {
        id: "6",
        title: "vue转到react需要注意的点",
        tag: "react",
        content:
          "目前很多的vue开发者对react很感兴趣，想通过对比的方式了解和学习react...",
        href: "https://www.jianshu.com/p/e547fb9747e0",
        description: "react经验之谈",
        avatar: "/static/images/avatar.jpg",
        done: true
      }
    ];
  }

  @computed
  get doingArtcles() {
    return this.articles.filter(item => !item.done);
  }

  @computed
  get doneArtcles() {
    return this.articles.filter(item => item.done);
  }
}

export default new Dashboard();
