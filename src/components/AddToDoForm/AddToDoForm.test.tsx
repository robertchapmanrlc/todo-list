import { ToDoContext } from "../../context/todo-context";
import { render, screen, userEvent } from "../../utils/test-utils";
import { ToDoContextType } from "../../utils/types";
import AddToDoForm from "./AddToDoForm";

const customRender = (
  ui: JSX.Element,
  { providerProps, ...renderOptions }: { providerProps: ToDoContextType }
) => {
  return render(
    <ToDoContext.Provider value={providerProps}>{ui}</ToDoContext.Provider>,
    renderOptions
  );
};

describe("AddToDoForm", () => {
  describe("rendering", () => {
    test("textbox", () => {
      render(<AddToDoForm />);
      const input: HTMLInputElement = screen.getByRole("textbox");
      expect(input).toBeVisible();
    });
  });

  describe("behavior", () => {
    let providerProps: ToDoContextType;
    beforeEach(async () => {
      providerProps = {
        todos: [],
        addToDo: vi.fn(),
        deleteToDo: vi.fn(),
        editToDo: vi.fn()
      };
    });
    
    test("calls the addToDo method when submitting text to the form", async () => {
      customRender(<AddToDoForm />, { providerProps });
      const input: HTMLInputElement = screen.getByRole("textbox");
      await userEvent.clear(input);
      await userEvent.type(input, "hello{enter}");
      expect(providerProps.addToDo).toHaveBeenCalledTimes(1);
    });
  });
});
