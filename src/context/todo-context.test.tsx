import { FieldValues, useForm } from "react-hook-form";
import { useContext } from "react";
import { render, screen, userEvent } from "../utils/test-utils";

import ToDoContextProvider, { ToDoContext } from "./todo-context";

const CustomTest = () => {
  const { register, handleSubmit } = useForm();

  const { todos, addToDo, deleteToDo } = useContext(ToDoContext);

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
      <button onClick={() => deleteToDo(todos[0].id)}>Delete</button>
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

    describe("behavior", () => {
      test("should correclty delete a todo with the deleteTodo method", async () => {
        render(
          <ToDoContextProvider>
            <CustomTest />
          </ToDoContextProvider>
        );
        
        const form: HTMLElement = screen.getByRole("textbox");
        await userEvent.type(form, "{enter}");
        const deleteButton: HTMLButtonElement = screen.getByRole("button", { name: "Delete" });
        await userEvent.click(deleteButton);
        const todos: HTMLUListElement[] = screen.queryAllByRole("listitem");
        expect(todos.length).toBe(0);
      });
    });
  });
});
