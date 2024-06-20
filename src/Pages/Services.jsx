import React, { useEffect, useRef } from "react";
import Navbar from "../Layouts/Component/Navbar";
import Header from "../Layouts/Component/Header";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PiShareNetworkFill } from "react-icons/pi";
import Footer from "../Layouts/Component/Footer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Copy from "../Layouts/Component/Copy";
import Page from "../components/page/page";
import { useSelector } from "react-redux";
import { Carousel } from "primereact/carousel";
const Services = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  const data1 = [
    {
      main: "Technological Area",
      icon: PiShareNetworkFill,
      paragraph:
        "Realization of a Technological Project on site and related documentation",
    },
  ];
  const handleContact = () => {
    navigate("/contact_us");
  };
  const darkMode = useSelector((state) => state.theme.isLight);
  const testimonials = [
    {
      image: "/Bologna_Goldfinger_presentation_lineapelle_exhibition_2013.jpg",
    },
    { image: "/Novocherkassk2_2016.jpg" },
    { image: "/Novocherkassk1_2016.jpg" },
    { image: "/Mumbai1_Meeting_With_Raymond_President_S.K.Singhal_2010.jpg" },
    { image: "/Moscow_textile_prom_expo_2015.jpg" },

  ];

  const carouselTemplate = (testimonial) => {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          src={testimonial.image}
          alt="Testimonial"
          style={{
            width: "100%",
            maxHeight: "80vh",
            height: isSmall ? "50vh" : "80vh",
            padding: "0px 20px",
            objectFit: "cover",
          }}
        />
      </div>
    );
  };
  return (
    <div>
      <Page title={t("ser")}>
        {/* <Navbar /> */}
        <Header title={t("ser")} src="/BACKGROUND4.jpg" w="100%" align="center" t="45%" />
        <Box
          sx={{
            backgroundColor: darkMode ? "#000" : "#fff",
            padding: isSmall ? "20px" : "50px 50px 50px 50px",
          }}
        >
          <Typography

            sx={{
              padding: isSmall ? "20px" : "0px 40px 40px 40px",
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 700,
              color: darkMode ? "#fff" : "#000",
              fontFamily: 'Montserrat, sans- serif'
            }}
          >
            {t('ser_head')}
          </Typography>
          <Grid container spacing={5}>
            <Grid
              ref={textRef}
              className="fade-in"
              item
              lg={4}
              xs={12}
              sm={12}
              md={6}
              sx={{ marginTop: isSmall ? "30px" : "" }}
            >
              <Box
                sx={{
                  backgroundColor: darkMode ? "#BF9A3F" : "#030035",
                  padding: "20px",
                  height: "100%",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src="/icons8_electrical.svg" alt="" />
                <Typography
                  sx={{ textAlign: "center", fontWeight: 700, fontSize: "20px", fontFamily: 'Montserrat, sans- serif' }}
                >
                  {t("ser_title1")}
                </Typography>
                <Typography sx={{ fontSize: "16px", textAlign: 'center', fontFamily: 'Montserrat, sans- serif' }}>
                  {t("ser_desc1")}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              sm={12}
              md={6}
              sx={{ marginTop: isSmall ? "30px" : "" }}
            >
              <Box
                sx={{
                  //   backgroundColor: "white",
                  backgroundColor: darkMode ? "#BF9A3F" : "#030035",

                  padding: "20px",
                  height: "100%",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src="/system-uicons_reset-temporary.svg" alt="" />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "20px",
                    fontFamily: 'Montserrat, sans- serif'
                  }}
                >

                  {t("ser_title2")}
                </Typography>
                <Typography sx={{ fontSize: "16px", textAlign: 'center', fontFamily: 'Montserrat, sans- serif' }}>
                  {t("ser_desc2")}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              sm={12}
              md={12}
              sx={{ marginTop: isSmall ? "30px" : "" }}
            >
              <Box
                sx={{
                  //   backgroundColor: "white",
                  backgroundColor: darkMode ? "#BF9A3F" : "#030035",

                  padding: "20px",
                  height: "100%",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src="/icon-park-outline_industrial-scales.svg" alt="" />
                <Typography
                  sx={{ textAlign: "center", fontWeight: 700, fontSize: "20px", fontFamily: 'Montserrat, sans- serif' }}
                >
                  {t("ser_title3")}
                </Typography>
                <Typography sx={{ fontSize: "16px", textAlign: 'center', fontFamily: 'Montserrat, sans- serif' }}>
                  {t("ser_desc3")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{ paddingTop: "70px", paddingBottom: isSmall ? "30px" : "" }}
          >
            <Typography

              sx={{ fontSize: "20px", color: darkMode ? "#fff" : "#000", fontFamily: 'Montserrat, sans- serif', textAlign: 'center' }}
            >
              {/* {t("ser_endT1")} */}
              <span
                onClick={handleContact}
                style={{ cursor: "pointer", color: "red", fontFamily: 'Montserrat, sans- serif', }}
              >
                {t("ser_endT2")}
              </span>
            </Typography>
          </Box>
          {/* <Copy /> */}
          {/* <Box ref={textRef}
            className="fade-in" sx={{ paddingTop: "50px" }}>
            <Carousel
              value={testimonials}
              itemTemplate={carouselTemplate}
              numVisible={3} // Show 3 items initially
              numScroll={1}
              circular={true}
              autoplayInterval={3000}
              itemStyle={{ padding: "0 10px" }} // Adjust padding as needed
              responsiveOptions={[
                {
                  breakpoint: "1024px",
                  numVisible: 2, // Show 2 items for screens smaller than 1024px
                  numScroll: 1,
                },
                {
                  breakpoint: "600px",
                  numVisible: 1, // Show 1 item for screens smaller than 768px
                  numScroll: 1,
                },
              ]}
            />
          </Box> */}
        </Box>

        {/* <Footer /> */}
      </Page>
    </div >
  );
};

export default Services;
