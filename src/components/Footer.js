import React from "react";
import { Stack, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Stack
        height={10}
        direction="row"
        justifyContent="center"
        sx={{
          bgcolor: "#DFDFDE",
          position: "fixed",
          bottom: 0,
          padding: 2,
          width: 1,
        }}
      >
        <Box
          sx={{
            color: "#8D8DAA",
          }}
        >
           © Made by Atul Taneja.
        </Box>
      </Stack>
    </div>
  );
};

export default Footer;
