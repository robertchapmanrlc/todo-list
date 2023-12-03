import { FieldValues, useForm } from "react-hook-form";
import { useContext } from "react";
import { render, screen, userEvent } from "../utils/test-utils";

import ToDoContextProvider, { ToDoContext } from "./todo-context";

const CustomTest = () => {
  const { register, handleSubmit } = useForm();

  const { todos, addToDo } = useContext(ToDoContext);

  const onSubmit = (data: FieldValues) => {
    addToDo(data.newText as string);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          value="Hello world"
          {...register("newText", { required: true })}
        />
      </form>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};

describe("ToDoContext", () => {
  describe("rendering", () => {
    test("should correctly add a todo with the addToDo method", async () => {
      render(
        <ToDoContextProvider>
          <CustomTest />
        </ToDoContextProvider>
      );
      const form: HTMLElement = screen.getByRole('textbox');
      await userEvent.type(form, '{enter}');
      const todos: HTMLElement[] = screen.getAllByRole("listitem");
      const helloTodo: HTMLElement = screen.getByText("Hello world");
      expect(todos.length).toBe(1);
      expect(helloTodo).toBeVisible();
    });
  });
});
