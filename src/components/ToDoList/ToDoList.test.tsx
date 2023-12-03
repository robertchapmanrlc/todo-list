import ToDoList from "./ToDoList";
import { ToDoContext } from "../../context/todo-context";
import { Todo, ToDoContextType } from "../../utils/types";

import { render, screen, userEvent } from "../../utils/test-utils";

let todos: Todo[] = [
  {
    id: "0",
    text: "Sample ToDo One",
  },
  {
    id: "1",
    text: "Sample ToDo Two ",
  },
  {
    id: "2",
    text: "Sample ToDo Three",
  },
] as const;

const customRender = (
  ui: JSX.Element,
  { providerProps, ...renderOptions }: { providerProps: ToDoContextType }
) => {
  return render(
    <ToDoContext.Provider value={providerProps}>{ui}</ToDoContext.Provider>,
    renderOptions
  );
};

describe("ToDoList", () => {
  describe("rendering", () => {
    let providerProps: ToDoContextType;
    beforeEach(async () => {
      providerProps = {
        todos: todos,
        addToDo: vi.fn(),
        deleteToDo: vi.fn()
      };
    });

    test("correctly shows message when there are no todos", () => {
      providerProps.todos = [];
      customRender(<ToDoList />, { providerProps });
      const message: HTMLParagraphElement = screen.getByText("No ToDos");
      expect(message).toBeVisible();
    })
    
    test("correctly shows three todos", () => {
      customRender(<ToDoList />, { providerProps });
      const todos: HTMLUListElement[] = screen.getAllByRole('listitem');
      expect(todos.length).toBe(3);
    });
  });

  describe("behavior", () => {
    let providerProps: ToDoContextType;
    beforeEach(async () => {
      providerProps = {
        todos: todos,
        addToDo: vi.fn(),
        deleteToDo: vi.fn(),
      };
    });

    test("should call the deleteToDo method when the delete button is click", async () => {
      customRender(<ToDoList />, { providerProps });
      const deleteButtons: HTMLButtonElement[] = screen.getAllByRole('button');
      await userEvent.click(deleteButtons[1]);
      expect(providerProps.deleteToDo).toHaveBeenCalledTimes(1);
    });
  });
});
