import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";

const MinimalLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default MinimalLayout;
