import ReactDOM from "react-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import ErrorMsg from "./ErrorMsg";

describe("ErrorMsg component", () => {
  it("should render and match snapshot", () => {
    let comp = render(<ErrorMsg />);

    expect(comp).toMatchSnapshot();
  });

  it('should display "Opps!!! Something went wrong!"', () => {
    render(<ErrorMsg />);
    let query = screen.getByText("Opps!!! Something went wrong!");

    expect(query).toBeInTheDocument();
  });
});
