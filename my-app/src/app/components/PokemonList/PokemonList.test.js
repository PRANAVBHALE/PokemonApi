import ReactDOM from "react-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import PokemonList from "./PokemonList";
import { Provider } from "react-redux";
import { store } from "../../store";
import ReactRouter from "react-router";
import { rest } from "msw";
import { server } from "../../utils/server";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import user from "@testing-library/user-event";
import { pokemonApi } from "../../services/pokemonApi";

describe("PokemonList component", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("should render and match snapshot", () => {
    let comp = render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );

    expect(comp).toMatchSnapshot();
  });

  it("should handle error", async () => {
    server.use(
      rest.get(
        "https://pokeapi.co/api/v2/pokemon?offset=50&limit=50",
        (req, res, ctx) => {
          return res(ctx.status(400));
        }
      )
    );

    let comp = render(
      <ApiProvider api={pokemonApi}>
        <PokemonList />
      </ApiProvider>
    );

    const error = await screen.findAllByText("Opps!!! Something went wrong!");
    expect(error).toBeInTheDocument();
    expect(comp).toMatchSnapshot();
  });

  it("should Btns list", async () => {

    const setOffset = jest.mock()

    render(
      <ApiProvider api={pokemonApi}>
    <PokemonList />
    </ApiProvider>
  );
    const nextBtn = screen.getByRole("button", { name: /next page/i });
    const prevBtn = screen.getByRole("button", { name: /prev page/i });
    const loader = screen.getByTestId("Loader");


    await user.click(nextBtn);

    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    expect(loader).toBeInTheDocument();
    expect(setOffset).toHaveBeenCalled();

  });
});
