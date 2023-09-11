import React from "react";
import { Typography, Stack, Box, Button } from "@mui/material";
import BodyPartimg from "../assets/icons/body-part.png";
import Targetimg from "../assets/icons/target.png";
import Equipimg from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartimg,
      name: bodyPart,
    },
    {
      icon: Targetimg,
      name: target,
    },
    {
      icon: Equipimg,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h5">
          A Day of exercise:- <b>{name} </b>keeps doctor away. Go in give it
          your all. Target your <b>{target} </b> muscles. Remember why you
          started. Its the pain that will make you strong.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                borderRadius: "50%",
                width: "100px",
                color: "yellow",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
