import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Cartilla(props: any) {
  return (
    <Card sx={{ maxWidth: 400, display: "flex", backgroundColor: "#D9D9D9" }}>
      <CardMedia
        component="img"
        sx={{ width: 205 }}
        image={props.image}
        alt={props.name}
      />
      <CardContent sx={{ width: 195 }}>
        <Typography component="div" sx={{ fontSize: 20, fontWeight: "bold" }}>
          {props.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.status} - {props.specie}
        </Typography>
        <Box mt={3}>
          <Typography sx={{ fontSize: 17 }} color="green" gutterBottom>
            Origen
          </Typography>
          <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
            {props.origen}
          </Typography>
          <Typography sx={{ fontSize: 17 }} color="green" gutterBottom>
            Localización
          </Typography>
          <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
            {props.location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
