
import { Pencil, Trash } from "lucide-react";

import { Todo } from "../../utils/types";

interface ToDoItemProps {
  todo: Todo;
}

export default function ToDoItem({ todo }: ToDoItemProps) {
  return (
    <div className="w-full h-14 px-4 flex items-center justify-between rounded-xl bg-secondary-900">
      <h1 className="text-xl text-white">{todo.text}</h1>
      <div className="w-16 flex justify-between">
        <button className="hover:scale-125 group transition-all">
          <Pencil className="text-accent-600 group-hover:text-accent-300 transition-all" />
        </button>
        <button className="hover:scale-125 group transition-all">
          <Trash className="text-accent-600 group-hover:text-accent-300 transition-all" />
        </button>
      </div>
    </div>
  );
}
