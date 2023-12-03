import { CheckCircle2, Pencil, Trash, XCircle } from "lucide-react";

import { Todo } from "../../utils/types";
import { useToDoContext } from "../../context/todo-context";
import { useState } from "react";

interface ToDoItemProps {
  todo: Todo;
}

export default function ToDoItem({ todo }: ToDoItemProps) {
  const [editing, setEditing] = useState(false);

  const { deleteToDo } = useToDoContext();

  return (
    <>
      {!editing ? (
        <div className="w-full h-14 px-4 flex items-center justify-between rounded-xl bg-secondary-900">
          <h1 className="text-xl text-white">{todo.text}</h1>
          <div className="w-16 flex justify-between">
            <button
              className="hover:scale-125 group transition-all"
              onClick={() => setEditing(true)}
            >
              <Pencil className="text-accent-600 group-hover:text-accent-300 transition-all" />
            </button>
            <button
              className="hover:scale-125 group transition-all"
              onClick={() => deleteToDo(todo.id)}
            >
              <Trash className="text-accent-600 group-hover:text-accent-300 transition-all" />
            </button>
          </div>
        </div>
      ) : (
        <form className="w-full h-14 px-4 flex items-center justify-between rounded-xl bg-accent-600">
          <input
            type="text"
            defaultValue={todo.text}
            className="w-3/4 bg-transparent text-xl text-white py-1 outline-none border-b-2 border-transparent focus:border-b-2 focus:border-b-white focus:outline-none transition-all"
            autoFocus
          />
          <div className="w-16 flex justify-between">
            <button
              className="hover:scale-125 transition-all group"
              type="submit"
            >
              <CheckCircle2 className="text-white/75 group-hover:text-white" />
            </button>
            <button
              className="ms-2 hover:scale-125 transition-all group"
              onClick={() => setEditing(false)}
            >
              <XCircle className="text-white/75 group-hover:text-white transition-all" />
            </button>
          </div>
        </form>
      )}
    </>
  );
}
