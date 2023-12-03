import { Todo } from "../../utils/types";

interface ToDoItemProps {
  todo: Todo;
}

export default function ToDoItem({ todo }: ToDoItemProps) {
  return (
    <div className="w-full h-14 px-2 flex items-center rounded-xl bg-secondary-900">
      <h1 className="text-xl ml-2 text-white">{todo.text}</h1>
    </div>
  );
}
