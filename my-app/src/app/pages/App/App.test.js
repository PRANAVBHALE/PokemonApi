import ReactDOM from "react-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "../../store.js";

describe("App component", () => {
  it("should render and match snapshot", () => {
    let comp = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(comp).toMatchSnapshot();
  });
});
