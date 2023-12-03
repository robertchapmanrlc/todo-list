import { createContext, useContext, useEffect, useState } from "react";

import type { Todo, ToDoContextType } from "../utils/types";

export const ToDoContext = createContext<ToDoContextType>({
  todos: [],
  addToDo: () => { },
  deleteToDo: () => { },
  editToDo: () => { }
});

type ToDoContextProviderProps = {
  children: React.ReactNode;
};

export default function ToDoContextProvider({
  children,
}: ToDoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      let savedTodos = JSON.parse(localStorage.getItem('todos')!);
      setTodos(savedTodos);
    }
  }, []);

  const addToDo = (newText: string) => {
    let newToDos: Todo[] = [
      ...todos,
      { id: new Date().getTime().toString(), text: newText },
    ];
    localStorage.setItem('todos', JSON.stringify(newToDos));
    setTodos(newToDos);
  };

  const deleteToDo = (id: string) => {
    const filteredTodos = [...todos].filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  }

  const editToDo = (id: string, newText: string) => {
    let newToDos = [...todos];
    newToDos.forEach((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
    });
    localStorage.setItem("todos", JSON.stringify(newToDos));
    setTodos(newToDos);
  };

  return (
    <ToDoContext.Provider value={{ todos, addToDo, deleteToDo, editToDo }}>
      {children}
    </ToDoContext.Provider>
  );
}

export function useToDoContext() {
  const context = useContext(ToDoContext);
  return context;
}
