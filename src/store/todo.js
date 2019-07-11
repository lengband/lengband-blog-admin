import { action, observable } from "mobx";
import { todoList } from "@/constants";

class TodoStore {
  @observable
  todoList = [];

  @action
  getTodoList() {
    Promise.resolve(todoList).then(list => {
      this.todoList = list;
    });
  }

  @action
  search(query) {
    const q = query.toLowerCase();
    const list = this.todoList.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        (item.content && item.content.toLowerCase().includes(q))
    );
    this.todoList = list || [];
  }

  @action
  clear() {
    this.todoList = todoList;
  }
}

export default new TodoStore();
