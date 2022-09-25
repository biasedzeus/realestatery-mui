import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Stack } from "@mui/material";
import { BiBath, BiBed, BiArea } from "react-icons/bi";
import styled from "@emotion/styled";
import {motion} from 'framer-motion';

const BHKIcons = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: ".4rem",
});

export default function ActionAreaCard({ product }) {
  const {
    title,
    price,
    image,
    address: { street, city, state },
    bhk: { rooms, bathrooms, area },
  } = product;
  return (
    <Card 
    component={motion.div}
    initial={{ opacity: 0, translateY: 100 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    transition={{
      duration: .5,
      type: "spring",
      stiffness: "200",
    }}
    viewport={{ once: true }}
    sx={{ minWidth: 300, maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />

  
        <CardContent>
          <Typography fontWeight="800" color="purple" variant="body2">
            ${price} <span className="month">/ month</span>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {street + city + state}
          </Typography>
          <hr />
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <BHKIcons>
              <BiBed />
              {rooms}
            </BHKIcons>
            <BHKIcons>
              <BiBath />
              {bathrooms}
            </BHKIcons>
            <BHKIcons>
              <BiArea />
              {area} sq. m
            </BHKIcons>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
