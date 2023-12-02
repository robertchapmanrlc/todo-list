import { createContext, useContext, useState } from "react";

import type { Todo } from "../utils/types";

type ToDoContextType = {
  todos: Todo[];
};

export const ToDoContext = createContext<ToDoContextType>({
  todos: []
});

type ToDoContextProviderProps = {
  children: React.ReactNode;
};

export default function ToDoContextProvider({
  children,
}: ToDoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <ToDoContext.Provider value={{ todos }}>{children}</ToDoContext.Provider>
  );
}

export function useToDoContext() {
  const context = useContext(ToDoContext);
  return context;
}
