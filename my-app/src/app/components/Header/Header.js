import * as React from "react";
import { Link } from "react-router-dom";
import pokeBall from '../../../pokeball.png'

//mui components
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img src={pokeBall} style={{height:'30px',width:'30px'}} alt="pokeball" />
          </IconButton>
          <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
            <Typography
              data-testid="Pokemon App"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Pokemon App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
