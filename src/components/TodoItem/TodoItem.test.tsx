import ToDoItem from "./TodoItem";
import { render, screen } from "../../utils/test-utils";
import { Todo } from "../../utils/types";

const todo: Todo = {
  id: new Date().getTime().toString(),
  text: "Sample Todo",
} as const;

describe("ToDoItem", () => {
  describe("rendering", () => {
    test("shows 'Sample Todo' correctly", () => {
      render(<ToDoItem todo={todo} />);
      const text: HTMLElement = screen.getByText(/sample todo/i);
      expect(text).toBeVisible();
    });

    test("shows the pencil icon to indicate the edit option", () => {
      const { container } = render(<ToDoItem todo={todo} />);
      const pencilSvg: SVGElement = container.querySelector('.lucide-pencil') as SVGElement;
      expect(pencilSvg).toBeVisible();
    });

    test("shows the trash icon to indicate the delete option", () => {
      const { container } = render(<ToDoItem todo={todo} />);
      const trashSvg: SVGElement = container.querySelector('.lucide-trash') as SVGElement;
      expect(trashSvg).toBeVisible();
    });
  });
});
