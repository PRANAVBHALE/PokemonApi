import ReactDOM from "react-dom";
import { screen, waitFor, render, fireEvent } from "@testing-library/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import PokemonDetailCard from "./PokemonDetailCard";
import { server } from "../../utils/server";
import { pokemonApi } from "../../services/pokemonApi";
import { Provider } from "react-redux";
import { store } from "../../store";
import ReactRouter, { Route } from "react-router";
import rest from "msw";

describe("PokemonDetailCard component", () => {
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
      <ApiProvider api={pokemonApi}>
        <PokemonDetailCard />
      </ApiProvider>
    );

    expect(comp).toMatchSnapshot();
  });

  it("should display Pokemon Detail", async () => {
    render(
      <ApiProvider api={pokemonApi}>
        <PokemonDetailCard />
      </ApiProvider>
    );

    const boxEl = screen.getAllByTestId("box");
    const cardEl = screen.getAllByTestId("card");
    const nameEl = screen.getAllByTestId("name");
    const expEl = screen.getAllByTestId("exp");
    const imgEl = screen.getAllByTestId("img");
    const abilityEl = screen.getAllByTestId("ability");
    const wtEl = screen.getAllByTestId("wt");

    await waitFor(() => {
      expect(screen.getByText("bulbasaur")).toBeInTheDocument();

      expect(boxEl).toBeInTheDocument();
      expect(cardEl).toBeInTheDocument();
      expect(nameEl).toBeInTheDocument();
      expect(expEl).toBeInTheDocument();
      expect(imgEl).toBeInTheDocument();
      expect(abilityEl).toBeInTheDocument();
      expect(wtEl).toBeInTheDocument();
    });
  });

  it("should handle error", async () => {
    server.use(
      rest.get(
        "https://pokeapi.co/api/v2/pokemon/bulbasaur",
        (req, res, ctx) => {
          return res(ctx.status(400));
        }
      )
    );

    render(
      <ApiProvider api={pokemonApi}>
        <PokemonDetailCard />
      </ApiProvider>
    );

    const error = await screen.findAllByText("Opps!!! Something went wrong!");
    expect(error).toBeInTheDocument();
  });
});
