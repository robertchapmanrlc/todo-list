export type Todo = {
  id: string;
  text: string;
};

export type ToDoContextType = {
  todos: Todo[];
  addToDo: (newText: string) => void;
};