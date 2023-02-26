import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//mui components
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

//slices
import { addPokemon, removePokemon } from "../../slices/FavPokemonSlice";

//hooks
import useImgId from "../../customHook/useImgId/useImgId";

export default function PokemonCard(props) {
  const { url, name } = props.pokemon;

  const favPokemonList = useSelector(
    (state) => state.favPokemon.favPokemonList
  );
  const dispatch = useDispatch();
  const imgId = useImgId(url);

  const handleClick = () => {
    if (favPokemonList.includes(name)) {
      dispatch(removePokemon(name));
    } else {
      dispatch(addPokemon(name));
    }
  };

  return (
    <Card
      sx={{ minWidth: "200px" }}
      style={{
        margin: "16px",
        textAlign: "center",
        backgroundColor: favPokemonList.includes(name) ? "#F2B995" : null,
      }}
    >
      <Link to={`/pokemon/${name}`}>
        <CardMedia
          component="img"
          height="194"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgId}.png`}
          alt={url}
        />
      </Link>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", flexDirection: "column" }}>
        <Button size="small" onClick={() => handleClick()}>
          {favPokemonList.includes(name) ? "Set free" : "Catch him"}
        </Button>
      </CardActions>
    </Card>
  );
}
