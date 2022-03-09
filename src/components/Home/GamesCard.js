import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GamesCard = (props) => {
  return (
    <Card
      style={{
        margin: "8px",
        width: "18%",
        height: "310px",
        minWidth: "190px",
        minHeight: "180px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent className="cards--content">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <img
          width="100%"
          style
          src={props.imgName}
          onClick={() => props.setGame(props.id)}
        />
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.setGame(props.id)}>
          Play Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default GamesCard;
