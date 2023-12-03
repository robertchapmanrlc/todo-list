import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ToDoContext } from "../../context/todo-context";

export default function AddToDoForm() {
  
  const { register, handleSubmit } = useForm();

  const { addToDo } = useContext(ToDoContext);
  
  const onSubmit = (data: FieldValues) => {
    addToDo(data.todoText as string);
  }

  return (
    <form className="w-full flex justify-center" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todoText", {required: true})}
        type="text"
        placeholder="e.g. go shopping"
        className="w-full h-14 text-xl text-white rounded-xl pl-3 bg-secondary-900 outline-none focus:outline-none focus:bg-accent-600 focus:ring-4 focus:ring-accent-800 focus:placeholder:text-gray-600 transition-all"
      />
    </form>
  );
}
