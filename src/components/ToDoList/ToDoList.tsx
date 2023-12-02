import { useToDoContext } from "../../context/todo-context";
import { Todo } from "../../utils/types";
import ToDoItem from "../TodoItem/TodoItem";

export default function ToDoList() {

  const { todos } = useToDoContext();

  const todoList: Todo[] = todos;

  return (
    <div className="w-full pt-10">
      {todoList.length > 0 ? (
        <ul>
          {todoList.map((todo) => (
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
