import AddToDoForm from "./AddToDoForm/AddToDoForm";
import ToDoList from "./ToDoList/ToDoList";

export default function TodoListApp() {
  return (
    <div className="w-full sm:max-w-[700px] pt-8 px-8 md:px-0">
      <h1 className="text-4xl text-center text-white mb-8">ToDo List</h1>
      <AddToDoForm />
      <ToDoList />
    </div>
  );
}
