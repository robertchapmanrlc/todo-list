import ToDoItem from "./TodoItem";
import { render, screen } from "../../utils/test-utils";
import { Todo } from "../../utils/types";

const todo: Todo = {
  id: new Date().getTime().toString(),
  text: "Sample Todo",
};

describe("ToDoItem", () => {
  describe("rendering", () => {
    test("shows 'Sample Todo' correctly", () => {
      render(<ToDoItem todo={todo} />);
      const text: HTMLElement = screen.getByText(/sample todo/i);
      expect(text).toBeVisible();
    });
  });
});
