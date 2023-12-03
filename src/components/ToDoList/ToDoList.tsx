import { useToDoContext } from "../../context/todo-context";
import { Todo } from "../../utils/types";
import ToDoItem from "../TodoItem/TodoItem";

export default function ToDoList() {

  const { todos } = useToDoContext();

  const todoList: Todo[] = todos as Todo[];

  return (
    <div className="w-full pt-10">
      {todoList.length > 0 ? (
        <ul className="flex flex-col gap-y-5 ">
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
