import ReactDOM from "react-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  xit("should render and match snapshot", () => {
    let comp = render(<Header />);

    expect(comp).toMatchSnapshot();
  });

  xit('should display "Pokemon App', () => {
    render(<Header />);
    let query = screen.getByTestId("Pokemon App");

    expect(query).toBeInTheDocument();
  });
});
