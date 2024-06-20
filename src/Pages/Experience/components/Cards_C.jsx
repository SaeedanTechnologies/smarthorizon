import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { data } from "./data";
import { useTranslation } from "react-i18next";
const Cards_C = () => {
  const { t } = useTranslation();
  const textRef = useRef(null);

  const handleScrollFadeIn = () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  useEffect(() => {
    handleScrollFadeIn();
  }, []);
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Grid container spacing={3}>
      {data.map((val, ind) => {
        return (
          <Grid ref={textRef}
            className="fade-in" item xs={12} md={8} lg={4}>
            <Card elevation={3}>
              <CardContent
                sx={{
                  ...center,
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "14pt",
                    fontFamily: 'Montserrat, sans- serif'
                  }}
                >
                  {val.title}
                </Typography>
                <Box sx={center}>
                  <PlaceIcon sx={{ marginRight: "5px" }} />
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}> {t(`tit${ind + 1}`)}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cards_C;
