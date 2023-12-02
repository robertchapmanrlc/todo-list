import { createContext, useContext, useState } from "react";

import type { Todo } from "../utils/types";

type ToDoContextType = {
  todos: Todo[];
  addToDo: (newText: string) => void;
};

export const ToDoContext = createContext<ToDoContextType>({
  todos: [],
  addToDo: () => {}
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

  return (
    <ToDoContext.Provider value={{ todos, addToDo }}>
      {children}
    </ToDoContext.Provider>
  );
}

export function useToDoContext() {
  const context = useContext(ToDoContext);
  return context;
}
