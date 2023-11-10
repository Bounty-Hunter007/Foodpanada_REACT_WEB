import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  const { restaurant_name, cuisine_type } = props.data;
  return (
    <div onClick={props.onClick} className="medi">
       
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>{restaurant_name}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h5>{cuisine_type}</h5>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
