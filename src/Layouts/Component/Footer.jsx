import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Copy from "./Copy";

const Footer = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const pageRoutes = [
    { title: t("greeting"), route: "/" },
    { title: t("ab"), route: "/about_us" },
    // { title: t('pt'), route: '/partners' },
    { title: t("ser"), route: "/services" },
    { title: t("ex"), route: "/experience" },
    { title: 'Privacy Policy', route: "/privacy-policy" },
  ];

  const contactData = [
    { title: t("cu") },
    { title: "+393408049494" },
    { title: "info@smart-horizons.it" },
    { title: t("ad") },
    { title: t("ad1") },
  ];

  const handlePageClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <Box sx={{ fontFamily: 'Montserrat, sans-serif' }}>
        <Grid container spacing={5} sx={{ padding: isSmall ? '20px' : "40px" }}>
          <Grid item lg={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <img
                src="/Logo_white.png"
                alt=""
                style={{ height: "5vh" }}
              />
              <Typography sx={{ fontSize: "22px", fontWeight: 800, fontFamily: 'Dancing Script, cursive' }}>Smart</Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              color: "white",
            }}
          >
            {pageRoutes.map((val, ind) => (
              <Box key={ind}>
                <Typography
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    cursor: "pointer",
                    display: "inline-block",
                  }}
                  onClick={() => handlePageClick(val.route)}
                >
                  {val.title}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid
            item
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              color: "white",
            }}
          >
            {contactData.map((val, ind) => (
              <Box key={ind}>
                <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>{val.title}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Copy />
    </>
  );
};

export default Footer;
