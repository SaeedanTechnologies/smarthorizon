import React, { useEffect, useRef } from "react";
import Navbar from "../../Layouts/Component/Navbar";
import Header from "../../Layouts/Component/Header";
import Footer from "../../Layouts/Component/Footer";
import Copy from "../../Layouts/Component/Copy";
import { useTranslation } from "react-i18next";
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// Importing individual country flags from country-flag-icons package
import {
  US,
  CA,
  MX,
  BR,
  DO,
  EG,
  GB,
  PT,
  ES,
  FR,
  BG,
  BL,
  BM,
  BE,
  HN,
  NL,
  GR,
  DE,
  CH,
  IT,
  AT,
  RO,
  LI,
  LU,
  MC,
  TN,
  TZ,
  MZ,
  ZA,
  RU,
  TR,
  SA,
  IN,
  CN,
  VN,
  SG,
  TW,
} from "country-flag-icons/react/3x2"; // Adjust as necessary for other countries
import Page from "../../components/page/page";
import { Carousel } from "primereact/carousel";
import Repeat from "../../Layouts/Component/Repeat";
import Cards_C from "./components/Cards_C";
import { useSelector } from "react-redux";
import WorldMap from "../../Layouts/Component/WorldMap";
// import WorldMap from "../../Layouts/Component/WorldMap";

const Experience = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const darkMode = useSelector((state) => state.theme.isLight);
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
  const { t } = useTranslation();
  const testimonials = [
    {
      image: "/1. Emanuele_Cecchi_Egypt.jpg",
    },
    { image: "/2. cairo_apparel_conference.jpg" },
    { image: "/3. Bologna_Goldfinger_presentation_lineapelle_exhibition_2013.jpg" },
    { image: "/3. cairo_apparel_conference.jpg" },
    { image: "/4. Mumbai1_Meeting_With_Raymond_President_S.K.Singhal_2010.jpg" },
    { image: "/5. Pechino_Audit_For_Textile_Industry_2008.jpg" },
    { image: "/6. Shanghai_expo.jpg" },
    { image: "/7. SanPetersburg1_Apparel_Conference_2016.jpg" },
    { image: "/8. SanPetersburg2_Apparel_Conference_2016.jpg" },
    { image: "/9. SanPetersburg3_Apparel_Conference_2016.jpg" },
    { image: "/10. Moscow_textile_prom_expo_2015.jpg" },
    { image: "/11. Novocherkassk1_2016.jpg" },
    { image: "/12. Novocherkassk2_2016.jpg" },
    { image: "/13. Moscow1_techtextile_2021.jpg" },
    { image: "/14. Oman_Salalah2023.jpg" },
    { image: "/15. Oman, Salalah2_Boswellia_Mission_2023.jpg" },
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
      <Page title={t("ex")}>
        {/* <Navbar /> */}
        <Header title={t("ex")} src="/BACKGROUND4.jpg" align="center" w="100%" pd={isSmall ? '0px' : ''} t="45%" />

        <Box

          sx={{
            padding: "40px",
            background: darkMode ? "#000" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              padding: "20px",
              textAlign: "center",
              fontFamily: 'Montserrat, sans- serif'
            }}
          >
            {t('map_title')}
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 500,
              padding: "20px",
              textAlign: "center",
              fontFamily: 'Montserrat, sans- serif'
            }}
          >
            {t('map_desc')}
          </Typography>
          <Box
            ref={textRef}
            className="fade-in"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
              flexDirection: 'column'

            }}
          >

            <img src="/World_Map1.jpg" alt="" style={{ width: isSmall ? '100%' : "100%", height: isSmall ? '50vh' : '80vh', objectFit: 'cover' }} />
            <Typography

              sx={{
                fontSize: "30px",
                fontWeight: 600,
                textAlign: "center",
                paddingBottom: "50px",
                textDecoration: "underline",
                color: darkMode ? "white" : "black",
                fontFamily: 'Montserrat, sans- serif',
                paddingTop: '50px'
              }}
            >
              {t("ev")}
            </Typography>
            {/* <Box>
              <WorldMap />
            </Box> */}
          </Box>
        </Box>

        <Box

          sx={{
            padding: isSmall ? '20px' : "20px 50px 20px 50px",
            background: darkMode ? "#000" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          <Grid container spacing={5}>
            <Grid ref={textRef}
              className="fade-in" item lg={3}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography variant="h3" sx={{ fontFamily: 'Montserrat, sans- serif' }}>America</Typography>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <US
                    className="flag-icon"
                    title="United States"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>USA</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <CA
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Canada</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <MX
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Mexico</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <BR
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Brazil</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <DO
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Dominican Republic</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid ref={textRef}
              className="fade-in" item lg={3}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography variant="h3" sx={{ fontFamily: 'Montserrat, sans- serif' }}>Europe</Typography>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <GB
                    className="flag-icon"
                    title="United States"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>UK</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <PT
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Portugal</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <ES
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Spain</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <FR
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>France</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <BE
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Belgium</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <NL
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Holland</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <DE
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Germany</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <CH
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Switzerland</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <IT
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Italy</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <AT
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Austria</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <RO
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Romania</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <LI
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>liechtenstein</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <LU
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Luxembourg</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <MC
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Principality of Monaco</Typography>
                </Box>
                <Divider />
              </Box>
            </Grid>
            <Grid ref={textRef}
              className="fade-in" item lg={3}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }} variant="h3">Africa</Typography>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <EG
                    className="flag-icon"
                    title="United States"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Egypt</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <TN
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>tunisia</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <TZ
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Tanzania</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <MZ
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Mozambique</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <ZA
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>South Africa</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid ref={textRef}
              className="fade-in" item lg={3}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }} variant="h3">Russia</Typography>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <RU
                    className="flag-icon"
                    title="United States"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Russian Federation</Typography>
                </Box>
                {/* <Divider /> */}
                <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }} variant="h3">Asia</Typography>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <TR
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Turkey</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <SA
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Saudi Arabia</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <IN
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>India</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <CN
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>China</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <VN
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Vietnam</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <SG
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Singapore</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <TW
                    className="flag-icon"
                    title="Canada"
                    style={{ width: "30px", height: "auto" }}
                  />{" "}
                  {/* Adjust the width */}
                  <Typography sx={{ fontFamily: 'Montserrat, sans- serif' }}>Taiwan</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* <Copy /> */}
        {/* <Repeat /> */}

        <Box
          sx={{ padding: "80px 0px", background: darkMode ? "#000" : "#fff" }}
        >
          <Box sx={{ p: 3 }}>
            <Cards_C />
          </Box>
          <Carousel
            ref={textRef}
            className="fade-in"
            value={testimonials}
            itemTemplate={carouselTemplate}
            numVisible={2} // Show 3 items initially
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

        </Box>
        {/* <Footer /> */}
      </Page>
    </div >
  );
};

export default Experience;
