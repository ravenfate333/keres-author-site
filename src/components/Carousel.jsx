import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function CarouselComponent({ items }) {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Paper sx={{ backgroundColor: 'transparent' }}>
      <img src={item.image} style={{ width: "100%", height: "100%" }} />
    </Paper>
  );
}

export default CarouselComponent;