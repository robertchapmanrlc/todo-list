import TodoListApp from "./components/ToDoListApp";
import ToDoContextProvider from "./context/todo-context";

function App() {
  return (
    <>
      <div className="w-full flex justify-center">
        <ToDoContextProvider>
          <TodoListApp />
        </ToDoContextProvider>
      </div>
    </>
  );
}

export default App;
