import React from "react";
import { Button } from "@mui/material";
import Card  from "@mui/material/Card";
import { makeStyles } from "@mui/material/styles";
import CardActionArea  from "@mui/material/CardActionArea";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";


export default function Create() {
  return (
    <div>
    <Card sx={{
        maxWidth:345
    }}>
    <CardActionArea>
    <CardMedia sx={{
        height:140,
    }} image="./book.jpg"></CardMedia>
    <CardContent>
    <Typography sx={{
        fontWeight:1000,
        textAlign:"left"
    }}>Who Moved My Cheese</Typography>
    <Typography sx={{
        color:"grey",
        fontSize:15
    }} >Spencer Johnson</Typography>
    </CardContent>
    </CardActionArea>
    </Card>
    </div>
  );
}