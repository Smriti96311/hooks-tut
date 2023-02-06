let nextId = 0;
let todos = [{id: nextId++, text: "Todo 1 : some text 1"}];
let listeners = [];

export const todoStore = {
  addTodo() {
    todos = [
      ...todos,
      { id: nextId++, text: `Todo ${nextId} : some text ${nextId}`},
    ];
    emitChanges();
  },

  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  },

  getSnapshot() {
    return todos;
  },
};

const emitChanges = () => {
  for (let listener of listeners) listener();
}