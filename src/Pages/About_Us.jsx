import React, { useEffect, useRef } from "react";
import Navbar from "../Layouts/Component/Navbar";
import Header from "../Layouts/Component/Header";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Page from "../components/page/page";
import Repeat from "../Layouts/Component/Repeat";
import { useSelector } from "react-redux";

const About = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const darkMode = useSelector((state) => state.theme.isLight);
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
  return (
    <div>
      <Page title={t("ab")}>
        <Header title={t("ab")} src="/BACKGROUND4.jpg" align="center" w="100%" t="45%" />
        <Box
          sx={{
            backgroundColor: darkMode ? "#000" : "#fff",
            padding: isSmall ? "20px" : "0px 80px 30px 100px",
          }}
        >
          <Typography

            sx={{
              padding: isSmall ? "20px" : "80px",
              textAlign: "center",
              fontSize: isSmall ? '22px' : "32px",
              fontWeight: 600,
              color: darkMode ? "#fff" : "#000",
              fontFamily: 'Montserrat, sans- serif'
            }}
          >
            {t("ab_d1")}
          </Typography>
          <Box
            sx={{ padding: isSmall ? "20px" : "0px 50px 0px 50px" }}
          >
            <Box sx={{ display: 'flex', gap: '40px', flexDirection: isSmall ? 'column-reverse' : 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              <Box ref={textRef}
                className="fade-in" flex={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ fontSize: "20px", color: darkMode ? "#fff" : "#000", fontFamily: 'Montserrat, sans- serif', textAlign: 'justify' }}>
                  {t("ab_d2")}
                </Typography>

              </Box>

              <Box flex={2} sx={{ "&:hover img": { transform: "scale(1.05)" }, }} ref={textRef}
                className="fade-in">
                <img src="/Rectangle 3 (1).png" alt="" style={{
                  width: "100%", height: "40vh", maxHeight: "50vh", borderRadius: "5px",
                  transition: "transform 0.3s ease-in-out",
                }} />
                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: darkMode ? "#fff" : "#000", fontFamily: 'Montserrat, sans- serif', textAlign: 'center', }}>{t('ser1_img1_text')}</Typography>
              </Box>
            </Box>

            {/* Image */}
            <Box sx={{ display: 'flex', gap: '40px', flexDirection: isSmall ? 'column' : 'row', flexWrap: 'wrap', alignItems: "center", justifyContent: 'center' }}>


              <Box flex={2} sx={{ "&:hover img": { transform: "scale(1.05)" }, }} ref={textRef}
                className="fade-in">
                <Box>
                  <img
                    src="/Russian_minister_of_Industry.jpg"
                    alt=""
                    style={{
                      width: "100%", height: "40vh", borderRadius: "5px",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                  <Typography sx={{ fontSize: '16px', fontWeight: 600, color: darkMode ? "#fff" : "#000", fontFamily: 'Montserrat, sans- serif', textAlign: 'center', }}>{t('ser1_img2_text')}</Typography>
                </Box>
              </Box>
              <Box ref={textRef}
                className="fade-in" flex={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box >
                  <Typography
                    sx={{ fontSize: "20px", color: darkMode ? "#fff" : "#000", fontFamily: 'Montserrat, sans- serif', textAlign: 'justify', }}
                  >
                    {t("ab_d3")}
                  </Typography>
                </Box>

              </Box>
            </Box>
            {/* 
            <Box ref={textRef}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              className="fade-in" >
              <Box>
                <img
                  src="/Russian_minister_of_Industry.jpg"
                  alt=""
                  style={{
                    width: "100%", height: "40vh", borderRadius: "5px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: darkMode ? "#fff" : "#000", fontFamily: 'Montserrat, sans- serif', textAlign: 'center', }}>{t('ser1_img2_text')}</Typography>
              </Box>
              <Box >
                <Typography
                  sx={{ fontSize: "20px", color: darkMode ? "#fff" : "#000", fontFamily: 'Montserrat, sans- serif', textAlign: 'justify', padding: '50px 0px' }}
                >
                  {t("ab_d3")}
                </Typography>
              </Box>

            </Box> */}


            <Typography sx={{ fontSize: '20px', fontWeight: 500, color: darkMode ? "#fff" : "#000", fontFamily: 'Montserrat, sans- serif', textAlign: 'center', marginTop: "50px" }}>{t('BCM')}</Typography>
          </Box>

        </Box>

        <Repeat />
      </Page>
    </div>
  );
};

export default About;
