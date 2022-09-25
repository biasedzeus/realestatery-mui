import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Modal, Popover, Stack, Typography } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceSlider({ price, handleChange }) {
  return (
    <Box
      sx={{
        minWidth: 200,
        padding: "2rem",
      }}
    >
      <Typography fontWeight="700">Set Price Range $</Typography>
      <Slider
        value={price}
        onChange={(e, newValue) => handleChange(e, newValue)}
        min={0}
        max={10000}
        step={100}
        valueLabelDisplay="auto"
        sx={{
          color: "purple",
        }}
      />
    </Box>
  );
}
