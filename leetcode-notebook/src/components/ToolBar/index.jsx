import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function ToolBar() {
  const handleClick = () => {};

  return (
    <Stack spacing={10} direction="row" justifyContent="space-around">
      <div></div>
      <Button onClick={handleClick} variant="contained">
        <Link to="/NewNote" style={{ color: "#FFF", textDecoration: "none" }}>
          Add new note
        </Link>
      </Button>
    </Stack>
  );
}

export default ToolBar;
