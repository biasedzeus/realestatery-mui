import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Modal, Popover, Stack, Typography } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceSlider() {
  const [value, setValue] = useState([23,7]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        minWidth:200,
        padding:'2rem'
      
      }}
    >
        <Typography fontWeight="700">Set Price Range $</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
        color:"purple"

        }}
      />
    </Box>
  );
}
