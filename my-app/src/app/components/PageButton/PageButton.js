import * as React from "react";

//mui components
import { Stack, Button } from "@mui/material";

export default function PageButton({ isDisabled, name, handlePageClick }) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        disabled={isDisabled}
        variant="contained"
        onClick={handlePageClick}
      >
        {name}
      </Button>
    </Stack>
  );
}
