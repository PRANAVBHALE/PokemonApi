import ReactDOM from "react-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Loader from "./Loader";

describe("ErrorMsg component", () => {
  it("should render and match snapshot", () => {
    let comp = render(<Loader />);

    expect(comp).toMatchSnapshot();
  });

  it("should display", () => {
    render(<Loader />);
    let query = screen.getByTestId("Loader");

    expect(query).toBeInTheDocument();
  });
});
