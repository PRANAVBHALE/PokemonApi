import ReactDOM from "react-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import PokemonDetailPage from "./PokemonDetailPage.js";
import { Provider } from "react-redux";
import { store } from "../../store.js";

describe("PokemonDetailPage component", () => {
  it("should render and match snapshot", () => {
    let comp = render(
      <Provider store={store}>
        <PokemonDetailPage />
      </Provider>
    );

    expect(comp).toMatchSnapshot();
  });
});
