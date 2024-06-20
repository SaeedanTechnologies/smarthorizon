import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import Copy from "./Copy";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Repeat = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
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
  const partStyle = {
    fontSize: "30px",
    fontWeight: 600,
    textAlign: "center",
    paddingBottom: "50px",
    textDecoration: "underline",
    fontFamily: 'Montserrat, sans- serif'
  };
  const cardData = [
    {
      imgSrc: "/unsplash_3JmfENcL24M.png",
      title: "THOMAS LEE",
      description: "CHINA,TAIWAN,HONG KONG",
    },
    {
      imgSrc: "/unsplash_3JmfENcL24M (1).png",
      title: "HARSHAL JAYAVANT",
      description: "INDIA",
    },
    {
      imgSrc: "/unsplash_3JmfENcL24M (5).png",
      title: "ROCCO PAPAPIETRO",
      description: "MALAYSIA",
    },

    {
      imgSrc: "/unsplash_3JmfENcL24M (3).png",
      title: "AMR ABDEL LATIF",
      description: "EGITTO",
    },
    {
      imgSrc: "/unsplash_3JmfENcL24M (4).png",
      title: "MAZIN A.S. YAISH",
      description:
        "KUWAIT,BAHREIN,QATAR,EMIRATI ARABI,OMAN,LIBANO,ARABIA SAUDITA",
    },

    {
      imgSrc: "/unsplash_3JmfENcL24M (2).png",
      title: "ELEONORA SINKOVA",
      description:
        "RUSSIAN_FEDERATION,ARMENIA,BIELORUSSIA,KAZAKISTAN,UZBEKISTAN,GEORGIA",
    },
  ];

  const logoData = [
    {
      link: "https://www.raymond.in/",
      imgSrc: "/raymond-logo-high-res.bfe9e301e74b77aa6f8c.png",
    },
    {
      link: "http://www.wernerinternational.com/",
      imgSrc: "/logo 1.png",
    },
    {
      link: "https://www.calik.com/tr/anasayfa",
      imgSrc: "/logo.jpg",
    },
    {
      link: "https://www.vardhman.com/",
      imgSrc: "/logo.svg",
    },
    {
      link: "https://www.akintekstil.com.tr/",
      imgSrc: "/akin-tekstil.svg",
    },
    {
      link: "https://www.gherzi.com/",
      imgSrc: " /logo-gherzi-1.webp",
    },
    {
      link: "https://english.yesim.com/anasayfa/",
      imgSrc: "/Anasayfa01.jpg",
    },
    {
      link: "https://www.kabo.com.eg/",
      imgSrc: "/come-back-soon.jpg",
    },
    {
      link: "https://www.schoeller-textiles.com/de/",
      imgSrc: "/logo 2.png",
    },
    {
      link: "https://group.btk.ru/en/front-page/",
      imgSrc: "/logo-en.png",
    },
    {
      link: "https://www.primeadvisorynetwork.com/en/",
      imgSrc: "/logo (1).png",
    },
    {
      link: "https://www.lenziegisto.it/",
      imgSrc: "/cropped-Logo-Lenzi-Egisto-trasp--270x55.png",
    },
    {
      link: "https://www.siretessile.com/?lang=en",
      imgSrc: "/logo-default-262x84.png",
    },
    {
      link: "https://www.testori.it/",
      imgSrc: "/logo-dark.png",
    },
    {
      link: "https://www.mectex.it/",
      imgSrc: " /logo-MecTex.png",
    },
    {
      link: "https://csaboxdoccia.it/",
      imgSrc: "/logo-csa-positivo.png",
    },
    {
      link: "https://pick-upsrl.it/",
      imgSrc: "/logo_f10d0ea40c9418197ecc27279ffd4412_1x.png",
    },
    {
      link: "https://cimatech.it/",
      imgSrc: "/logo_Small.png",
    },
    {
      link: "https://monolab.it/",
      imgSrc: "/logoesteso-05.png",
    },
    {
      link: "https://www.relicyc.com/it/",
      imgSrc: "/logo-1663331953.jpg",
    },
    {
      link: "https://essesistem.com/",
      imgSrc: "/cropped-cropped-logo-4.webp",
    },
    {
      link: "http://www.wks-cifra.com/",
      imgSrc: "/wks.png"
    },
    {
      link: "https://www.maxwellandpartners.com/",
      imgSrc: "/400PngdpiLogo-e1690972342247-qabecunlxnz43h0ok7q9b69kflvwn80fithaj2pg46.png"
    },
    {
      link: "https://www.abelnutraceuticals.com/",
      imgSrc: "/Screenshot 2024-03-27 162035.png"
    },
    {
      link: "https://www.mpacavallaro.com/",
      imgSrc: "/ccoo.png"
    },
    {
      link: "http://www.neoswork.com/",
      imgSrc: "/Screenshot 2024-03-27 162700.png"
    },
    {
      link: "https://ieeegypt.org/",
      imgSrc: "/IEE.png"
    },
    {
      link: "https://www.coprem.it/",
      imgSrc: "/IEE (2).png"
    },
    {
      link: "http://www.athenaspa.com/",
      imgSrc: "/last.png"
    },
    {
      link: "https://www.querlo.com/",
      imgSrc: '/p1.png',
    },
    {
      link: "https://www.pin.unifi.it/",
      imgSrc: '/p2.png',
    },
    {
      link: "https://www.sagitechsrls.it/",
      imgSrc: '/p4.png',
    },
    {
      link: "https://www.disruptivebeautylaboratories.it/",
      imgSrc: '/p5.png',
    },
    {
      link: "https://www.mpmbrocce.it/",
      imgSrc: '/p6.png',
    },
    {
      link: "http://www.stylegraphsrl.com/",
      imgSrc: '/P7.png',
    },
    {
      link: "https://www.vetroresina.com/",
      imgSrc: '/p8.png',
    },
    {
      link: "https://www.technoshield.it/",
      imgSrc: '/P9.png',
    },
    {
      link: "https://www.evorive.com/",
      imgSrc: '/PP1.png',
    },
    {
      link: "https://www.maxwellandpartners.com/",
      imgSrc: '/pp2.png',
    },
    {
      link: "https://www.bisentino.it/",
      imgSrc: '/pp3.png',
    },
    {
      link: "https://www.siretessile.com/",
      imgSrc: '/pp5.png',
    },

  ];
  const darkMode = useSelector((state) => state.theme.isLight);
  return (
    <>
      <Box

        sx={{
          padding: isSmall ? "20px" : "20px 30px 50px 30px",
          background: darkMode ? "#000" : "#fff",
          color: darkMode ? "white" : "black",
        }}
      >
        <Typography ref={textRef}
          className="fade-in" style={partStyle}>{t("ab_manager")}</Typography>
        <Grid container spacing={5}>
          {cardData.map((val, ind) => (
            <Grid ref={textRef}
              className="fade-in" key={ind} item lg={3} sm={12} xs={12} md={6}>
              <Card sx={{ maxWidth: "100%", height: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={val.imgSrc}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "22px", textAlign: "center", fontFamily: 'Montserrat, sans- serif' }}
                      component="div"
                    >
                      {val.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        // color: "#418BF9",
                        textAlign: "center",
                        wordWrap: "break-word",
                        fontFamily: 'Montserrat, sans- serif'
                      }}
                    //   color="text.secondary"
                    >
                      {val.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box

        sx={{
          padding: isSmall ? '10px' : "30px 0px",
          backgroundColor: darkMode ? "#000" : "#fff",
          color: darkMode ? "white" : "black",
        }}
      >
        <Typography ref={textRef}
          className="fade-in" style={partStyle}>{t("ab_partner")}</Typography>
        <Box sx={{ padding: "40px" }}>
          <Grid container spacing={5}>
            {logoData.map((val, ind) => (
              <Grid ref={textRef}
                className="fade-in" key={ind} item lg={2} sm={12} md={4}>
                <Box sx={{}}>
                  <a href={val.link}>
                    <img
                      src={val.imgSrc}
                      alt=""
                      style={{
                        height: "15vh",
                        width: "100%",
                        // backgroundColor: "white",
                        backgroundColor: darkMode ? "#000" : "#fff",

                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <Copy /> */}
      </Box>
    </>
  );
};

export default Repeat;
