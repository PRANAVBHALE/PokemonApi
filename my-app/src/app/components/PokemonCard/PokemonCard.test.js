import ReactDOM from "react-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("PokemonCard component", () => {
  it("should render and match snapshot", () => {
    let pokemon = {
      url: "www.google.com",
      name: "Pokemon",
    };

    let comp = render(
      <Provider store={store}>
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      </Provider>
    );

    expect(comp).toMatchSnapshot();
  });

  it("should handle btn click", async () => {
    const handleClick = jest.fn();

    let pokemon = {
      url: "www.google.com",
      name: "Pokemon",
    };

    let comp = render(
      <Provider store={store}>
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      </Provider>
    );

    //arrange
    const Btn = screen.getByRole("button", { name: /Catch him/i });

    //act
    await fireEvent.click(Btn);

    //assert
    const setFreeBtn = screen.getByRole("button", { name: /Set Free/i });
    expect(setFreeBtn).toHaveTextContent("Set Free");
    expect(setFreeBtn).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalled();

    // expect(comp).toMatchSnapshot()
  });
});
