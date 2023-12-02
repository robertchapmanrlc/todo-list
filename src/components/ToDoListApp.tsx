import AddToDoForm from "./AddToDoForm/AddToDoForm";

export default function TodoListApp() {
  return (
    <div className="w-full sm:max-w-[900px] pt-8">
      <h1 className="text-4xl text-center text-white mb-8">ToDo List</h1>
      <AddToDoForm />
    </div>
  );
}
