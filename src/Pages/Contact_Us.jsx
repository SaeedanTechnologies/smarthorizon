import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Layouts/Component/Navbar";
import Header from "../Layouts/Component/Header";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "../Layouts/Component/Footer";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Copy from "../Layouts/Component/Copy";
import Page from "../components/page/page";
// import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const darkMode = useSelector((state) => state.theme.isLight);
  const textRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
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
  const inputStyle = {
    padding: "20px",
    backgroundColor: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    color: "black",
    onfocus: "none",
    width: "100%",
  };
  const cdStyle = {
    color: "blue",
    fontWeight: 600,
  };
  const cardData = [
    {
      imgSrc: "/Screenshot 2024-06-20 191302.png",
      title: t("team1_name"),
      desc: t("team1_pos"),
      linkdedIn: "https://www.linkedin.com/in/franco-bagliesi-0915788a/",
      mail: "mailto:f.bagliesi@smart-horizons.it",
      phone: "tel:+39 335 695 6646",
    },
    {
      imgSrc: "/unsplash_3JmfENcL24M (7).png",
      title: t("team2_name"),
      desc: t("team2_pos"),
      linkdedIn:
        "https://www.linkedin.com/in/marialessandracecchi-linguistspecialist",
      mail: "mailto:m.cecchi@smart-horizons",
      phone: "tel:+393476863497",
    },
    {
      imgSrc: "/unsplash_3JmfENcL24M (8).png",
      title: t("team3_name"),
      desc: t("team3_pos"),
      linkdedIn: "https://www.linkedin.com/in/chiara-storai-5b7639180/",
      mail: "mailto:c.storaismart-horizons.its",
      phone: "tel:+ 393408049494",
    },
    {
      imgSrc: "/unsplash_3JmfENcL24M (9).png",
      title: t("team4_name"),
      desc: t("team4_pos"),
      linkdedIn: "https://www.linkedin.com/in/chiara-novelli-321b64251/",
      mail: "mailto:c.novelli@smart-horizons.it",
      phone: "tel:+393408049494",
    },
    {
      imgSrc: "/Screenshot 2024-06-20 192119.png",
      title: t("team5_name"),
      desc: t("team5_pos"),
      linkdedIn: "https://www.linkedin.com/in/massimo-giannuzzi-b71a2b229/",
      mail: "mailto:Mg@maxwellandpartners.com",
      phone: "tel:+39 335 590 7797",
    },
  ];
  const navigate = useNavigate()
  const handlePrivacy = () => {
    navigate('/privacy-policy')
  }

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div>
      <Page title={t("cu")}>
        {/* <Navbar /> */}
        <Header title={t("c")} src="/BACKGROUND4.jpg " align="center" w="100%" t="45%" />
        <Box
          sx={{
            background: darkMode ? "#000" : "#fff",
            padding: isSmall ? '20px' : "50px 50px",
          }}
        >
          {/* <div style={{ paddingBottom: isSmall ? '10px' : "50px" }}>
            <Typography

              sx={{
                fontSize: "36px",
                fontWeight: 600,
                color: darkMode ? "#fff" : "#000",

                textAlign: "center",
                textDecoration: "underline",
                fontFamily: 'Montserrat, sans- serif'
              }}
            >
              Get In Touch
            </Typography>
          </div> */}

          {/* <Typography sx={{ fontSize: '18px', fontWeight: 500, textAlign: 'center', color: theme.palette.primary.six, fontFamily: 'cursive' }}>{t('cun_title')}</Typography> */}
          <Box sx={{ padding: "5px", background: darkMode ? "#000" : "#fff" }}>
            <Grid container spacing={1}>
              <Grid
                ref={textRef}
                className="fade-in"
                item lg={5} sm={12}>
                <Box
                  sx={{
                    background: darkMode ? "#000" : "#fff",
                    color: darkMode ? "#fff" : "black",
                    padding: isSmall ? '20px' : "30px",
                    // height: isSmall ? '40%' : "80%",
                    borderRadius: "5px",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: isSmall ? '24px' : "32px",
                      fontWeight: 600,
                      color: darkMode ? "#fff" : "black",
                      textAlign: "left",
                      fontFamily: 'Montserrat, sans- serif'

                    }}
                  >
                    {t("cun")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      textAlign: "left",
                      color: 'black',
                      fontFamily: 'Montserrat, sans- serif'
                    }}
                  >
                    {t("cun_title")}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>
                    <FaPhoneAlt /> +393408049494
                  </Typography>
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>
                    <MdEmail /> info@smart-horizons.it
                  </Typography>
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>
                    <FaLocationDot />
                    {t("ad")}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>
                    <FaLocationDot />
                    {t("ad1")}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                ref={textRef}
                className="fade-in" item lg={7} sm={12}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "30px", }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: isSmall ? 'column' : "row",
                      gap: "30px",
                    }}
                  >
                    <input
                      style={{ ...inputStyle, borderBottom: "1px solid black", fontFamily: 'Montserrat, sans- serif' }}
                      placeholder="First Name*"
                      type="text"
                    />
                    <input
                      style={{ ...inputStyle, borderBottom: "1px solid black", fontFamily: 'Montserrat, sans- serif' }}
                      placeholder="Last Name*"
                      type="text"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: isSmall ? 'column' : "row",
                      gap: "30px",

                    }}
                  >
                    <input
                      style={{ ...inputStyle, borderBottom: "1px solid black", fontFamily: 'Montserrat, sans- serif' }}
                      placeholder="Email*"
                      type="text"
                    />
                    <input
                      style={{ ...inputStyle, borderBottom: "1px solid black", fontFamily: 'Montserrat, sans- serif' }}
                      placeholder="Phone Number"
                      type="number"
                    />
                  </div>

                  <input
                    style={{ ...inputStyle, borderBottom: "1px solid black", fontFamily: 'Montserrat, sans- serif' }}
                    placeholder="Message"
                    type="text"
                  />
                </Box>

              </Grid>

            </Grid>


            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />

              <Typography sx={{ textAlign: 'center', color: darkMode ? "#fff" : "#000", fontSize: '22px' }}>
                {t("contact_confirm")}
              </Typography>
            </Box>

            {isChecked && (
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "20px" }}>
                <Button
                  sx={{
                    backgroundColor: "#418BF9",
                    color: "white",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "blue",
                    },
                    fontFamily: 'Montserrat, sans- serif'
                  }}
                >
                  {t("send_message")}
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{}}>

          <Box
            sx={{
              padding: isSmall ? '20px' : "0px 50px 80px 50px",
              background: darkMode ? "#000" : "#fff",
            }}
          >
            <Box sx={{ paddingBottom: '60px' }}>
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: 600,
                  // color: 'red',
                  color: darkMode ? "#ffff" : "#000",
                  textAlign: "center",
                  textDecoration: "underline",
                  fontFamily: 'Montserrat, sans- serif'

                }}
              >
                {t("MOT")}
              </Typography>
            </Box>
            <Grid container spacing={3}>
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
                          component="div"
                          sx={{ textAlign: "center", fontSize: "22px", fontFamily: 'Montserrat, sans- serif' }}
                        >
                          {val.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#418BF9", textAlign: "center", fontFamily: 'Montserrat, sans- serif' }}
                        >
                          {val.desc}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            justifyContent: "center",
                            paddingTop: "10px",
                          }}
                        >
                          <a href={val.phone}>
                            <Box
                              sx={{
                                backgroundColor: "#6193FF",
                                padding: "11px 12px",
                                borderRadius: "50%",
                                "&:hover": {
                                  backgroundColor: "#004e92",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              <FaPhoneAlt
                                style={{ color: "white", fontSize: "15px" }}
                              />
                            </Box>
                          </a>

                          <a href={val.mail}>
                            <Box
                              sx={{
                                backgroundColor: "#00C6CA",
                                padding: "11px 12px",
                                borderRadius: "50%",
                                "&:hover": {
                                  backgroundColor: "#004e92",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              <MdEmail
                                style={{ color: "white", fontSize: "15px" }}
                              />
                            </Box>
                          </a>
                          <a
                            href={val.linkdedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Box
                              sx={{
                                backgroundColor: "#0A66C2",
                                padding: "11px 12px",
                                borderRadius: "50%",
                                // alignContent: 'center',
                                "&:hover": {
                                  backgroundColor: "#004e92",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              <FaLinkedinIn
                                style={{ color: "white", fontSize: "15px" }}
                              />
                            </Box>
                          </a>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            background: darkMode ? "#000" : "#fff",
            padding: isSmall ? '20px' : "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            gap: "20px",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          <Typography
            ref={textRef}
            className="fade-in" sx={{ fontSize: "30px", fontWeight: 600 }}>
            {t("cu_detail1")}
          </Typography>
          <Typography ref={textRef}
            className="fade-in" sx={{ fontSize: "22px" }}>{t("cu_detail2")}</Typography>
          <Typography ref={textRef}
            className="fade-in" sx={{ fontSize: "22px" }}>{t("cu_detail3")}</Typography>
          <Typography ref={textRef}
            className="fade-in" sx={{ fontSize: "22px" }}>{t("cu_detail4")}</Typography>
          <Typography ref={textRef}
            className="fade-in" sx={{ fontSize: "22px" }}>{t("ad")}</Typography>
          <Typography ref={textRef}
            className="fade-in" sx={{ fontSize: "22px" }}>{t("ad1")}</Typography>
          <Box>
            <Typography ref={textRef}
              className="fade-in">

              {t("phone")} <span style={cdStyle}>+393408049494</span>
            </Typography >
            <Typography ref={textRef}
              className="fade-in">
              {t("email")} <span style={cdStyle}> info@smart-horizons.it</span>
            </Typography>
            <Typography ref={textRef}
              className="fade-in">
              {t("pec")} <span style={cdStyle}> smartextiles@legalmail.it</span>
            </Typography>
          </Box>
          <Box>
          </Box>
        </Box>

        {/* <Footer /> */}
        {/* <Copy /> */}
      </Page>
    </div>
  );
};

export default Contact;
