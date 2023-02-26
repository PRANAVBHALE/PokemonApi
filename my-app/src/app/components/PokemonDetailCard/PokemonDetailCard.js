import React from "react";
import { useParams } from "react-router-dom";

//mui components
import { Typography, CardMedia, Card, Box } from "@mui/material";

//app components
import Loader from "../Loader/Loader";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

//api service
import { useGetPokemonDetailQuery } from "../../services/pokemonApi";

const PokemonDetailCard = () => {
  const routeParams = useParams();

  const { name } = routeParams;

  const {
    data: pokemon,
    isLoading,
    isFetching,
    isError,
  } = useGetPokemonDetailQuery(name);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMsg />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItem: "center",
        "& > :not(style)": {
          m: 1,
          minWidth: 400,
          minHeight: 128,
        },
      }}
      data-testid="box"
    >
      <Card
        data-testid="card"
        sx={{ minWidth: 150 }}
        style={{ margin: "16px", textAlign: "center" }}
      >
        <CardMedia
          data-testid="img"
          component="img"
          minHeight="150"
          image={pokemon.sprites.back_default}
          alt={pokemon.sprites.back_default}
        />
        <Typography
          data-testid="name"
          variant="h2"
          color="text.secondary"
          gutterBottom
          style={{ padding: "8px" }}
        >
          {pokemon.name}
        </Typography>

        <Typography
          data-testid="exp"
          variant="h3"
          color="text.secondary"
          gutterBottom
          style={{ padding: "8px" }}
        >
          Exp. {pokemon.base_experience}
        </Typography>

        <Typography
          data-testid="wt"
          variant="h4"
          color="text.secondary"
          gutterBottom
          style={{ padding: "8px" }}
        >
          Wt. {pokemon.weight}
        </Typography>

        <Typography
          data-testid="ability"
          variant="h4"
          color="text.secondary"
          gutterBottom
          style={{ padding: "8px" }}
        >
          Abilities:{" "}
          <div style={{ textAlign: "start", padding: "0 18%" }}>
            {pokemon.abilities.map((item) => (
              <>
                <li key={item.ability.name}>{item.ability.name}</li>
              </>
            ))}
          </div>
        </Typography>
      </Card>
    </Box>
  );
};

export default PokemonDetailCard;
