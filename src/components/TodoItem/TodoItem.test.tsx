import ToDoItem from "./TodoItem";
import { render, screen, userEvent } from "../../utils/test-utils";
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

  describe("behavior", () => {
    test("shows textbox in edit mode", async () => {
      render(<ToDoItem todo={todo} />);
      const editButton: HTMLButtonElement = screen.getAllByRole('button')[0] as HTMLButtonElement;
      await userEvent.click(editButton);

      const input: HTMLInputElement = screen.getByRole('textbox');
      expect(input).toBeVisible();
    });

    test("shows confirm icon in edit mode", async () => {
      const { container } = render(<ToDoItem todo={todo} />);
      const editButton: HTMLButtonElement = screen.getAllByRole('button')[0] as HTMLButtonElement;
      await userEvent.click(editButton);

      const confirmSvg: SVGElement = container.querySelector('.lucide-check-circle2') as SVGElement;
      expect(confirmSvg).toBeVisible();
    });

    test("shows cancel icon in edit mode", async () => {
      const { container } = render(<ToDoItem todo={todo} />);
      const editButton: HTMLButtonElement = screen.getAllByRole('button')[0] as HTMLButtonElement;
      await userEvent.click(editButton);

      const cancelSvg: SVGElement = container.querySelector('.lucide-xcircle') as SVGElement;
      expect(cancelSvg).toBeVisible();
    });
  });
});
