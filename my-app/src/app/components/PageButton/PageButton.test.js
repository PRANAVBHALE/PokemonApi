import ReactDOM from "react-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import PageButton from "./PageButton";
import user from "@testing-library/user-event";

describe("ErrorMsg component", () => {
  it("should render and match snapshot", () => {
    let comp = render(<PageButton />);

    expect(comp).toMatchSnapshot();
  });

  it("should display Prev", () => {
    render(<PageButton name="Prev" />);
    let query = screen.getByText("Prev");

    expect(query).toBeInTheDocument();
  });

  it("should handle disable property", () => {
    render(<PageButton isDisabled={true} name="Prev" />);
    let disableElQuery = screen.getByText("Prev");

    expect(disableElQuery).toBeDisabled();
  });

  it("should handle enable property", () => {
    render(<PageButton isDisabled={false} name="MockName" />);
    let enableElQuery = screen.getByText("MockName");

    expect(enableElQuery).not.toBeDisabled();
  });

  it("should handle click", async () => {
    const handler = jest.fn();

    render(
      <PageButton
        isDisabled={false}
        name="MockName"
        handlePageClick={handler}
      />
    );
    let btn = screen.getByText("MockName");
    await user.click(btn);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
