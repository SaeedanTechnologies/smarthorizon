import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Section_1 = ({ description }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  const darkMode = useSelector((state) => state.theme.isLight);
  const navigate = useNavigate();
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
  // const [isVisible, setIsVisible] = useState(false);
  // const fadeInStyle = {
  //   opacity: isVisible ? 1 : 0,
  //   transition: 'opacity 1s ease-in-out',
  // };

  const textHeading = {
    fontSize: "30px",
    fontWeight: 700,
    color: darkMode ? "#fff" : "#000",
    fontFamily: 'Montserrat, sans- serif'
  };

  const paragraph = {
    fontSize: "18px",
    color: darkMode ? "#fff" : "#000",
    fontFamily: 'Montserrat, sans- serif'
  };

  const textHeading1 = {
    fontSize: "30px",
    fontWeight: 700,
    textAlign: isSmall ? 'left' : "right",
    color: darkMode ? "#fff" : "#000",
    fontFamily: 'Montserrat, sans- serif'
  };

  const paragraph1 = {
    fontSize: "18px",
    // color: "#6C757D",
    textAlign: isSmall ? 'left' : "justify",
    color: darkMode ? "#fff" : "#000",
    fontFamily: 'Montserrat, sans- serif',
    paddingLeft: isSmall ? '0px' : "285px"
  };

  const handleButton = () => {
    navigate("/about_us");
  };

  const endStyle = {
    fontWeight: 600,
    fontSize: "26px",
    cursor: "pointer",
    color: darkMode ? "#fff" : "#000",
    fontFamily: 'Montserrat, sans- serif'
  };

  const aboutPage = () => {
    navigate("/about_us");
  };

  return (
    <>
      <Box>

      </Box>

      <Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: isSmall ? '20px' : "50px 100px 100px 100px",
            gap: "80px",
            backgroundColor: darkMode ? "#000" : theme.palette.primary.main,
          }}
        >
          <Typography

            sx={{
              padding: '0px 0px',
              // fontFamily: 'Edu NSW ACT Foundation, cursive',
              fontSize: '25px',
              // color: 'black',
              fontWeight: 600,
              textAlign: 'center',
              color: darkMode ? "#ffff" : "#000",
              fontFamily: 'Montserrat, sans- serif'
              // ...fadeInStyle,
              // transitionDelay: '1s',
            }}
          >
            {t('headerP')}
          </Typography>
          <Box
            ref={textRef}
            className="fade-in"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: isSmall ? 'column' : 'row',
              gap: "40px",
              "&:hover img": { transform: "scale(1.1)" },
              flexWrap: 'wrap'
            }}
          >
            <Box flex={1} sx={{ height: "150px", width: "300px" }}>
              <img
                src="/along_with_your_dreams.jpg"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "5px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Box>
            <Box flex={isSmall ? 1 : 4}>
              <Typography style={textHeading}>{t("sec1H1")}</Typography>
              <Typography style={paragraph}>{t("sec1P1")}</Typography>
            </Box>
          </Box>
          <Box
            ref={textRef}
            className="fade-in"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              "&:hover img": { transform: "scale(1.1)" },
              flexDirection: isSmall ? "column-reverse" : 'row'
            }}
          >
            <Box flex={4}>
              <Typography style={textHeading1}>{t("sec1H2")}</Typography>
              <Typography style={paragraph1}>{t("sec1P2")}</Typography>
            </Box>
            <Box flex={1} sx={{ height: "150px", width: "300px" }}>
              <img
                src="/prestige_quality_for_your_projects.jpg"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "5px",
                  transition: "transform 0.3s ease-in-out",

                }}
              />
            </Box>
          </Box>
          <Box
            ref={textRef}
            className="fade-in"
            sx={{

              display: "flex",
              alignItems: "center",
              gap: "40px",
              flexWrap: 'wrap',
              "&:hover img": { transform: "scale(1.1)" },
              flexDirection: isSmall ? 'column' : 'row'
            }}
          >
            <Box flex={1} sx={{ height: "150px", width: "300px" }}>
              <img
                src=" /Everywhere_now.jpg"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "5px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Box>
            <Box flex={isSmall ? 1 : 4}>
              <Typography style={textHeading}>{t("sec1H3")}</Typography>
              <Typography style={paragraph}>{t("sec1P3")}</Typography>
            </Box>
          </Box>
          <Box
            ref={textRef}
            className="fade-in"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              "&:hover img": { transform: "scale(1.1)" },
              flexDirection: isSmall ? 'column-reverse' : 'row',
              flexWrap: 'wrap'
            }}
          >
            <Box flex={4}>
              <Typography style={textHeading1}>{t("sec1H4")}</Typography>
              <Typography style={paragraph1}>{t("sec1P4")}</Typography>
            </Box>
            <Box flex={1} sx={{ height: "150px", width: "300px" }}>
              <img
                src=" /the_perfect_match_for_your_needs.jpg"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "5px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Box>
          </Box>
          <Box
            ref={textRef}
            className="fade-in"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              "&:hover img": { transform: "scale(1.1)" },
              flexDirection: isSmall ? 'column' : 'row',
              flexWrap: 'wrap'
            }}
          >
            <Box flex={1} sx={{ height: "150px", width: "300px" }}>
              <img
                src="/the_ecogreen_choice.jpg"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "5px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Box>
            <Box flex={4}>
              <Typography style={textHeading}>{t("sec1H5")}</Typography>
              <Typography style={paragraph}>{t("sec1P5")}</Typography>
            </Box>
          </Box>
          <Box
            ref={textRef}
            className="fade-in"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              "&:hover img": { transform: "scale(1.1)" },
              flexDirection: isSmall ? 'column-reverse' : 'row',
              flexWrap: 'wrap'
            }}
          >
            <Box flex={4}>
              <Typography style={textHeading1}>{t("sec1H6")}</Typography>
              <Typography style={{
                textAlign: isSmall ? 'left' : "right",
                color: darkMode ? "#fff" : "#000",
                fontFamily: 'Montserrat, sans- serif',
                paddingLeft: isSmall ? '0px' : "285px"
              }}>{t("sec1p6")}</Typography>
            </Box>
            <Box flex={1} sx={{ height: "150px", width: "300px" }}>
              <img
                src="/Unleashing_the_Power_of_AI.jpg"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "5px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Box>
          </Box>

          {/* Repeat similar structure for other content boxes */}
          {/* Other content boxes */}
          <Box sx={{ margin: "0 auto" }}>
            <Button
              onClick={handleButton}
              sx={{
                backgroundColor: "white",
                color: theme.palette.primary.third,
                border: "1px solid #418BF9",
                "&:hover": { backgroundColor: "white" },
                fontFamily: 'Montserrat, sans- serif'
              }}
            >
              Discover More
            </Button>
          </Box>
        </Box>
        <Box

          sx={{
            padding: isSmall ? '20px' : "0px 0px 40px 0px",
            backgroundColor: darkMode ? "#000" : "#fff",
            display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}
        >
          <iframe
            width={isSmall ? '80%' : '48%'}
            height={isSmall ? '200' : "365"}
            src="https://www.youtube.com/embed/bibvp2sFuWc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Box
            ref={textRef}
            className="fade-in"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "30px",
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <Typography style={endStyle}>{t("sec1_end1")}</Typography>
            <Typography onClick={aboutPage} style={endStyle}>
              {" "}
              {t("sec1_end2")}
            </Typography>
          </Box>
          {/* <Copy /> */}
        </Box>
      </Box>
    </>
  );
};

export default Section_1;
