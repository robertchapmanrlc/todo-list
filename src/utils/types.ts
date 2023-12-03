export type Todo = {
  id: string;
  text: string;
};

export type ToDoContextType = {
  todos: Todo[];
  addToDo: (newText: string) => void;
  deleteToDo: (id: string) => void;
  editToDo: (id: string, newText: string) => void;
};