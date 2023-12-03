import { createContext, useContext, useState } from "react";

import type { Todo, ToDoContextType } from "../utils/types";

export const ToDoContext = createContext<ToDoContextType>({
  todos: [],
  addToDo: () => { },
  deleteToDo: () => { }
});

type ToDoContextProviderProps = {
  children: React.ReactNode;
};

export default function ToDoContextProvider({
  children,
}: ToDoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDo = (newText: string) => {
    let newToDos: Todo[] = [
      ...todos,
      { id: new Date().getTime().toString(), text: newText },
    ];
    setTodos(newToDos);
  };

  const deleteToDo = (id: string) => {
    const filteredTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  } 

  return (
    <ToDoContext.Provider value={{ todos, addToDo, deleteToDo }}>
      {children}
    </ToDoContext.Provider>
  );
}

export function useToDoContext() {
  const context = useContext(ToDoContext);
  return context;
}
