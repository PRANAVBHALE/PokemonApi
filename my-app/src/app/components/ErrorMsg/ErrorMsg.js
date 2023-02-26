import * as React from "react";

//mui components
import { Box, Typography } from "@mui/material";

export default function ErrorMsg() {
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Typography
        align="center"
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Opps!!! Something went wrong!
      </Typography>
    </Box>
  );
}
