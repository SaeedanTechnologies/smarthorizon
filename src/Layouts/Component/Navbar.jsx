import React, { useState, useEffect } from "react";
import {
  Box,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdFlag, MdBrightness4, MdBrightness7, MdMenu } from "react-icons/md"; // Import toggle icons for dark mode
import { US, FR, IT, RU, ES } from "country-flag-icons/react/3x2";
import { useDispatch, useSelector } from "react-redux";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.isLight);
  console.log(darkMode, "=> DARK MODE");
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolled = currentScrollPos > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  };

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  useEffect(() => {
    toggleDarkMode();
  }, [dispatch]);

  const currentLanguage = i18n.language || "en";

  // Mapping language codes to their respective flag components
  const languageFlags = {
    en: (
      <Box sx={{ width: "24px", height: "16px", textAlign: "left" }}>
        <US title="United States" className="flag-icon" />
      </Box>
    ),
    it: (
      <Box sx={{ width: "24px", height: "16px", textAlign: "left" }}>
        <IT title="Italy" className="flag-icon" />
      </Box>
    ),
    fr: (
      <Box sx={{ width: "24px", height: "16px", textAlign: "left" }}>
        <FR title="France" className="flag-icon" />
      </Box>
    ),
    ru: (
      <Box sx={{ width: "24px", height: "16px", textAlign: "left" }}>
        <RU title="Russia" className="flag-icon" />
      </Box>
    ),
    es: (
      <Box sx={{ width: "24px", height: "16px", textAlign: "left" }}>
        <ES title="Spain" className="flag-icon" />
      </Box>
    ),
  };


  const linkStyle = {
    color: darkMode ? 'white' : theme.palette.primary.secondary,
    textDecoration: 'none',
    transition: 'color 0.3s ease',

  };

  const hoverStyle = {
    color: darkMode ? '#fde68a' : '#00C6F7',
    fontWeight: 600,

  };



  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const location = useLocation();
  const home = location.pathname === "/";
  const about = location.pathname === "/about_us";
  const services = location.pathname === "/services";
  const experience = location.pathname === "/experience";
  const contact_us = location.pathname === "/contact_us";
  const data = [
    { title: `${t("greeting")}`, to: "/", type: home },
    { title: `${t("ab")}`, to: "/about_us", type: about },
    { title: `${t("ser")}`, to: "/services", type: services },
    { title: `${t("ex")}`, to: "/experience", type: experience },
    { title: `${t("cu")}`, to: "/contact_us", type: contact_us },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: isScrolled ? "7px 35px" : "25px 35px", // Adjust padding for smaller screens
          position: "sticky",
          backgroundColor: darkMode ? (isScrolled ? '#BF9A3F' : '#BF9A3F') : (isScrolled ? '#030035' : '#030035'),
          top: "0",
          left: "0",
          zIndex: 999999999999999,
          transition: "padding 0.3s ease",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",

        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', }}>
          <img
            src="/Logo_white.png"
            alt=""
            style={{ height: isScrolled && isSmall ? "5vh" : "5vh" }}
          />
          <Typography sx={{ fontSize: "26px", fontWeight: 800, fontFamily: 'Dancing Script, cursive' }}>Smart</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {" "}
          {/* Reduce gap for smaller screens */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { sm: "block", md: "none" } }}
          >
            <MdMenu style={{ color: 'white' }} />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "40px" }}>
            {data.map((val) => (
              <React.Fragment key={val.to}>
                <Link
                  to={val.to}
                  style={{
                    color: darkMode ? 'white' : theme.palette.primary.secondary,
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    fontWeight: val.type ? "bold" : null,
                    borderBottom: val.type && `2px solid ${darkMode ? 'white' : theme.palette.primary.secondary}`,
                    textDecorationOffset: val.type ? "5px" : "auto",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = hoverStyle.color}
                  onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}
                >
                  {val.title}
                </Link>

              </React.Fragment>
            ))}
          </Box>

          <Box>
            <div
              onClick={(event) => setAnchorEl(event.currentTarget)}
              style={{
                backgroundColor: "transparent",
                // color: darkMode ? "white" : theme.palette.primary.secondary,
                cursor: "pointer",
                padding: "0 10px",
              }}
            >
              {languageFlags[currentLanguage]}
              {currentLanguage.toUpperCase()}
            </div>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  mt: isScrolled ? "7px" : "20px",
                  ml: "40px",
                  zIndex: 1000,
                  width: isSmall ? '33%' : "10%",
                  // paddingTop: '40px'
                },
              }}
            >
              <MenuItem sx={{ display: 'flex', justifyContent: 'left' }} onClick={() => handleLanguageChange("en")}>
                {languageFlags["en"]}  &nbsp; English
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("fr")}>
                {languageFlags["fr"]}&nbsp; Français
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("it")}>
                {languageFlags["it"]}&nbsp; Italiano
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("ru")}>
                {languageFlags["ru"]}&nbsp; Русский
              </MenuItem>

              <MenuItem onClick={() => handleLanguageChange("es")}>
                {languageFlags["es"]}&nbsp; Español
              </MenuItem>
            </Menu>
          </Box>
          <div>
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="checkbox" className="checkbox-label">
              <FontAwesomeIcon icon={faMoon} />
              <FontAwesomeIcon icon={faSun} />
              <span className="ball"></span>
            </label>
          </div>
        </Box>
      </Box >
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            // mt: isScrolled ? '10px' : '23px',
            // ml: '40px',
            // zIndex: 99999999999999,
            // width: '9%',
            paddingTop: "90px",
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem button component={Link} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/about_us"
              onClick={toggleDrawer}
            >
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/services"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/experience"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Experience" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contact_us"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
