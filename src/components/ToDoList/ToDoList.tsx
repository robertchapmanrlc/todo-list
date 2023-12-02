import { Todo } from "../../lib/types";
import ToDoItem from "../TodoItem/TodoItem";

export default function ToDoList() {
  const todos: Todo[] = [];

  return (
    <div className="w-full pt-10">
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <ToDoItem todo={todo} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl text-white text-center">No ToDos</p>
      )}
    </div>
  );
}
