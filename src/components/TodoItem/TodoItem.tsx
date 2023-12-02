import { Todo } from "../../lib/types";

interface ToDoItemProps {
  todo: Todo;
}

export default function ToDoItem({ todo }: ToDoItemProps) {
  return <h1>{todo.text}</h1>;
}